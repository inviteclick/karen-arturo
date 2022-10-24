import styles from "./MesadeRegalo.module.css";
import liverpool from "../../imgs/liverpool.png";

export const MesadeRegalo = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>Mesa de Regalos </div>
      <a
        href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51005862"
        target="_blank"
      >
        <img src={liverpool} alt="liverpool" />
      </a>
      <span>
        Num: 51005862 <br />
        Ana Karen Zaleta y Arturo Gonzalez{" "}
      </span>
    </div>
  );
};
