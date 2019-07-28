/* tslint:disable:unified-signatures max-line-length */

import { Middleware, RequestContext, ResponseBody, UpdateContext } from './airgram'
import * as api from './api'

export interface OnMiddleware<ContextT = {}> {
  // API
  (
    predicateTypes: 'acceptCall',
    ...fns: Middleware<RequestContext<api.AcceptCallParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'acceptTermsOfService',
    ...fns: Middleware<RequestContext<api.AcceptTermsOfServiceParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addChatMember',
    ...fns: Middleware<RequestContext<api.AddChatMemberParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addChatMembers',
    ...fns: Middleware<RequestContext<api.AddChatMembersParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addCustomServerLanguagePack',
    ...fns: Middleware<RequestContext<api.AddCustomServerLanguagePackParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addFavoriteSticker',
    ...fns: Middleware<RequestContext<api.AddFavoriteStickerParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addLocalMessage',
    ...fns: Middleware<RequestContext<api.AddLocalMessageParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addLogMessage',
    ...fns: Middleware<RequestContext<api.AddLogMessageParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addNetworkStatistics',
    ...fns: Middleware<RequestContext<api.AddNetworkStatisticsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addProxy',
    ...fns: Middleware<RequestContext<api.AddProxyParams, api.ProxyUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addRecentSticker',
    ...fns: Middleware<RequestContext<api.AddRecentStickerParams, api.StickersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addRecentlyFoundChat',
    ...fns: Middleware<RequestContext<api.AddRecentlyFoundChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addSavedAnimation',
    ...fns: Middleware<RequestContext<api.AddSavedAnimationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'addStickerToSet',
    ...fns: Middleware<RequestContext<api.AddStickerToSetParams, api.StickerSetUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'answerCallbackQuery',
    ...fns: Middleware<RequestContext<api.AnswerCallbackQueryParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'answerCustomQuery',
    ...fns: Middleware<RequestContext<api.AnswerCustomQueryParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'answerInlineQuery',
    ...fns: Middleware<RequestContext<api.AnswerInlineQueryParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'answerPreCheckoutQuery',
    ...fns: Middleware<RequestContext<api.AnswerPreCheckoutQueryParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'answerShippingQuery',
    ...fns: Middleware<RequestContext<api.AnswerShippingQueryParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'blockUser',
    ...fns: Middleware<RequestContext<api.BlockUserParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'cancelDownloadFile',
    ...fns: Middleware<RequestContext<api.CancelDownloadFileParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'cancelUploadFile',
    ...fns: Middleware<RequestContext<api.CancelUploadFileParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'changeChatReportSpamState',
    ...fns: Middleware<RequestContext<api.ChangeChatReportSpamStateParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'changeImportedContacts',
    ...fns: Middleware<RequestContext<api.ChangeImportedContactsParams, api.ImportedContactsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'changePhoneNumber',
    ...fns: Middleware<RequestContext<api.ChangePhoneNumberParams, api.AuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'changeStickerSet',
    ...fns: Middleware<RequestContext<api.ChangeStickerSetParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkAuthenticationBotToken',
    ...fns: Middleware<RequestContext<api.CheckAuthenticationBotTokenParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkAuthenticationCode',
    ...fns: Middleware<RequestContext<api.CheckAuthenticationCodeParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkAuthenticationPassword',
    ...fns: Middleware<RequestContext<api.CheckAuthenticationPasswordParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkChangePhoneNumberCode',
    ...fns: Middleware<RequestContext<api.CheckChangePhoneNumberCodeParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkChatInviteLink',
    ...fns: Middleware<RequestContext<api.CheckChatInviteLinkParams, api.ChatInviteLinkInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkChatUsername',
    ...fns: Middleware<RequestContext<api.CheckChatUsernameParams, api.CheckChatUsernameResultUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkDatabaseEncryptionKey',
    ...fns: Middleware<RequestContext<api.CheckDatabaseEncryptionKeyParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkEmailAddressVerificationCode',
    ...fns: Middleware<RequestContext<api.CheckEmailAddressVerificationCodeParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkPhoneNumberConfirmationCode',
    ...fns: Middleware<RequestContext<api.CheckPhoneNumberConfirmationCodeParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkPhoneNumberVerificationCode',
    ...fns: Middleware<RequestContext<api.CheckPhoneNumberVerificationCodeParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'checkRecoveryEmailAddressCode',
    ...fns: Middleware<RequestContext<api.CheckRecoveryEmailAddressCodeParams, api.PasswordStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'cleanFileName',
    ...fns: Middleware<RequestContext<api.CleanFileNameParams, api.TextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'clearAllDraftMessages',
    ...fns: Middleware<RequestContext<api.ClearAllDraftMessagesParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'clearImportedContacts',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'clearRecentStickers',
    ...fns: Middleware<RequestContext<api.ClearRecentStickersParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'clearRecentlyFoundChats',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'close',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'closeChat',
    ...fns: Middleware<RequestContext<api.CloseChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'closeSecretChat',
    ...fns: Middleware<RequestContext<api.CloseSecretChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createBasicGroupChat',
    ...fns: Middleware<RequestContext<api.CreateBasicGroupChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createCall',
    ...fns: Middleware<RequestContext<api.CreateCallParams, api.CallIdUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createNewBasicGroupChat',
    ...fns: Middleware<RequestContext<api.CreateNewBasicGroupChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createNewSecretChat',
    ...fns: Middleware<RequestContext<api.CreateNewSecretChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createNewStickerSet',
    ...fns: Middleware<RequestContext<api.CreateNewStickerSetParams, api.StickerSetUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createNewSupergroupChat',
    ...fns: Middleware<RequestContext<api.CreateNewSupergroupChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createPrivateChat',
    ...fns: Middleware<RequestContext<api.CreatePrivateChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createSecretChat',
    ...fns: Middleware<RequestContext<api.CreateSecretChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createSupergroupChat',
    ...fns: Middleware<RequestContext<api.CreateSupergroupChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'createTemporaryPassword',
    ...fns: Middleware<RequestContext<api.CreateTemporaryPasswordParams, api.TemporaryPasswordStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteAccount',
    ...fns: Middleware<RequestContext<api.DeleteAccountParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteChatHistory',
    ...fns: Middleware<RequestContext<api.DeleteChatHistoryParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteChatMessagesFromUser',
    ...fns: Middleware<RequestContext<api.DeleteChatMessagesFromUserParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteChatReplyMarkup',
    ...fns: Middleware<RequestContext<api.DeleteChatReplyMarkupParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteFile',
    ...fns: Middleware<RequestContext<api.DeleteFileParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteLanguagePack',
    ...fns: Middleware<RequestContext<api.DeleteLanguagePackParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteMessages',
    ...fns: Middleware<RequestContext<api.DeleteMessagesParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deletePassportElement',
    ...fns: Middleware<RequestContext<api.DeletePassportElementParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteProfilePhoto',
    ...fns: Middleware<RequestContext<api.DeleteProfilePhotoParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteSavedCredentials',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteSavedOrderInfo',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'deleteSupergroup',
    ...fns: Middleware<RequestContext<api.DeleteSupergroupParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'destroy',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'disableProxy',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'discardCall',
    ...fns: Middleware<RequestContext<api.DiscardCallParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'disconnectAllWebsites',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'disconnectWebsite',
    ...fns: Middleware<RequestContext<api.DisconnectWebsiteParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'downloadFile',
    ...fns: Middleware<RequestContext<api.DownloadFileParams, api.FileUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editCustomLanguagePackInfo',
    ...fns: Middleware<RequestContext<api.EditCustomLanguagePackInfoParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editInlineMessageCaption',
    ...fns: Middleware<RequestContext<api.EditInlineMessageCaptionParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editInlineMessageLiveLocation',
    ...fns: Middleware<RequestContext<api.EditInlineMessageLiveLocationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editInlineMessageMedia',
    ...fns: Middleware<RequestContext<api.EditInlineMessageMediaParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editInlineMessageReplyMarkup',
    ...fns: Middleware<RequestContext<api.EditInlineMessageReplyMarkupParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editInlineMessageText',
    ...fns: Middleware<RequestContext<api.EditInlineMessageTextParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editMessageCaption',
    ...fns: Middleware<RequestContext<api.EditMessageCaptionParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editMessageLiveLocation',
    ...fns: Middleware<RequestContext<api.EditMessageLiveLocationParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editMessageMedia',
    ...fns: Middleware<RequestContext<api.EditMessageMediaParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editMessageReplyMarkup',
    ...fns: Middleware<RequestContext<api.EditMessageReplyMarkupParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editMessageText',
    ...fns: Middleware<RequestContext<api.EditMessageTextParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'editProxy',
    ...fns: Middleware<RequestContext<api.EditProxyParams, api.ProxyUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'enableProxy',
    ...fns: Middleware<RequestContext<api.EnableProxyParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'finishFileGeneration',
    ...fns: Middleware<RequestContext<api.FinishFileGenerationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'forwardMessages',
    ...fns: Middleware<RequestContext<api.ForwardMessagesParams, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'generateChatInviteLink',
    ...fns: Middleware<RequestContext<api.GenerateChatInviteLinkParams, api.ChatInviteLinkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getAccountTtl',
    ...fns: Middleware<RequestContext<never, api.AccountTtlUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getActiveLiveLocationMessages',
    ...fns: Middleware<RequestContext<never, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getActiveSessions',
    ...fns: Middleware<RequestContext<never, api.SessionsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getAllPassportElements',
    ...fns: Middleware<RequestContext<api.GetAllPassportElementsParams, api.PassportElementsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getApplicationConfig',
    ...fns: Middleware<RequestContext<never, api.JsonValueUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getArchivedStickerSets',
    ...fns: Middleware<RequestContext<api.GetArchivedStickerSetsParams, api.StickerSetsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getAttachedStickerSets',
    ...fns: Middleware<RequestContext<api.GetAttachedStickerSetsParams, api.StickerSetsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getAuthorizationState',
    ...fns: Middleware<RequestContext<never, api.AuthorizationStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getBasicGroup',
    ...fns: Middleware<RequestContext<api.GetBasicGroupParams, api.BasicGroupUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getBasicGroupFullInfo',
    ...fns: Middleware<RequestContext<api.GetBasicGroupFullInfoParams, api.BasicGroupFullInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getBlockedUsers',
    ...fns: Middleware<RequestContext<api.GetBlockedUsersParams, api.UsersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getCallbackQueryAnswer',
    ...fns: Middleware<RequestContext<api.GetCallbackQueryAnswerParams, api.CallbackQueryAnswerUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChat',
    ...fns: Middleware<RequestContext<api.GetChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatAdministrators',
    ...fns: Middleware<RequestContext<api.GetChatAdministratorsParams, api.UsersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatEventLog',
    ...fns: Middleware<RequestContext<api.GetChatEventLogParams, api.ChatEventsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatHistory',
    ...fns: Middleware<RequestContext<api.GetChatHistoryParams, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatMember',
    ...fns: Middleware<RequestContext<api.GetChatMemberParams, api.ChatMemberUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatMessageByDate',
    ...fns: Middleware<RequestContext<api.GetChatMessageByDateParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatMessageCount',
    ...fns: Middleware<RequestContext<api.GetChatMessageCountParams, api.CountUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatNotificationSettingsExceptions',
    ...fns: Middleware<RequestContext<api.GetChatNotificationSettingsExceptionsParams, api.ChatsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatPinnedMessage',
    ...fns: Middleware<RequestContext<api.GetChatPinnedMessageParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatReportSpamState',
    ...fns: Middleware<RequestContext<api.GetChatReportSpamStateParams, api.ChatReportSpamStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChatStatisticsUrl',
    ...fns: Middleware<RequestContext<api.GetChatStatisticsUrlParams, api.HttpUrlUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getChats',
    ...fns: Middleware<RequestContext<api.GetChatsParams, api.ChatsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getConnectedWebsites',
    ...fns: Middleware<RequestContext<never, api.ConnectedWebsitesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getContacts',
    ...fns: Middleware<RequestContext<never, api.UsersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getCountryCode',
    ...fns: Middleware<RequestContext<never, api.TextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getCreatedPublicChats',
    ...fns: Middleware<RequestContext<never, api.ChatsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getCurrentState',
    ...fns: Middleware<RequestContext<never, api.UpdatesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getDatabaseStatistics',
    ...fns: Middleware<RequestContext<never, api.DatabaseStatisticsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getDeepLinkInfo',
    ...fns: Middleware<RequestContext<api.GetDeepLinkInfoParams, api.DeepLinkInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getFavoriteStickers',
    ...fns: Middleware<RequestContext<never, api.StickersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getFile',
    ...fns: Middleware<RequestContext<api.GetFileParams, api.FileUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getFileDownloadedPrefixSize',
    ...fns: Middleware<RequestContext<api.GetFileDownloadedPrefixSizeParams, api.CountUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getFileExtension',
    ...fns: Middleware<RequestContext<api.GetFileExtensionParams, api.TextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getFileMimeType',
    ...fns: Middleware<RequestContext<api.GetFileMimeTypeParams, api.TextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getGameHighScores',
    ...fns: Middleware<RequestContext<api.GetGameHighScoresParams, api.GameHighScoresUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getGroupsInCommon',
    ...fns: Middleware<RequestContext<api.GetGroupsInCommonParams, api.ChatsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getImportedContactCount',
    ...fns: Middleware<RequestContext<never, api.CountUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getInlineGameHighScores',
    ...fns: Middleware<RequestContext<api.GetInlineGameHighScoresParams, api.GameHighScoresUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getInlineQueryResults',
    ...fns: Middleware<RequestContext<api.GetInlineQueryResultsParams, api.InlineQueryResultsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getInstalledStickerSets',
    ...fns: Middleware<RequestContext<api.GetInstalledStickerSetsParams, api.StickerSetsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getInviteText',
    ...fns: Middleware<RequestContext<never, api.TextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getJsonString',
    ...fns: Middleware<RequestContext<api.GetJsonStringParams, api.TextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getJsonValue',
    ...fns: Middleware<RequestContext<api.GetJsonValueParams, api.JsonValueUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getLanguagePackInfo',
    ...fns: Middleware<RequestContext<api.GetLanguagePackInfoParams, api.LanguagePackInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getLanguagePackString',
    ...fns: Middleware<RequestContext<api.GetLanguagePackStringParams, api.LanguagePackStringValueUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getLanguagePackStrings',
    ...fns: Middleware<RequestContext<api.GetLanguagePackStringsParams, api.LanguagePackStringsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getLocalizationTargetInfo',
    ...fns: Middleware<RequestContext<api.GetLocalizationTargetInfoParams, api.LocalizationTargetInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getLogStream',
    ...fns: Middleware<RequestContext<never, api.LogStreamUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getLogTagVerbosityLevel',
    ...fns: Middleware<RequestContext<api.GetLogTagVerbosityLevelParams, api.LogVerbosityLevelUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getLogTags',
    ...fns: Middleware<RequestContext<never, api.LogTagsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getLogVerbosityLevel',
    ...fns: Middleware<RequestContext<never, api.LogVerbosityLevelUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getMapThumbnailFile',
    ...fns: Middleware<RequestContext<api.GetMapThumbnailFileParams, api.FileUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getMe',
    ...fns: Middleware<RequestContext<never, api.UserUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getMessage',
    ...fns: Middleware<RequestContext<api.GetMessageParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getMessageLink',
    ...fns: Middleware<RequestContext<api.GetMessageLinkParams, api.HttpUrlUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getMessageLocally',
    ...fns: Middleware<RequestContext<api.GetMessageLocallyParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getMessages',
    ...fns: Middleware<RequestContext<api.GetMessagesParams, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getNetworkStatistics',
    ...fns: Middleware<RequestContext<api.GetNetworkStatisticsParams, api.NetworkStatisticsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getOption',
    ...fns: Middleware<RequestContext<api.GetOptionParams, api.OptionValueUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPassportAuthorizationForm',
    ...fns: Middleware<RequestContext<api.GetPassportAuthorizationFormParams, api.PassportAuthorizationFormUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPassportAuthorizationFormAvailableElements',
    ...fns: Middleware<RequestContext<api.GetPassportAuthorizationFormAvailableElementsParams, api.PassportElementsWithErrorsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPassportElement',
    ...fns: Middleware<RequestContext<api.GetPassportElementParams, api.PassportElementUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPasswordState',
    ...fns: Middleware<RequestContext<never, api.PasswordStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPaymentForm',
    ...fns: Middleware<RequestContext<api.GetPaymentFormParams, api.PaymentFormUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPaymentReceipt',
    ...fns: Middleware<RequestContext<api.GetPaymentReceiptParams, api.PaymentReceiptUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPreferredCountryLanguage',
    ...fns: Middleware<RequestContext<api.GetPreferredCountryLanguageParams, api.TextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getProxies',
    ...fns: Middleware<RequestContext<never, api.ProxiesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getProxyLink',
    ...fns: Middleware<RequestContext<api.GetProxyLinkParams, api.TextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPublicMessageLink',
    ...fns: Middleware<RequestContext<api.GetPublicMessageLinkParams, api.PublicMessageLinkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getPushReceiverId',
    ...fns: Middleware<RequestContext<api.GetPushReceiverIdParams, api.PushReceiverIdUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getRecentInlineBots',
    ...fns: Middleware<RequestContext<never, api.UsersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getRecentStickers',
    ...fns: Middleware<RequestContext<api.GetRecentStickersParams, api.StickersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getRecentlyVisitedTMeUrls',
    ...fns: Middleware<RequestContext<api.GetRecentlyVisitedTMeUrlsParams, api.TMeUrlsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getRecoveryEmailAddress',
    ...fns: Middleware<RequestContext<api.GetRecoveryEmailAddressParams, api.RecoveryEmailAddressUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getRemoteFile',
    ...fns: Middleware<RequestContext<api.GetRemoteFileParams, api.FileUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getRepliedMessage',
    ...fns: Middleware<RequestContext<api.GetRepliedMessageParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getSavedAnimations',
    ...fns: Middleware<RequestContext<never, api.AnimationsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getSavedOrderInfo',
    ...fns: Middleware<RequestContext<never, api.OrderInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getScopeNotificationSettings',
    ...fns: Middleware<RequestContext<api.GetScopeNotificationSettingsParams, api.ScopeNotificationSettingsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getSecretChat',
    ...fns: Middleware<RequestContext<api.GetSecretChatParams, api.SecretChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getStickerEmojis',
    ...fns: Middleware<RequestContext<api.GetStickerEmojisParams, api.StickerEmojisUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getStickerSet',
    ...fns: Middleware<RequestContext<api.GetStickerSetParams, api.StickerSetUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getStickers',
    ...fns: Middleware<RequestContext<api.GetStickersParams, api.StickersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getStorageStatistics',
    ...fns: Middleware<RequestContext<api.GetStorageStatisticsParams, api.StorageStatisticsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getStorageStatisticsFast',
    ...fns: Middleware<RequestContext<never, api.StorageStatisticsFastUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getSupergroup',
    ...fns: Middleware<RequestContext<api.GetSupergroupParams, api.SupergroupUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getSupergroupFullInfo',
    ...fns: Middleware<RequestContext<api.GetSupergroupFullInfoParams, api.SupergroupFullInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getSupergroupMembers',
    ...fns: Middleware<RequestContext<api.GetSupergroupMembersParams, api.ChatMembersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getSupportUser',
    ...fns: Middleware<RequestContext<never, api.UserUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getTemporaryPasswordState',
    ...fns: Middleware<RequestContext<never, api.TemporaryPasswordStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getTextEntities',
    ...fns: Middleware<RequestContext<api.GetTextEntitiesParams, api.TextEntitiesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getTopChats',
    ...fns: Middleware<RequestContext<api.GetTopChatsParams, api.ChatsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getTrendingStickerSets',
    ...fns: Middleware<RequestContext<never, api.StickerSetsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getUser',
    ...fns: Middleware<RequestContext<api.GetUserParams, api.UserUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getUserFullInfo',
    ...fns: Middleware<RequestContext<api.GetUserFullInfoParams, api.UserFullInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getUserPrivacySettingRules',
    ...fns: Middleware<RequestContext<api.GetUserPrivacySettingRulesParams, api.UserPrivacySettingRulesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getUserProfilePhotos',
    ...fns: Middleware<RequestContext<api.GetUserProfilePhotosParams, api.UserProfilePhotosUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getWallpapers',
    ...fns: Middleware<RequestContext<never, api.WallpapersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getWebPageInstantView',
    ...fns: Middleware<RequestContext<api.GetWebPageInstantViewParams, api.WebPageInstantViewUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'getWebPagePreview',
    ...fns: Middleware<RequestContext<api.GetWebPagePreviewParams, api.WebPageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'importContacts',
    ...fns: Middleware<RequestContext<api.ImportContactsParams, api.ImportedContactsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'joinChat',
    ...fns: Middleware<RequestContext<api.JoinChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'joinChatByInviteLink',
    ...fns: Middleware<RequestContext<api.JoinChatByInviteLinkParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'leaveChat',
    ...fns: Middleware<RequestContext<api.LeaveChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'logOut',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'openChat',
    ...fns: Middleware<RequestContext<api.OpenChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'openMessageContent',
    ...fns: Middleware<RequestContext<api.OpenMessageContentParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'optimizeStorage',
    ...fns: Middleware<RequestContext<api.OptimizeStorageParams, api.StorageStatisticsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'parseTextEntities',
    ...fns: Middleware<RequestContext<api.ParseTextEntitiesParams, api.FormattedTextUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'pinChatMessage',
    ...fns: Middleware<RequestContext<api.PinChatMessageParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'pingProxy',
    ...fns: Middleware<RequestContext<api.PingProxyParams, api.SecondsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'processPushNotification',
    ...fns: Middleware<RequestContext<api.ProcessPushNotificationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'readAllChatMentions',
    ...fns: Middleware<RequestContext<api.ReadAllChatMentionsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'readFilePart',
    ...fns: Middleware<RequestContext<api.ReadFilePartParams, api.FilePartUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'recoverAuthenticationPassword',
    ...fns: Middleware<RequestContext<api.RecoverAuthenticationPasswordParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'recoverPassword',
    ...fns: Middleware<RequestContext<api.RecoverPasswordParams, api.PasswordStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'registerDevice',
    ...fns: Middleware<RequestContext<api.RegisterDeviceParams, api.PushReceiverIdUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeContacts',
    ...fns: Middleware<RequestContext<api.RemoveContactsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeFavoriteSticker',
    ...fns: Middleware<RequestContext<api.RemoveFavoriteStickerParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeNotification',
    ...fns: Middleware<RequestContext<api.RemoveNotificationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeNotificationGroup',
    ...fns: Middleware<RequestContext<api.RemoveNotificationGroupParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeProxy',
    ...fns: Middleware<RequestContext<api.RemoveProxyParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeRecentHashtag',
    ...fns: Middleware<RequestContext<api.RemoveRecentHashtagParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeRecentSticker',
    ...fns: Middleware<RequestContext<api.RemoveRecentStickerParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeRecentlyFoundChat',
    ...fns: Middleware<RequestContext<api.RemoveRecentlyFoundChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeSavedAnimation',
    ...fns: Middleware<RequestContext<api.RemoveSavedAnimationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeStickerFromSet',
    ...fns: Middleware<RequestContext<api.RemoveStickerFromSetParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'removeTopChat',
    ...fns: Middleware<RequestContext<api.RemoveTopChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'reorderInstalledStickerSets',
    ...fns: Middleware<RequestContext<api.ReorderInstalledStickerSetsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'reportChat',
    ...fns: Middleware<RequestContext<api.ReportChatParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'reportSupergroupSpam',
    ...fns: Middleware<RequestContext<api.ReportSupergroupSpamParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'requestAuthenticationPasswordRecovery',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'requestPasswordRecovery',
    ...fns: Middleware<RequestContext<never, api.EmailAddressAuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'resendAuthenticationCode',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'resendChangePhoneNumberCode',
    ...fns: Middleware<RequestContext<never, api.AuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'resendEmailAddressVerificationCode',
    ...fns: Middleware<RequestContext<never, api.EmailAddressAuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'resendPhoneNumberConfirmationCode',
    ...fns: Middleware<RequestContext<never, api.AuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'resendPhoneNumberVerificationCode',
    ...fns: Middleware<RequestContext<never, api.AuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'resendRecoveryEmailAddressCode',
    ...fns: Middleware<RequestContext<never, api.PasswordStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'resetAllNotificationSettings',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'resetNetworkStatistics',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'saveApplicationLogEvent',
    ...fns: Middleware<RequestContext<api.SaveApplicationLogEventParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchCallMessages',
    ...fns: Middleware<RequestContext<api.SearchCallMessagesParams, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchChatMembers',
    ...fns: Middleware<RequestContext<api.SearchChatMembersParams, api.ChatMembersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchChatMessages',
    ...fns: Middleware<RequestContext<api.SearchChatMessagesParams, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchChatRecentLocationMessages',
    ...fns: Middleware<RequestContext<api.SearchChatRecentLocationMessagesParams, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchChats',
    ...fns: Middleware<RequestContext<api.SearchChatsParams, api.ChatsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchChatsOnServer',
    ...fns: Middleware<RequestContext<api.SearchChatsOnServerParams, api.ChatsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchContacts',
    ...fns: Middleware<RequestContext<api.SearchContactsParams, api.UsersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchHashtags',
    ...fns: Middleware<RequestContext<api.SearchHashtagsParams, api.HashtagsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchInstalledStickerSets',
    ...fns: Middleware<RequestContext<api.SearchInstalledStickerSetsParams, api.StickerSetsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchMessages',
    ...fns: Middleware<RequestContext<api.SearchMessagesParams, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchPublicChat',
    ...fns: Middleware<RequestContext<api.SearchPublicChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchPublicChats',
    ...fns: Middleware<RequestContext<api.SearchPublicChatsParams, api.ChatsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchSecretMessages',
    ...fns: Middleware<RequestContext<api.SearchSecretMessagesParams, api.FoundMessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchStickerSet',
    ...fns: Middleware<RequestContext<api.SearchStickerSetParams, api.StickerSetUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchStickerSets',
    ...fns: Middleware<RequestContext<api.SearchStickerSetsParams, api.StickerSetsUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'searchStickers',
    ...fns: Middleware<RequestContext<api.SearchStickersParams, api.StickersUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendBotStartMessage',
    ...fns: Middleware<RequestContext<api.SendBotStartMessageParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendCallDebugInformation',
    ...fns: Middleware<RequestContext<api.SendCallDebugInformationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendCallRating',
    ...fns: Middleware<RequestContext<api.SendCallRatingParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendChatAction',
    ...fns: Middleware<RequestContext<api.SendChatActionParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendChatScreenshotTakenNotification',
    ...fns: Middleware<RequestContext<api.SendChatScreenshotTakenNotificationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendChatSetTtlMessage',
    ...fns: Middleware<RequestContext<api.SendChatSetTtlMessageParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendCustomRequest',
    ...fns: Middleware<RequestContext<api.SendCustomRequestParams, api.CustomRequestResultUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendEmailAddressVerificationCode',
    ...fns: Middleware<RequestContext<api.SendEmailAddressVerificationCodeParams, api.EmailAddressAuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendInlineQueryResultMessage',
    ...fns: Middleware<RequestContext<api.SendInlineQueryResultMessageParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendMessage',
    ...fns: Middleware<RequestContext<api.SendMessageParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendMessageAlbum',
    ...fns: Middleware<RequestContext<api.SendMessageAlbumParams, api.MessagesUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendPassportAuthorizationForm',
    ...fns: Middleware<RequestContext<api.SendPassportAuthorizationFormParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendPaymentForm',
    ...fns: Middleware<RequestContext<api.SendPaymentFormParams, api.PaymentResultUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendPhoneNumberConfirmationCode',
    ...fns: Middleware<RequestContext<api.SendPhoneNumberConfirmationCodeParams, api.AuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'sendPhoneNumberVerificationCode',
    ...fns: Middleware<RequestContext<api.SendPhoneNumberVerificationCodeParams, api.AuthenticationCodeInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setAccountTtl',
    ...fns: Middleware<RequestContext<api.SetAccountTtlParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setAlarm',
    ...fns: Middleware<RequestContext<api.SetAlarmParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setAuthenticationPhoneNumber',
    ...fns: Middleware<RequestContext<api.SetAuthenticationPhoneNumberParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setBio',
    ...fns: Middleware<RequestContext<api.SetBioParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setBotUpdatesStatus',
    ...fns: Middleware<RequestContext<api.SetBotUpdatesStatusParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setChatClientData',
    ...fns: Middleware<RequestContext<api.SetChatClientDataParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setChatDraftMessage',
    ...fns: Middleware<RequestContext<api.SetChatDraftMessageParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setChatMemberStatus',
    ...fns: Middleware<RequestContext<api.SetChatMemberStatusParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setChatNotificationSettings',
    ...fns: Middleware<RequestContext<api.SetChatNotificationSettingsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setChatPhoto',
    ...fns: Middleware<RequestContext<api.SetChatPhotoParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setChatTitle',
    ...fns: Middleware<RequestContext<api.SetChatTitleParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setCustomLanguagePack',
    ...fns: Middleware<RequestContext<api.SetCustomLanguagePackParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setCustomLanguagePackString',
    ...fns: Middleware<RequestContext<api.SetCustomLanguagePackStringParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setDatabaseEncryptionKey',
    ...fns: Middleware<RequestContext<api.SetDatabaseEncryptionKeyParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setFileGenerationProgress',
    ...fns: Middleware<RequestContext<api.SetFileGenerationProgressParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setGameScore',
    ...fns: Middleware<RequestContext<api.SetGameScoreParams, api.MessageUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setInlineGameScore',
    ...fns: Middleware<RequestContext<api.SetInlineGameScoreParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setLogStream',
    ...fns: Middleware<RequestContext<api.SetLogStreamParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setLogTagVerbosityLevel',
    ...fns: Middleware<RequestContext<api.SetLogTagVerbosityLevelParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setLogVerbosityLevel',
    ...fns: Middleware<RequestContext<api.SetLogVerbosityLevelParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setName',
    ...fns: Middleware<RequestContext<api.SetNameParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setNetworkType',
    ...fns: Middleware<RequestContext<api.SetNetworkTypeParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setOption',
    ...fns: Middleware<RequestContext<api.SetOptionParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setPassportElement',
    ...fns: Middleware<RequestContext<api.SetPassportElementParams, api.PassportElementUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setPassportElementErrors',
    ...fns: Middleware<RequestContext<api.SetPassportElementErrorsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setPassword',
    ...fns: Middleware<RequestContext<api.SetPasswordParams, api.PasswordStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setPinnedChats',
    ...fns: Middleware<RequestContext<api.SetPinnedChatsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setPollAnswer',
    ...fns: Middleware<RequestContext<api.SetPollAnswerParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setProfilePhoto',
    ...fns: Middleware<RequestContext<api.SetProfilePhotoParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setRecoveryEmailAddress',
    ...fns: Middleware<RequestContext<api.SetRecoveryEmailAddressParams, api.PasswordStateUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setScopeNotificationSettings',
    ...fns: Middleware<RequestContext<api.SetScopeNotificationSettingsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setStickerPositionInSet',
    ...fns: Middleware<RequestContext<api.SetStickerPositionInSetParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setSupergroupDescription',
    ...fns: Middleware<RequestContext<api.SetSupergroupDescriptionParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setSupergroupStickerSet',
    ...fns: Middleware<RequestContext<api.SetSupergroupStickerSetParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setSupergroupUsername',
    ...fns: Middleware<RequestContext<api.SetSupergroupUsernameParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setTdlibParameters',
    ...fns: Middleware<RequestContext<api.SetTdlibParametersParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setUserPrivacySettingRules',
    ...fns: Middleware<RequestContext<api.SetUserPrivacySettingRulesParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'setUsername',
    ...fns: Middleware<RequestContext<api.SetUsernameParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'stopPoll',
    ...fns: Middleware<RequestContext<api.StopPollParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'synchronizeLanguagePack',
    ...fns: Middleware<RequestContext<api.SynchronizeLanguagePackParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'terminateAllOtherSessions',
    ...fns: Middleware<RequestContext<never, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'terminateSession',
    ...fns: Middleware<RequestContext<api.TerminateSessionParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'toggleBasicGroupAdministrators',
    ...fns: Middleware<RequestContext<api.ToggleBasicGroupAdministratorsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'toggleChatDefaultDisableNotification',
    ...fns: Middleware<RequestContext<api.ToggleChatDefaultDisableNotificationParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'toggleChatIsMarkedAsUnread',
    ...fns: Middleware<RequestContext<api.ToggleChatIsMarkedAsUnreadParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'toggleChatIsPinned',
    ...fns: Middleware<RequestContext<api.ToggleChatIsPinnedParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'toggleSupergroupInvites',
    ...fns: Middleware<RequestContext<api.ToggleSupergroupInvitesParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'toggleSupergroupIsAllHistoryAvailable',
    ...fns: Middleware<RequestContext<api.ToggleSupergroupIsAllHistoryAvailableParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'toggleSupergroupSignMessages',
    ...fns: Middleware<RequestContext<api.ToggleSupergroupSignMessagesParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'unblockUser',
    ...fns: Middleware<RequestContext<api.UnblockUserParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'unpinChatMessage',
    ...fns: Middleware<RequestContext<api.UnpinChatMessageParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'upgradeBasicGroupChatToSupergroupChat',
    ...fns: Middleware<RequestContext<api.UpgradeBasicGroupChatToSupergroupChatParams, api.ChatUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'uploadFile',
    ...fns: Middleware<RequestContext<api.UploadFileParams, api.FileUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'uploadStickerFile',
    ...fns: Middleware<RequestContext<api.UploadStickerFileParams, api.FileUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'validateOrderInfo',
    ...fns: Middleware<RequestContext<api.ValidateOrderInfoParams, api.ValidatedOrderInfoUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'viewMessages',
    ...fns: Middleware<RequestContext<api.ViewMessagesParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'viewTrendingStickerSets',
    ...fns: Middleware<RequestContext<api.ViewTrendingStickerSetsParams, api.OkUnion> & ContextT>[]
  ): void;

  (
    predicateTypes: 'writeGeneratedFilePart',
    ...fns: Middleware<RequestContext<api.WriteGeneratedFilePartParams, api.OkUnion> & ContextT>[]
  ): void;

  // Updates
  (
    predicateTypes: 'updateAuthorizationState',
    ...fns: Middleware<UpdateContext<api.UpdateAuthorizationState> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewMessage',
    ...fns: Middleware<UpdateContext<api.UpdateNewMessage> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateMessageSendAcknowledged',
    ...fns: Middleware<UpdateContext<api.UpdateMessageSendAcknowledged> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateMessageSendSucceeded',
    ...fns: Middleware<UpdateContext<api.UpdateMessageSendSucceeded> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateMessageSendFailed',
    ...fns: Middleware<UpdateContext<api.UpdateMessageSendFailed> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateMessageContent',
    ...fns: Middleware<UpdateContext<api.UpdateMessageContent> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateMessageEdited',
    ...fns: Middleware<UpdateContext<api.UpdateMessageEdited> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateMessageViews',
    ...fns: Middleware<UpdateContext<api.UpdateMessageViews> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateMessageContentOpened',
    ...fns: Middleware<UpdateContext<api.UpdateMessageContentOpened> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateMessageMentionRead',
    ...fns: Middleware<UpdateContext<api.UpdateMessageMentionRead> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewChat',
    ...fns: Middleware<UpdateContext<api.UpdateNewChat> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatTitle',
    ...fns: Middleware<UpdateContext<api.UpdateChatTitle> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatPhoto',
    ...fns: Middleware<UpdateContext<api.UpdateChatPhoto> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatLastMessage',
    ...fns: Middleware<UpdateContext<api.UpdateChatLastMessage> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatOrder',
    ...fns: Middleware<UpdateContext<api.UpdateChatOrder> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatIsPinned',
    ...fns: Middleware<UpdateContext<api.UpdateChatIsPinned> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatIsMarkedAsUnread',
    ...fns: Middleware<UpdateContext<api.UpdateChatIsMarkedAsUnread> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatIsSponsored',
    ...fns: Middleware<UpdateContext<api.UpdateChatIsSponsored> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatDefaultDisableNotification',
    ...fns: Middleware<UpdateContext<api.UpdateChatDefaultDisableNotification> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatReadInbox',
    ...fns: Middleware<UpdateContext<api.UpdateChatReadInbox> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatReadOutbox',
    ...fns: Middleware<UpdateContext<api.UpdateChatReadOutbox> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatUnreadMentionCount',
    ...fns: Middleware<UpdateContext<api.UpdateChatUnreadMentionCount> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatNotificationSettings',
    ...fns: Middleware<UpdateContext<api.UpdateChatNotificationSettings> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateScopeNotificationSettings',
    ...fns: Middleware<UpdateContext<api.UpdateScopeNotificationSettings> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatPinnedMessage',
    ...fns: Middleware<UpdateContext<api.UpdateChatPinnedMessage> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatReplyMarkup',
    ...fns: Middleware<UpdateContext<api.UpdateChatReplyMarkup> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatDraftMessage',
    ...fns: Middleware<UpdateContext<api.UpdateChatDraftMessage> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateChatOnlineMemberCount',
    ...fns: Middleware<UpdateContext<api.UpdateChatOnlineMemberCount> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNotification',
    ...fns: Middleware<UpdateContext<api.UpdateNotification> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNotificationGroup',
    ...fns: Middleware<UpdateContext<api.UpdateNotificationGroup> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateActiveNotifications',
    ...fns: Middleware<UpdateContext<api.UpdateActiveNotifications> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateHavePendingNotifications',
    ...fns: Middleware<UpdateContext<api.UpdateHavePendingNotifications> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateDeleteMessages',
    ...fns: Middleware<UpdateContext<api.UpdateDeleteMessages> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateUserChatAction',
    ...fns: Middleware<UpdateContext<api.UpdateUserChatAction> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateUserStatus',
    ...fns: Middleware<UpdateContext<api.UpdateUserStatus> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateUser',
    ...fns: Middleware<UpdateContext<api.UpdateUser> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateBasicGroup',
    ...fns: Middleware<UpdateContext<api.UpdateBasicGroup> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateSupergroup',
    ...fns: Middleware<UpdateContext<api.UpdateSupergroup> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateSecretChat',
    ...fns: Middleware<UpdateContext<api.UpdateSecretChat> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateUserFullInfo',
    ...fns: Middleware<UpdateContext<api.UpdateUserFullInfo> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateBasicGroupFullInfo',
    ...fns: Middleware<UpdateContext<api.UpdateBasicGroupFullInfo> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateSupergroupFullInfo',
    ...fns: Middleware<UpdateContext<api.UpdateSupergroupFullInfo> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateServiceNotification',
    ...fns: Middleware<UpdateContext<api.UpdateServiceNotification> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateFile',
    ...fns: Middleware<UpdateContext<api.UpdateFile> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateFileGenerationStart',
    ...fns: Middleware<UpdateContext<api.UpdateFileGenerationStart> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateFileGenerationStop',
    ...fns: Middleware<UpdateContext<api.UpdateFileGenerationStop> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateCall',
    ...fns: Middleware<UpdateContext<api.UpdateCall> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateUserPrivacySettingRules',
    ...fns: Middleware<UpdateContext<api.UpdateUserPrivacySettingRules> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateUnreadMessageCount',
    ...fns: Middleware<UpdateContext<api.UpdateUnreadMessageCount> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateUnreadChatCount',
    ...fns: Middleware<UpdateContext<api.UpdateUnreadChatCount> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateOption',
    ...fns: Middleware<UpdateContext<api.UpdateOption> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateInstalledStickerSets',
    ...fns: Middleware<UpdateContext<api.UpdateInstalledStickerSets> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateTrendingStickerSets',
    ...fns: Middleware<UpdateContext<api.UpdateTrendingStickerSets> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateRecentStickers',
    ...fns: Middleware<UpdateContext<api.UpdateRecentStickers> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateFavoriteStickers',
    ...fns: Middleware<UpdateContext<api.UpdateFavoriteStickers> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateSavedAnimations',
    ...fns: Middleware<UpdateContext<api.UpdateSavedAnimations> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateLanguagePackStrings',
    ...fns: Middleware<UpdateContext<api.UpdateLanguagePackStrings> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateConnectionState',
    ...fns: Middleware<UpdateContext<api.UpdateConnectionState> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateTermsOfService',
    ...fns: Middleware<UpdateContext<api.UpdateTermsOfService> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewInlineQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewInlineQuery> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewChosenInlineResult',
    ...fns: Middleware<UpdateContext<api.UpdateNewChosenInlineResult> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewCallbackQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewCallbackQuery> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewInlineCallbackQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewInlineCallbackQuery> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewShippingQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewShippingQuery> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewPreCheckoutQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewPreCheckoutQuery> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewCustomEvent',
    ...fns: Middleware<UpdateContext<api.UpdateNewCustomEvent> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updateNewCustomQuery',
    ...fns: Middleware<UpdateContext<api.UpdateNewCustomQuery> & ContextT>[]
  ): void;

  (
    predicateTypes: 'updatePoll',
    ...fns: Middleware<UpdateContext<api.UpdatePoll> & ContextT>[]
  ): void;

  <ResponseT extends ResponseBody = ResponseBody> (
    predicateTypes: string | string[],
    ...fns: Middleware<(RequestContext<any, ResponseT> | UpdateContext<ResponseT>) & ContextT>[]
  ): void;
}
