import { useQuery } from "@tanstack/react-query";
import { IAPIResponse, getPopular } from "../api";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import DetailModal from "../components/DetailModal";
import { AnimatePresence, motion } from "framer-motion";

function Home() {
  const { data, isLoading } = useQuery<IAPIResponse>(["pzopular"], getPopular);
  const { id } = useParams();
  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <AnimatePresence mode="wait">
            <MovieList movies={data?.results} />
            {id ? <DetailModal /> : null}
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default Home;
