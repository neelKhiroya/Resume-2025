import { useState } from 'react'
import './App.css'
import LavaLampBackground from './LavaLampBackground'
import FrontDisplay from './FrontDisplay'
import DesktopNavBar from './DesktopNavBar'
import { isMobile } from 'react-device-detect'
import MobileNav from './MobileNav'

function App() {

  return (
    <>
    <LavaLampBackground />
    {isMobile ? <MobileNav/> : <DesktopNavBar />}
    <FrontDisplay showMobile={isMobile} />
    </>
  )
}

export default App