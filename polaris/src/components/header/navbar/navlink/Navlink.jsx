import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navlink.module.css";

const Navlink = ({ path = "", text }) => {
  const [currentStyles, setCurrentStyles] = useState({});
  return (
    <NavLink
      to={path}
      className={styles.navlink}
      style={currentStyles}
      onMouseEnter={() => {
        setCurrentStyles({
            color: "lightgray",
            transition: "all .3s"
        })
      }}
      onMouseLeave={() => {
        setCurrentStyles({
            color: "white",
            transition: "all .3s"
        })
      }}
    >
      {text}
    </NavLink>
  );
};

export default Navlink;
