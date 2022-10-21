import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Parents } from "./components/Parents";

function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Parents />
    </div>
  );
}

export default App;
