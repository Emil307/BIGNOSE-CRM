import React from "react";
import {
  Tooltip as MTooltip,
  TooltipProps as MTooltipProps,
} from "@mantine/core";
import styles from "./styles.module.scss";

interface TooltipProps extends MTooltipProps {}

export const Tooltip: React.FC<TooltipProps> = ({ label, children }) => {
  return (
    <MTooltip label={label} classNames={styles} multiline>
      {children}
    </MTooltip>
  );
};
