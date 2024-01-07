import  DashboardChannelInfoContainer  from './DashboardChannelInfoContainer';
import { DashboardInformation } from './DashboardInformation';
import React, { useEffect } from 'react'
import style from './dashboard.module.css'

function Dashboard() {
        
  return (
    <div className={`${style.mainContainer}`}>
           <DashboardInformation />
           <DashboardChannelInfoContainer   />
    </div>
  )
}

export default Dashboard
