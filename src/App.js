import { useState } from "react";

import "./App.css";
import Counter from "./components/Counter.js";
import SearchForm from "./components/SearchForm.js";
import GenreSelect from "./components/GenreSelect.js";

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
    <div className="container">
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
