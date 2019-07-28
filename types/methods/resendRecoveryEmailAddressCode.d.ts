import { ApiRequestOptions, ApiResponse } from '../airgram'
import { PasswordStateUnion } from '../outputs'

/**
 * Resends the 2-step verification recovery email address verification code
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, PasswordStateUnion>>}
 */
export type resendRecoveryEmailAddressCode<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, PasswordStateUnion> & ExtensionT>
