import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Component1 from "./components/Component1";
import Nav from "./components/Nav";

import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Route path="/" component={Test}></Route> */}
        <Route path="/" component={Nav}></Route>
        <Route exact path="/" component={Home}></Route>

        <Route exact path="/component" component={Component1}></Route>
      </div>
    </Router>
  );
}

export default App;
