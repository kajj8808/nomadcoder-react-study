import { useQuery } from "@tanstack/react-query";
import { IAPIResponse, getComingSoon } from "../api";
import MovieList from "../components/MovieList";
import Loader from "../components/Loader";
import { useParams } from "react-router-dom";
import DetailModal from "../components/DetailModal";
import { AnimatePresence } from "framer-motion";

function ComingSoon() {
  const { data, isLoading } = useQuery<IAPIResponse>(
    ["coming-soon"],
    getComingSoon
  );
  const { id } = useParams();

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <MovieList movies={data?.results} />
          {id ? <DetailModal /> : null}
        </AnimatePresence>
      )}
    </div>
  );
}

export default ComingSoon;
