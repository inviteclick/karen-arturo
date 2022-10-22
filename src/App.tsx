import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Parents } from "./components/Parents";
import { Place } from "./components/Place";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Parents />
      <Place />
    </div>
  );
}

export default App;
