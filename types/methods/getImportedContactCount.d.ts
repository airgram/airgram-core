import { ApiRequestOptions, ApiResponse } from '../airgram'
import { CountUnion } from '../outputs'

/**
 * Returns the total number of imported contacts
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, CountUnion>>}
 */
export type getImportedContactCount<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, CountUnion> & ExtensionT>
