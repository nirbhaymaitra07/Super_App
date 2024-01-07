import React, { useCallback, useEffect, useState } from 'react'
import style from './mainScreen.module.css'
import EpgBanner from '../EPG Banner/EpgBanner';
import TVcontrols from '../Tvcontrols/TVcontrols';
import SwitchChannel from '../switchChannel/SwitchChannel';
import CastingInfo from '../castinginfo/CastingInfo';
import TopRightAd from '../advertisement/TopRightAd';
import SaleInfo from '../saleinfo/SaleInfo';
import PricingAd from '../pricingadvertisement/PricingAd';
import BottomAd from '../advertisement/BottomAd';

function MainScreen() {

  const [addNumber,setAddNumber,]= useState(0)

  useEffect(()=>{

    const interval = setInterval(()=>{
      setAddNumber((prevNumber) => (prevNumber + 1) % 3); // Ensure it cycles between 0, 1, and 2
    },8000)
return ()=>clearInterval(interval)
  },[])

  const [enter,setEnter]=useState(false);
  const [switchChannel,setSwitchChannel]=useState("main");
  const [cast,setCast]=useState(false);
const update = useCallback (() => {
  setSwitchChannel(!switchChannel)
})
  return (
    <div className={`${style.mainContainer} main-screen`} onMouseEnter={()=>{
      setEnter(true);
    }} > 
        { !enter?<EpgBanner/>:(switchChannel==="main"?<TVcontrols select={switchChannel} setFunction={(value)=>{setSwitchChannel(value)}}/>:(switchChannel==="channel"?<SwitchChannel select={switchChannel} setFunction={(value)=>{setSwitchChannel(value)}}/>:(switchChannel==="cast"?<CastingInfo setFunction={(value)=>{setSwitchChannel(value)}} />:"")))
        }

        {addNumber=== 0 &&
         <TopRightAd/>
        }
          {addNumber=== 1 &&(<>
            <BottomAd/>
            <SaleInfo/>
          </> )

         
        }
          {addNumber=== 2 &&
         <PricingAd/>
        }
       
    </div>
  )
}

export default MainScreen
