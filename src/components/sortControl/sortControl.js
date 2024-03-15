export default function SortControl({ options, currentOption, onChange }) {
  const listItems = options.map((item) => (
    <option key={item} data-testid="select-option">
      {item}
    </option>
  ));
  return (
    <>
      <div className="col-2">
        <label htmlFor="sortList" className="form-label  float-end">
          SORT BY
        </label>
      </div>
      <div className="col-2">
        <select
          id="sortList"
          data-testid="select"
          value={currentOption}
          className="form-select border-0"
          onChange={onChange}
        >
          {listItems}
        </select>
      </div>
    </>
  );
}
