import React from "react";
import styles from "./switchChannel.module.css";
import { useState } from "react";

const SwitchChannel = ({ select, setFunction }) => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.main_container_fox_news}>
          <img src="/svgs/FoxNews.svg" />
        </div>

        <div className={styles.main_container_cnbc_news}>
          <div className={styles.main_container_cnbc_news_img_1}>
            <img src="/svgs/cnbc.svg" />
          </div>
          <div
            className={styles.main_container_cnbc_news_img_1}
            onClick={() => {
              setFunction("main");
            }}
          >
            <img
              className={styles.main_container_cnbc_news_img_1_arrow}
              src="/svgs/Close.svg"
            />
            <p
              className={styles.main_container_anderson_cooper_img_2_arrow_text}
            >
              Close
            </p>
          </div>
        </div>

        <div className={styles.main_container_anderson_cooper}>
          <div className={styles.main_container_anderson_cooper_card}>
            <div className={styles.main_container_anderson_cooper_img}>
              <img
                className={styles.main_container_anderson_cooper_img_tag}
                src="/svgs/AndersonCooper.svg"
              />
            </div>
            <div className={styles.main_container_anderson_cooper_desc}>
              <div className={styles.main_container_anderson_cooper_desc_img}>
                <img
                  className={styles.main_container_anderson_cooper_desc_img_tag}
                  src="/svgs/CooperHeading.svg"
                />
              </div>
              <div className={styles.main_container_anderson_cooper_heading}>
                <p
                  className={
                    styles.main_container_anderson_cooper_heading_p_tag
                  }
                >
                  Anderson Cooper 360
                </p>
              </div>
            </div>
          </div>

          <div className={styles.main_container_anderson_cooper_img_2}>
            <img
              className={styles.main_container_anderson_cooper_img_2_arrow}
              src="/svgs/Previous.svg"
            />
            <p
              className={styles.main_container_anderson_cooper_img_2_arrow_text}
            >
              Previous
            </p>
          </div>
        </div>

        <div className={styles.main_container_anderson_cooper}>
          <div className={styles.main_container_anderson_cooper_card}>
            <div className={styles.main_container_anderson_cooper_img}>
              <img
                className={styles.main_container_anderson_cooper_img_tag}
                src="/svgs/SportNation.svg"
              />
            </div>
            <div className={styles.main_container_anderson_cooper_desc}>
              <div className={styles.main_container_anderson_cooper_desc_img}>
                <img
                  className={styles.main_container_anderson_cooper_desc_img_tag}
                  src="/svgs/SportsNationHeading.svg"
                />
              </div>
              <div className={styles.main_container_anderson_cooper_heading}>
                <p
                  className={
                    styles.main_container_anderson_cooper_heading_p_tag
                  }
                >
                  Sports Nation
                </p>
              </div>
            </div>
          </div>

          <div className={styles.main_container_sports_nation_img_2}>
            <p className={styles.main_container_sports_nation_img_2_arrow_text}>
              Next
            </p>
            <img
              className={styles.main_container_sports_nation_img_2_arrow}
              src="/svgs/Previous.svg"
            />
          </div>
        </div>

        <div className={styles.main_container_hbo}>
          <img className={styles.main_container_hbo_img} src="/svgs/hbo.svg" />
        </div>

        <div className={styles.main_container_hbo_max}>
          <img src="/svgs/hbo_max.svg" />
        </div>
      </div>
    </>
  );
};

export default SwitchChannel;
