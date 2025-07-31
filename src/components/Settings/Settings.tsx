import type { JSX } from "preact/jsx-runtime";

import classes from "./Settings.module.scss";

export const Settings = () => {
  const handleSubmit = (event: JSX.TargetedSubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return <form className={classes.settings} onSubmit={handleSubmit}></form>;
};
