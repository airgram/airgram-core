import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleSupergroupInvitesParams {
  supergroupId?: number; // Identifier of the supergroup
  anyoneCanInvite?: boolean; // New value of anyone_can_invite
}

/**
 * Toggles whether all members of a supergroup can add new members; requires appropriate
 * administrator rights in the supergroup.
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup
 * @param {boolean} [params.anyoneCanInvite] - New value of anyone_can_invite
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleSupergroupInvitesParams, OkUnion>>}
 */
export type toggleSupergroupInvites<ExtensionT> = (
  params?: ToggleSupergroupInvitesParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleSupergroupInvitesParams, OkUnion> & ExtensionT>
