// Import necessary modules
import React from "react";
import Navbar from "./Common/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import { MenuItems } from "./Common/MenuItems";
import { Footer } from "./Common/Footer";
import Service from "./routes/Service";
import TechT from "./routes/services/TechT";
import Portfolio from "./routes/Portfolio";


export default function App() {
  return (
    <div className="App">
      {/* Pass the MenuItems array as a prop to the Navbar component */}
      <Navbar menuItems={MenuItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/TechT" element={<TechT/>}/>
        <Route path="/services/service" element={<Service/>}/>
        <Route path="/portfolio" element={<Portfolio />} />

      </Routes>
      <Footer/>
    </div>
  );
}
