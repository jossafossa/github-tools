import type { PropsWithChildren } from "preact/compat";

import classes from "./Message.module.scss";

type MessageProps = {};

export const Message = ({ children }: PropsWithChildren<MessageProps>) => {
  return <div className={classes.message}>{children}</div>;
};
