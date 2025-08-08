import register from "preact-custom-element";

import { Messages, type MessagesProps } from "@/components";
import { bootstrap } from "@/inject";

// fix types of ght-messages
declare global {
  interface HTMLElementTagNameMap {
    "ght-messages": Element & MessagesProps;
  }
}

register(Messages, "ght-messages", ["messages"], { shadow: true });
bootstrap();
