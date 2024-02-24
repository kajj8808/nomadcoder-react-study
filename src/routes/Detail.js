import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);

  async function getDetail() {
    const { status, data } = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    if (status === "ok") {
      console.log(data.movie);
      setLoading(false);
    }
  }

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      <h1>Detail</h1>
      {loading ? "Loading.." : null}
    </div>
  );
}

export default Detail;
