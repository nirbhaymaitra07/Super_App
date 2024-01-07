
import React from 'react'
import styles from './mainContainer.module.css'
import MainScreen from './screens/MainScreen'
import Dashboard from './Dashboard/Dashboard'
import styles from './mainContainer.module.css';
import BottomAd from "./advertisement/BottomAd";
import EpgBanner from './EPG Banner/EpgBanner';
import Fulladv from './fulladvertisement/Fulladv';
import PricingAd from './pricingadvertisement/PricingAd';
import React from "react";
import styles from "./mainContainer.module.css";
import TopRightAd from "./advertisement/TopRightAd";
import CastingInfo from "./castinginfo/CastingInfo";
import SaleInfo from "./saleinfo/SaleInfo";


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

        {/* <MainScreen/> */}
        <Dashboard/>


            {/* <BottomAd /> */}
            <EpgBanner/>
            {/* <Fulladv /> */}
            {/* <PricingAd /> */}
            

      <TopRightAd {...topRightAdData} />
      <CastingInfo />
      {/* <SaleInfo {...saleInfoData} /> */}

    </div>
  );
}

export default MainContainer;
