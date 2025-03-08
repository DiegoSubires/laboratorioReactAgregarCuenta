import React from "react";
import { useParams } from "react-router-dom";
import { AppLayout } from "@/layouts";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components";
import { getAccountList, saveTransfer } from "./api";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mapper";
import { HeaderContainerComponent } from "@/layouts/app/components/headerContainer.component";
import classes from "./transfer.page.module.css";

export const TransferPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) => {
      const accountListVm = result.map(mapAccountFromApiToVm);
      setAccountList(accountListVm);
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    const transfer = mapTransferFromVmToApi(transferInfo);
    saveTransfer(transfer).then((result) => {
      if (result) {
        alert("Transferencia realizada con éxito");
      } else {
        alert("Error al realizar la transferencia");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <HeaderContainerComponent
          enableTitleHeaderContainer
          titleHeaderContainer="Transferencias Nacionales"
        ></HeaderContainerComponent>
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId={id}
        />
      </div>
    </AppLayout>
  );
};
