import React, { useState, useEffect } from "react";
import styles from "./fullad.module.css";

const Fulladv = () => {
  const companyObject = [
    {
      logo: "/svgs/logo_img.svg",
      heading: "ZARA store near you",
      content:
        "Select the dress you want to buy and get directed to the website for purchase.",
      image: "/svgs/ad_img.svg",
      backgroundImg: "/svgs/bg_img",
    },
    {
      logo: "/svgs/logo_2.svg",
      heading: "NIKE store near you",
      content: "Visit nearby store today and buy Air Jordan 4",
      image: "/svgs/ad_img2.svg",
      backgroundImg: "/svgs/nike_ad_img.svg",
    },
    {
      logo: "/svgs/logo_img.svg",
      heading: "ZARA store near you",
      content:
        "Select the dress you want to buy and get directed to the website for purchase.",
      image: "/svgs/ad_img.svg",
      backgroundImg: "/svgs/bg_img",
    },
    {
      logo: "/svgs/logo_2.svg",
      heading: "NIKE store near you",
      content: "Visit nearby store today and buy Air Jordan 4",
      image: "/svgs/ad_img2.svg",
      backgroundImg: "/svgs/nike_ad_img.svg",
    },
  ];

  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % companyObject.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  const currentAd = companyObject[currentAdIndex];
  return (
    <>
      <div
        className={styles.body}
        style={{ backgroundImage: `url(${currentAd.backgroundImg})` }}
      >
        <div className={styles.mainFooter}>
          <div className={styles.logo}>
            <img src={currentAd.logo} alt="logo" className={styles.logo_img} />
          </div>
          <div className={styles.add_content}>
            <div className={styles.content}>
              <div className={styles.content1}>{currentAd.heading}</div>
              <div className={styles.content2}>{currentAd.content}</div>
            </div>
            <div className={styles.ad_img}>
              <img src={currentAd.image} alt="ad_img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Fulladv;
