import React from "react";
import leftArrow from "../images/left.png";
import styles from "./Arrows.module.css";

const Left = () => {
  return (
    <div>
      <img className={`${styles.photoContainer}`} src={leftArrow} />
    </div>
  );
};

export default Left;
