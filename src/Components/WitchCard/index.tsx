import React from "react";
import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";

function WitchCard() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className={styles.witchCard}
      ></motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className={styles.witchCard}
      ></motion.div>
    </AnimatePresence>
  );
}

export default WitchCard;
