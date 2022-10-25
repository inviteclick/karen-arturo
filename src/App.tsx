import styles from "./App.module.css";
import { Code } from "./components/Code";
import { Header } from "./components/Header";
import { MesadeRegalo } from "./components/MesadeRegalo";
import { Parents } from "./components/Parents";
import { Place } from "./components/Place";
import audio from "./audio/up.mp3";
import { useContext, useEffect, useRef } from "react";
import { ConfirmCodeModal } from "./components/ConfirmCodeModal";
import { ContextInstance } from "./context";

function App() {
  const { state } = useContext(ContextInstance);
  const ref = useRef(null);
  useEffect(() => {
    let el: any = ref.current;
    if (el && state.selectedGuest?.id) {
      el.play();
    }
  }, [state.selectedGuest]);
  return (
    <div className={styles.main}>
      <audio ref={ref} src={audio} loop></audio>
      <Header />
      <Parents />
      <Place />
      <MesadeRegalo />
      <Code />
      <ConfirmCodeModal isOpen />
    </div>
  );
}

export default App;
