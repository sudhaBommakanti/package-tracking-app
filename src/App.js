import './css/App.css';

import SearchPage from './components/SearchPage';
import information from './information.json';

function App() {
  console.log("app data",information);
  return (
    <div className="App">
      <header className="App-header">
          <SearchPage information= {information}/>
      </header>
    </div>
  );
}

export default App;
