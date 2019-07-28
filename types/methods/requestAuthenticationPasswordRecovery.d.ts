import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

/**
 * Requests to send a password recovery code to an email address that was previously
 * set up. Works only when the current authorization state is authorizationStateWaitPassword
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<undefined, OkUnion>>}
 */
export type requestAuthenticationPasswordRecovery<ExtensionT> = (
  params?: never,
  options?: ApiRequestOptions
) => Promise<ApiResponse<never, OkUnion> & ExtensionT>
