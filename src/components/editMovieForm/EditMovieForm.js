import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useSearchParams, useNavigate } from "react-router-dom";
import Dialog from "../dialog/Dialog";
import MovieForm from "../movieForm/MovieForm";
import { ToDto, movieMapper } from "../../utilities/Utility";

const EditMovieForm = () => {
  //fallback UI
  const LoadingIndication = () => <h2>Just a moment... Almost there</h2>;

  let [selectedGenres, setSelectedGenres] = useState([]);
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [movieItem, setMovieItem] = useState(undefined);
  const getMovieUrl = `http://localhost:4000/movies/${movieId}`;

  const onSubmit = (data) => {
    if (selectedGenres.length === 0) {
      alert("At least one genre must be selected");
      return;
    }

    let body = ToDto(data, selectedGenres, movieItem.id);

    axios.put("http://localhost:4000/movies", body).then((response) => {
      if (response.status === 200) {
        navigate(`/${response.data.id}` + getCurrentQueryParams());
      } else {
        console.log(response);
      }
    });
  };

  const getCurrentQueryParams = () => {
    let currentQueryParams = `?`;
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      currentQueryParams += `${param}=${value}&`;
    }

    return currentQueryParams;
  };

  const onCloseModal = () => {
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
    return (
      <Dialog isOpen={true} title={"Edit Movie"} closePortal={onCloseModal}>
        <MovieForm
          movie={movieItem}
          onSubmit={onSubmit}
          setSelectedGenres={setSelectedGenres}
        />
      </Dialog>
    );
  }

  return <LoadingIndication />;
};

export default EditMovieForm;
