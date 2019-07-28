import { UpdateUnion } from './'

export type UpdatesUnion = Updates

/** Contains a list of updates */
export interface Updates {
  _: 'updates';
  /** List of updates */
  updates: UpdateUnion[];
}
