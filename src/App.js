import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homeuser from "./pages/Homeuser";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import ErrorPage from "./components/error/ErrorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homeuser />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
             <Route path="*" element={<ErrorPage />} />

      </Routes>
    </Router>
  );
}



export default App;
