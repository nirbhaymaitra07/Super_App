import React from "react";
import styles from "./pricingadv.module.css";

const PricingAd = () => {
  return (
    <>
      <div className={styles.main_block}>
        <div className={styles.ad_container}>
          <div className={styles.ad_content}>
            <div className={styles.order_details}>
              <img
                src={"/svgs/Vector 1.svg"}
                alt="linear_gradient"
                style={{ position: "relative" }}
              />
              <div className={styles.img_block}>
                <img
                  src={"/svgs/item_img.svg"}
                  alt="berger"
                  className={styles.itemimg}
                />
              </div>
            </div>

            <div className={styles.ad_text}>
              Grab a Hot & Spicy Whopper now!
            </div>

            <div className={styles.button_block}>
              <button>ORDER NOW</button>
            </div>
            <div className={styles.call_details}>
              <div>
                <img src={"/svgs/phone_img.svg"} alt="" />
              </div>
              <div>Call us on 0812-1222-4322</div>
            </div>
            <div className={styles.website}>www.burgerking.com</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PricingAd;
