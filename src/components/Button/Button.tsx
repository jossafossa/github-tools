import classNames from "classnames";
import { type JSX } from "react";

import classes from "./Button.module.scss";

export const Button = ({
  className,
  ...props
}: JSX.IntrinsicElements["button"]) => {
  return (
    <button className={classNames(classes.button, className)} {...props} />
  );
};
