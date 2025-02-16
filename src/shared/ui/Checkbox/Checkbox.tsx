import React from "react";
import styles from "./styles.module.scss";
import { Checkbox, CheckboxProps } from "@mantine/core";
import CheckedIcon from "shared/assets/icons/checked.svg";

interface FCheckboxProps extends CheckboxProps {
  className?: string;
  name: string;
  register: any;
}

const CheckboxIcon: CheckboxProps["icon"] = ({ indeterminate, className }) =>
  indeterminate ? (
    <CheckedIcon className={className} />
  ) : (
    <CheckedIcon className={className} />
  );

export const FCheckbox: React.FC<FCheckboxProps> = ({
  className,
  name,
  register,
  ...props
}) => {
  return (
    <Checkbox
      icon={CheckboxIcon}
      classNames={styles}
      {...register(name)}
      {...props}
      error={
        props.error && (
          <div className={styles.error}>
            <p>{props.error}</p>
          </div>
        )
      }
    />
  );
};
