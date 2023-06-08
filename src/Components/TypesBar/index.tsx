import React from "react";
import styles from "./typesbar.module.css";

function TypesBar() {
  return (
    <nav className={styles.typesbar}>
      <a>
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/fire.png"}
          alt="fire"
        />
      </a>
      <a>
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/water.png"}
          alt="water"
        />
      </a>
      <a>
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/earth.png"}
          alt="earth"
        />
      </a>
      <a>
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/air.png"}
          alt="air"
        />
      </a>
      <a>
        <img
          src={process.env.PUBLIC_URL + "/Assets/types-icons/quintessence.png"}
          alt="quintessence"
        />
      </a>
    </nav>
  );
}

export default TypesBar;
