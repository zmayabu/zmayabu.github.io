import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Biography from './pages/Biography'; 
import Portfolio from './pages/Portfolio';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <footer className="footer">
        <nav className="navigation">
        <ul>
        <li><a href="/home">Home</a></li>
          <li><a href="/biography">Biography</a></li>
          <li><a href="/portfolio">Portfolio</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <p>© 2024: Zully Maya</p>
      </footer>
    </div>
  );
}

export default App;
