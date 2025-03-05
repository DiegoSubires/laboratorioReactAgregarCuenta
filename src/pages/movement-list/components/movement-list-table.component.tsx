import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";

interface Props {
  movementList: MovementVm[];
  defaultAccountId?: string;
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList, defaultAccountId } = props;

  if (movementList) {
    return (
      <>
        <div className={classes.gridContainer}>
          <div className={classes.gridTable}>
            <div className={classes.headerTable}>
              <span className={classes.headerCell}>FECHA</span>
              <span className={classes.headerCell}>FECHA VALOR</span>
              <span className={classes.headerCell}>DESCRIPCIÓN</span>
              <span className={classes.headerCell}>IMPORTE</span>
              <span className={classes.headerCell}>SALDO DISPONIBLE</span>
            </div>

            {movementList.map((movement) => (
              <MovementListItemComponent
                key={movement.id}
                movementItem={movement}
                defaultAccountId={defaultAccountId}
              />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return <></>;
  }
};
