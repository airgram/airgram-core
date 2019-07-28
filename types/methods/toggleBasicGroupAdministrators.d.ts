import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface ToggleBasicGroupAdministratorsParams {
  basicGroupId?: number; // Identifier of the basic group
  everyoneIsAdministrator?: boolean; // New value of everyone_is_administrator
}

/**
 * Toggles the "All members are admins" setting in basic groups; requires creator privileges
 * in the group
 * @param {Object} params
 * @param {number} [params.basicGroupId] - Identifier of the basic group
 * @param {boolean} [params.everyoneIsAdministrator] - New value of everyone_is_administrator
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<ToggleBasicGroupAdministratorsParams, OkUnion>>}
 */
export type toggleBasicGroupAdministrators<ExtensionT> = (
  params?: ToggleBasicGroupAdministratorsParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<ToggleBasicGroupAdministratorsParams, OkUnion> & ExtensionT>
