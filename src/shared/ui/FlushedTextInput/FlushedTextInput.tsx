import React from "react";
import styles from "./styles.module.scss";
import { TextInput, TextInputProps } from "@mantine/core";

interface FTextInputProps extends TextInputProps {
  className?: string;
  name: string;
  register: any;
}

export const FFlushedTextInput: React.FC<FTextInputProps> = ({
  className,
  name,
  register,
  ...props
}) => {
  return (
    <TextInput
      variant="flushed"
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
