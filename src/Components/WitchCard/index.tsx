import React from "react";
import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { CardData } from "../CardData";
import { WitchCardData } from "../../Interfaces/WitchCardData";

function WitchCard({ data }: { data: WitchCardData }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.75 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        className={styles.witchCard}
      >
        <CardData data={data} />
      </motion.div>
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
