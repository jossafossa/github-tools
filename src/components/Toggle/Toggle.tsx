import type { JSX } from "react";

import { useFormControlContext } from "../FormControl";
import classes from "./Toggle.module.scss";
import classNames from "classnames";
type ToggleProps = Omit<
  JSX.IntrinsicElements["input"],
  "type" | "checked" | "value"
> & {
  value?: boolean;
};

export const Toggle = ({ className, value, ...props }: ToggleProps) => {
  const { id } = useFormControlContext();

  console.log({ value });

  return (
    <>
      <input
        className={classNames(classes.toggle, className)}
        id={id}
        type="checkbox"
        checked={value}
        {...props}
      />
      <label htmlFor={id}></label>
    </>
  );
};
