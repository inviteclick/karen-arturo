import styles from "./App.module.css";
import { Header } from "./components/Header";
import { MesadeRegalo } from "./components/MesadeRegalo";
import { Parents } from "./components/Parents";
import { Place } from "./components/Place";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Parents />
      <Place />
      <MesadeRegalo />
    </div>
  );
}

export default App;
