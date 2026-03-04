import type { JSX } from "react";

import { useFormControlContext } from "../FormControl";
import classes from "./Toggle.module.scss";
type ToggleProps = Omit<JSX.IntrinsicElements["input"], "type">;

export const Toggle = (props: ToggleProps) => {
  const { id } = useFormControlContext();

  return (
    <>
      <input className={classes.toggle} id={id} type="checkbox" {...props} />
      <label htmlFor={id}></label>
    </>
  );
};
