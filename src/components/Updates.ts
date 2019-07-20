import { Airgram } from '../Airgram'
import { Composer } from './Composer'

export class Updates<ContextT> extends Composer<ContextT> implements Airgram.Updates<ContextT> {
  public middleware (): Airgram.MiddlewareFn<any> {
    return Composer.optional((ctx: ContextT & { update: Airgram.Update }) => ctx.update, this.handler)
  }
}
