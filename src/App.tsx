import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Construction from './components/Construction/Construction';
import Cafe from './components/Cafe/Cafe';
import Pizzeria from './components/Pizzeria/Pizzeria';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/construction" element={<Construction />} />
        <Route path="/cafe" element={<Cafe />} />
        <Route path="/pizzeria" element={<Pizzeria />} />
      </Routes>
    </Router>
  );
}

export default App;
