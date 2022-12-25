import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
import whiteArrow from "../../../../images/icons/whiteArrow.png";
import React, { useState } from "react";

const Button = () => {
  const navigate = useNavigate();
  const [currentStyles, setCurrentStyles] = useState({});
  return (
    <button
      className={styles.navlink}
      onClick={() => {
        navigate("/", { replace: true });
      }}
      onMouseEnter={() => {
        setCurrentStyles({
          boxShadow:
            "rgb(55, 71, 178, 0.4) 5px -5px 5px,rgb(55, 71, 178, 0.4) -5px -5px 5px, rgb(55, 71, 178, 0.4) 5px 5px 5px,rgb(55, 71, 178, 0.4) -5px 5px 5px",
          transition: "all .2s cubic-bezier(0.165, 0.84, 0.44, 1)",
        });
      }}
      onMouseLeave={() => {
        setCurrentStyles({
          boxShadow: "0px 0px 0px rgb(55, 71, 178, 0.4)",
          transition: "all .2s cubic-bezier(0.165, 0.84, 0.44, 1)",
        });
      }}
      style={currentStyles}
    >
      <img src={whiteArrow} alt="" className={styles.whiteArrow} />
      Бесплатная консультация
    </button>
  );
};

export default Button;
