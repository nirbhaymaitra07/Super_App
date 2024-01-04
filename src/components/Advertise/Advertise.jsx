import React from 'react'
import style from "./advertise.module.css"
import bruno from "/svgs/bruno.svg"
import hearhere from "/svgs/hearhere.svg"
import live from "/svgs/live.svg"
const Advertise = ({ad}) => {
  return (
    <div className={style.container}>
      <img className={style.background} src={ad?.banner} alt="" />
      <div className={style.headline}>
        <img src={ad?.logo} alt="logo" />
        <h5>{ad?.title}</h5>
       {ad?.live && <img className={style.live}src={live} alt="" />}
      </div>
      <div className={style.min}>
        <span>20 min</span>
      </div>
    </div>
  )
}

export default Advertise
