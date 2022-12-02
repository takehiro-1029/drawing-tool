import type { Message } from "~/types/Message.type";

/**
 * MessageModel
 */
export class MessageModel {
  readonly d: Message;

  constructor(d: Message) {
    this.d = d;
  }
}
