export default function SortControl({ options, currentOption, onChange }) {
  const listItems = options.map((item) => <option key={item}>{item}</option>);
  return (
    <>
      <div className="col-1">
        <label htmlFor="sortList" className="form-label">
          SORT BY
        </label>
      </div>
      <div className="col-2">
        <select
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
