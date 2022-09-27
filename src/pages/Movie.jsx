import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import MovieCard from "../componentes/MovieCard";

import "./Movie.css";

const apiKey = import.meta.env.VITE_API_KEY;
const moviesURL = import.meta.env.VITE_API;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  useEffect(() => {
    const movieURL = `${moviesURL}${id}?${apiKey}`;
    getMovie(movieURL);
  }, []);

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <p className="tagline">{movie.tagline}</p>
          <div className="info">
            <h3>
              <BsWallet2 /> Budget:
              <p>{formatCurrency(movie.budget)}</p>
            </h3>
          </div>
          <div className="info">
            <h3>
              <BsGraphUp /> Revenue:
              <p>{formatCurrency(movie.revenue)}</p>
            </h3>
          </div>
          <div className="info">
            <h3>
              <BsHourglassSplit /> Run Time:
              <p>{movie.runtime} minutos</p>
            </h3>
          </div>
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Overview:
              <p>{movie.overview}</p>
            </h3>
          </div>

          <Link to="/">
            <button className="voltar">Go back</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Movie;
