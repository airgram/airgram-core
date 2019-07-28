import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UserUnion } from '../outputs'

/**
 * Returns the current user
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, UserUnion>>}
 */
export type getMe<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, UserUnion> & ExtensionT>
