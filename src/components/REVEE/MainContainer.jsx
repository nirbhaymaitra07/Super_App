import React from "react";
import styles from "./mainContainer.module.css";
import TopRightAd from "./advertisement/TopRightAd";
import CastingInfo from "./castinginfo/CastingInfo";
import SaleInfo from "./saleinfo/SaleInfo";
import SwitchChannel from "./switchChannel/switchChannel";

function MainContainer() {
  const topRightAdData = {
    imageSrc: "/svgs/Hunger.svg",
    paraContent: "Who won Super Bowl One?",
  };

 
    

  const saleInfoData = {
    saleImageSrc: "/svgs/Sale.svg",
    buttonText: "ORDER NOW",
  };

  return (
    <div className={`${styles.mainContainer}`}>
      <SwitchChannel />
      {/* <TopRightAd {...topRightAdData} /> */}
      {/* <CastingInfo /> */}
      {/* <SaleInfo {...saleInfoData} /> */}
    </div>
  );
}

export default MainContainer;
