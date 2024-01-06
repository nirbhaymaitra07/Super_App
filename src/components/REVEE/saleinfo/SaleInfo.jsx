import React from 'react'
import styles from './saleInfo.module.css';

const SaleInfo = ({ saleImageSrc, buttonText }) => {
  return (
    <div className={styles.main_container}>
      <img className={styles.main_container_img} src={saleImageSrc} alt="Sale" />
      <button className={styles.main_container_btn}>{buttonText}</button>
    </div>
  )
}

export default SaleInfo;
