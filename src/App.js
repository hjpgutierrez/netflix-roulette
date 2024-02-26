import { useState } from 'react';

import './App.css';
import Counter from './Counter.js';
import SearchForm from './SearchForm.js';
import GenreSelect from './GenreSelect.js';

function App() {

  const [filterText, setFilterText] = useState('');
  let displayList = [{name: 'Crime', id: 1},{name: 'Documentary', id: 2},
    {name: 'Horror', id: 3}, {name: 'Comedy', id: 4}];
  let selectedGenre = [{name: 'Crime', id: 1},{name: 'Horror', id: 3}];

  return (
    <div className="container">
        <div className="row">
            <Counter initialValue={100} />
       </div>
       <div className="row">
            <SearchForm filterText={filterText}  
            onSearch={(event) => { event.preventDefault();console.log(filterText);}} 
            onFilterTextChange={setFilterText} />
       </div>
       <div className="row">
            <GenreSelect displayList={displayList}  
            onSelect={(selectedItem) => { console.log(`Genre was added`) }} 
            selectedGenre={selectedGenre} />
       </div>
    </div>
  );
}

export default App;
