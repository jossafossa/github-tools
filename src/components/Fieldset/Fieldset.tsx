import type { PropsWithChildren } from "preact/compat";

import classes from "./Fieldset.module.scss";

type FieldsetProps = {
  title?: string;
};

export const Fieldset = ({
  children,
  title,
}: PropsWithChildren<FieldsetProps>) => {
  return (
    <fieldset className={classes.fieldset}>
      {title && <legend>{title}</legend>}

      {children}
    </fieldset>
  );
};
