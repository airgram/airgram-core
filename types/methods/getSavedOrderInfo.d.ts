import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OrderInfoUnion } from '../outputs'

/**
 * Returns saved order info, if any
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, OrderInfoUnion>>}
 */
export type getSavedOrderInfo<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OrderInfoUnion> & ExtensionT>
