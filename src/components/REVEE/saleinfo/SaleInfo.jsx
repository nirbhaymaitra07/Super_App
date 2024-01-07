import React from 'react';
import styles from './saleInfo.module.css';
import { motion } from 'framer-motion';

const SaleInfo = () => {
  return (
    <motion.div
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ duration: 1.5 }} // Set the duration to a slow value (e.g., 1.5 seconds)
      className={styles.main_container}
    >
      <img className={styles.main_container_img} src="/svgs/Sale.svg" alt="Sale" />
      <button className={styles.main_container_btn}>ORDER NOW</button>
    </motion.div>
  );
};

export default SaleInfo;
