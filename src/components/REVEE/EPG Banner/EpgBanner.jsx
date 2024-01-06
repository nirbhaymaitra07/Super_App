import React from "react";
import styles from "./Epgbanner.module.css";
const EpgBanner = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.asset}>
          <div className={styles.asset_img_block}>
            <img
              src={"/svgs/asset_img.svg"}
              alt="asset_img"
              className={styles.asset_img}
            />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.content1}>
            <div className={styles.content1_block_1}>Sunday NFL Countdown</div>
            <div className={styles.content1_block_2}>
              <div>
                12 min <span className={styles.light_text}>left</span>
              </div>
              <div>
                33k <span className={styles.light_text}>watching now</span>
              </div>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.time}>04:00</div>
            <div className={styles.line}>
              <img src={"/svgs/Line 6.svg"} alt="line_img" />
            </div>
          </div>
          <div className={styles.content1}>
            <div className={styles.content1_block_1}>Sports Nation</div>
            <div className={styles.content1_block_2}>
              <div className={styles.bottom_text}>Up next</div>
            </div>
          </div>
          <div className={styles.content2}>
            <div className={styles.time}>04:00</div>
            <div className={styles.line}>
              <img src={"/svgs/Line 6.svg"} alt="line_img" />
            </div>
          </div>
          <div className={styles.last_content}>
            <div className={styles.left_content}>
              <div>First Take</div>
              <div className={styles.bottom_text}>
                Later
              </div>
            </div>
            <div className={styles.espn_img_block}>
              <img
                src={"/svgs/espn_img.svg"}
                alt="espn_img"
                className={styles.espn_img}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default EpgBanner;
