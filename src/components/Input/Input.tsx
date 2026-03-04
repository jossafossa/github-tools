import type { JSX } from "react";

import { useFormControlContext } from "../FormControl";
import classes from "./Input.module.scss";

export const Input = (props: JSX.IntrinsicElements["input"]) => {
  const { id } = useFormControlContext();

  return <input className={classes.input} id={id} {...props} />;
};
