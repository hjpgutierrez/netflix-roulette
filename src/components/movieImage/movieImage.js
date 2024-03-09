import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myImage: {
    height: 300,
    width: "100%",
  },
});

export default function MovieImage() {
  const classes = useStyles();
  return (
    <img
      src="https://m.media-amazon.com/images/M/MV5BYWQxN2I1NjItMDVjMS00ZmJjLWIyYjItOWI2OGY5NTU1ZjI2L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTc3MjM3OTA@._V1_UY1200_CR86,0,630,1200_AL_.jpg"
      className={`card-img-top ${classes.myImage}`}
      alt="..."
    />
  );
}
