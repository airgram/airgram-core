import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

/**
 * Resets all network data usage statistics to zero. Can be called before authorization
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, OkUnion>>}
 */
export type resetNetworkStatistics<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion> & ExtensionT>