import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./layout/NavBar";
import About from "./pages/About";
import Home from "./pages/Home";
const App = function () {
  return (
    <div>
      <NavBar />
      <Home />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
