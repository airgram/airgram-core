import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetAuthenticationPhoneNumberParams {
  phoneNumber?: string; // The phone number of the user, in international format
  allowFlashCall?: boolean; // Pass true if the authentication code may be sent via flash call to the specified phone number
  isCurrentPhoneNumber?: boolean; // Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false
}

/**
 * Sets the phone number of the user and sends an authentication code to the user. Works
 * only when the current authorization state is authorizationStateWaitPhoneNumber
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The phone number of the user, in international
 * format
 * @param {boolean} [params.allowFlashCall] - Pass true if the authentication code
 * may be sent via flash call to the specified phone number
 * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
 * is used on the current device. Ignored if allow_flash_call is false
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetAuthenticationPhoneNumberParams, OkUnion>>}
 */
export type setAuthenticationPhoneNumber<ExtensionT> = (
  params?: SetAuthenticationPhoneNumberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetAuthenticationPhoneNumberParams, OkUnion> & ExtensionT>
