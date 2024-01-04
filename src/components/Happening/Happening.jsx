import { useEffect, useRef, useState } from "react";
import mias_info from "../../data/happeningInfo";
import style from "./happening.module.css";
import MapComponent from "./MapComponent";
import { wait } from "../../scripts/helpers";

function Happening() {
  const [miaIndex, setMiaIndex] = useState(0);
  const [slideShow, setSlideShow] = useState(true);
  const [showGifLayer, setShowGifLayer] = useState(true);
  // const [showMapLayer, setShowMapLayer] = useState(false);
  const main_content_ref = useRef(null);

  async function runSlideShow() {
    while (slideShow) {
      main_content_ref.current.classList.remove("fade-in-image");
      // This defines the duration for which the gif should stay
      await wait(4000);
      main_content_ref.current.classList.add("fade-in-image");
      setShowGifLayer((prev) => !prev);
      main_content_ref.current.classList.remove("fade-in-image");
      // This defines the duration for which the map should stay
      await wait(4000);
      main_content_ref.current.classList.add("fade-in-image");
      setShowGifLayer((prev) => !prev);
      main_content_ref.current.classList.remove("fade-in-image");
      setMiaIndex((prevMiaIndex) => {
        if (prevMiaIndex === mias_info.length - 1) {
          main_content_ref.current.classList.add("fade-in-image");
          return 0;
        } else {
          main_content_ref.current.classList.add("fade-in-image");
          return prevMiaIndex + 1;
        }
      });
    }
  }

  useEffect(() => {
    runSlideShow();
  }, []);

  return (
    <div className={style.happening_container}>
      <div ref={main_content_ref} className={style.main_content}>
        {showGifLayer && (
          <div className={style.gif_layer}>
            <img className={style.gif} src={mias_info[miaIndex].gif} />
          </div>
        )}
        {!showGifLayer && (
          <div className={style.map_layer}>
            <MapComponent />
          </div>
        )}
      </div>
      <div className={style.bottom_bar}>
        <div className={style.mia_logo}>
          <img src={mias_info[miaIndex].logo} />
        </div>
        <div className={style.mia_message}>
          <div className={style.count}>
            {mias_info[miaIndex].mia_message.count}
          </div>
          <div className={style.message}>
            {mias_info[miaIndex].mia_message.message}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Happening;
