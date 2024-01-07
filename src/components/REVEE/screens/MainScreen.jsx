import React, { useState } from 'react'
import style from './mainScreen.module.css'
import BottomAd from '../advertisement/BottomAd'

function MainScreen() {
  let [enter,setEnter]=useState(false);
  return (
    <div className={`${style.mainContainer}`} on>
          <BottomAd />
    </div>
  )
}

export default MainScreen
