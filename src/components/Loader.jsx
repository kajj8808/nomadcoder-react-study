import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.guide}>
        <p>📡</p>
        <span>로딩중...</span>
      </div>
      <div className={styles.background}></div>
    </div>
  );
}

export default Loader;
