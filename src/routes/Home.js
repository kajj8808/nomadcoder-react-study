import { useEffect, useState } from "react";
import Movie from "../components/Movie";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovies() {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=year`
      )
    ).json();
    if (json.status === "ok") {
      setMovies(json.data.movies);
      setLoading(false);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>The Movies!</h1>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        movies.map((movie) => <Movie {...movie} key={movie.id} />)
      )}
    </div>
  );
}

export default Home;
