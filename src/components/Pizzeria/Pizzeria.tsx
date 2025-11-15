import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Pizzeria.css';

const Pizzeria: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pizzeria-container">
      <nav className="pizzeria-nav">
        <div className="nav-content">
          <Link to="/" className="back-link">← Back to Prototypes</Link>
          <h2 className="company-name">Bella Napoli Pizzeria</h2>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Menu</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="pizzeria-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Authentic Italian Pizza</h1>
          <p>Made with Passion, Served with Love</p>
          <a href="#contact" className="cta-button">Order Now</a>
        </div>
      </section>

      <section id="about" className="pizzeria-about">
        <div className="about-content">
          <h2>Benvenuti!</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                At Bella Napoli, we bring the authentic taste of Naples straight to your table. 
                Our pizzas are crafted using traditional methods passed down through generations, 
                with hand-tossed dough, San Marzano tomatoes, and the finest ingredients imported 
                directly from Italy.
              </p>
              <p>
                Founded in 2008 by the Rossi family, our pizzeria has become a beloved neighborhood 
                destination. Our wood-fired oven, imported from Naples, reaches the perfect 
                temperature to create that signature crispy-yet-chewy crust that makes Neapolitan 
                pizza world-famous.
              </p>
              <div className="about-features">
                <div className="feature-card">
                  <div className="feature-icon">🔥</div>
                  <h4>Wood-Fired Oven</h4>
                  <p>Traditional cooking at 900°F</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">🇮🇹</div>
                  <h4>Italian Ingredients</h4>
                  <p>Imported from Italy</p>
                </div>
                <div className="feature-card">
                  <div className="feature-icon">👨‍🍳</div>
                  <h4>Expert Chefs</h4>
                  <p>Trained in Naples</p>
                </div>
              </div>
            </div>
            <div className="about-menu">
              <h3>Featured Pizzas</h3>
              <div className="menu-section">
                <div className="menu-item">
                  <div className="item-header">
                    <span className="item-name">Margherita</span>
                    <span className="item-price">$14</span>
                  </div>
                  <p className="item-description">Classic tomato, mozzarella, basil</p>
                </div>
                <div className="menu-item">
                  <div className="item-header">
                    <span className="item-name">Quattro Formaggi</span>
                    <span className="item-price">$16</span>
                  </div>
                  <p className="item-description">Four cheese blend, white sauce</p>
                </div>
                <div className="menu-item">
                  <div className="item-header">
                    <span className="item-name">Diavola</span>
                    <span className="item-price">$15</span>
                  </div>
                  <p className="item-description">Spicy salami, chili flakes</p>
                </div>
                <div className="menu-item">
                  <div className="item-header">
                    <span className="item-name">Prosciutto e Rucola</span>
                    <span className="item-price">$17</span>
                  </div>
                  <p className="item-description">Prosciutto, arugula, parmesan</p>
                </div>
                <div className="menu-item">
                  <div className="item-header">
                    <span className="item-name">Capricciosa</span>
                    <span className="item-price">$16</span>
                  </div>
                  <p className="item-description">Ham, mushrooms, artichokes, olives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="pizzeria-gallery">
        <h2>Our Delicious Creations</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #D32F2F 0%, #B71C1C 100%)'}}>
              <span>🍕 Margherita</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #E53935 0%, #C62828 100%)'}}>
              <span>🍕 Pepperoni</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #F44336 0%, #D32F2F 100%)'}}>
              <span>🍕 Quattro Formaggi</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #EF5350 0%, #E53935 100%)'}}>
              <span>🍕 Vegetariana</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #E57373 0%, #EF5350 100%)'}}>
              <span>🍕 Prosciutto</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #EF9A9A 0%, #E57373 100%)'}}>
              <span>🍕 Diavola</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="pizzeria-contact">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <p className="contact-intro">Questions? Reservations? We're here to help!</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Visit Us</h3>
              <div className="info-item">
                <strong>📍 Address:</strong>
                <p>789 Pizza Street, Little Italy, LI 13579</p>
              </div>
              <div className="info-item">
                <strong>📞 Phone:</strong>
                <p>(555) 246-8135</p>
              </div>
              <div className="info-item">
                <strong>✉️ Email:</strong>
                <p>ciao@bellanapoli.com</p>
              </div>
              <div className="info-item">
                <strong>🕐 Hours:</strong>
                <p>
                  Tuesday - Thursday: 11:00 AM - 10:00 PM<br/>
                  Friday - Saturday: 11:00 AM - 11:00 PM<br/>
                  Sunday: 12:00 PM - 9:00 PM<br/>
                  Monday: Closed
                </p>
              </div>
              <div className="info-item">
                <strong>🚚 Delivery:</strong>
                <p>Available via UberEats & DoorDash</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                placeholder="Your message or special requests..."
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="submit-button">
                {submitted ? '✓ Message Sent!' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="pizzeria-footer">
        <p>&copy; 2024 Bella Napoli Pizzeria. Fatto con amore ❤️</p>
      </footer>
    </div>
  );
};

export default Pizzeria;
