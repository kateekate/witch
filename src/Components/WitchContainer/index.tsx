import React from "react";
import styles from "./styles.module.css";

function WitchContainer() {
  return (
    <div className={styles.witchContainer}>
      <div className={styles.witchCard}>
        <div>
          <span></span>
        </div>
      </div>
      <div className={styles.witchCard}></div>
    </div>
  );
}

export default WitchContainer;
