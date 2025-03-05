import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-item.component.module.css";

interface Props {
  movementItem: MovementVm;
  defaultAccountId?: string;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem, defaultAccountId } = props;

  return (
    <div className={classes.row} defaultValue={defaultAccountId}>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.transactionDate.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${
          movementItem.amount < 0 ? classes.negative : null
        }`}
      >
        {movementItem.amount.toLocaleString("es-ES", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 0,
        })}
      </span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${
          movementItem.availableBalance < 0 ? classes.negative : null
        }`}
      >
        {movementItem.availableBalance.toLocaleString("es-ES", {
          style: "currency",
          currency: "EUR",
          minimumFractionDigits: 0,
        })}
      </span>
    </div>
  );
};
