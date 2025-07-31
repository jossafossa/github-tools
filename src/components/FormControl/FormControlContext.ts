import { createContext } from "preact";
import { useContext } from "preact/compat";

type FormControlContextProps =
  | undefined
  | {
      id: string;
    };

export const FormControlContext =
  createContext<FormControlContextProps>(undefined);

export const useFormControlContext = () => {
  const formControlContext = useContext(FormControlContext);

  if (!formControlContext) {
    throw new Error("useFormControlContext must be used within a FormControl");
  }

  return formControlContext;
};
