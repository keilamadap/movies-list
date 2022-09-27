import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const posterURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  return (
    <div className="movie-card">
      <img src={`${posterURL + movie.poster_path}`} alt={movie.title} />
      <h2>
        <FaStar /> {movie.title}
      </h2>
      <p>{movie.vote_avarage}</p>
      {showLink && <Link to={`/movie/${movie.id}`}>Details</Link>}
    </div>
  );
};

export default MovieCard;
