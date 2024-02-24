import { useState } from 'react';

import './App.css';
import Counter from './Counter.js';
import SearchForm from './SearchForm.js';

function App() {

  const [filterText, setFilterText] = useState('');

  return (
    <div className="container">
        <div className="row">
            <Counter initialValue={100} />
       </div>
       <div className="row">
            <SearchForm filterText={filterText}  onSearch={(event) => { event.preventDefault();console.log(filterText);}} onFilterTextChange={setFilterText} />
       </div>
    </div>
  );
}

export default App;
