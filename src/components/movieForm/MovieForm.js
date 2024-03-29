import GenreSelect from "../genreSelect/GenreSelect";

const displayList = [
  { name: "Crime", id: 1 },
  { name: "Documentary", id: 2 },
  { name: "Horror", id: 3 },
  { name: "Comedy", id: 4 },
];

function MovieForm({ movie, handleSubmit }) {
  let movieEdit = {};
  if (movie) {
    movieEdit = movie;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-8">
          <label htmlFor="title" className="form-label">
            TITLE
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            placeholder="Movie name"
            defaultValue={movieEdit.name}
          />
        </div>
        <div className="col-4">
          <label htmlFor="releaseDate" className="form-label">
            RELEASE DATE
          </label>
          <input
            type="text"
            className="form-control"
            id="releaseDate"
            name="releaseDate"
            placeholder="Select Date"
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
            name="url"
            placeholder="https://"
            defaultValue={movieEdit.urlImage}
          />
        </div>
        <div className="col-4">
          <label htmlFor="releaseDate" className="form-label">
            RATING
          </label>
          <input
            type="text"
            className="form-control"
            id="rating"
            name="rating"
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
          <label htmlFor="runtime" className="form-label">
            RUNTIME
          </label>
          <input
            type="text"
            className="form-control"
            id="runtime"
            name="runtime"
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
            name="description"
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
        <input type="submit" value="SUBMIT" className="btn btn-danger"></input>
      </div>
    </form>
  );
}

export default MovieForm;
