import { Airgram } from '../Airgram'

export abstract class TdProvider<ClientT = any> implements Airgram.TdProvider {
  protected client?: ClientT

  public abstract initialize (
    handleUpdate: (update: Record<string, any>) => Promise<any>,
    handleError: (error: any) => void,
    models?: Airgram.PlainObjectToModelTransformer
  ): void

  public abstract send (request: Airgram.ApiRequest): Promise<Airgram.TdResponse>
}
