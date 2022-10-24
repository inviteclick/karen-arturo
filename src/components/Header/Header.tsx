import styles from "./Header.module.css";
import img1 from "../../imgs/img1.jpeg";
import frame from "../../imgs/decoration/frame.svg";
import flores from "../../imgs/decoration/flores.svg";

export const Header = () => {
  return (
    <div className={styles.head}>
      <div className={styles.subtitle1}>
        HABIENDO ESPERADO CON PACIENCIA ALCANZARON LA PROMESA DE DIOS
      </div>

      <div className={styles.title}>
        <span>Karen</span> <span>y</span> <span>Arturo</span>
      </div>

      <img className={styles.img} src={img1} alt="img" />

      <img className={styles.frame} src={frame} alt="frame" />
      <img className={styles.flores} src={flores} alt="flores" />
    </div>
  );
};
