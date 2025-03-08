import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-table.component.module.css";
import { AccountListItemComponent } from "./account-list-item.component";
import { TableHead } from "@/layouts/app/components/tableHead.component";

interface Props {
  accountList: AccountVm[];
}

export const AccountListTableComponent: React.FC<Props> = (props) => {
  const { accountList } = props;
  const textSpanArray = [
    "IBAN",
    "ALIAS",
    "SALDO DISPONIBLE",
    "ÚLTIMA OPERACIÓN",
    "OPERACIÓN",
  ];

  return (
    <>
      <div className={classes.gridContainer}>
        <div className={classes.gridTable}>
          <TableHead textSpanArray={textSpanArray} />

          {accountList.map((account) => (
            <AccountListItemComponent key={account.id} accountItem={account} />
          ))}
        </div>
      </div>
    </>
  );
};
