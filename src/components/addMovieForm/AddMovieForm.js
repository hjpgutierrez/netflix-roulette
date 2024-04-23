import { useState } from "react";
import axios from "axios";
import Dialog from "../dialog/Dialog";
import MovieForm from "../movieForm/MovieForm";
import { ToDto } from "../../utilities/Utility";

const AddMovieForm = (props) => {
  let [selectedGenres, setSelectedGenres] = useState([]);

  const onSubmit = (data) => {
    if (selectedGenres.length === 0) {
      alert("At least one genre must be selected");
      return;
    }

    let body = ToDto(data, selectedGenres);

    axios.post("http://localhost:4000/movies", body).then((response) => {
      console.log(response);
    });
  };

  return (
    <Dialog {...props}>
      <MovieForm
        movie={null}
        onSubmit={onSubmit}
        setSelectedGenres={setSelectedGenres}
      />
    </Dialog>
  );
};

export default AddMovieForm;
