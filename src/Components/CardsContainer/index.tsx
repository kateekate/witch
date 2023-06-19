import React, { FC, MouseEventHandler, useState } from "react";
import styles from "./typesbar.module.css";
import { motion } from "framer-motion";
import WitchCard from "../WitchCard";
import { Loader } from "../Loader";
import { WitchCardData } from "../../Interfaces/WitchCardData";
import { getWitchCardByPower } from "../../Services/api";

const CARDS = [
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/fire.png",
    power: "Fire",
  },
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/water.png",
    power: "Water",
  },
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/earth.png",
    power: "Earth",
  },
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/air.png",
    power: "Air",
  },
  {
    src: process.env.PUBLIC_URL + "Assets/types-icons/quintessence.png",
    power: "Quintessence",
  },
];

function CardsContainer() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [data, setData] = useState<WitchCardData | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleIconClick = async (value: number, power: string) => {
    setIsLoading(true);
    setActiveIndex((prev) => (prev === value ? null : value));
    const newData = await getWitchCardByPower(power);
    setData(newData);
    setIsLoading(false);
  };

  const renderCards = () => {
    if (activeIndex === null) {
      return null;
    } else if (isLoading) {
      return <Loader />;
    } else if (!data) {
      return <span>No data</span>;
    } else {
      return <WitchCard data={data} />;
    }
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
              onClick={() => handleIconClick(index, card.power)}
              src={card.src}
              alt={card.power}
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
