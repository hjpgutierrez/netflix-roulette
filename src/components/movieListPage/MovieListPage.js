import { useState } from "react";
import SearchForm from "../searchform/SearchForm";
import SortControl from "../sortControl/SortControl.js";
import MovieTile from "../movieTile/MovieTile.js";

// Static values
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

const MovieListPage = () => {
  // States
  const [filterText, setFilterText] = useState();
  const [orderBy, setOrderBy] = useState(sortControlOptions[0]);

  // Event Handlers
  const onSearchForm = (event) => {
    event.preventDefault();
    console.log(filterText);
  };

  const onChangeSortBy = (event) => {
    const value = event.target.value;
    setOrderBy(value);
  };

  const handleCardClick = (event) => {
    const value = event.target.value;
    alert(`Playing ${value}`);
  };

  const content = (
    <div className="container">
      <div className="bg-opacity mt-4 p-5 text-white">
        <div className="content text-white">
          <div className="row mb-5">
            <div className="col-6">
              <span className="textlogo">netflix</span>
              <span className="textlogo2">roulette</span>
            </div>
            <div className="col-6 addmoviebuttoncolumn">
              <div className="addmoviebutton">+ ADD MOVIE</div>
            </div>
          </div>
          <div className="row mb-3 ">
            <div className="col-md-8 offset-md-1">
              <h1 className="ml-3 mb-3">FIND YOUR MOVIE</h1>
            </div>
          </div>
          <SearchForm
            filterText={filterText}
            onSearch={onSearchForm}
            onFilterTextChange={setFilterText}
          />
        </div>
      </div>
      <div className="mt-4 p-5 movieListContainer text-white">
        <div className="row">
          <div className="col-8">
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  ALL
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link">HORROR</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">CRIME</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">DOCUMENTARY</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">SCI-FY</a>
              </li>
            </ul>
          </div>
          <div className="col-4 sortBy">
            <SortControl
              options={sortControlOptions}
              currentOption={orderBy}
              onChange={onChangeSortBy}
            />
          </div>
          <hr></hr>
        </div>
        <div className="row p-3">
          <div className="col lead">
            <b>39</b> movies found
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-4">
            <MovieTile movie={exampleMovie} onClick={handleCardClick} />
          </div>
          <div className="col-4">
            <MovieTile movie={exampleMovie} onClick={handleCardClick} />
          </div>
          <div className="col-4">
            <MovieTile movie={exampleMovie} onClick={handleCardClick} />
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-4">
            <MovieTile movie={exampleMovie} onClick={handleCardClick} />
          </div>
          <div className="col-4">
            <MovieTile movie={exampleMovie} onClick={handleCardClick} />
          </div>
        </div>
      </div>

      <div className="row justify-content-md-center p-3 footer">
        <div className="col-md-auto">
          <span className="textlogo">netflix</span>
          <span className="textlogo2">roulette</span>
        </div>
      </div>
    </div>
  );

  return content;
};

export default MovieListPage;
