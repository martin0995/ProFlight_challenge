import React from "react";
import rightArrow from "../images/right.png";
import styles from "./Arrows.module.css";

const Right = () => {
  return (
    <div>
      <img
        className={`${styles.photoContainer}`}
        src={rightArrow}
        alt="Right arrow logo"
      />
    </div>
  );
};

export default Right;
