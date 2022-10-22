import styles from "./Place.module.css";
export const Place = () => {
  return (
    <div className={styles.main}>
      <div className={styles.sub}>
        Lo más importante es tu presencia y queremos compartir con ustedes la
        alegría unir nuestras vidas ante Dios invitándolos al pacto matrimonial
      </div>
      <div className={styles.invitacion}>
        <span className={styles.for}>Invitacion para:</span>
        <span className={styles.invited}>Familia Saviñon</span>
        <span className={styles.pases}>2 pases</span>
        <div className={styles.date}>
          <div className={styles.month}>NOV</div>
          <div className={styles.day}>22</div>
          <div className={styles.year}>2022</div>
        </div>
        <div className={styles.hour}>14:00 HRS</div>
        <div className={styles.ubi}>
          Hotel un hotel genial supercookies AV. Superawesome
        </div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buton}>Ver ubicacacion en el mapa</button>
        <button className={styles.butonUbi}>Descargar Ticket</button>
      </div>
    </div>
  );
};
