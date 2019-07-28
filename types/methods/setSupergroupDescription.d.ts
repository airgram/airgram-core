import { ApiRequestOptions, ApiResponse } from '../airgram'
import { OkUnion } from '../outputs'

export interface SetSupergroupDescriptionParams {
  supergroupId?: number; // Identifier of the supergroup or channel
  description?: string; // New supergroup or channel description; 0-255 characters
}

/**
 * Changes information about a supergroup or channel; requires appropriate administrator
 * rights
 * @param {Object} params
 * @param {number} [params.supergroupId] - Identifier of the supergroup or channel
 * @param {string} [params.description] - New supergroup or channel description;
 * 0-255 characters
 * @param {ApiRequestOptions} options
 * @returns {Promise<ApiResponse<SetSupergroupDescriptionParams, OkUnion>>}
 */
export type setSupergroupDescription<ExtensionT> = (
  params?: SetSupergroupDescriptionParams,
  options?: ApiRequestOptions
) => Promise<ApiResponse<SetSupergroupDescriptionParams, OkUnion> & ExtensionT>
