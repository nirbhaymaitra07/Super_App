import React from 'react'
import styles from './mainContainer.module.css'
import { Route, Routes } from 'react-router'
import Structure from './components/Structure/Structure'
import MainScreen from './components/REVEE/screens/MainScreen'
import ReveeMainContainer from './components/REVEE/ReveeMainContainer'

function MainContainer() {
  return (
    <div className={`${styles.mainContainer}`}>
           <Routes>
           <Route path="/" element={<Structure/>} />
           <Route path='/revee-mainContainer' element={<ReveeMainContainer/>} />
           <Route path='/main-screen' element={<MainScreen/>} />
           </Routes>
    </div>
  )
}

export default MainContainer
