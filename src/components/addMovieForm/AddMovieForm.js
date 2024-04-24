import { useState } from "react";
import axios from "axios";
import { useSearchParams, useNavigate } from "react-router-dom";
import Dialog from "../dialog/Dialog";
import MovieForm from "../movieForm/MovieForm";
import { ToDto } from "../../utilities/Utility";

const AddMovieForm = () => {
  let [selectedGenres, setSelectedGenres] = useState([]);
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (selectedGenres.length === 0) {
      alert("At least one genre must be selected");
      return;
    }

    let body = ToDto(data, selectedGenres);

    axios.post("http://localhost:4000/movies", body).then((response) => {
      if (response.status === 201) {
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

  return (
    <Dialog isOpen={true} title={"Add Movie"} closePortal={onCloseModal}>
      <MovieForm
        movie={null}
        onSubmit={onSubmit}
        setSelectedGenres={setSelectedGenres}
      />
    </Dialog>
  );
};

export default AddMovieForm;
