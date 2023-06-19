import React, { useState } from "react";
import styles from "./cardData.module.css";

interface Data {
  id: number;
  name: string;
  power: string;
  description: string;
  imageUrl: string;
}

export function CardData({
  data,
  activeIndex,
}: {
  data: Data[];
  activeIndex: number;
}) {
  const [selectedIcon, setSelectedIcon] = useState<number | null>(null);
  return (
    <>
      {/* {data.map((item: any) => (
        <li key={item.id}>{item.name}</li>
      ))} */}
      <span className={styles.witchName}>{data[activeIndex].name}</span>
      <div className={styles.witchPower}>
        <span className={styles.witchPowerName}>{data[activeIndex].power}</span>
      </div>
      <span>
        <p>{data[activeIndex].description}</p>
      </span>
      <img src={data[activeIndex].imageUrl}></img>
    </>
  );
}
