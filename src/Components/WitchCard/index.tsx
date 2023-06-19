import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { AnimatePresence, motion } from "framer-motion";
import { Loader } from "../Loader";
import { CardData } from "../CardData";

function WitchCard({ activeIndex }: { activeIndex: number }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:9000/witch");
        const jsonData = await response.json();
        setData(jsonData);
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
            <CardData data={data} activeIndex={activeIndex} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            className={styles.witchCard}
          >
            {/* <CardData data={data} /> */}
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
}

export default WitchCard;
