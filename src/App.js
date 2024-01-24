// Import necessary modules
import React from "react";
import Navbar from "./Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { MenuItems } from "./Common/MenuItems";
import { Footer } from "./Common/Footer";


export default function App() {
  return (
    <div className="App">
      {/* Pass the MenuItems array as a prop to the Navbar component */}
      <Navbar menuItems={MenuItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  );
}
