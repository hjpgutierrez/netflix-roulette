import MovieImage from "../movieImage/MovieImage.js";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  yearStyle: {
    border: "1px #b2b2b2 solid",
    borderRadius: "4px",
    padding: "4px",
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
    <div
      className={`${classes.myCard} card border-0`}
      onClick={(movie) => onClick(movie)}
    >
      <MovieImage urlImage={movie.urlImage} />
      <div className="card-body">
        <h5 className={`${classes.myTextColor} card-title`}>
          {movie.name}
          <span className={`${classes.yearStyle} card-text float-end`}>
            {movie.releaseYear}
          </span>
        </h5>
        <p className={`${classes.myTextColor} card-text`}>
          {movie.genres.join(", ")}
        </p>
      </div>
    </div>
  );
}
