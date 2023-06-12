import React from "react";
import styles from "./layout.module.css";
import Icon from "../CardsContainer";
import { AnimatePresence } from "framer-motion";

function Layout() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.logoWitch}>W.I.T.C.H.</h1>
      <Icon />
    </div>
  );
}

export default Layout;
