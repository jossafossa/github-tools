import type { PropsWithChildren } from "preact/compat";

import { useFormControlContext } from "./FormControlContext";

export const FormControlLabel = ({ children }: PropsWithChildren) => {
  const { id } = useFormControlContext();

  return <label for={id}>{children}</label>;
};
