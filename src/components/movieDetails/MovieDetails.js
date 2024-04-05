import MovieImage from "../movieImage/MovieImage.js";
import { createUseStyles } from "react-jss";
import { joinGenres } from "../../utilities/Utility.js";

const useStyles = createUseStyles({
  ratingStyle: {
    border: "1px #b2b2b2 solid",
    borderRadius: "40px",
    padding: "5px",
    fontSize: "large",
    width: "fit-content",
    color: "#FFFFFF",
  },
  redText: {
    color: "#F65261",
  },
  whiteText: {
    color: "#FFFFFF",
  },
  greyText: {
    color: "#939393",
    textAlign: "Justify",
  },
  myTile: { backgroundColor: "#424242", padding: "5px" },
});

export default function MovieDetails({ movie }) {
  const classes = useStyles();

  return (
    <div className={`${classes.myTile} row`}>
      <div className="col-sm-3">
        <MovieImage urlImage={movie.urlImage} />
      </div>
      <div className="col-sm-9">
        <div className="row">
          <div className="col-6">
            <h1 className={classes.whiteText}>{movie.name}</h1>
          </div>
          <div className="col-6 float-start">
            <p className={classes.ratingStyle}>{movie.rating}</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 float-start">
            <p className={`${classes.greyText} card-text`}>
              {joinGenres(movie.genres)}
            </p>
          </div>
        </div>
        <div className={`row ${classes.redText}`}>
          <div className="col-2">{movie.releaseYear}</div>
          <div className="col-4 float-start">{movie.durationResume}</div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={`${classes.greyText} card-text`}>
              {movie.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
