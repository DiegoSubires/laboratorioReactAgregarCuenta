import React from "react";
import classes from "./tableHead.component.module.css";

interface Props {
  textSpanArray: string[];
}

export const TableHead: React.FC<Props> = (props) => {
  const { textSpanArray } = props;

  return (
    <div className={classes.headerTable}>
      <span className={classes.headerCell}>{textSpanArray[0]}</span>
      <span className={classes.headerCell}>{textSpanArray[1]}</span>
      <span className={classes.headerCell}>{textSpanArray[2]}</span>
      <span className={classes.headerCell}>{textSpanArray[3]}</span>
      <span className={classes.headerCell}>{textSpanArray[4]}</span>
    </div>
  );
};
