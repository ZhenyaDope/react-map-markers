import React from "react";

// Assets
import styles from "./Preloader.module.css";

const Preloader = () => {
  return (
    <div className={styles.Preloader}>
      <div className={styles.lds_roller}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
