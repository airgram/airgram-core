import { apiFactory, ErrorUnion } from 'airgram-api'
import { ApiMethods } from 'airgram-api/apiFactory'
import { Composer, createContext, Serializable, Updates } from './components'

const DEFAULT_CONFIG: Partial<Airgram.Config<any>> = {
  applicationVersion: '0.1.0',
  databaseDirectory: './db',
  databaseEncryptionKey: '',
  deviceModel: 'UNKNOWN DEVICE',
  logVerbosityLevel: 2,
  systemLanguageCode: 'en',
  systemVersion: 'UNKNOWN VERSION'
}

export class Airgram<ContextT extends Airgram.Context, ProviderT extends Airgram.TdProvider>
  extends Composer<ContextT> implements Airgram.AirgramInstance<ContextT, ProviderT> {

  public readonly api: ApiMethods

  public readonly config: Airgram.Config<ContextT, ProviderT>

  public handleError: Airgram.ErrorHandler

  public readonly provider: ProviderT

  private _createContext?: (options: Airgram.ContextOptions) => ContextT

  // private _updates?: Airgram.Updates<ContextT & { update: Airgram.Update }>
  private _updates?: Airgram.Updates<any>

  constructor (config: Airgram.Config<ContextT, ProviderT>) {
    super()

    this.config = { ...DEFAULT_CONFIG, ...config }

    const { provider } = this.config
    if (!provider || typeof (provider as any).initialize !== 'function') {
      throw new Error('The `provider` option is required.')
    }
    provider.initialize(
      (update) => this.handleUpdate(update),
      (message) => {
        const error = message instanceof Error ? message : new Error(message)
        this.handleError(error)
      },
      this.config.models
    )
    this.provider = provider

    this.handleError = (error: any, ctx?: Record<string, any>): ErrorUnion => {
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
    this.api = apiFactory(this.callApi)

    if (config.logVerbosityLevel) {
      this.api.setLogVerbosityLevel({
        newVerbosityLevel: config.logVerbosityLevel
      }).catch((error) => {
        throw error
      })
    }

    setTimeout(() => this.api.getAuthorizationState(), 0)
  }

  public get name (): string {
    return this.config.name || 'airgram'
  }

  get updates (): Airgram.Updates<ContextT> {
    if (!this._updates) {
      this._updates = new Updates<ContextT>()
      this.use<{ update: Airgram.Update }>(this._updates)
    }
    return this._updates
  }

  public catch (handler: (error: Error, ctx?: Record<string, any>) => void): void {
    this.handleError = handler
  }

  public emit (update: Airgram.TdUpdate): Promise<any> {
    return this.handleUpdate(update)
  }

  private apiMiddleware () {
    return Composer.optional(
      (ctx: Airgram.Context) => ctx.request,
      async (ctx: Airgram.Context, next?: Airgram.NextFn) => this.provider.send(ctx.request!)
        .then((response: Airgram.TdResponse) => ctx.response = response)
        .then(next)
    )
  }

  private callApi<ParamsT, ResponseT> (
    method: string,
    params?: ParamsT,
    state?: Record<string, any>
  ): Promise<ResponseT> {
    const ctx = this.createContext(method, state || {}, {
      request: {
        method,
        params
      }
    })
    return new Promise<ResponseT>((resolve, reject) => {
      const handler = Composer.compose<Airgram.Context<ParamsT, ResponseT>>([
        this.middleware(),
        this.apiMiddleware()
      ])
      return handler(ctx, async () => resolve(ctx.response)).catch(reject)
    }).catch((error) => this.handleError(error, ctx))
  }

  private createContext (
    _: string,
    state: Record<string, any>,
    options: Record<string, any>
  ): ContextT {
    if (this.config.contextFactory && !this._createContext) {
      this._createContext = this.config.contextFactory(this)
    }
    const contextFn = this._createContext || createContext
    return contextFn(Object.assign({}, options, {
      _,
      airgram: this,
      state
    })) as ContextT
  }

  private handleUpdate (update: Record<string, any>): Promise<any> {
    const ctx: ContextT = this.createContext(update._, {}, { update })
    return this.middleware()(ctx, Composer.noop).catch((error: Error) => this.handleError(error, ctx))
  }
}
