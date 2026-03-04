import type { PropsWithChildren } from "react";

import { useFormControlContext } from "./FormControlContext";

export const FormControlLabel = ({ children }: PropsWithChildren) => {
  const { id } = useFormControlContext();

  return <label htmlFor={id}>{children}</label>;
};
