import React from "react";
import styles from "./typesbar.module.css";
import { motion } from "framer-motion";

function Icon() {
  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 10px #ff0000",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className={styles.icon}
        key="fire"
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/fire.png"}
          alt="fire"
        />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 10px #00FFFF",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className={styles.icon}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/water.png"}
          alt="water"
        />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 10px #66FF00",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className={styles.icon}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/earth.png"}
          alt="earth"
        />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 10px #B9D9EB",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
        className={styles.icon}
      >
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/air.png"}
          alt="air"
        />
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.05,
          boxShadow: "0 0 10px #FFFFFF",
          transition: { duration: 0.3, ease: "easeInOut" },
        }}
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
