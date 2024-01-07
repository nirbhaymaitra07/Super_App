import React from "react";
import style from "./header.module.css";
import logo from "/images/Quick-Access/Revvee2.svg";
import HeaderTab from "../HeaderTab/HeaderTab";
import cloud from "/images/Quick-Access/cloud.svg";
import mike from "/images/Quick-Access/mike.svg";
import people from "/images/Quick-Access/people.svg";
import bin from "/images/Quick-Access/bin.svg";
import roadside from "/images/Quick-Access/roadside.svg";
import profile from "/images/Quick-Access/Profile.svg";
import { runDemo } from "../../scripts/demo";
const Header = () => {
  let tabsData = [
    {
      tabImg: cloud,
      tabText: "37° F",
    },
    {
      tabImg: roadside,
      tabText: "0.5 mi. away",
    },
    {
      tabImg: bin,
      tabText: "2 mi. away",
    },
    {
      tabImg: mike,
      tabText: "2 mi. away",
    },
    {
      tabImg: people,
      tabText: "$10000",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.left}>
        <img src={logo} className={style.logo} alt="" onClick={()=>runDemo()} />
      </div>
      <div className={style.right}>
        <div className={style.tabs_container}>
          {tabsData.map((item) => (
            <HeaderTab tab={item} />
          ))}
        </div>
        <div className={style.date_time_container}>
          <div className={style.time}>
            <h3>26 December | 11:00</h3>
            <h6>Lower Manhattan, NYC</h6>
          </div>
          <div className={style.profile}>
            <img src={profile} alt="profile" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
