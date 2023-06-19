import React from "react";
import styles from "./cardData.module.css";
import { WitchCardData } from "../../Interfaces/WitchCardData";

export function CardData({ data }: { data: WitchCardData }) {
  console.log(data.imageUrl);
  return (
    <>
      <span className={styles.witchName}>{data.name}</span>
      <div className={styles.witchPower}>
        <span className={styles.witchPowerName}>{data.power}</span>
      </div>
      <span>
        <p>{data.description}</p>
      </span>
      <img src={data.imageUrl}></img>
    </>
  );
}
