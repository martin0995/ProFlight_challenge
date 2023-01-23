import React from "react";
import logo from "../images/proflight_logo.jpeg";
import styles from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <img
        className={`${styles.photoContainer} rounded-lg`}
        src={logo}
        alt="ProFLight logo"
      />
    </div>
  );
};

export default Logo;
