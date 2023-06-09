import React from "react";
import styles from "./styles.module.css";
import WitchCard from "../WitchCard";

function WitchContainer() {
  return (
    <div className={styles.witchContainer}>
      <WitchCard />
    </div>
  );
}

export default WitchContainer;
