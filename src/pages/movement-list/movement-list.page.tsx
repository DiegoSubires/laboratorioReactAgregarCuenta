import React from "react";

import { AppLayout } from "@/layouts";
import { AccountVm, MovementVm } from "./movement-list.vm";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { getAccount, getMovementList } from "./api";
import {
  mapAccountListFromApiToVm,
  mapMovementListFromApiToVm,
} from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = React.useState<AccountVm[]>([]);
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);
  const saldo: number = 1000;
  const alias: string = "Compartida";
  const iban: string = "ES79 2100 0813 6101 2345 6789";

  if (id) {
    React.useEffect(() => {
      getMovementList(id).then((result) =>
        setMovementList(mapMovementListFromApiToVm(result))
      );
      getAccount(id).then((result) => {
        setAccount(mapAccountListFromApiToVm(result));
      });
    }, []);
  }

  console.log(account);

  return (
    <AppLayout>
      <div className={classes.root}>
        <div className={classes.headerContainer}>
          <div>
            {" "}
            <h1>Saldos y Últimos movimientos</h1>
          </div>
          <div className={classes.balance}>
            <span className={classes.bold}>SALDO DISPONIBLE</span>
            <p className={`${classes.availableBalance} ${classes.bold}`}>
              {saldo.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              })}
            </p>
          </div>
        </div>
        <div className={`${classes.subheader} ${classes.bold}`}>
          <h2>Alias: {alias}</h2>
          <h2>IBAN: {iban}</h2>
        </div>
        <MovementListTableComponent
          movementList={movementList}
          defaultAccountId={id}
        />
      </div>
    </AppLayout>
  );
};

/*
  if (movementList) {
    return (
      <AppLayout>
        <div className={classes.root}>
          <div className={classes.headerContainer}>
            <div>
              {" "}
              <h1>Saldos y Últimos movimientos</h1>
              <h3>
                SALDO DISPONIBLE:{" "}
                {account.availableBalance.toLocaleString("es-ES", {
                  style: "currency",
                  currency: "EUR",
                  minimumFractionDigits: 0,
                })}
              </h3>
            </div>
          </div>
          <div>
            <h2>{account.iban}</h2>
            <h3>Alias: {account.alias}</h3>
          </div>
          <MovementListTableComponent
            movementList={movementList}
            defaultAccountId={id}
          />
        </div>
      </AppLayout>
    );
  } else {
    return (
      <AppLayout>
        <div className={classes.root}>
          <SubheaderComponent titleSubheader="Saldos y Últimos movimientos"></SubheaderComponent>
          <div>
            <p>SALDO DISPONIBLE:</p>
          </div>
          <div className={classes.headerContainer}>
            <div>
              {" "}
              <h1>Saldos y Últimos movimientos</h1>
            </div>
          </div>
          <div></div>
          <MovementListTableComponent
            movementList={movementList}
            defaultAccountId={id}
          />
        </div>
      </AppLayout>
    );
  }
*/

/*account[0].availableBalance.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              })*/

/*
className={`${
                account[0].availableBalance < 0 ? classes.negative : null
              }`}
              
              
              
              {account[0].availableBalance.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              })}*/
