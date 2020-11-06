import "./css/App.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from './history';
import "./css/style.css";

import HomePage from "./components/templates/HomePage";
import OrdersPage from "./components/templates/OrdersPage";

function App() {
  const endpoint = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
  console.log("app data", endpoint);
  const [status, setStatus] = useState(0);
  const [information, setInformation] = useState([]);
  useEffect(() => {
    console.log("check");
    const getData = async () => {
      try {
        const response = await fetch(endpoint, { mode: "cors" });
        const data = await response.json();
        setInformation(data);
        setStatus(1);
      } catch {
        setStatus(2);
      }
    };
    getData();
  }, []);

  return (
    <Router history={history}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <HomePage />} />
          <Route path="/ordersPage" render={() => <OrdersPage/>} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
