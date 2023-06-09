import React from "react";
import styles from "./typesbar.module.css";
import { motion } from "framer-motion";

function Icon() {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.5 }}
        transition={{ type: "spring", stiffness: 900, damping: 10 }}
        className={styles.icon}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/fire.png"}
          alt="fire"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.6 }}
        transition={{ type: "spring", stiffness: 900, damping: 10 }}
        className={styles.icon}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/water.png"}
          alt="water"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.6 }}
        transition={{ type: "spring", stiffness: 900, damping: 10 }}
        className={styles.icon}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/earth.png"}
          alt="earth"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.6 }}
        transition={{ type: "spring", stiffness: 900, damping: 10 }}
        className={styles.icon}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/air.png"}
          alt="air"
        />
      </motion.div>
      <motion.div
        whileHover={{ scale: 1.6 }}
        transition={{ type: "spring", stiffness: 900, damping: 10 }}
        className={styles.icon}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/quintessence.png"}
          alt="quintessence"
        />
      </motion.div>
    </>
  );
}

export default Icon;
