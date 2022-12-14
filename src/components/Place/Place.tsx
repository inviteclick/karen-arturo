import styles from "./Place.module.css";
import { useTakeScreenShot } from "../../hooks/useTakeScreenShot";
import { useGetGuest } from "../../hooks/useGetGuest";
export const Place = () => {
  const { ref, takeSS } = useTakeScreenShot();
  const { invitado, adultos, niños } = useGetGuest();

  return (
    <div className={styles.main}>
      <div className={styles.sub}>
        Lo más importante es tu presencia y queremos compartir con ustedes la
        alegría unir nuestras vidas ante Dios invitándolos al pacto matrimonial
      </div>
      <div className={styles.invitacion} ref={ref}>
        <span className={styles.for}>Invitacion para:</span>
        <span className={styles.invited}>{invitado}</span>
        <span className={styles.pases}>
          {adultos}
          {niños && (adultos as number) < 2
            ? " adulto"
            : niños && (adultos as number) >= 2
            ? " adultos"
            : (adultos as number) >= 2
            ? " pases"
            : " pase"}
          {niños ? " y " : null}
          {(niños as number) >= 2
            ? `${niños} niños`
            : (niños as number) < 2 && niños
            ? `${niños} niño`
            : null}
        </span>
        <div className={styles.date}>
          <div className={styles.month}>NOV</div>
          <div className={styles.day}>19</div>
          <div className={styles.year}>2022</div>
        </div>
        <div className={styles.ubi}>
          Salon Lomas - José Moreno Irabien #300, Primero de Mayo
        </div>
        <div className={styles.ubi}>Hora del pacto con Dios</div>
        <div className={styles.hour}>19:00 HRS</div>
        <div className={styles.ubi}>Recepcion</div>
        <div className={styles.hour}>19:45 HRS</div>
      </div>
      <div className={styles.buttons}>
        <button className={styles.buton}>
          <a href="https://goo.gl/maps/gB9N2QLr3NKdy2qNA" target="_blank">
            Ver ubicacacion en el mapa
          </a>
        </button>
        <button className={styles.butonUbi} onClick={takeSS}>
          Descargar Ticket
        </button>
      </div>
    </div>
  );
};
