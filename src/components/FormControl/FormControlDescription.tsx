import { PropsWithChildren } from "react";
import classes from "./FormControlDescription.module.scss";

export const FormControlDescription = ({ children }: PropsWithChildren) => {
  return <div className={classes.description}>{children}</div>;
};
