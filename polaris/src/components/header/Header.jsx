import Content from "./content/Content";
import styles from "./Header.module.css";
import Navbar from "./navbar/Navbar";

const Header = () => {
  return <div className={styles.wrapper}>
    <Navbar />
    <Content />
  </div>;
};

export default Header;
