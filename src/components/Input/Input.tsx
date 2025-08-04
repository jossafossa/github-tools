import type { JSX } from "preact";

import { useFormControlContext } from "../FormControl";
import classes from "./Input.module.scss";

export const Input = (props: JSX.InputHTMLAttributes) => {
  const { id } = useFormControlContext();

  return <input className={classes.input} id={id} {...props} />;
};
