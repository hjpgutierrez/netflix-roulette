import MovieImage from "../movieImage/movieImage.js";
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

export default function MovieTile() {
  const classes = useStyles();
  return (
    <div className={`${classes.myCard} card border-0`}>
      <MovieImage />
      <div className="card-body">
        <h5 className={`${classes.myTextColor} card-title`}>
          Spectral
          <span className={`${classes.yearStyle} card-text float-end`}>
            2016
          </span>
        </h5>
        <p className={`${classes.myTextColor} card-text`}>
          Crime & Documentary
        </p>
      </div>
    </div>
  );
}
