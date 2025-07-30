import { Button } from "./components";
import styles from "./Popup.module.scss";

export const Popup = () => {
  const test = {
    bar: "baz",
    baz: "qux",
    foo: "bar",
  };

  console.log(test);

  return (
    <div className={styles.popup}>
      <Button>My button</Button>
    </div>
  );
};
