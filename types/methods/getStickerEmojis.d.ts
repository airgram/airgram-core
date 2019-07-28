import { ApiRequestOptions, ApiResponse } from '../airgram'
import { InputFileInputUnion } from '../inputs'
import { StickerEmojisUnion } from '../outputs'

export interface GetStickerEmojisParams {
  sticker?: InputFileInputUnion; // Sticker file identifier
}

/**
 * Returns emoji corresponding to a sticker
 * @param {Object} params
 * @param {InputFileInputUnion} [params.sticker] - Sticker file identifier
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetStickerEmojisParams, StickerEmojisUnion>>}
 */
export type getStickerEmojis<ExtensionT> = (
  params?: GetStickerEmojisParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetStickerEmojisParams, StickerEmojisUnion> & ExtensionT>
