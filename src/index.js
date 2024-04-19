import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
const App = function () {
  return (
    <div>
      <NavBar />
      <Home />
      <Footer/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
