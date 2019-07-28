import * as api from './api'
import { ApiMethods } from './api-methods'
import { MiddlewareOn } from './middleware'

type PropType<T, PropT extends keyof T> = T[PropT]
type Predicate<T extends any> = PropType<NonNullable<T>, '_'>
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
type ClassType<T> = new (...args: any[]) => T

export type ErrorHandler = (error: Error, ctx?: Record<string, any>) => any

export type TdLibConfig = Omit<api.TdlibParametersInput, '_'>

export type PlainObjectToModelTransformer = (plainObject: Record<string, any>) => ClassType<any> | Record<string, any>

export type MiddlewareFn<ContextT> = (ctx: ContextT, next: () => Promise<any>) => any
export type Middleware<ContextT> = { middleware: () => MiddlewareFn<ContextT> } | MiddlewareFn<ContextT>

export interface Composer<ContextT> {
  middleware<MiddlewareContextT = ContextT> (): MiddlewareFn<MiddlewareContextT>;

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

  catch (handler: (error: Error, ctx?: Record<string, any>) => void): void;

  emit (update: ResponseBody): Promise<any>;

  use<ResponseT extends ResponseBody = ResponseBody> (
    ...fns: Middleware<(RequestContext<any, ResponseT> | UpdateContext<ResponseT>) & ContextT>[]
  ): void;
}

export interface ApiRequest<ParamsT = any> {
  method: string;
  params?: ParamsT;
}

export interface ApiRequestOptions {
  state?: Record<string, any>;
}

export interface ApiResponse<ParamsT, ResultT> {
  _: Predicate<ResultT> | 'error';
  request: ApiRequest<ParamsT>;
  response?: ResultT | api.ErrorUnion;
  data?: ResultT;
  error?: api.ErrorUnion;
}

// export type ApiFn<ParamsT, ResultT, ExtensionT> = (request: ApiRequest, options?: ApiRequestOptions) =>
//   Promise<ApiResponse<ParamsT, ResultT> & ExtensionT>

export interface TdProvider {
  initialize (
    handleUpdate: (update: ResponseBody) => Promise<any>,
    handleError: (error: any) => void,
    models?: PlainObjectToModelTransformer
  ): void;

  send (request: ApiRequest): Promise<ResponseBody>;
}

export interface ResponseBody {
  // '@extra'?: string
  _: string;

  [key: string]: any;
}

export interface ContextOptions {
  _: string;
  airgram: Instance<any>;
  request?: ApiRequest;
  update?: ResponseBody;
  state: Record<string, any>;
}

export interface ContextState {
  setState: (nextState: Record<string, any>) => void;
  getState: () => Record<string, any>;
}

export interface BaseContext extends ContextState {
  airgram: Instance;
}

export interface RequestContext<ParamsT, ResultT> extends BaseContext, ApiResponse<ParamsT, ResultT> {
}

export interface UpdateContext<UpdateT extends ResponseBody> extends BaseContext {
  _: Predicate<UpdateT>;
  update: UpdateT;
}

export type ContextFactory<ContextT> = (airgram: Instance<any>) => (options: ContextOptions) => ContextT

// eslint-disable-next-line no-undef
export as namespace Airgram
