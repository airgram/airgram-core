import { ApiRequestOptions, ApiResponse } from '../airgram'
import { TemporaryPasswordStateUnion } from '../outputs'

/**
 * Returns information about the current temporary password
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, TemporaryPasswordStateUnion>>}
 */
export type getTemporaryPasswordState<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, TemporaryPasswordStateUnion> & ExtensionT>
