/* tslint:disable:no-empty */

import { Composer as BaseComposer, Middleware, MiddlewareFn } from '../../types'

export type NextFn = () => any

const noop: NextFn = (): any => {}

function normalizePredicateArguments (argument: string | string[], prefix?: string): string[] {
  const args = Array.isArray(argument) ? argument : [argument]
  return args
    .filter((item): string | string[] => item)
    .map((arg): string => arg && prefix && !arg.startsWith(prefix) ? `${prefix}${arg}` : arg)
}

function unwrap<ContextT> (
  handler: Middleware<ContextT>
): MiddlewareFn<ContextT> {
  if (handler && 'middleware' in handler) {
    return handler.middleware()
  }
  return handler
}

function safePassThru<ContextT> (): MiddlewareFn<ContextT> {
  return (_ctx: ContextT, next: NextFn | any): Promise<any> => typeof next === 'function' ? next() : Promise.resolve()
}

function lazy<ContextT> (
  factoryFn: ((ctx: ContextT) => Promise<Middleware<ContextT>>)
): MiddlewareFn<ContextT> {
  return (ctx: ContextT, next?: NextFn): Promise<Middleware<ContextT>> => Promise.resolve(factoryFn(ctx))
    .then((middleware: Middleware<ContextT>): Middleware<ContextT> => unwrap<ContextT>(middleware)(ctx, next || noop))
}

function compose<ContextT> (middlewares: Middleware<ContextT>[]): MiddlewareFn<ContextT> {
  if (!Array.isArray(middlewares)) {
    throw new Error('Middleware list must be an array')
  }
  if (middlewares.length === 0) {
    return safePassThru()
  }
  if (middlewares.length === 1) {
    return unwrap(middlewares[0])
  }
  return (ctx: ContextT, next?: MiddlewareFn<ContextT>): Promise<any> => {
    let index = -1
    return (function execute (i: number): Promise<any> {
      if (i <= index) {
        return Promise.reject(new Error('next() called multiple times'))
      }
      index = i
      const handler: MiddlewareFn<ContextT> | undefined = unwrap(middlewares[i]) || next
      if (!handler) {
        return Promise.resolve()
      }
      try {
        return Promise.resolve(handler(ctx, (): Promise<Middleware<ContextT>> => execute(i + 1)))
      } catch (error) {
        return Promise.reject(error)
      }
    })(0)
  }
}

function branch<ContextT> (
  predicate: any,
  trueMiddleware: Middleware<ContextT>,
  falseMiddleware: Middleware<ContextT>
): MiddlewareFn<ContextT> {
  if (typeof predicate !== 'function') {
    return unwrap<ContextT>(predicate ? trueMiddleware : falseMiddleware)
  }
  return lazy((ctx): Promise<Middleware<ContextT>> => Promise.resolve(predicate(ctx))
    .then((value): Middleware<ContextT> => value ? trueMiddleware : falseMiddleware))
}

function optional<ContextT> (predicate: any, ...fns: Middleware<ContextT>[]):
  MiddlewareFn<ContextT> {
  return branch(predicate, compose(fns), safePassThru())
}

function mount<ContextT> (predicateType: string | string[], ...fns: Middleware<ContextT>[]): Middleware<ContextT> {
  const predicateTypes = normalizePredicateArguments(predicateType)
  const predicate = (ctx: ContextT): boolean => '_' in ctx && predicateTypes.includes((ctx as any)._)
  return optional(predicate, ...fns)
}

function fork<ContextT> (middleware: Middleware<ContextT>): Middleware<ContextT> {
  return (_ctx: any, next: NextFn): Middleware<ContextT> => {
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
// export function drop<ContextT> (predicate): MiddlewarePromise<ContextT> {
//   return branch(predicate, noop, safePassThru())
// }

function filter<ContextT> (predicate: any): Middleware<ContextT> {
  return branch(predicate, safePassThru(), noop)
}

class Composer<ContextT = any> implements BaseComposer<ContextT> {
  public static compose = compose

  public static fork = fork

  public static filter = filter

  public static branch = branch

  public static optional = optional

  public static noop = noop

  protected handler: MiddlewareFn<ContextT | any>

  public constructor (...fns: Middleware<ContextT>[]) {
    this.handler = compose<ContextT>(fns)
  }

  public middleware (): MiddlewareFn<ContextT | any> {
    return this.handler
  }

  public on<T = any> (
    predicateTypes: string | string[],
    ...fns: Middleware<T>[]
  ): void {
    this.use(mount(predicateTypes, ...fns))
  }

  public use (...fns: Middleware<any>[]): void {
    this.handler = compose<any>([this.handler, ...fns])
  }
}

export { Composer }
