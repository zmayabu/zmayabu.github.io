import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Biography />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />}></Route>
      </Routes>
      <footer className="footer">
        <nav className="navigation">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/resume">Resume</a></li>
          </ul>
        </nav>
        <p>© 2024: Zully Maya</p>
      </footer>
    </div>
  );
}

export default App;
