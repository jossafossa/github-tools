import type { PropsWithChildren } from "react";

import classes from "./Message.module.scss";

type MessageProps = {};

export const Message = ({ children }: PropsWithChildren<MessageProps>) => {
  return <div className={classes.message}>{children}</div>;
};
