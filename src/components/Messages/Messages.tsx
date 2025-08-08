import { Message } from "../Message";
import classes from "./Messages.module.scss";

export type MessagesProps = {
  messages: string[];
};

export const Messages = ({ messages }: MessagesProps) => {
  return (
    <div className={classes.messages}>
      {messages.map((message, index) => (
        <Message key={index}>{message}</Message>
      ))}
    </div>
  );
};
