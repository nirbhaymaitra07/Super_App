import React from "react";
import style from "./structure.module.css";
import video from "/assests/video.mp4";
import QuickAccess from "../QuickAccess/QuickAccess";
import Header from "../Header/Header";
import Happening from "../Happening/Happening";
import Advertise from "../Advertise/Advertise";
import { AppIcons } from "../../data/Appsinfo";
import { Advertisements } from "../../data/advertisements";
const Structure = () => {
  return (
    <div className={style.app_container}>
      <div className={style.video_container}>
        <video className={style.video} src={video} autoPlay loop muted></video>
      </div>
      <div className={style.main_container}>
        <div className={style.top}>
          <Header />
        </div>
        <div className={style.headings}>
          <div className={style.map_heading}>
            <h5 className={style.title}>Happening around you!</h5>
          </div>
          <div className={style.advertise_heading}>
            <h5 className={style.title}>For you</h5>
          </div>
          <div className={style.apps_heading}>Quick Access</div>
        </div>
        <div className={style.bottom}>
          <div className={style.map_component}>
            <Happening />
          </div>

          <div className={style.advertise_component}>
         { Advertisements.map((item)=> <Advertise key={item.logo} ad={item}/>) }
          </div>
          <div className={style.apps}>
            {AppIcons.map((item) => (
              <QuickAccess key={item} app={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Structure;
