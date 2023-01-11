import styles from "./Biography.module.css";
import peopleBackground from "../../images/backgrounds/peopleBackground.png";

const Biography = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperImg}>
        <img
          src={peopleBackground}
          alt=""
          className={styles.peopleBackground}
        />
        <div className={styles.containerMohanad}>Моханад</div>
        <div className={styles.containerElena}>Елена</div>
      </div>
      <div className={styles.content}>
        <p className={styles.about}>О компании</p>
        <h1 className={styles.title}>
          Я, Елена Кислая и мой супруг Моханад Аль Мишал основатели и главные
          специалисты компании <span className={styles.span}>Polaris</span>.
        </h1>
      </div>
    </div>
  );
};

export default Biography;
