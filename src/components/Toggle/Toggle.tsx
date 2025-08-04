import type { JSX } from "preact";

import { useFormControlContext } from "../FormControl";
import classes from "./Toggle.module.scss";
type ToggleProps = Omit<JSX.InputHTMLAttributes, "type">;

export const Toggle = (props: ToggleProps) => {
  const { id } = useFormControlContext();

  return (
    <>
      <input className={classes.toggle} id={id} type="checkbox" {...props} />
      <label htmlFor={id}></label>
    </>
  );
};
