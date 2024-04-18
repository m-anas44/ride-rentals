import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./layout/NavBar";
import About from "./pages/About";
const App = function () {
  return (
    <div>
      <NavBar />
<About />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
