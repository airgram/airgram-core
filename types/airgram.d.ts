import * as api from './api'
import { ApiMethods } from './api-methods'
import { MiddlewareOn } from './api-middleware'

type PropType<T, PropT extends keyof T> = T[PropT]
type Predicate<T extends BaseData> = PropType<NonNullable<T>, '_'>
type ClassType<T> = new (...args: unknown[]) => T

export type ErrorHandler = (error: Error, ctx?: Record<string, any>) => unknown

export type TdLibConfig = Omit<api.TdlibParametersInput, '_'>

export type PlainObjectToModelTransformer = (plainObject: Record<string, unknown>) => ClassType<unknown> | Record<string, unknown>

export type MiddlewareFn<ContextT> = (ctx: ContextT, next: () => Promise<any>) => any
export type Middleware<ContextT> = { middleware: () => MiddlewareFn<ContextT> } | MiddlewareFn<ContextT>

export interface Composer<ContextT> {
  middleware (): MiddlewareFn<ContextT>;

  on (predicateTypes: string | string[], ...fns: Middleware<ContextT>[]): void;

  use (...fns: Middleware<ContextT>[]): void;
}

export interface Config<ContextT, ProviderT extends TdProvider = TdProvider> extends TdLibConfig {
  provider: ProviderT;
  contextFactory?: ContextFactory<ContextT>;
  databaseEncryptionKey?: string;
  logVerbosityLevel?: number;
  name?: string;
  token?: string;
  models?: PlainObjectToModelTransformer;
}

export interface Instance<ContextT = {}, ProviderT extends TdProvider = TdProvider> {
  readonly api: ApiMethods<BaseContext & ContextT>;
  readonly config: Config<ContextT>;
  readonly provider: ProviderT;
  readonly name: string;
  handleError: ErrorHandler;
  // on: (predicateTypes: string | string[], ...fns: Array<Middleware<any>>) => void

  readonly on: MiddlewareOn<ContextT>;

  catch (handler: (error: Error, ctx?: Record<string, unknown>) => void): void;

  emit (update: Data): Promise<unknown>;

  use<ResponseT extends BaseData = Data> (
    ...fns: Middleware<(RequestContext<unknown, ResponseT> | UpdateContext<ResponseT>) & ContextT>[]
  ): void;
}

export interface ApiRequest<ParamsT = unknown> {
  method: string;
  params?: ParamsT;
}

export interface ApiRequestOptions {
  state?: Record<string, unknown>;
}

export interface ApiResponse<ParamsT, ResultT extends BaseData> {
  _: Predicate<ResultT> | 'error';
  request: ApiRequest<ParamsT>;
  response: ResultT | api.ErrorUnion;
  data?: ResultT;
  error?: api.ErrorUnion;
}

// export type ApiFn<ParamsT, ResultT, ExtensionT> = (request: ApiRequest, options?: ApiRequestOptions) =>
//   Promise<ApiResponse<ParamsT, ResultT> & ExtensionT>

export interface TdProvider {
  initialize (
    handleUpdate: (update: Data) => Promise<unknown>,
    handleError: (error: Error | string) => void,
    models?: PlainObjectToModelTransformer
  ): void;

  send (request: ApiRequest): Promise<Data>;
}

export interface BaseData {
  _: string;
}

export interface Data extends BaseData {
  [key: string]: unknown;
}

// export interface ResponseBody {
//   // '@extra'?: string
//   _: string;
//
//   // [key: string]: unknown;
// }

export interface ContextOptions {
  _: string;
  airgram: Instance<unknown>;
  request?: ApiRequest;
  update?: Data;
  state: Record<string, unknown>;
}

export type SetStateFn = (nextState: Record<string, unknown>) => void;
export type GetStateFn = () => Record<string, unknown>;

export interface ContextState {
  setState: SetStateFn;
  getState: GetStateFn;
}

export interface BaseContext extends ContextState {
  airgram: Instance;
}

export interface RequestContext<ParamsT, ResultT extends BaseData>
  extends BaseContext, Omit<ApiResponse<ParamsT, ResultT>, 'response'> {
  response?: ResultT | api.ErrorUnion;
}

export interface UpdateContext<UpdateT extends BaseData> extends BaseContext {
  _: Predicate<UpdateT>;
  update: UpdateT;
}

export type ContextFactory<ContextT> = (airgram: Instance<unknown>) => (options: ContextOptions) => ContextT

// eslint-disable-next-line no-undef
export as namespace Airgram
