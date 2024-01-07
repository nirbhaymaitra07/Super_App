import React from 'react'
import styles from './mainContainer.module.css'
import MainScreen from './screens/MainScreen'
import Dashboard from './Dashboard/Dashboard'

function MainContainer() {
  return (
    <div className={`${styles.mainContainer}`}>
        {/* <MainScreen/> */}
        <Dashboard/>
    </div>
  )
}

export default MainContainer
