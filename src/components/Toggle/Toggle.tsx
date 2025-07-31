import type { JSX } from "react";

import classes from "./Toggle.module.scss";
type ToggleProps = Omit<JSX.InputHTMLAttributes, "type">;

export const Toggle = (props: ToggleProps) => {
  return <input className={classes.toggle} type="checkbox" {...props} />;
};
