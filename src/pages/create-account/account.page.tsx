import React from "react";
import { AppLayout } from "@/layouts";
import { Account } from "./create-account.vm";

import { CreateAccountFormComponent } from "./components";
import { HeaderContainerComponent } from "@/layouts/app/components/headerContainer.component";
import classes from "./create-account.page.module.css";

import { saveNewAccount } from "./api";
import { mapNewAccountFromVmToApi } from "./create-account.mapper";

export const AccountPage: React.FC = () => {
  const handleCreateAccount = (newAccountInfo: Account) => {
    const newAccount = mapNewAccountFromVmToApi(newAccountInfo);
    saveNewAccount(newAccount).then((result) => {
      if (result) {
        alert("Nueva cuenta creada con éxito");
      } else {
        alert("Error al crear la cuenta");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <HeaderContainerComponent
          enableTitleHeaderContainer
          titleHeaderContainer="Nueva Cuenta Bancaria"
        ></HeaderContainerComponent>
        <CreateAccountFormComponent onNewAccount={handleCreateAccount} />
      </div>
    </AppLayout>
  );
};
