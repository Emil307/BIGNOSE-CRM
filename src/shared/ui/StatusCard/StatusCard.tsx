import React from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";
import { Status } from "entities/deals";
import BookedIcon from "shared/assets/icons/booked.svg";
import ConfirmedIcon from "shared/assets/icons/confirmed.svg";
import CameIcon from "shared/assets/icons/came.svg";
import DidNotCameIcon from "shared/assets/icons/didnotcame.svg";
import CancelledIcon from "shared/assets/icons/cancelled.svg";

interface StatusCardProps {
  status: Status;
  className?: string;
}

export const StatusCard: React.FC<StatusCardProps> = ({
  status,
  className,
}) => {
  return (
    <div className={clsx(styles.status, className, styles[status])}>
      {status === Status.BOOKED && (
        <>
          Записан
          <BookedIcon />
        </>
      )}
      {status === Status.CONFIRMED && (
        <>
          Подтвердил
          <ConfirmedIcon />
        </>
      )}
      {status === Status.CAME && (
        <>
          Пришел
          <CameIcon />
        </>
      )}
      {status === Status.DIDNOTCOME && (
        <>
          Не пришел
          <DidNotCameIcon />
        </>
      )}
      {status === Status.CANCELLED && (
        <>
          Отменил
          <CancelledIcon />
        </>
      )}
    </div>
  );
};
