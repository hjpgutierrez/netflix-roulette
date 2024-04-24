import GenreSelect from "../genreSelect/GenreSelect";
import { useForm } from "react-hook-form";

const displayList = [
  { name: "Crime", id: 1 },
  { name: "Documentary", id: 2 },
  { name: "Horror", id: 3 },
  { name: "Comedy", id: 4 },
];

var ISO_8601 =
  /^\d{4}(-\d\d(-\d\d(T\d\d:\d\d(:\d\d)?(\.\d+)?(([+-]\d\d:\d\d)|Z)?)?)?)?$/i;

function MovieForm({ movie, onSubmit, setSelectedGenres }) {
  let movieEdit = {};
  if (movie) {
    movieEdit = movie;
  }

  const {
    register,
    handleSubmit,
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
            maxLength={30}
            {...register("name", { required: true })}
            id="title"
            placeholder="Movie name"
            defaultValue={movieEdit.name}
          />
          {errors.name && (
            <span className="invalid-input">This field is required</span>
          )}
        </div>
        <div className="col-4">
          <label htmlFor="releaseDate" className="form-label">
            RELEASE DATE
          </label>
          <input
            type="text"
            className="form-control"
            maxLength={10}
            minLength={10}
            id="releaseDate"
            {...register("releaseDate", { required: true, pattern: ISO_8601 })}
            placeholder="YYYY-MM-DD"
            defaultValue={movieEdit.releaseYear}
          />
          {errors.releaseDate && (
            <span className="invalid-input">This field is required</span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <label htmlFor="url" className="form-label">
            MOVIE URL
          </label>
          <input
            type="url"
            className="form-control"
            id="url"
            {...register("urlImage", { required: true })}
            placeholder="https://"
            defaultValue={movieEdit.urlImage}
          />
          {errors.urlImage && (
            <span className="invalid-input">This field is required</span>
          )}
        </div>
        <div className="col-4">
          <label htmlFor="rating" className="form-label">
            RATING
          </label>
          <input
            type="number"
            min={1}
            max={10}
            maxLength={2}
            className="form-control"
            id="rating"
            {...register("rating", {
              required: true,
              min: 1,
              max: 10,
              maxLength: 2,
            })}
            placeholder="7.8"
            defaultValue={movieEdit.rating}
          />
          {errors.rating && (
            <span className="invalid-input">This field is required</span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <label htmlFor="genre" className="form-label">
            GENRE
          </label>
          <GenreSelect
            {...register("genre")}
            displayList={displayList}
            onSelect={(selectedList, selectedItem) => {
              console.log(selectedList);
              setSelectedGenres(selectedList);
            }}
            selectedGenre={movieEdit.genres}
          />
        </div>
        <div className="col-4">
          <label htmlFor="durationResume" className="form-label">
            RUNTIME
          </label>
          <input
            type="number"
            max={999}
            min={1}
            maxLength={3}
            className="form-control"
            id="durationResume"
            {...register("durationResume", {
              required: true,
              maxLength: 3,
              min: 1,
              max: 999,
            })}
            placeholder="minutes"
            defaultValue={movieEdit.durationResume}
          />
          {errors.durationResume && (
            <span className="invalid-input">This field is required</span>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <label htmlFor="description" className="form-label">
            OVERVIEW
          </label>
          <textarea
            className="form-control"
            maxLength={1000}
            max={1000}
            minLength={20}
            id="description"
            {...register("description", {
              required: true,
              maxLength: 1000,
              minLength: 20,
            })}
            rows="3"
            placeholder="Movie description"
            defaultValue={movieEdit.description}
          ></textarea>
          {errors.description && (
            <span className="invalid-input">This field is required</span>
          )}
        </div>
      </div>
      <div className="modal-footer">
        <button type="reset" className="btn btn-secondary">
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
