import React, { Dispatch, SetStateAction } from "react";
import { Select, SelectProps } from "@mantine/core";
import styles from "./styles.module.scss";
import ArrowIcon from "shared/assets/icons/arrow.svg";

interface IFlushedInputProps extends SelectProps {
  value?: string | null;
  onChange?: Dispatch<SetStateAction<string | null>>;
}

export const FlushedSelect: React.FC<IFlushedInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  return (
    <Select
      value={value}
      onChange={onChange}
      allowDeselect={false}
      label={props.label}
      placeholder={props.placeholder}
      data={props.data}
      classNames={styles}
      rightSection={<ArrowIcon />}
    />
  );
};
