import GenreSelect from "../genreSelect/GenreSelect";
import { useForm } from "react-hook-form";

const displayList = [
  { name: "Crime", id: 1 },
  { name: "Documentary", id: 2 },
  { name: "Horror", id: 3 },
  { name: "Comedy", id: 4 },
];

function MovieForm({ movie, onSubmit }) {
  let movieEdit = {};
  if (movie) {
    movieEdit = movie;
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-8">
          <label htmlFor="name" className="form-label">
            TITLE
          </label>
          <input
            type="text"
            className="form-control"
            {...register("name", { required: true })}
            id="title"
            placeholder="Movie name"
            defaultValue={movieEdit.name}
          />
          {errors.name && <span>This field is required</span>}
        </div>
        <div className="col-4">
          <label htmlFor="releaseDate" className="form-label">
            RELEASE DATE
          </label>
          <input
            type="text"
            className="form-control"
            id="releaseDate"
            {...register("releaseDate")}
            placeholder="MM/DD/YYYY"
            defaultValue={movieEdit.releaseYear}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <label htmlFor="url" className="form-label">
            MOVIE URL
          </label>
          <input
            type="text"
            className="form-control"
            id="url"
            {...register("urlImage")}
            placeholder="https://"
            defaultValue={movieEdit.urlImage}
          />
        </div>
        <div className="col-4">
          <label htmlFor="rating" className="form-label">
            RATING
          </label>
          <input
            type="text"
            className="form-control"
            id="rating"
            {...register("rating")}
            placeholder="7.8"
            defaultValue={movieEdit.rating}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <label htmlFor="genre" className="form-label">
            GENRE
          </label>
          <GenreSelect
            displayList={displayList}
            onSelect={(selectedList, selectedItem) => {
              console.log(selectedList);
            }}
            selectedGenre={movieEdit.genres}
          />
        </div>
        <div className="col-4">
          <label htmlFor="durationResume" className="form-label">
            RUNTIME
          </label>
          <input
            type="text"
            className="form-control"
            id="durationResume"
            {...register("durationResume")}
            placeholder="minutes"
            defaultValue={movieEdit.durationResume}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            OVERVIEW
          </label>
          <textarea
            className="form-control"
            id="description"
            {...register("description")}
            rows="3"
            placeholder="Movie description"
            defaultValue={movieEdit.description}
          ></textarea>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary">
          RESET
        </button>
        <input
          type="submit"
          name="submit"
          value="SUBMIT"
          className="btn btn-danger"
        ></input>
      </div>
    </form>
  );
}

export default MovieForm;
