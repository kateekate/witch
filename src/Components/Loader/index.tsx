import React from "react";
import styles from './loader.module.css'
import { motion } from "framer-motion"

export function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width="150"
        height="150"
        animate={{
          x: [0, 20, 0],
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <image href={process.env.PUBLIC_URL + "/Assets/Loader/loader.png"} />
      </motion.svg>
    </div>
  );
}
