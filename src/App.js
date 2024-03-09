import { useState } from "react";

import "./App.css";
import Counter from "./components/counter/Counter.js";
import SearchForm from "./components/searchform/SearchForm.js";
import GenreSelect from "./components/genreSelect/GenreSelect.js";
import MovieTile from "./components/movieTile/movieTile.js";
import MovieDetails from "./components/movieDetails/movieDetails.js";
import SortControl from "./components/sortControl/sortControl.js";

function App() {
  const [filterText, setFilterText] = useState("");
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

  const onSearchForm = (event) => {
    event.preventDefault();
    console.log(filterText);
  };

  return (
    <div className="container montserrat-500">
      <div className="row top-buffer">
        <SortControl />
      </div>

      <MovieDetails />

      <div className="row top-buffer">
        <MovieTile />
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
