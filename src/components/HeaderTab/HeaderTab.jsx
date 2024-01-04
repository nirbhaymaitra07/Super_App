import React from 'react'
import style from "./headertab.module.css"
import bin from "/images/bin.svg"
const HeaderTab = ({tab}) => {
  return (
    <div className={style.container}>
      <img className={style.tabIcon} src={tab?.tabImg} alt="tabImg" />
      <span className={style.tabText}>{tab?.tabText}</span>
    </div>
  )
}

export default HeaderTab
