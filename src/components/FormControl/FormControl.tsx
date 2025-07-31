import type { PropsWithChildren } from "preact/compat";

import { useId } from "preact/hooks";

import classes from "./FormControl.module.scss";
import { FormControlContext } from "./FormControlContext";
import { FormControlLabel } from "./FormControlLabel";

type FormControlProps = PropsWithChildren;

export const FormControl = ({ children }: FormControlProps) => {
  const id = useId();

  return (
    <FormControlContext.Provider value={{ id }}>
      <div className={classes.formControl}>{children}</div>
    </FormControlContext.Provider>
  );
};

FormControl.Label = FormControlLabel;
