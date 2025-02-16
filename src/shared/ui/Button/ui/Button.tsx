import React, { ButtonHTMLAttributes } from "react";
import { MouseEvent } from "react";
import styles from "./styles.module.scss";
import outlineStyles from "./outlineStyles.module.scss";
import clsx from "clsx";
import { Button, ButtonProps as MButtonProps } from "@mantine/core";

export type ButtonSize = "large" | "medium" | "small";

export interface ButtonProps
  extends MButtonProps,
    Omit<React.ComponentPropsWithoutRef<"button">, keyof MButtonProps> {
  handleClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClick?: () => void;
}

export const FilledButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button classNames={styles} {...props}>
      {children}
    </Button>
  );
};

export const OutlineButton: React.FC<ButtonProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Button classNames={outlineStyles} {...props}>
      {children}
    </Button>
  );
};
