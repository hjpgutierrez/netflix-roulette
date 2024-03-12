import { useState } from "react";

import "./App.css";
import Counter from "./components/counter/Counter.js";
import SearchForm from "./components/searchform/SearchForm.js";
import GenreSelect from "./components/genreSelect/GenreSelect.js";
import MovieTile from "./components/movieTile/movieTile.js";
import MovieDetails from "./components/movieDetails/movieDetails.js";
import SortControl from "./components/sortControl/sortControl.js";

const displayList = [
  { name: "Crime", id: 1 },
  { name: "Documentary", id: 2 },
  { name: "Horror", id: 3 },
  { name: "Comedy", id: 4 },
];
const selectedGenre = [
  { name: "Crime", id: 1 },
  { name: "Horror", id: 3 },
];

const sortControlOptions = ["Release Date", "Title"];
const exampleMovie = {
  urlImage:
    "https://m.media-amazon.com/images/M/MV5BYWQxN2I1NjItMDVjMS00ZmJjLWIyYjItOWI2OGY5NTU1ZjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjM3OTA@._V1_UY1200_CR86,0,630,1200_AL_.jpg",
  name: "Spectral",
  releaseYear: 2016,
  rating: 8.9,
  durationResume: "2H 35M",
  description: `Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy text
  ever since the 1500s, when an unknown printer took a galley of
  type and scrambled it to make a type specimen book. It has
  survived not only five centuries, but also the leap into
  electronic typesetting, remaining essentially unchanged. It was
  popularised in the 1960s with the release of Letraset sheets
  containing Lorem Ipsum passages, and more recently with desktop
  publishing software like Aldus PageMaker including versions of
  Lorem Ipsum.`,
  genres: ["Fiction", "Drama"],
};

function App() {
  const [filterText, setFilterText] = useState("");
  const [orderBy, setOrderBy] = useState(sortControlOptions[1]);

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

  return (
    <div className="container montserrat-500">
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

      <div className="row top-buffer">
        <GenreSelect
          displayList={displayList}
          onSelect={(selectedList, selectedItem) => {
            console.log(`${selectedItem.name} was added`);
          }}
          selectedGenre={selectedGenre}
        />
      </div>
    </div>
  );
}

export default App;
