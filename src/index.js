import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

import MovieListPage from "./components/movieListPage/MovieListPage.js";
import AddMovieForm from "./components/addMovieForm/AddMovieForm.js";
import MovieShellDetails from "./components/movieShellDetails/movieShellDetails.js";
import SearchForm from "./components/searchform/SearchForm.js";
import ErrorPage from "./components/errorPage/ErrorPage.js";
import EditMovieForm from "./components/editMovieForm/EditMovieForm.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MovieListPage />}>
          <Route path="search" element={<SearchForm />} />
          <Route path=":movieId" element={<MovieShellDetails />} />
          <Route path=":movieId/edit" element={<EditMovieForm />} />
          <Route path="add" element={<AddMovieForm />} />
        </Route>
        <Route path="*" element={ErrorPage}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
