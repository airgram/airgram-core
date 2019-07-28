import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

/**
 * Forces an updates.getDifference call to the Telegram servers; for testing only
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, OkUnion>>}
 */
export type testGetDifference<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion> & ExtensionT>
