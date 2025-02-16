import React, { useState } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

export type TTab = {
  value: string;
  label: string;
  onClick: () => void;
};

interface TabsProps {
  title?: string;
  tabs: TTab[];
  defaultSelected?: TTab;
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  className,
  title,
  tabs,
  defaultSelected = tabs[0],
}) => {
  const [selected, setSelected] = useState(defaultSelected.value);

  function handleSelect(tab: TTab) {
    setSelected(tab.value);
    tab.onClick();
  }

  return (
    <div className={styles.wrapper}>
      {title && <h4 className={styles.title}>{title}</h4>}
      <div className={clsx(styles.tabs, className)}>
        {tabs.map((tab) => (
          <button
            onClick={() => handleSelect(tab)}
            className={clsx(
              styles.tab,
              selected === tab.value ? styles.active : ""
            )}
            key={tab.value}
          >
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
};
