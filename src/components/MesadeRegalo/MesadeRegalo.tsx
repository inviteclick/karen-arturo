import styles from "./MesadeRegalo.module.css";
import liverpool from "../../imgs/liverpool.png";

export const MesadeRegalo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Mesa de Regalos</div>
      <img src={liverpool} alt="liverpool" />
    </div>
  );
};
