import React, { useState } from "react";
import styles from "./topRightAd.module.css";

import {motion} from "framer-motion"

const TopRightAd = ({ imageSrc, paraContent }) => {
  const [fillBar, setFillBar] = useState(false);
  const [percentage, setPercentage] = useState(65);

  const handleClick = () => {
    setFillBar((prevFillBar) => !prevFillBar);
  };

  const blueFillWidth = fillBar ? `${percentage}%` : "0%";
  const buttonColor = fillBar
    ? "rgba(255, 255, 255, 0.10)"
    : "rgb(50, 39, 131, 0.9)";
  const buttonColor2 = fillBar
    ? "rgba(255, 255, 255, 0.10)"
    : "rgba(255, 255, 255, 0.10)";

  return (
    <motion.div
    initial={{ x: '100vw' }}
    animate={{ x: 0 }}
    transition={{ duration: 1.5 }} // Set the duration to a slow value (e.g., 1.5 seconds)
     className={styles.main_container}>
      <div className={styles.vertical_red_bar}></div>
      <div className={styles.img_container}>
        <img src="/svgs/Hunger.svg" className={styles.img_hunger} alt="Hunger" />
      </div>

      <div className={styles.countdown_img_container}>
        <img
          src="svgs/Countdown.svg"
          className={styles.img_countdown}
          alt="Countdown"
        />
      </div>

      <div className={styles.super_bowl_container}>
        <div className={styles.super_bowl_para}>
          <p className={styles.super_bowl_paragraph}>{paraContent}</p>
        </div>

        <div className={styles.super_bowl_btn}>
          <div className={styles.super_bowl_btn_one_div}>
            {fillBar && (
              <div
                className={styles.percentage_btn_one}
                style={{ width: blueFillWidth }}
              ></div>
            )}
            <button
              className={styles.super_bowl_btn_one}
              onClick={handleClick}
              style={{ backgroundColor: buttonColor }}
            >
              Green Bay Packers {fillBar && `(${percentage}%)`}
            </button>
          </div>

          <div className={styles.super_bowl_btn_two_div}>
            {fillBar && (
              <div
                className={styles.percentage_btn_one}
                style={{ width: blueFillWidth }}
              ></div>
            )}
            <button
              className={styles.super_bowl_btn_two}
              onClick={handleClick}
              style={{ backgroundColor: buttonColor2 }}
            >
              Kansas City Chiefs {fillBar && `(${percentage}%)`}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TopRightAd;
