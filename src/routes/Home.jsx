import { useEffect, useState } from "react";
import Card from "../components/Card";
import styles from "./Home.module.css";
import Loader from "../components/Loader";

function Home() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCharacters() {
    const { code, data } = await (
      await fetch(
        "https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023"
      )
    ).json();
    if (code !== 200) return;
    setLoading(false);
    setCharacters(data.results);
  }

  useEffect(() => {
    getCharacters();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <ul className={styles.card_list}>
          {characters.map((character, key) => (
            <Card key={key} {...character} />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Home;
