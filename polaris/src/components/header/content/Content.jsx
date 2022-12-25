import Button from "./button/Button";
import styles from "./Content.module.css";

const Content = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        Предоставляем полное сопровождение регистрации компании в ОАЭ с надежной
        поддержкой 24/7
      </h1>
      <Button />
    </div>
  );
};

export default Content;
