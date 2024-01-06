import React from 'react'
import styles from './mainContainer.module.css';
import BottomAd from "./advertisement/BottomAd";
import EpgBanner from './EPG Banner/EpgBanner';
import Fulladv from './fulladvertisement/Fulladv';
import PricingAd from './pricingadvertisement/PricingAd';

function MainContainer() {
  return (
    <div className={`${styles.mainContainer}`}>
            {/* <BottomAd /> */}
            <EpgBanner/>
            {/* <Fulladv /> */}
            {/* <PricingAd /> */}
            
    </div>
  )
}

export default MainContainer
