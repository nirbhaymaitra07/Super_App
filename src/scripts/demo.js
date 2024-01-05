import {
    wait,
    simulateClick,
    simulateHover,
    simulateVerticalScroll,
    simulateHorizontalScroll,
    addClass,
    removeClass,
    simulateMouseIn,
  } from "./helpers";


  let headerTab="._tabIcon_1t4jx_33"
  let advertise="._container_jer6r_1"
  let app="._container_17mkm_1"
 export async function runDemo(){
    await wait(1000)
    simulateHover(document.querySelectorAll(headerTab)[0],"hoverclass")
    await wait(1000)
    simulateHover(document.querySelectorAll(headerTab)[2],"hoverclass")
    await wait(1000)
    simulateHover(document.querySelectorAll(advertise)[0],"hoverclass")
    await wait(1000)
    simulateHover(document.querySelectorAll(advertise)[2],"hoverclass")
    await wait(1000)
    simulateHover(document.querySelectorAll(app)[0],"hoverclass")
    simulateMouseIn(document.querySelectorAll(app)[0])
    await wait(1000)
    simulateHover(document.querySelectorAll(app)[3],"hoverclass")
  }