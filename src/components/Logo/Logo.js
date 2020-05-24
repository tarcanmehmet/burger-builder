import React from "react";
import styles from "./Logo.module.css";
import burgerLogo from "../../assets/images/original.png";
const Logo = (props) => {
  return (
    <div className={styles.Logo}>
      <img
        style={{ height: props.height }}
        src={burgerLogo}
        alt="BurgerLogo"
      ></img>
    </div>
  );
};

export default Logo;
