export default function SearchBar({ filterText, onSearch, onFilterTextChange }) {
    return (
      <form>
        <input 
          type="text" 
          value={filterText} 
          onChange={(e) => onFilterTextChange(e.target.value)}
          placeholder="Search..."/>
        <button  className="btn btn-danger btn-lg" onClick={onSearch} >
            
          Search
        </button>
      </form>
    );
  }