import {
  ApiRequest,
  Data,
  PlainObjectToModelTransformer,
  RequestContext,
  TdProvider as BaseTdProvider
} from '../../types'

export abstract class TdProvider<ClientT = unknown> implements BaseTdProvider {
  protected client?: ClientT

  public abstract initialize (
    handleUpdate: (update: Data) => Promise<unknown>,
    handleError: (error: Error | string) => void,
    models?: PlainObjectToModelTransformer
  ): void

  public abstract send (request: ApiRequest): Promise<RequestContext<unknown, Data>>
}
