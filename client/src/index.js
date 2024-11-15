import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client"; // Updated import
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

// Get the root element from the DOM
const rootElement = document.getElementById("root");

// Create a root and render the application
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
