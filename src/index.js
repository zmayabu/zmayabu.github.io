import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // You can modify or create your custom styles here
import App from './App'; // We'll modify the App component next
import { BrowserRouter as Router } from 'react-router-dom'; // For routing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);
