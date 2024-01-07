
import React from 'react'
import styles from './mainContainer.module.css'
import MainScreen from './screens/MainScreen'
import Dashboard from './Dashboard/Dashboard'
import styles from './mainContainer.module.css';
import BottomAd from "./advertisement/BottomAd";
import EpgBanner from './EPG Banner/EpgBanner';
import Fulladv from './fulladvertisement/Fulladv';
import PricingAd from './pricingadvertisement/PricingAd';
<<<<<<< HEAD
import TVcontrols from './Tvcontrols/TVcontrols';
=======
import React from "react";
import styles from "./mainContainer.module.css";
import TopRightAd from "./advertisement/TopRightAd";
import CastingInfo from "./castinginfo/CastingInfo";
import SaleInfo from "./saleinfo/SaleInfo";
import SwitchChannel from "./switchChannel/switchChannel";

>>>>>>> 2cb69970362fea3f21661b7bf3ac3c2d598aae33

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


        {/* <MainScreen/> */}
        <Dashboard/>


            {/* <BottomAd /> */}
            {/* <EpgBanner/> */}
            {/* <Fulladv /> */}
            {/* <PricingAd /> */}
            <TVcontrols />
            

      <TopRightAd {...topRightAdData} />
      <CastingInfo />

      {/* <SaleInfo {...saleInfoData} /> */}

    </div>
  );
}

export default MainContainer;
