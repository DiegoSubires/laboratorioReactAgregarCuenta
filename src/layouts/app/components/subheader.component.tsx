import React from "react";
import classes from "./subheader.component.module.css";

interface Props {
  titleSubheader: string;
}

export const SubheaderComponent: React.FC<Props> = (props) => {
  const { titleSubheader } = props;

  return (
    <div>
      <div className={classes.headerContainer}>
        <h1>{titleSubheader}</h1>{" "}
      </div>
      <div className={classes.subheaderContainer}>
        <p> </p>
        <p>{""}</p>
      </div>
    </div>
  );
};
