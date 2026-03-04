import { SelectHTMLAttributes } from "react";
import classes from "./Select.module.scss";
import classNames from "classnames";

type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Select = ({ options, className, ...props }: SelectProps) => {
  return (
    <select className={classNames(classes.select, className)} {...props}>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
