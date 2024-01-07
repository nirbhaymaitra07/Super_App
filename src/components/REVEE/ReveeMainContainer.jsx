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
import SwitchChannel from './switchChannel/SwitchChannel';

function ReveeMainContainer() {
    

  return  (
    <div className={`${styles.mainContainer}`}>
            <Dashboard/>
           
    </div>
  );
}

export default ReveeMainContainer
