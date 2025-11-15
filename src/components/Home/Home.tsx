import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Salvall Prototypes</h1>
        <p className="subtitle">Professional Website Templates for Your Business</p>
      </header>
      
      <main className="prototypes-grid">
        <Link to="/construction" className="prototype-card construction-card">
          <div className="card-content">
            <h2>🏗️ Construction</h2>
            <p>Professional website for construction companies</p>
            <span className="view-demo">View Demo →</span>
          </div>
        </Link>

        <Link to="/cafe" className="prototype-card cafe-card">
          <div className="card-content">
            <h2>☕ Café</h2>
            <p>Warm and inviting website for cafés</p>
            <span className="view-demo">View Demo →</span>
          </div>
        </Link>

        <Link to="/pizzeria" className="prototype-card pizzeria-card">
          <div className="card-content">
            <h2>🍕 Pizzeria</h2>
            <p>Delicious website for pizzerias and restaurants</p>
            <span className="view-demo">View Demo →</span>
          </div>
        </Link>
      </main>

      <footer className="home-footer">
        <p>Select a prototype to view a live demo</p>
      </footer>
    </div>
  );
};

export default Home;
