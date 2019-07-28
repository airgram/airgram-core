import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AuthenticationCodeInfoUnion } from '../outputs'

export interface SendPhoneNumberVerificationCodeParams {
  phoneNumber?: string; // The phone number of the user, in international format
  allowFlashCall?: boolean; // Pass true if the authentication code may be sent via flash call to the specified phone number
  isCurrentPhoneNumber?: boolean; // Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false
}

/**
 * Sends a code to verify a phone number to be added to a user's Telegram Passport
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The phone number of the user, in international
 * format
 * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
 * may be sent via flash call to the specified phone number
 * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
 * is used on the current device. Ignored if allow_flash_call is false
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPhoneNumberVerificationCodeParams, AuthenticationCodeInfoUnion>>}
 */
export type sendPhoneNumberVerificationCode<ExtensionT> = (
  params?: SendPhoneNumberVerificationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendPhoneNumberVerificationCodeParams, AuthenticationCodeInfoUnion> & ExtensionT>
