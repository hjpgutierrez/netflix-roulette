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
      <div
        className={`${classes.myCard} card border-0`}
        onClick={(movie) => onClick(movie)}
      >
        <MovieImage urlImage={movie.urlImage} />

        <div className="card-body">
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
        <Link to={`/${movie.id}/edit`} className="addmoviebutton">
          EDIT MOVIE
        </Link>
      </div>
    </>
  );
}
