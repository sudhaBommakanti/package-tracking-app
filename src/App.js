import './css/App.css';

import { useState, useEffect } from "react";

import SearchPage from './components/SearchPage';

function App() {
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  console.log("app data",endpoint);
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  useEffect( () => {
  console.log("check");
  const getData = async () => {
      try {
        const response = await fetch(endpoint , {mode :"cors"});
        const data = await response.json();
        setInformation(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }
      
    };
    getData();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
          <h1>{status}</h1>
          <SearchPage information= {information}/>
      </header>
    </div>
  );
}

export default App;
