import { useState, useEffect } from "react";
import axios from "axios";
import { movieMapper } from "../../utilities/Utility.js";
import MovieDetails from "../movieDetails/MovieDetails.js";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";

function MovieShellDetails() {
  //fallback UI
  const LoadingIndication = () => <h2>Just a moment... Almost there</h2>;

  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieItem, setMovieItem] = useState(undefined);
  const getMovieUrl = `http://localhost:4000/movies/${movieId}`;

  const getCurrentQueryParams = () => {
    let currentQueryParams = `?`;
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      currentQueryParams += `${param}=${value}&`;
    }

    return currentQueryParams;
  };

  const onCloseMovieDetails = () => {
    navigate("/search" + getCurrentQueryParams());
  };

  useEffect(() => {
    axios.get(getMovieUrl).then((response) => {
      setMovieItem(movieMapper(response.data));
      setIsLoading(false);
      return () => {
        setMovieItem(null);
      };
    });
  }, [movieId]);

  if (!isLoading) {
    return <MovieDetails movie={movieItem} onClose={onCloseMovieDetails} />;
  }

  return <LoadingIndication />;
}

export default MovieShellDetails;
