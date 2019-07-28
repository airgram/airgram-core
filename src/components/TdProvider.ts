import { ApiRequest, PlainObjectToModelTransformer, ResponseBody, TdProvider as BaseTdProvider } from '../../types'

export abstract class TdProvider<ClientT = any> implements BaseTdProvider {
  protected client?: ClientT

  public abstract initialize (
    handleUpdate: (update: ResponseBody) => Promise<any>,
    handleError: (error: any) => void,
    models?: PlainObjectToModelTransformer
  ): void

  public abstract send (request: ApiRequest): Promise<ResponseBody>
}
