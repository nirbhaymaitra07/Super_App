import React from "react";
import style from "./quickAccess.module.css";

const QuickAccess = ({app}) => {
  return (
    <div className={style.container}>
      <img src={app} alt="" />
    </div>
  );
};

export default QuickAccess;
