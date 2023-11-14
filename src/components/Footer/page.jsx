import React from "react";
import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        <span className={styles.mainTitle}>Blog</span>
        <span className={styles.title}>spots</span>
      </div>
      <div className={styles.items}>
        <span>Copyright 2023. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Footer;
