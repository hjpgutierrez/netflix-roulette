export default function SearchForm({
  filterText,
  onSearch,
  onFilterTextChange,
}) {
  return (
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
  );
}
