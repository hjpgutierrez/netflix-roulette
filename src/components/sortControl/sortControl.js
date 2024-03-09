export default function SortControl() {
  return (
    <>
      <div className="col-1">
        <label for="sortList" className="form-label">
          SORT BY
        </label>
      </div>
      <div className="col-2">
        <select id="sortList" className="form-select border-0">
          <option>Release Date</option>
          <option>Title</option>
        </select>
      </div>
    </>
  );
}
