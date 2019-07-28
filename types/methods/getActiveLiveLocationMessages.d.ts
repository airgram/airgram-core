import { ApiRequestOptions, ApiResponse } from '../airgram'
import { MessagesUnion } from '../outputs'

/**
 * Returns all active live locations that should be updated by the client. The list
 * is persistent across application restarts only if the message database is used
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, MessagesUnion>>}
 */
export type getActiveLiveLocationMessages<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, MessagesUnion> & ExtensionT>