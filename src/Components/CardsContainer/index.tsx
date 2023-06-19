import React, { FC, MouseEventHandler, useEffect, useState } from "react";
import styles from "./typesbar.module.css";
import { motion } from "framer-motion";
import WitchCard from "../WitchCard";
import { Loader } from "../Loader";

const CARDS = [
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/fire.png",
    alt: "Fire",
  },
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/water.png",
    alt: "Water",
  },
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/earth.png",
    alt: "Earth",
  },
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/air.png",
    alt: "Air",
  },
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/quintessence.png",
    alt: "Quintessence",
  },
];

function CardsContainer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleIconClick = (value: number) => {
    setActiveIndex((prev) => (prev === value ? null : value));
    setIsLoading(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("");
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
  });

  const renderCards = () => {
    if (activeIndex === null) {
      return null;
    }
    return isLoading ? <Loader /> : <WitchCard activeIndex={activeIndex} />;
  };

  return (
    <div className={styles.layout}>
      <div className={styles.typesbar}>
        {CARDS.map((card, index) => (
          <motion.div
            key={index}
            whileTap={{
              rotate: -90,
              scale: 0.75,
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
          >
            <Icon
              onClick={() => handleIconClick(index)}
              src={card.src}
              alt={card.alt}
            />
          </motion.div>
        ))}
      </div>
      <div className={styles.witchContainerCards}>{renderCards()}</div>
    </div>
  );
}

interface IconProps {
  onClick: MouseEventHandler<HTMLDivElement>;
  src: string;
  alt: string;
}

const Icon: FC<IconProps> = ({ onClick, src, alt }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        boxShadow: "0 0 10px #B9D9EB",
        transition: { duration: 0.3, ease: "easeInOut" },
      }}
      className={styles.icon}
      onClick={onClick}
    >
      <img src={src} alt={alt} />
    </motion.div>
  );
};

export default CardsContainer;
