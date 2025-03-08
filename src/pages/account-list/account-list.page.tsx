import React from "react";

import { AppLayout } from "@/layouts";
import { AccountVm } from "./account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components/account-list-table.component";
import { getAccountList } from "./api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { HeaderContainerComponent } from "@/layouts/app/components/headerContainer.component";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  const navigate = useNavigate();

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  const handleClick = () => {
    navigate(appRoutes.createAccount);
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <HeaderContainerComponent
          enableTitleHeaderContainer
          titleHeaderContainer="Mis cuentas"
          enableButton
          onClick={handleClick}
        ></HeaderContainerComponent>

        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};

// <Link to={generatePath(appRoutes.createAccount)}></Link>
