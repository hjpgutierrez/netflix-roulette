import { useState, useEffect } from "react";
import axios from "axios";
import { movieMapper } from "../../utilities/Utility.js";
import SearchForm from "../searchform/SearchForm";
import SortControl from "../sortControl/SortControl.js";
import MovieTile from "../movieTile/MovieTile.js";
import MovieDetails from "../movieDetails/MovieDetails.js";

// Static values
const sortControlOptions = ["Release Date", "Title"];
const baseURL = "http://localhost:4000/movies";

const MovieListPage = () => {
  // States
  const [filterText, setFilterText] = useState();
  const [orderBy, setOrderBy] = useState(sortControlOptions[0]);
  const [activeGenre, setActiveGenre] = useState();
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState();

  useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response);
      setMovieList(movieMapper(response.data.data));
    });
  }, []);

  if (!movieList || movieList.length <= 0) return null;

  // Event Handlers
  const onSearchForm = (event) => {
    event.preventDefault();
    console.log(filterText);
  };

  const onChangeSortBy = (event) => {
    const value = event.target.value;
    setOrderBy(value);
  };

  const onCloseMovieDetails = () => {
    setSelectedMovie(undefined);
  };

  let jumboTron;
  if (selectedMovie) {
    jumboTron = (
      <MovieDetails movie={selectedMovie} onClose={onCloseMovieDetails} />
    );
  } else {
    jumboTron = (
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
    );
  }

  const listItems = movieList.map((movieItem) => (
    <div className="col-4" key={movieItem.name}>
      <MovieTile
        movie={movieItem}
        onClick={() => {
          setSelectedMovie(movieItem);
        }}
      />
    </div>
  ));

  const content = (
    <div className="container">
      {jumboTron}

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
        <div className="row mb-5">{listItems}</div>
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
