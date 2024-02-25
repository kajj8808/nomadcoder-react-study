import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import styles from "./Detail.module.css";
import DetailItemList from "../components/DetailItemList";

function Detail() {
  const { id } = useParams();

  const [detail, setDetail] = useState();
  const [loading, setLoading] = useState(true);

  async function getDetail(id) {
    const { code, data } = await (
      await fetch(
        `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters/${id}`
      )
    ).json();

    if (code !== 200) return;
    setLoading(false);
    setDetail(data.results[0]);
  }

  useEffect(() => {
    getDetail(id);
  }, [id]);
  console.log(detail);

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div className={styles.container}>
        {loading ? (
          <Loader />
        ) : (
          <div className={styles.detail_container}>
            <div className={styles.thumbnail_box}>
              <div
                className={styles.thumbnail}
                style={{
                  backgroundImage: `url("${detail.thumbnail.path}.jpg")`,
                }}
              />
              <div className={styles.thumbnail_description_box}>
                <p>{detail.name}</p>
                <p>modified day : {detail.modified.slice(0, 10)}</p>
              </div>
            </div>

            <DetailItemList items={detail.comics.items} title={"Comics"} />
            <DetailItemList items={detail.series.items} title={"Series"} />
            <DetailItemList items={detail.stories.items} title={"Stories"} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Detail;
