import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AuthenticationCodeInfoUnion } from '../outputs'

export interface SendPhoneNumberConfirmationCodeParams {
  hash?: string; // Value of the "hash" parameter from the link
  phoneNumber?: string; // Value of the "phone" parameter from the link
  allowFlashCall?: boolean; // Pass true if the authentication code may be sent via flash call to the specified phone number
  isCurrentPhoneNumber?: boolean; // Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false
}

/**
 * Sends phone number confirmation code. Should be called when user presses "https://t.me/confirmphone?phone=*******&hash=**********"
 * or "tg://confirmphone?phone=*******&hash=**********" link
 * @param {Object} params
 * @param {string} [params.hash] - Value of the "hash" parameter from the link
 * @param {string} [params.phoneNumber] - Value of the "phone" parameter from the
 * link
 * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
 * may be sent via flash call to the specified phone number
 * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
 * is used on the current device. Ignored if allow_flash_call is false
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SendPhoneNumberConfirmationCodeParams, AuthenticationCodeInfoUnion>>}
 */
export type sendPhoneNumberConfirmationCode<ExtensionT> = (
  params?: SendPhoneNumberConfirmationCodeParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SendPhoneNumberConfirmationCodeParams, AuthenticationCodeInfoUnion> & ExtensionT>
