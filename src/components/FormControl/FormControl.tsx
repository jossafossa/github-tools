import { type PropsWithChildren, useId } from "react";

import classes from "./FormControl.module.scss";
import { FormControlContext } from "./FormControlContext";
import { FormControlLabel } from "./FormControlLabel";
import { FormControlDescription } from "./FormControlDescription";
import { Form } from "formik";

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
FormControl.Description = FormControlDescription;
