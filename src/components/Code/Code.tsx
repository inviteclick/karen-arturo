import styles from "./Code.module.css";
import code from "../../imgs/code.png";
import img3 from "../../imgs/img3.jpeg";
export const Code = () => {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.title}>
          Codigo de Vestimenta <br /> <span>De Etiqueta</span>
        </div>
        <img src={code} alt="code" />
      </div>

      <div className={styles.last}>
        <div className={styles.text}>
          BENDITO SEA EL DÍA EN QUE DOBLAMOS LAS RODILLAS POR NUESTRO MATRIMONIO
        </div>
        <img src={img3} alt="" />
      </div>
    </>
  );
};
