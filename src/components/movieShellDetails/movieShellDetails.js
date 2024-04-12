import { useState, useEffect } from "react";
import axios from "axios";
import { movieMapper } from "../../utilities/Utility.js";
import MovieDetails from "../movieDetails/MovieDetails.js";

function MovieShellDetails({ movieId }) {
  //fallback UI
  const LoadingIndication = () => <h2>Just a monent... Almost there</h2>;

  const [isLoading, setIsLoading] = useState(true);
  const [movieItem, setMovieItem] = useState(undefined);
  const getMovieUrl = `http://localhost:4000/movies/${movieId}`;

  const onCloseMovieDetails = () => {
    setMovieItem(undefined);
  };

  useEffect(() => {
    axios.get(getMovieUrl).then((response) => {
      setMovieItem(movieMapper(response)[0]);
      setIsLoading(false);
    });
  }, []);

  if (!isLoading) {
    return <MovieDetails movie={movieItem} onClose={onCloseMovieDetails} />;
  }

  return <LoadingIndication />;
}

export default MovieShellDetails;
