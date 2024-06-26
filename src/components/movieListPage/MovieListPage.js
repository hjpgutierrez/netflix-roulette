import { useState, useEffect } from "react";
import { useSearchParams, useNavigate, Outlet } from "react-router-dom";
import axios from "axios";
import { movieMapperArray } from "../../utilities/Utility.js";
import SortControl from "../sortControl/SortControl.js";
import MovieTile from "../movieTile/MovieTile.js";
import GenreFilter from "../genreFilter/GenreFilter.js";

// Static values
const sortControlOptions = ["Release Date", "Title"];
const fixedGenres = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Horror",
];
const baseURL = "http://localhost:4000/movies";

const MovieListPage = () => {
  // States
  let [searchParams, setSearchParams] = useSearchParams();

  const [filterText, setFilterText] = useState(
    searchParams.get("query") != null ? searchParams.get("query") : ""
  );
  const [orderBy, setOrderBy] = useState(
    searchParams.get("orderby") != null
      ? searchParams.get("orderby")
      : sortControlOptions[0]
  );
  const [activeGenre, setActiveGenre] = useState(
    searchParams.get("genre") != null ? searchParams.get("genre") : ""
  );

  const getCurrentQueryParams = () => {
    let currentQueryParams = `?`;
    for (const entry of searchParams.entries()) {
      const [param, value] = entry;
      currentQueryParams += `${param}=${value}&`;
    }

    return currentQueryParams;
  };

  const getSortByValue = (value) =>
    value === "Title" ? "title" : "release_date";

  const getUrlRequest = () => {
    let dict = {
      search: "",
      searchBy: "",
      filter: "",
      sortBy: getSortByValue(orderBy),
      sortOrder: "desc",
    };

    let tempUrl = `${baseURL}?`;

    if (filterText !== null && filterText !== "" && filterText !== undefined) {
      dict.search = filterText;
      dict.searchBy = "title";
    }

    if (
      activeGenre !== null &&
      activeGenre !== "" &&
      activeGenre !== undefined
    ) {
      dict.filter = activeGenre;
    }

    for (var key in dict) {
      tempUrl += `${key}=${dict[key]}&`;
    }

    tempUrl += `limit=30`;

    return tempUrl;
  };

  const [movieList, setMovieList] = useState([]);
  const [urlRequest, setUrlRequest] = useState(getUrlRequest());
  const [totalAmount, setTotalAmount] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(getUrlRequest()).then((response) => {
      setMovieList(movieMapperArray(response.data.data));
      setTotalAmount(response.data.totalAmount);
    });
  }, [urlRequest, activeGenre, orderBy]);

  if (!movieList || movieList.length <= 0) return null;

  // Event Handlers
  const onSearchForm = (event) => {
    event.preventDefault();
    setSearchParams({
      query: filterText,
      genre: activeGenre,
      orderby: orderBy,
    });
    setUrlRequest(getUrlRequest());
  };

  const onChangeSortBy = (event) => {
    const value = event.target.value;
    setOrderBy(value);
    setSearchParams({
      query: filterText,
      genre: activeGenre,
      orderby: value,
    });
    setUrlRequest(getUrlRequest());
  };

  const listItems = movieList.map((movieItem) => (
    <div className="col-4" key={movieItem.id}>
      <MovieTile
        movie={movieItem}
        onClick={() => {
          navigate("/" + movieItem.id + getCurrentQueryParams());
        }}
      />
    </div>
  ));

  const content = (
    <div className="container">
      <Outlet context={[filterText, onSearchForm, setFilterText]} />

      <div className="mt-4 p-5 movieListContainer text-white">
        <div className="row">
          <div className="col-8">
            <GenreFilter
              genresToDisplay={fixedGenres}
              activeGenre={activeGenre}
              onClick={(genre) => {
                console.log(genre);
                setActiveGenre(genre);
                setSearchParams({
                  query: filterText,
                  genre: genre,
                  orderby: orderBy,
                });
                setUrlRequest(getUrlRequest());
              }}
            />
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
            <b>{totalAmount}</b> movies found
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
