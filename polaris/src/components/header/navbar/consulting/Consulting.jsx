import styles from "./Consulting.module.css";
import arrow from "../../../../images/icons/arrow.png";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";

const Consulting = () => {
  const [currentStylesText, setCurrentStylesText] = useState({});
  const [currentStylesCircle, setCurrentStylesCircle] = useState({});
  const navigate = useNavigate()
  return (
    <>
      <div className={styles.circle} style={currentStylesCircle} onClick={() => {
        navigate("/", {replace: true})
      }} onMouseEnter={() => {
          setCurrentStylesText({
            color: "lightgray",
            transition: "all .3s",
          });
          setCurrentStylesCircle({
            boxShadow:
              "5px 5px 5px rgb(255, 255, 255, 0.1), -5px -5px 5px rgb(255, 255, 255, 0.1), -5px 5px 5px rgb(255, 255, 255, 0.1), 5px -5px 5px rgb(255, 255, 255, 0.1)",
            transition: "all .3s",
          });
        }}
        onMouseLeave={() => {
          setCurrentStylesText({
            color: "white",
            transition: "all .3s",
          });
          setCurrentStylesCircle({
            boxShadow: "0px 0px 0px rgb(255, 255, 255, 0.1)",
            transition: "all .3s",
          });
        }}>
        <img src={arrow} alt="" className={styles.arrow} />
      </div>
      <NavLink
        to=""
        className={styles.navlinkConsult}
        style={currentStylesText}
        onMouseEnter={() => {
          setCurrentStylesText({
            color: "lightgray",
            transition: "all .3s",
          });
          setCurrentStylesCircle({
            boxShadow:
              "5px 5px 5px rgb(255, 255, 255, 0.1), -5px -5px 5px rgb(255, 255, 255, 0.1), -5px 5px 5px rgb(255, 255, 255, 0.1), 5px -5px 5px rgb(255, 255, 255, 0.1)",
            transition: "all .3s",
          });
        }}
        onMouseLeave={() => {
          setCurrentStylesText({
            color: "white",
            transition: "all .3s",
          });
          setCurrentStylesCircle({
            boxShadow: "0px 0px 0px rgb(255, 255, 255, 0.1)",
            transition: "all .3s",
          });
        }}
      >
        Бесплатная консультация
      </NavLink>
    </>
  );
};

export default Consulting;
