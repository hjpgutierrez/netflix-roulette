import MovieImage from "../movieImage/MovieImage.js";
import { createUseStyles } from "react-jss";
import { joinGenres } from "../../utilities/Utility.js";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  yearStyle: {
    border: "1px #353535 solid",
    borderRadius: "4px",
    padding: "4px 10px 4px 10px ",
    fontSize: "medium",
  },
  myCard: {
    width: "280px",
    backgroundColor: "#424242",
  },
  myTextColor: {
    color: "#939393",
  },
});

export default function MovieTile({ movie, onClick }) {
  const classes = useStyles();

  return (
    <>
      <div className={`${classes.myCard} card border-0`}>
        <Link
          to={`/${movie.id}/edit`}
          className="edit-icon addmoviebutton"
          title="Edit"
        >
          <svg
            className="feather feather-edit"
            fill="none"
            height="24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          EDIT MOVIE
        </Link>
        <MovieImage urlImage={movie.urlImage} />
        <div className="card-body" onClick={(movie) => onClick(movie)}>
          <h5 className={`${classes.myTextColor} card-title`}>
            {movie.name}
            <small className={`${classes.yearStyle} card-text float-end`}>
              {movie.releaseYear}
            </small>
          </h5>
          <small className={`${classes.myTextColor} card-text`}>
            {joinGenres(movie.genres)}
          </small>
        </div>
      </div>
    </>
  );
}
