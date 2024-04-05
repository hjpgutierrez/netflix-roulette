import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  myImage: {
    height: 300,
    width: "100%",
  },
});

export default function MovieImage({ urlImage }) {
  const classes = useStyles();
  return (
    <img
      src={urlImage}
      className={`card-img-top ${classes.myImage}`}
      alt="..."
    />
  );
}
