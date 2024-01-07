import React from "react";
import styles from "./Tvcontrols.module.css";
const TVcontrols = () => {
  return (
    <>
      <div className={styles.logo_text}>
        <img src={"/svgs/espn_img.svg"} alt="logo" />
      </div>
      <div className={styles.bottom_container}>
        <div className={styles.left_container}>
          <div className={styles.image}>
            <img
              src={"/images/Ellipse.png"}
              alt="home_img"
              className={styles.assets}
            />
            <img
              src={"/images/home.png"}
              alt="home"
              className={styles.rimage}
            />
          </div>
          <div className={styles.image}>
            <img
              src={"/images/Ellipse.png"}
              alt="tv_img"
              className={styles.assets}
            />
            <img src={"/images/Tv.png"} alt="home" className={styles.rimage1} />
          </div>
          <div className={styles.image}>
            <img src={"/svgs/arrow.svg"} alt="arrow_img" />
          </div>
          <div className={styles.image}>
            <img
              src={"/images/Ellipse.png"}
              alt="home_img"
              className={styles.assets}
            />
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
