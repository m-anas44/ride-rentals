import React, { StrictMode } from "react";
import ReactDOM from "react-dom"; // Import   
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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addService" element={<AddService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
