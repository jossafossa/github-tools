import { ErrorMessage, Field } from "formik";
import { FormControl } from "../FormControl";
import classes from "./FieldInput.module.scss";

type FieldInputProps = {
  label: string;
  description?: string;
} & Parameters<typeof Field>[0];

export const FieldInput = ({ label, ...props }: FieldInputProps) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>

      <div className={classes.content}>
        <Field {...props} />
        <ErrorMessage name={props.name} />
      </div>
      {props.description && (
        <FormControl.Description>{props.description}</FormControl.Description>
      )}
    </FormControl>
  );
};
