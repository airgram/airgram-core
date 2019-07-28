import { ApiRequestOptions, ApiResponse } from '../airgram'
import { AuthenticationCodeInfoUnion } from '../outputs'

export interface ChangePhoneNumberParams {
  phoneNumber?: string; // The new phone number of the user in international format
  allowFlashCall?: boolean; // Pass true if the code can be sent via flash call to the specified phone number
  isCurrentPhoneNumber?: boolean; // Pass true if the phone number is used on the current device. Ignored if allow_flash_call is false
}

/**
 * Changes the phone number of the user and sends an authentication code to the user's
 * new phone number. On success, returns information about the sent code
 * @param {Object} params
 * @param {string} [params.phoneNumber] - The new phone number of the user in international
 * format
 * @param {boolean} [params.allowFlashCall] - Pass true if the code can be sent via
 * flash call to the specified phone number
 * @param {boolean} [params.isCurrentPhoneNumber] - Pass true if the phone number
 * is used on the current device. Ignored if allow_flash_call is false
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ChangePhoneNumberParams, AuthenticationCodeInfoUnion>>}
 */
export type changePhoneNumber<ExtensionT> = (
  params?: ChangePhoneNumberParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ChangePhoneNumberParams, AuthenticationCodeInfoUnion> & ExtensionT>
