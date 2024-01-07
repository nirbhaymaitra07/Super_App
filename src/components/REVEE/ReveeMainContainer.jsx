import React from 'react'
import styles from './ReveeMainContainer.module.css'
import MainScreen from './screens/MainScreen'
import Dashboard from './Dashboard/Dashboard'
import BottomAd from "./advertisement/BottomAd";
import EpgBanner from './EPG Banner/EpgBanner';
import Fulladv from './fulladvertisement/Fulladv';
import PricingAd from './pricingadvertisement/PricingAd';
import TopRightAd from "./advertisement/TopRightAd";
import CastingInfo from "./castinginfo/CastingInfo";
import SaleInfo from "./saleinfo/SaleInfo";

function ReveeMainContainer() {
    const topRightAdData = {
        imageSrc: "/svgs/Hunger.svg",
        paraContent: "Who won Super Bowl One?",
      };
    
    
    
      const saleInfoData = {
        saleImageSrc: "/svgs/Sale.svg",
        buttonText: "ORDER NOW",
      };

  return  (
    <div className={`${styles.mainContainer}`}>

            {/* <MainScreen/> */}
            <Dashboard/>

            {/* <EpgBanner/> */}
            {/* <Fulladv /> */}
            {/* <PricingAd /> */}
            

      {/* <TopRightAd {...topRightAdData} /> */}
      {/* <CastingInfo /> */}
      {/* <SaleInfo {...saleInfoData} /> */}

    </div>
  );
}

export default ReveeMainContainer
