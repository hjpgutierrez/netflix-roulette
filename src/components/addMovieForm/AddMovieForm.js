import Dialog from "../dialog/Dialog";
import MovieForm from "../movieForm/MovieForm";

const AddMovieForm = (props) => {
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Dialog {...props}>
      <MovieForm movie={null} onSubmit={onSubmit} />
    </Dialog>
  );
};

export default AddMovieForm;
