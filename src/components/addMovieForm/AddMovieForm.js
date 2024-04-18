import Dialog from "../dialog/Dialog";
import MovieForm from "../movieForm/MovieForm";

const AddMovieForm = (props) => {
  return (
    <Dialog {...props}>
      <MovieForm />
    </Dialog>
  );
};

export default AddMovieForm;
