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
import { HeaderContainerComponent } from "@/layouts/app/components/headerContainer.component";
import { SubHeaderContainerComponent } from "@/layouts/app/components/subHeaderContainer.component";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [account, setAccount] = React.useState<AccountVm>();
  const [movementList, setMovementList] = React.useState<MovementVm[]>([]);

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

  return (
    <AppLayout>
      <div className={classes.root}>
        {id == ":id" ? (
          <HeaderContainerComponent textH2HeaderContainer="Debes seleccionar una cuenta en la pestaña MIS CUENTAS"></HeaderContainerComponent>
        ) : (
          <div className={classes.root}>
            <HeaderContainerComponent
              enableTitleHeaderContainer
              titleHeaderContainer="Saldos y Últimos movimientos"
              enableBalance
              balance={account?.availableBalance.toLocaleString("es-ES", {
                style: "currency",
                currency: "EUR",
                minimumFractionDigits: 0,
              })}
            ></HeaderContainerComponent>
            <SubHeaderContainerComponent
              enableSubHeaderContainer
              alias={account?.alias}
              IBAN={account?.iban}
            ></SubHeaderContainerComponent>
          </div>
        )}
        {movementList.length != 0 ? (
          <MovementListTableComponent
            movementList={movementList}
            defaultAccountId={id}
          />
        ) : id !== ":id" ? (
          <> LA CUENTA NO TIENE MOVIMIENTOS</>
        ) : (
          <></>
        )}
      </div>
    </AppLayout>
  );
};
