import * as api from '@airgram/api'

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export type ClassType<T> = new (...args: any[]) => T

export interface Composer<ContextT> {
  middleware<MiddlewareContextT = ContextT> (): MiddlewareFn<MiddlewareContextT>

  on (predicateTypes: string | string[], ...fns: Array<Middleware<ContextT>>): void

  use (...fns: Array<Middleware<ContextT>>): void
}

export type NextFn = () => any
export type MiddlewareFn<ContextT> = (ctx: ContextT, next: () => Promise<any>) => any
export type MiddlewareHandler<ContextT> = (ctx: ContextT, next?: () => Promise<any>) => MiddlewareFn<ContextT>
export type Middleware<ContextT = any> = { middleware: () => MiddlewareFn<any> } | MiddlewareFn<ContextT>

export type ErrorHandler = (error: Error, ctx?: Record<string, any>) => any

export type TdLibConfig = Omit<api.TdlibParametersInput, '_'>

export type PlainObjectToModelTransformer = (plainObject: Record<string, any>) => ClassType<any> | Record<string, any>

export interface Config<ContextT, ProviderT extends TdProvider = TdProvider> extends TdLibConfig {
  provider: ProviderT
  contextFactory?: ContextFactory<ContextT>
  databaseEncryptionKey?: string
  logVerbosityLevel?: number
  name?: string
  token?: string
  models?: PlainObjectToModelTransformer
}

export interface AirgramInstance<ContextT = Context, ProviderT extends TdProvider = TdProvider>
  extends Composer<ContextT> {
  readonly api: api.ApiMethods
  readonly config: Config<ContextT>
  readonly provider: ProviderT
  readonly updates: Updates<ContextT>
  readonly name: string
  handleError: ErrorHandler

  catch (handler: (error: Error, ctx?: Record<string, any>) => void): void

  emit (update: TdUpdate): Promise<any>
}

export type AirgramClass<ContextT = Context, ProviderT extends TdProvider = TdProvider> =
  new (config: Config<ContextT, ProviderT>) => AirgramInstance<ContextT, ProviderT>

export interface Update {
  _: string

  [key: string]: any
}

export interface ApiRequest<ParamsT = any> {
  method: string
  params?: ParamsT
}

export interface Updates<ContextT> extends Composer<ContextT> {
  on (
    predicateTypes: 'updateAuthorizationState',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateAuthorizationState }>>
  ): void

  on (
    predicateTypes: 'updateNewMessage', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewMessage }>>
  ): void

  on (
    predicateTypes: 'updateMessageSendAcknowledged',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageSendAcknowledged }>>
  ): void

  on (
    predicateTypes: 'updateMessageSendSucceeded',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageSendSucceeded }>>
  ): void

  on (
    predicateTypes: 'updateMessageSendFailed',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageSendFailed }>>
  ): void

  on (
    predicateTypes: 'updateMessageContent', ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageContent }>>
  ): void

  on (
    predicateTypes: 'updateMessageEdited', ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageEdited }>>
  ): void

  on (
    predicateTypes: 'updateMessageViews', ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageViews }>>
  ): void

  on (
    predicateTypes: 'updateMessageContentOpened',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageContentOpened }>>
  ): void

  on (
    predicateTypes: 'updateMessageMentionRead',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateMessageMentionRead }>>
  ): void

  on (
    predicateTypes: 'updateNewChat', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewChat }>>
  ): void

  on (
    predicateTypes: 'updateChatTitle', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatTitle }>>
  ): void

  on (
    predicateTypes: 'updateChatPhoto', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatPhoto }>>
  ): void

  on (
    predicateTypes: 'updateChatLastMessage', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatLastMessage }>>
  ): void

  on (
    predicateTypes: 'updateChatOrder', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatOrder }>>
  ): void

  on (
    predicateTypes: 'updateChatIsPinned', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatIsPinned }>>
  ): void

  on (
    predicateTypes: 'updateChatIsMarkedAsUnread',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatIsMarkedAsUnread }>>
  ): void

  on (
    predicateTypes: 'updateChatIsSponsored', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatIsSponsored }>>
  ): void

  on (
    predicateTypes: 'updateChatDefaultDisableNotification',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatDefaultDisableNotification }>>
  ): void

  on (
    predicateTypes: 'updateChatReadInbox', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatReadInbox }>>
  ): void

  on (
    predicateTypes: 'updateChatReadOutbox', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatReadOutbox }>>
  ): void

  on (
    predicateTypes: 'updateChatUnreadMentionCount',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatUnreadMentionCount }>>
  ): void

  on (
    predicateTypes: 'updateChatNotificationSettings',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatNotificationSettings }>>
  ): void

  on (
    predicateTypes: 'updateScopeNotificationSettings',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateScopeNotificationSettings }>>
  ): void

  on (
    predicateTypes: 'updateChatPinnedMessage',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatPinnedMessage }>>
  ): void

  on (
    predicateTypes: 'updateChatReplyMarkup', ...fns: Array<Middleware<ContextT & { update: api.UpdateChatReplyMarkup }>>
  ): void

  on (
    predicateTypes: 'updateChatDraftMessage',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatDraftMessage }>>
  ): void

  on (
    predicateTypes: 'updateChatOnlineMemberCount',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateChatOnlineMemberCount }>>
  ): void

  on (
    predicateTypes: 'updateNotification', ...fns: Array<Middleware<ContextT & { update: api.UpdateNotification }>>
  ): void

  on (
    predicateTypes: 'updateNotificationGroup',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNotificationGroup }>>
  ): void

  on (
    predicateTypes: 'updateActiveNotifications',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateActiveNotifications }>>
  ): void

  on (
    predicateTypes: 'updateHavePendingNotifications',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateHavePendingNotifications }>>
  ): void

  on (
    predicateTypes: 'updateDeleteMessages', ...fns: Array<Middleware<ContextT & { update: api.UpdateDeleteMessages }>>
  ): void

  on (
    predicateTypes: 'updateUserChatAction', ...fns: Array<Middleware<ContextT & { update: api.UpdateUserChatAction }>>
  ): void

  on (
    predicateTypes: 'updateUserStatus', ...fns: Array<Middleware<ContextT & { update: api.UpdateUserStatus }>>
  ): void

  on (
    predicateTypes: 'updateUser', ...fns: Array<Middleware<ContextT & { update: api.UpdateUser }>>
  ): void

  on (
    predicateTypes: 'updateBasicGroup', ...fns: Array<Middleware<ContextT & { update: api.UpdateBasicGroup }>>
  ): void

  on (
    predicateTypes: 'updateSupergroup', ...fns: Array<Middleware<ContextT & { update: api.UpdateSupergroup }>>
  ): void

  on (
    predicateTypes: 'updateSecretChat', ...fns: Array<Middleware<ContextT & { update: api.UpdateSecretChat }>>
  ): void

  on (
    predicateTypes: 'updateUserFullInfo', ...fns: Array<Middleware<ContextT & { update: api.UpdateUserFullInfo }>>
  ): void

  on (
    predicateTypes: 'updateBasicGroupFullInfo',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateBasicGroupFullInfo }>>
  ): void

  on (
    predicateTypes: 'updateSupergroupFullInfo',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateSupergroupFullInfo }>>
  ): void

  on (
    predicateTypes: 'updateServiceNotification',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateServiceNotification }>>
  ): void

  on (
    predicateTypes: 'updateFile', ...fns: Array<Middleware<ContextT & { update: api.UpdateFile }>>
  ): void

  on (
    predicateTypes: 'updateFileGenerationStart',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateFileGenerationStart }>>
  ): void

  on (
    predicateTypes: 'updateFileGenerationStop',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateFileGenerationStop }>>
  ): void

  on (
    predicateTypes: 'updateCall', ...fns: Array<Middleware<ContextT & { update: api.UpdateCall }>>
  ): void

  on (
    predicateTypes: 'updateUserPrivacySettingRules',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateUserPrivacySettingRules }>>
  ): void

  on (
    predicateTypes: 'updateUnreadMessageCount',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateUnreadMessageCount }>>
  ): void

  on (
    predicateTypes: 'updateUnreadChatCount', ...fns: Array<Middleware<ContextT & { update: api.UpdateUnreadChatCount }>>
  ): void

  on (
    predicateTypes: 'updateOption', ...fns: Array<Middleware<ContextT & { update: api.UpdateOption }>>
  ): void

  on (
    predicateTypes: 'updateInstalledStickerSets',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateInstalledStickerSets }>>
  ): void

  on (
    predicateTypes: 'updateTrendingStickerSets',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateTrendingStickerSets }>>
  ): void

  on (
    predicateTypes: 'updateRecentStickers', ...fns: Array<Middleware<ContextT & { update: api.UpdateRecentStickers }>>
  ): void

  on (
    predicateTypes: 'updateFavoriteStickers',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateFavoriteStickers }>>
  ): void

  on (
    predicateTypes: 'updateSavedAnimations', ...fns: Array<Middleware<ContextT & { update: api.UpdateSavedAnimations }>>
  ): void

  on (
    predicateTypes: 'updateLanguagePackStrings',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateLanguagePackStrings }>>
  ): void

  on (
    predicateTypes: 'updateConnectionState', ...fns: Array<Middleware<ContextT & { update: api.UpdateConnectionState }>>
  ): void

  on (
    predicateTypes: 'updateTermsOfService', ...fns: Array<Middleware<ContextT & { update: api.UpdateTermsOfService }>>
  ): void

  on (
    predicateTypes: 'updateNewInlineQuery', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewInlineQuery }>>
  ): void

  on (
    predicateTypes: 'updateNewChosenInlineResult',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewChosenInlineResult }>>
  ): void

  on (
    predicateTypes: 'updateNewCallbackQuery',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewCallbackQuery }>>
  ): void

  on (
    predicateTypes: 'updateNewInlineCallbackQuery',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewInlineCallbackQuery }>>
  ): void

  on (
    predicateTypes: 'updateNewShippingQuery',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewShippingQuery }>>
  ): void

  on (
    predicateTypes: 'updateNewPreCheckoutQuery',
    ...fns: Array<Middleware<ContextT & { update: api.UpdateNewPreCheckoutQuery }>>
  ): void

  on (
    predicateTypes: 'updateNewCustomEvent', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewCustomEvent }>>
  ): void

  on (
    predicateTypes: 'updateNewCustomQuery', ...fns: Array<Middleware<ContextT & { update: api.UpdateNewCustomQuery }>>
  ): void

  on (
    predicateTypes: 'updatePoll', ...fns: Array<Middleware<ContextT & { update: api.UpdatePoll }>>
  ): void

  on<UpdateT = Update> (
    predicateTypes: string | string[], ...fns: Array<Middleware<ContextT & { update: UpdateT }>>
  ): void

  use<UpdateT = Update> (
    ...fns: Array<Middleware<ContextT & { update: UpdateT }>>
  ): void
}

export interface TdProvider {
  initialize (
    handleUpdate: (update: Record<string, any>) => Promise<any>,
    handleError: (error: any) => void,
    models?: PlainObjectToModelTransformer
  ): void

  send (request: ApiRequest): Promise<TdResponse>
}

export interface TdResponse {
  '@extra'?: string
  _: string

  [key: string]: any
}

export interface TdUpdate {
  _: string

  [key: string]: any
}

export interface ContextOptions {
  _: string
  airgram: AirgramInstance<any>
  request?: ApiRequest
  update?: TdUpdate
  state: Record<string, any>
}

export interface ContextState {
  setState: (nextState: Record<string, any>) => void
  getState: () => Record<string, any>
}

export interface Context<ParamsT = any, ResponseT = any> extends ContextState {
  _: string
  airgram: AirgramInstance
  request?: ApiRequest<ParamsT>
  response?: ResponseT
  update?: any
}

export type ContextFactory<ContextT> = (airgram: AirgramInstance<any>) => (options: ContextOptions) => ContextT

export as namespace Airgram
