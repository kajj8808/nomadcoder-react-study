import { useQuery } from "@tanstack/react-query";
import { IAPIResponse, getNowPlaying } from "../api";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import DetailModal from "../components/DetailModal";

function NowPlaying() {
  const { data, isLoading } = useQuery<IAPIResponse>(
    ["now-playing"],
    getNowPlaying
  );
  const { id } = useParams();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <MovieList movies={data?.results} />
          {id ? <DetailModal /> : null}
        </>
      )}
    </div>
  );
}

export default NowPlaying;
