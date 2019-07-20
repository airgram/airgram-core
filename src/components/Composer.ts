/*tslint:disable:no-empty*/

import { Airgram } from '../Airgram'

const noop: Airgram.NextFn = () => {}

function normalizePredicateArguments (argument: string | string[], prefix?: string): string[] {
  const args = Array.isArray(argument) ? argument : [argument]
  return args
    .filter((item) => item)
    .map((arg) => arg && prefix && !arg.startsWith(prefix) ? `${prefix}${arg}` : arg)
}

function unwrap<ContextT> (
  handler: Airgram.Middleware<ContextT>
): Airgram.MiddlewareFn<ContextT> {
  if (handler
    && 'middleware' in handler
    && typeof handler.middleware === 'function') {
    return handler.middleware() as Airgram.MiddlewareFn<ContextT>
  }
  return handler as (Airgram.MiddlewareFn<ContextT>)
}

function safePassThru<ContextT> (): Airgram.MiddlewareFn<ContextT> {
  return (ctx: ContextT, next: Airgram.NextFn | any) => typeof next === 'function' ? next() : Promise.resolve()
}

function lazy<ContextT> (
  factoryFn: ((ctx: ContextT) => Promise<Airgram.Middleware<ContextT>>)
): Airgram.MiddlewareFn<ContextT> {
  if (typeof factoryFn !== 'function') {
    throw new Error('Argument must be a function')
  }
  return (ctx: ContextT, next?: Airgram.NextFn) => Promise.resolve(factoryFn(ctx))
    .then((middleware: Airgram.Middleware<ContextT>) => unwrap<ContextT>(middleware)(ctx, next || noop))
}

function mount<ContextT> (predicateType: string | string[], ...fns: Airgram.Middleware[])
  : Airgram.Middleware<ContextT> {
  const predicateTypes = normalizePredicateArguments(predicateType)
  const predicate = (ctx: ContextT) => '_' in ctx && predicateTypes.includes((ctx as any)._)
  return optional(predicate, ...fns)
}

function fork (middleware: Airgram.Middleware) {
  return (ctx: Airgram.Context, next: Airgram.NextFn) => {
    setTimeout(unwrap(middleware), 0)
    return next()
  }
}

// function tap (handler) {
//   return (ctx, next) => Promise.resolve(handler(ctx))
//     .then(() => next())
//     .catch(() => next())
// }
//
// export function drop<ContextT> (predicate): Airgram.MiddlewarePromise<ContextT> {
//   return branch(predicate, noop, safePassThru())
// }

function filter<ContextT> (predicate: any): Airgram.Middleware<ContextT> {
  return branch(predicate, safePassThru(), noop)
}

function branch<ContextT> (
  predicate: any,
  trueMiddleware: Airgram.Middleware<ContextT>,
  falseMiddleware: Airgram.Middleware<ContextT>
): Airgram.MiddlewareFn<ContextT> {
  if (typeof predicate !== 'function') {
    return unwrap<ContextT>(predicate ? trueMiddleware : falseMiddleware)
  }
  return lazy((ctx) => Promise.resolve(predicate(ctx))
    .then((value) => value ? trueMiddleware : falseMiddleware))
}

function optional<ContextT> (predicate: any, ...fns: Array<Airgram.Middleware<ContextT>>):
  Airgram.MiddlewareFn<ContextT> {
  return branch(predicate, compose(fns), safePassThru())
}

function compose<ContextT> (
  middlewares: Array<Airgram.Middleware<ContextT>>
): Airgram.MiddlewareFn<ContextT> {
  if (!Array.isArray(middlewares)) {
    throw new Error('Middleware list must be an array')
  }
  if (middlewares.length === 0) {
    return safePassThru()
  }
  if (middlewares.length === 1) {
    return unwrap(middlewares[0])
  }
  return (ctx: ContextT, next?: Airgram.MiddlewareFn<ContextT>) => {
    let index = -1
    return (function execute (i: number): Promise<any> {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'))
      }
      index = i
      const handler: Airgram.MiddlewareFn<ContextT> | undefined = unwrap(middlewares[i]) || next
      if (!handler) {
        return Promise.resolve()
      }
      try {
        return Promise.resolve(handler(ctx, () => execute(i + 1)))
      } catch (error) {
        return Promise.reject(error)
      }
    })(0)
  }
}

class Composer<ContextT = any> implements Airgram.Composer<ContextT> {
  public static compose = compose

  public static fork = fork

  public static filter = filter

  public static branch = branch

  public static optional = optional

  public static noop = noop

  protected handler: Airgram.MiddlewareFn<ContextT | any>

  constructor (...fns: Array<Airgram.Middleware<ContextT>>) {
    this.handler = compose<ContextT>(fns)
  }

  public middleware (): Airgram.MiddlewareFn<ContextT | any> {
    return this.handler
  }

  public on (
    predicateTypes: string | string[],
    ...fns: Array<Airgram.Middleware<ContextT>>
  ): void {
    this.use(mount(predicateTypes, ...fns))
  }

  public use<ExtraContextT = {}> (...fns: Array<Airgram.Middleware<ContextT & ExtraContextT>>): void {
    this.handler = compose<ContextT & ExtraContextT>([this.handler, ...fns])
  }
}

export { Composer }
