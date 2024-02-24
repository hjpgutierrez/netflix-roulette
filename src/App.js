import './App.css';
import Counter from './Counter.js';

function App() {
  return (
    <div className="container">
        <div className="row">
            <Counter initialValue={100} />
       </div>
    </div>
  );
}

export default App;
