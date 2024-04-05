import { useState } from "react";

import "./App.css";
import Counter from "./components/counter/Counter.js";
import SearchForm from "./components/searchform/SearchForm.js";
import MovieTile from "./components/movieTile/MovieTile.js";
import MovieDetails from "./components/movieDetails/MovieDetails.js";
import SortControl from "./components/sortControl/SortControl.js";
import Dialog from "./components/dialog/Dialog.js";
import MovieForm from "./components/movieForm/MovieForm.js";
import MovieListPage from "./components/movieListPage/MovieListPage.js";

const sortControlOptions = ["Release Date", "Title"];
const exampleMovie = {
  urlImage:
    "https://m.media-amazon.com/images/M/MV5BYWQxN2I1NjItMDVjMS00ZmJjLWIyYjItOWI2OGY5NTU1ZjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjM3OTA@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
  name: "Spectral",
  releaseYear: 2016,
  rating: 8.9,
  durationResume: "2H 35M",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting`,
  genres: [
    { name: "Documentary", id: 2 },
    { name: "Comedy", id: 4 },
  ],
};

const displayList = [
  { name: "Crime", id: 1 },
  { name: "Documentary", id: 2 },
  { name: "Horror", id: 3 },
  { name: "Comedy", id: 4 },
];

function App() {
  const [filterText, setFilterText] = useState("");
  const [orderBy, setOrderBy] = useState(sortControlOptions[1]);
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = (event) => {
    const value = event.target.value;
    alert(`Playing ${value}`);
  };

  const onSearchForm = (event) => {
    event.preventDefault();
    console.log(filterText);
  };

  const onChangeSortBy = (event) => {
    const value = event.target.value;
    setOrderBy(value);
  };

  const closePortal = (event) => {
    setModalOpen(false);
  };

  const handleSubmit = (event) => {
    const formValues = Object.fromEntries(new FormData(event.target));
    console.log(formValues);
    event.preventDefault();
  };

  return (
    <MovieListPage />
    /*  <div className="container montserrat-500">
      <div className="row top-buffer">
        <input
          type="button"
          className="btn btn-primary"
          value="Launch demo modal"
          onClick={() => setModalOpen(true)}
        />
        <Dialog isOpen={modalOpen} title="ADD MOVIE" closePortal={closePortal}>
          <MovieForm movie={exampleMovie} handleSubmit={handleSubmit} />
        </Dialog>
      </div>

      <div className="row top-buffer">
        <SortControl
          options={sortControlOptions}
          currentOption={orderBy}
          onChange={onChangeSortBy}
        />
      </div>

      <MovieDetails movie={exampleMovie} />

      <div className="row top-buffer">
        <MovieTile movie={exampleMovie} onClick={handleCardClick} />
      </div>

      <div className="row top-buffer">
        <Counter initialValue={100} />
      </div>

      <SearchForm
        filterText={filterText}
        onSearch={onSearchForm}
        onFilterTextChange={setFilterText}
      />
    </div> */
  );
}

export default App;
