import styled from "styled-components";
import { IMovie } from "../api";
import Movie from "./Movie";
import { Variants, motion } from "framer-motion";

const BoxList = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  max-width: 820px;

  gap: 30px;
  padding: 0 10px;
`;

const boxListVariants: Variants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

function MovieList({ movies }: { movies: IMovie[] | undefined }) {
  return (
    <BoxList variants={boxListVariants} initial="hidden" animate="visible">
      {movies?.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          poster_path={movie.poster_path}
          id={movie.id}
        />
      ))}
    </BoxList>
  );
}

export default MovieList;
