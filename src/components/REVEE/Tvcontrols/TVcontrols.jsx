import React, { useState } from "react";
import styles from "./Tvcontrols.module.css";
import { useNavigate } from "react-router";
const TVcontrols = ({
  select,
  setFunction
}) => {
  const navigate=useNavigate();
  

  return (
    <>
      <div className={`${styles.logo_text }  `}>
        <img src={"/svgs/espn_img.svg"} alt="logo" />
      </div>
      <div className={`${styles.bottom_container} tv-controls`}>
        <div className={styles.left_container}>
          <div className={styles.image} onClick={()=>{navigate("/") }}>
            <img
              src={"/images/home.png"}
              alt="home"
            />
          </div>
          <div className={styles.image} onClick={()=>{navigate("/revee-mainContainer")}}>
           
            <img src={"/images/Tv.png"} alt="home" className={styles.rimage1} />
          </div>
          <div className={styles.image} onClick={()=>{
              setFunction("channel")
          }}>
            <img src={"/svgs/arrow.svg"} alt="arrow_img"  className={`${styles.nextarrow}`}/>
          </div>
          <div className={styles.image} onClick={()=>{
              setFunction("cast")
          }}>
            
            <img
              src={"/images/user.png"}
              alt="user_img"
              className={styles.rimage2}
            />
          </div>
        </div>
        <div className={styles.right_container}>
          <div className={styles.right_logo}>
            <img src={"/svgs/Nexuswhite.svg"} alt="nexus_logo" />
          </div>
          <div className={styles.right_logo}>
          <img src={"/svgs/Nexuswhite.svg"} alt="nexus_logo" />
            <img src={"/svgs/Revvee.svg"} alt="revee_logo" />
          </div>
        </div>
      </div>
    </>
  );
};
export default TVcontrols;
