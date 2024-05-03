import { Link, useOutletContext } from "react-router-dom";

export default function SearchForm() {
  const [filterText, onSearch, onFilterTextChange] = useOutletContext();
  return (
    <div className="bg-opacity mt-4 p-5 text-white">
      <div className="content text-white">
        <div className="row mb-5">
          <div className="col-6">
            <span className="textlogo">netflix</span>
            <span className="textlogo2">roulette</span>
          </div>
          <div className="col-6 addmoviebuttoncolumn">
            <Link to={`/add`} className="addmoviebutton">
              + ADD MOVIE
            </Link>
          </div>
        </div>
        <div className="row mb-3 ">
          <div className="col-md-8 offset-md-1">
            <h1 className="ml-3 mb-3">FIND YOUR MOVIE</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 offset-md-1">
            <div className="form-group">
              <input
                className="form-control"
                placeholder="What do you want to watch?"
                type="text"
                value={filterText}
                onChange={(e) => onFilterTextChange(e.target.value)}
              />
            </div>
          </div>
          <div className="col-3">
            <button className="btn btn-danger btn-lg" onClick={onSearch}>
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
