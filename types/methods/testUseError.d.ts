import { ApiRequestOptions, ApiResponse } from '../airgram'
import { ErrorUnion } from '../outputs'

/**
 * Does nothing and ensures that the Error object is used; for testing only. This is
 * an offline method. Can be called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, ErrorUnion>>}
 */
export type testUseError<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, ErrorUnion> & ExtensionT>
