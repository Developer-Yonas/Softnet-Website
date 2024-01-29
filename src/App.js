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
import TechnologyTraining from "./routes/services/TechnologyTraining";
import Infrastructure from "./routes/services/Infrastructure";
import Softwaredevelopment from "./routes/services/Softwaredevelopment";
import ITO from "./routes/services/ITO";
import Portfolio from "./routes/Portfolio";
import Privacy from "./Common/Privacy";
import Terms from "./Common/Terms";



export default function App() {
  return (
    <div className="App">
      {/* Pass the MenuItems array as a prop to the Navbar component */}
      <Navbar menuItems={MenuItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/TechnologyTraining" element={<TechnologyTraining/>}/>
        <Route path="/services/Infrastructure" element={<Infrastructure/>}/>
        <Route path="/services/Softwaredevelopment" element={<Softwaredevelopment/>}/>
        <Route path="/services/ITO" element={<ITO/>}/>
        <Route path="/services/service" element={<Service/>}/>
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/common/Privacy" element={<Privacy />} />
        <Route path="/common/Terms" element={<Terms />} />
      </Routes>
      <Footer/>
    </div>
  );
}
