export default function SearchForm({
  filterText,
  onSearch,
  onFilterTextChange,
}) {
  return (
    <form>
      <div className="row top-buffer">
        <div className="col-9">
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
    </form>
  );
}
