import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";

function WitchCard() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (response.ok) {
          setIsLoading(false);
        } else {
          throw new Error("Error of loading data!!!");
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {" "}
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={styles.witchCard}
          >
            <div>
              <h1>Cornelia</h1>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={styles.witchCard}
          ></motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default WitchCard;

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
