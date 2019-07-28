import { Session } from './'

export type SessionsUnion = Sessions

/** Contains a list of sessions */
export interface Sessions {
  _: 'sessions';
  /** List of sessions */
  sessions: Session[];
}
