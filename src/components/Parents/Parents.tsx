import styles from "./Parents.module.css";
import img2 from "../../imgs/img2.jpeg";

export const Parents = () => {
  return (
    <div className={styles.main}>
      <div className={styles.title}>
        CON LA BENDICIÓN DE DIOS Y LA DE NUESTROS PADRES:
      </div>

      <div>
        <p className={styles.subtitle}>Padres de la novia</p>
        <ul>
          <li>Manuel Zaleta Rodríguez</li>
          <li>Larissa González Capitanachi</li>
        </ul>
      </div>

      <div>
        <p className={styles.subtitle}>Padres del novio</p>
        <ul>
          <li>Alfredo Sánchez Delgado</li>
          <li>Irma García González</li>
        </ul>
      </div>
      <div>
        <p className={styles.subtitle}>Padrinos</p>
        <ul>
          <li>Iker González Capitanachi</li>
          <li>Abril Segovia Ramos</li>
        </ul>
      </div>
      <div className={styles.frase}>
        El secreto está en dejarlo fluir y que simplemente ocurra
      </div>
      <img src={img2} alt="img2" />
      <div className={styles.last}>(El tiempo de espera se cumplió.)</div>
    </div>
  );
};
