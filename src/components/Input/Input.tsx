import type { JSX } from "react";

import { useFormControlContext } from "../FormControl";
import classes from "./Input.module.scss";
import classNames from "classnames";

export const Input = ({
  className,
  ...props
}: JSX.IntrinsicElements["input"]) => {
  const { id } = useFormControlContext();

  return (
    <input
      className={classNames(classes.input, className)}
      id={id}
      {...props}
    />
  );
};
