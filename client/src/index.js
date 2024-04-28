import React from "react";
import ReactDOM from "react-dom";
import NavBar from "./layout/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Footer from "./layout/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import AddService from "./pages/AddService";
const App = function () {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
        <Route path="/addService" Component={AddService} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
