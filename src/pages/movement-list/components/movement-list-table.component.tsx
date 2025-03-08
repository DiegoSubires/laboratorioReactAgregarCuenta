import React from "react";
import { MovementVm } from "../movement-list.vm";
import classes from "./movement-list-table.component.module.css";
import { MovementListItemComponent } from "./movement-list-item.component";
import { TableHead } from "@/layouts/app/components/tableHead.component";

interface Props {
  movementList: MovementVm[];
  defaultAccountId?: string;
}

export const MovementListTableComponent: React.FC<Props> = (props) => {
  const { movementList, defaultAccountId } = props;
  const textSpanArray = [
    "FECHA",
    "FECHA VALOR",
    "DESCRIPCIÓN",
    "IMPORTE",
    "SALDO DISPONIBLE",
  ];

  if (movementList) {
    return (
      <>
        <div className={classes.gridContainer}>
          <div className={classes.gridTable}>
            <TableHead textSpanArray={textSpanArray} />

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
