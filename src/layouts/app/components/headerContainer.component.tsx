import React from "react";
import classes from "./headerContainer.component.module.css";

interface Props {
  enableTitleHeaderContainer?: boolean;
  titleHeaderContainer?: string;
  enableButton?: boolean;
  onClick?: () => void;
  textButton?: string;
  textH2HeaderContainer?: string;
  enableBalance?: boolean;
  balance?: string;
}

export const HeaderContainerComponent: React.FC<Props> = (props) => {
  const {
    enableTitleHeaderContainer,
    titleHeaderContainer,
    textH2HeaderContainer,
    enableButton,
    onClick,
    enableBalance,
    balance,
  } = props;

  return enableTitleHeaderContainer ? (
    <div className={classes.headerContainer}>
      {" "}
      <h1>{titleHeaderContainer}</h1>
      {enableButton ? (
        <button onClick={onClick}>AGREGAR NUEVA CUENTA</button>
      ) : null}
      {enableBalance ? (
        <div className={classes.balance}>
          <span className={classes.bold}>SALDO DISPONIBLE</span>
          <p className={`${classes.availableBalance} ${classes.bold}`}>
            {balance}
          </p>
        </div>
      ) : null}
    </div>
  ) : (
    <div className={classes.headerContainer}>
      {" "}
      <h2>{textH2HeaderContainer}</h2>
    </div>
  );
};
