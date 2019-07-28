import { Message } from './'

export type MessagesUnion = Messages

/** Contains a list of messages */
export interface Messages {
  _: 'messages';
  /** Approximate total count of messages found */
  totalCount: number;
  /** List of messages; messages may be null */
  messages?: Message[];
}