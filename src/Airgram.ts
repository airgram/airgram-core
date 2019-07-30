import {
  ApiMethods,
  ApiRequest,
  ApiRequestOptions,
  BaseContext,
  BaseData,
  Config,
  ContextOptions,
  Data,
  ErrorHandler,
  ErrorUnion,
  Instance,
  Middleware,
  MiddlewareFn,
  MiddlewareOn,
  RequestContext,
  TdProvider,
  UpdateContext
} from '../types'
import { Composer, createContext, Serializable } from './components'

const getDefaultConfig = <T> (): Partial<Config<T>> => ({
  applicationVersion: '0.1.0',
  databaseDirectory: './db',
  databaseEncryptionKey: '',
  deviceModel: 'UNKNOWN DEVICE',
  logVerbosityLevel: 2,
  systemLanguageCode: 'en',
  systemVersion: 'UNKNOWN VERSION'
})

export class Airgram<ContextT, ProviderT extends TdProvider> implements Instance<ContextT, ProviderT> {
  public readonly config: Config<ContextT, ProviderT>

  public handleError: ErrorHandler

  public readonly provider: ProviderT

  public readonly api: ApiMethods<BaseContext & ContextT>

  public readonly on: MiddlewareOn<ContextT> = (
    predicateTypes: string | string[],
    ...fns: Middleware<any>[]
  ): void => {
    this.composer.on(predicateTypes, ...fns)
  }

  private _createContext?: (options: ContextOptions) => ContextT

  private readonly composer: Composer<(RequestContext<unknown, any> | UpdateContext<any>) & ContextT>

  public constructor (config: Config<ContextT, ProviderT>) {
    this.config = { ...getDefaultConfig<ContextT>(), ...config }
    this.composer = new Composer()

    const { provider } = this.config
    if (!provider || typeof provider.initialize !== 'function') {
      throw new Error('The `provider` option is required.')
    }
    provider.initialize(
      (update) => this.handleUpdate<Data>(update),
      (message: Error | string) => {
        const error = message instanceof Error ? message : new Error(message)
        this.handleError(error)
      },
      this.config.models
    )
    this.provider = provider

    this.handleError = (error: any, ctx?: Record<string, unknown>): ErrorUnion => {
      if (error.name === 'TDLibError') {
        // tslint:disable-next-line:no-console
        console.error(`[Airgram error] ${ctx && ctx._ ? `[${ctx._}]` : ''} ${new Serializable(error)}`)
        return {
          _: 'error',
          code: 406,
          message: error.message
        }
      }
      throw error
    }

    this.callApi = this.callApi.bind(this)
    this.emit = this.emit.bind(this)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    this.api = new Proxy<ApiMethods<BaseContext & ContextT>>({} as any, {
      get: (_target, method: string) => {
        return (params: unknown, options?: ApiRequestOptions): Promise<RequestContext<unknown, Data>> =>
          this.callApi({ method, params }, options)
      }
    })

    if (config.logVerbosityLevel) {
      this.api
        .setLogVerbosityLevel({
          newVerbosityLevel: config.logVerbosityLevel
        })
        .catch((error: Error): never => {
          throw error
        })
    }

    setTimeout(() => this.api.getAuthorizationState(), 0)
  }

  public get name (): string {
    return this.config.name || 'airgram'
  }

  public catch (handler: (error: Error, ctx?: Record<string, unknown>) => void): void {
    this.handleError = handler
  }

  public emit<UpdateT extends BaseData = Data> (update: UpdateT): Promise<unknown> {
    return this.handleUpdate<UpdateT>(update)
  }

  public use<ResponseT extends BaseData = Data> (
    ...fns: Middleware<(RequestContext<unknown, ResponseT> | UpdateContext<ResponseT>) & ContextT>[]
  ): void {
    this.composer.use(...fns)
  }

  private apiMiddleware (): MiddlewareFn<ContextT> {
    return Composer.optional(
      (ctx: Data): boolean => !!ctx.request,
      async (ctx: any, next: () => any): Promise<MiddlewareFn<ContextT>> =>
        this.provider
          .send(ctx.request)
          .then((response: unknown): unknown => (ctx.response = response))
          .then(next)
    )
  }

  private callApi<ParamsT, ResultT extends BaseData> (
    request: ApiRequest<ParamsT>,
    options?: ApiRequestOptions
  ): Promise<RequestContext<ParamsT, ResultT> & ContextT> {
    const ctx = this.createContext<RequestContext<ParamsT, ResultT> & ContextT>(
      request.method,
      (options && options.state) || {},
      { request }
    )
    return new Promise<any>((resolve, reject) => {
      const handler = Composer.compose([this.composer.middleware(), this.apiMiddleware()])
      return handler(ctx, async (): Promise<any> => resolve(ctx)).catch(reject)
    }).catch((error) => this.handleError(error, ctx))
  }

  private createContext<T extends BaseContext> (
    _: string, state: Record<string, unknown>, options: Record<string, unknown>): T {
    if (this.config.contextFactory && !this._createContext) {
      this._createContext = this.config.contextFactory(this)
    }
    const contextFn = this._createContext || createContext
    return contextFn<T>(
      Object.assign({}, options, {
        _,
        airgram: this,
        state
      })
    ) as T
  }

  private handleUpdate<UpdateT extends BaseData> (update: BaseData): Promise<unknown> {
    const ctx = this.createContext<UpdateContext<UpdateT> & ContextT>(update._, {}, { update })
    return this.composer
      .middleware()(ctx, Composer.noop)
      .catch((error: Error) => this.handleError(error, ctx))
  }
}
