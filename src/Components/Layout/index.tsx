import React from "react";
import styles from "./layout.module.css";
import TypesBar from "../TypesBar";
import WitchContainer from "../WitchContainer";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logoWitch}>W.I.T.C.H.</h1>
      <TypesBar />
      <WitchContainer />
    </div>
  );
}

export default Layout;
