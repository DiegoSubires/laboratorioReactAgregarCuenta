import React from "react";
import classes from "./subHeaderContainer.component.module.css";

interface Props {
  enableSubHeaderContainer?: boolean;
  alias?: string;
  IBAN?: string;
}

export const SubHeaderContainerComponent: React.FC<Props> = (props) => {
  const { enableSubHeaderContainer, alias, IBAN } = props;

  return enableSubHeaderContainer ? (
    <div className={`${classes.subheader} ${classes.bold}`}>
      <h2>Alias: {alias}</h2>
      <h2>IBAN: {IBAN}</h2>
    </div>
  ) : null;
};
