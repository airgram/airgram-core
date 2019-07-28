import { ApiRequestOptions, ApiResponse } from '../airgram'
import { WallpapersUnion } from '../outputs'

/**
 * Returns background wallpapers
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, WallpapersUnion>>}
 */
export type getWallpapers<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, WallpapersUnion> & ExtensionT>
