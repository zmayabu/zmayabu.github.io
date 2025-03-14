import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
 import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
 import Contact from "./pages/Contact";
 import Navbar from "./components/Navbar";
// import Footer from "./components/Footer"; 
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Contact />}></Route>
      </Routes>
      <footer className="footer">
        <nav className="navigation">
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/about">About Me</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            {/* <li><a href="/resume">Resume</a></li> */}
          </ul>
        </nav>
        <p>© 2024: Zully Maya</p>
      </footer>
    </div>
  );
}

export default App;

