import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface CheckAuthenticationCodeParams {
  code?: string; // The verification code received via SMS, Telegram message, phone call, or flash call
  firstName?: string; // If the user is not yet registered, the first name of the user; 1-64 characters. You can also pass an empty string for unregistered user there to check verification code validness. In the latter case PHONE_NUMBER_UNOCCUPIED error will be returned for a valid code
  lastName?: string; // If the user is not yet registered; the last name of the user; optional; 0-64 characters
}

/**
 * Checks the authentication code. Works only when the current authorization state is
 * authorizationStateWaitCode
 * @param {Object} params
 * @param {string} [params.code] - The verification code received via SMS, Telegram
 * message, phone call, or flash call
 * @param {string} [params.firstName] - If the user is not yet registered, the first
 * name of the user; 1-64 characters. You can also pass an empty string for unregistered
 * user there to check verification code validness. In the latter case PHONE_NUMBER_UNOCCUPIED
 * error will be returned for a valid code
 * @param {string} [params.lastName] - If the user is not yet registered; the last
 * name of the user; optional; 0-64 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<CheckAuthenticationCodeParams, OkUnion>>}
 */
export type checkAuthenticationCode<ExtensionT> = (
  params?: CheckAuthenticationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<CheckAuthenticationCodeParams, OkUnion> & ExtensionT>
