import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import profile from "shared/assets/images/profile.jpg";

interface AvatarProps {
  className?: string;
  avatarUrl?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ className, avatarUrl }) => {
  return (
    <div className={clsx(styles.avatar, className)}>
      <img
        className={clsx(styles.image, className)}
        src={avatarUrl ? avatarUrl : profile}
        alt="profile"
      />
    </div>
  );
};
