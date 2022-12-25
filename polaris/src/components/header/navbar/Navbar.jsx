import styles from "./Navbar.module.css";
import Navlink from "./navlink/Navlink";
import Consulting from "./consulting/Consulting";

const Navbar = () => {
  return (
    <div className={styles.firstWrapper}>
      <div className={styles.wrapper}>
        <div className={styles.wrapperNavigation}>
          <h1 className={styles.logo}>POLARIS</h1>
          <div className={styles.navigation}>
            <Navlink text="Главная" />
            <Navlink text="Наши услуги" />
            <Navlink text="О компании " />
            <Navlink text="Контакты" />
          </div>
        </div>
        <div className={styles.wrapperConsulting}>
          <Consulting />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
