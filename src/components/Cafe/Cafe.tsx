import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Cafe.css';

const Cafe: React.FC = () => {
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
    <div className="cafe-container">
      <nav className="cafe-nav">
        <div className="nav-content">
          <Link to="/" className="back-link">← Back to Prototypes</Link>
          <h2 className="company-name">Cozy Corner Café</h2>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Gallery</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="cafe-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Where Every Cup Tells a Story</h1>
          <p>Artisanal Coffee & Fresh Pastries Daily</p>
          <a href="#contact" className="cta-button">Visit Us Today</a>
        </div>
      </section>

      <section id="about" className="cafe-about">
        <div className="about-content">
          <h2>Welcome to Cozy Corner</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                Nestled in the heart of the neighborhood, Cozy Corner Café is your home away from home. 
                Since 2010, we've been serving premium coffee and freshly baked goods in a warm, 
                welcoming atmosphere that invites you to relax, connect, and savor the moment.
              </p>
              <p>
                Our baristas are passionate about coffee, sourcing only the finest beans and crafting 
                each drink with care. Whether you're here for a quick espresso or planning to spend 
                the afternoon with a good book, we're delighted to be part of your day.
              </p>
              <div className="about-highlights">
                <div className="highlight">☕ Premium Coffee Beans</div>
                <div className="highlight">🥐 Fresh Daily Baking</div>
                <div className="highlight">📚 Cozy Reading Nooks</div>
                <div className="highlight">🌱 Organic Options</div>
              </div>
            </div>
            <div className="about-menu">
              <h3>Our Specialties</h3>
              <div className="menu-item">
                <span className="item-name">Cappuccino</span>
                <span className="item-price">$4.50</span>
              </div>
              <div className="menu-item">
                <span className="item-name">Caramel Latte</span>
                <span className="item-price">$5.00</span>
              </div>
              <div className="menu-item">
                <span className="item-name">Croissant</span>
                <span className="item-price">$3.50</span>
              </div>
              <div className="menu-item">
                <span className="item-name">Blueberry Muffin</span>
                <span className="item-price">$3.00</span>
              </div>
              <div className="menu-item">
                <span className="item-name">Avocado Toast</span>
                <span className="item-price">$7.50</span>
              </div>
              <div className="menu-item">
                <span className="item-name">House Blend Tea</span>
                <span className="item-price">$3.50</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="cafe-gallery">
        <h2>Our Café</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #8B7355 0%, #6F5C4A 100%)'}}>
              <span>☕ Signature Latte</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #A0826D 0%, #8B7355 100%)'}}>
              <span>🥐 Fresh Pastries</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #B8927C 0%, #A0826D 100%)'}}>
              <span>🪑 Cozy Interior</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #C4A890 0%, #B8927C 100%)'}}>
              <span>🍰 Homemade Cakes</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #D4BBA3 0%, #C4A890 100%)'}}>
              <span>📚 Reading Corner</span>
            </div>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #E4CCB4 0%, #D4BBA3 100%)'}}>
              <span>🌿 Outdoor Seating</span>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="cafe-contact">
        <div className="contact-content">
          <h2>Come Visit Us</h2>
          <p className="contact-intro">We'd love to see you! Drop by or send us a message.</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Find Us</h3>
              <div className="info-item">
                <strong>📍 Location:</strong>
                <p>456 Coffee Lane, Brewtown, BT 67890</p>
              </div>
              <div className="info-item">
                <strong>📞 Phone:</strong>
                <p>(555) 987-6543</p>
              </div>
              <div className="info-item">
                <strong>✉️ Email:</strong>
                <p>hello@cozycorner.com</p>
              </div>
              <div className="info-item">
                <strong>🕐 Hours:</strong>
                <p>
                  Monday - Friday: 7:00 AM - 8:00 PM<br/>
                  Saturday - Sunday: 8:00 AM - 9:00 PM
                </p>
              </div>
              <div className="info-item">
                <strong>📱 Follow Us:</strong>
                <p>@cozycornercafe on Instagram</p>
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
                placeholder="Your message..."
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

      <footer className="cafe-footer">
        <p>&copy; 2024 Cozy Corner Café. Made with ❤️ and ☕</p>
      </footer>
    </div>
  );
};

export default Cafe;
