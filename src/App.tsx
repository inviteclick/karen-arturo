import styles from "./App.module.css";
import { Code } from "./components/Code";
import { Header } from "./components/Header";
import { MesadeRegalo } from "./components/MesadeRegalo";
import { Parents } from "./components/Parents";
import { Place } from "./components/Place";
import ReactAudioPlayer from "react-audio-player";
import audio from "./audio/up.mp3";
import { useEffect, useState } from "react";

function App() {
  const [play, setPlay] = useState(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setPlay(true);
  //   }, 5000);
  // }, []);
  return (
    <div className={styles.main}>
      <ReactAudioPlayer src={audio} autoPlay={play} loop />
      <Header />
      <Parents />
      <Place />
      <MesadeRegalo />
      <Code />
    </div>
  );
}

export default App;
