import React from "react";
import styles from "./typesbar.module.css";

function TypesBar() {
  return (
    <nav className={styles.typesbar}>
      <a>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/FireIcon.svg/750px-FireIcon.svg.png"
          alt="fire"
        />
      </a>
      <a>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/65/Icon-water-blue.svg"
          alt="water"
        />
      </a>
      <a>
        <img
          src="https://images.vexels.com/media/users/3/262042/isolated/preview/69326c8749e7a0bc882fbbe2a8e5fa50-leaf-botanical-icon.png"
          alt="earth"
        />
      </a>
      <a>
        <img
          src="https://img.freepik.com/free-icon/wind_318-576755.jpg"
          alt="air"
        />
      </a>
      <a>
        <img
          src="https://cdn1.iconfinder.com/data/icons/black-and-white-magic/500/SingleOutlineBlackandWhiteMagicYulia_6-512.png"
          alt="quintessence"
        />
      </a>
    </nav>
  );
}

export default TypesBar;
