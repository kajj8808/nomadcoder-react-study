import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("Im here! nice to mite you");
    return () => console.log("이몸 퇴장..");
  }, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };
  return (
    <div>
      <h1 className={styles.title}>Welcome back react js!</h1>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
