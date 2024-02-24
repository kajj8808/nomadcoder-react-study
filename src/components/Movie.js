import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ medium_cover_image, title, summary, genres, id }) {
  return (
    <Link to={`/movie/${id}`}>
      <img src={medium_cover_image} alt={title} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {genres.map((genere, key) => (
          <li key={key}>{genere}</li>
        ))}
      </ul>
    </Link>
  );
}

Movie.propTypes = {
  id: PropTypes.string.isRequired,
  medium_cover_image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
