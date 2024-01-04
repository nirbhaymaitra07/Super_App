import React from "react";
import style from "./structure.module.css";
import video from "/assests/video.mp4";
import QuickAccess from "../QuickAccess/QuickAccess";
import aegis from "../../../public/images/aegis.svg";
import ampli from "../../../public/images/ampli.svg";
import clink from "../../../public/images/clink.svg";
import dapp from "../../../public/images/image96.svg";
import iZak from "../../../public/images/iZak.svg";
import Logo from "../../../public/images/Logo.svg";
import Museo from "../../../public/images/Museo.svg";
import revee from "../../../public/images/revee.svg";
const Structure = () => {
  const AppIcons = [aegis, ampli, clink, dapp, iZak, Logo, Museo, revee];
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
          <div className={style.apps_heading}>Quick Access</div>
        </div>
        <div className={style.bottom}>
          <div className={style.map_component}></div>
          <div className={style.advertise_component}></div>
          <div className={style.apps}>
          {AppIcons.map((item)=><QuickAccess key={item} app={item} />)  }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
