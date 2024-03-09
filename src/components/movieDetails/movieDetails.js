import MovieImage from "../movieImage/movieImage.js";
import { createUseStyles } from "react-jss";

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

export default function MovieDetails() {
  const classes = useStyles();

  return (
    <div className={`${classes.myTile} row`}>
      <div className="col-sm-3">
        <MovieImage />
      </div>
      <div className="col-sm-8">
        <div className="row">
          <div className="col-6">
            <h1 className={classes.whiteText}>Spectral Spectral Spectral</h1>
          </div>
          <div className="col-6 float-start">
            <p className={classes.ratingStyle}>8.9</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 float-start">
            <p className={`${classes.greyText} card-text`}>
              Action & Adventure
            </p>
          </div>
        </div>
        <div className={`row ${classes.redText}`}>
          <div className="col-2">1994</div>
          <div className="col-4 float-start">2H 34min</div>
        </div>
        <div className="row">
          <div className="col-12">
            <p className={`${classes.greyText} card-text`}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
