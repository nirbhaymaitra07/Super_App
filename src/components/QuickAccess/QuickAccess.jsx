import React, { useState } from "react";
import style from "./quickAccess.module.css";

const QuickAccess = ({ app }) => {
  let [hover, setHover] = useState(false);
  return (
    <div
      className={style.container}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {!hover ? (
        <img src={app.img} alt="" />
      ) : (
        <div className={style.sub_container}>
          <div className={style.img_container}>
            <img className={style.img} src={app?.src} alt="" />
            {app?.text && <span className={style.percentage}>{app?.text}</span>}
          </div>
          <p
            className={
              app.title === "05:48 AM" || app.title === "11,434 KWH"
                ? style.sub_container_center_para
                : style.sub_container_para
            }
          >
            {app?.title}
          </p>
          {app?.subtitle && (
            <p
              style={app?.subtitle === "Sunshine" ? { marginLeft: "15%" } : {}}
              className={style.subtitle}
            >
              {app?.subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default QuickAccess;
