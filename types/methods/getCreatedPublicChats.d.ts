import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ChatsUnion } from '../outputs'

/**
 * Returns a list of public chats created by the user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, ChatsUnion>>}
 */
export type getCreatedPublicChats<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ChatsUnion> & ExtensionT>
