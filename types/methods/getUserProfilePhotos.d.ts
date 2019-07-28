import { ApiRequestOptions, ApiResponse } from '../airgram'
import { UserProfilePhotosUnion } from '../outputs'

export interface GetUserProfilePhotosParams {
  userId?: number; // User identifier
  offset?: number; // The number of photos to skip; must be non-negative
  limit?: number; // Maximum number of photos to be returned; up to 100
}

/**
 * Returns the profile photos of a user. The result of this query may be outdated: some
 * photos might have been deleted already
 * @param {Object} params
 * @param {number} [params.userId] - User identifier
 * @param {number} [params.offset] - The number of photos to skip; must be non-negative
 * @param {number} [params.limit] - Maximum number of photos to be returned; up to
 * 100
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<GetUserProfilePhotosParams, UserProfilePhotosUnion>>}
 */
export type getUserProfilePhotos<ExtensionT> = (
  params?: GetUserProfilePhotosParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<GetUserProfilePhotosParams, UserProfilePhotosUnion> & ExtensionT>
