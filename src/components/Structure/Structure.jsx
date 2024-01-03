import React from "react";
import style from "./structure.module.css";
import video from "../../../public/assests/video.mp4";

const Structure = () => {
  return (
    <div className={style.app_container}>
      <div className={style.video_container}>
        <video className={style.video} src={video} autoPlay loop muted></video>
      </div>
      <div className={style.main_container}>
        <div className={style.top}></div>
        <div className={style.headings}>
            <div className={style.map_heading}></div>
            <div className={style.advertise_heading}></div>
            <div className={style.apps_heading}></div>
        </div>
        <div className={style.bottom}>
            <div className={style.map_component}></div>
            <div className={style.advertise_component}></div>
            <div className={style.apps}></div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
