import { InlineKeyboardButtonTypeInputUnion } from './'

export type InlineKeyboardButtonInputUnion = InlineKeyboardButtonInput

/** Represents a single button in an inline keyboard */
export interface InlineKeyboardButtonInput {
  _: 'inlineKeyboardButton';
  /** Text of the button */
  text?: string;
  /** Type of the button */
  type?: InlineKeyboardButtonTypeInputUnion;
}
