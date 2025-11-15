import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Construction.css';

const Construction: React.FC = () => {
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
    <div className="construction-container">
      <nav className="construction-nav">
        <div className="nav-content">
          <Link to="/" className="back-link">← Back to Prototypes</Link>
          <h2 className="company-name">BuildPro Construction</h2>
          <div className="nav-links">
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#gallery">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
      </nav>

      <section id="hero" className="construction-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Building Your Dreams</h1>
          <p>Professional Construction Services Since 1995</p>
          <a href="#contact" className="cta-button">Get a Free Quote</a>
        </div>
      </section>

      <section id="about" className="construction-about">
        <div className="about-content">
          <h2>About BuildPro Construction</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                With over 25 years of experience in the construction industry, BuildPro Construction 
                has established itself as a trusted name in delivering high-quality construction projects. 
                From residential homes to commercial buildings, we bring expertise, reliability, and 
                dedication to every project.
              </p>
              <p>
                Our team of skilled professionals uses the latest technology and construction methods 
                to ensure your project is completed on time, within budget, and to the highest standards 
                of quality. We pride ourselves on transparent communication and exceptional customer service.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-box">
                <h3>🏆 25+ Years</h3>
                <p>Industry Experience</p>
              </div>
              <div className="feature-box">
                <h3>👷 Expert Team</h3>
                <p>Certified Professionals</p>
              </div>
              <div className="feature-box">
                <h3>✓ Quality Work</h3>
                <p>Guaranteed Results</p>
              </div>
              <div className="feature-box">
                <h3>💯 500+</h3>
                <p>Completed Projects</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="construction-gallery">
        <h2>Our Recent Projects</h2>
        <div className="gallery-grid">
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #4a5568 0%, #2d3748 100%)'}}>
              <span>Residential Complex</span>
            </div>
            <p>Modern apartment building with 50 units</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #5a6c7d 0%, #3d4f5f 100%)'}}>
              <span>Office Tower</span>
            </div>
            <p>10-story commercial office space</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #6b7b8c 0%, #4d5d6e 100%)'}}>
              <span>Shopping Center</span>
            </div>
            <p>Multi-purpose retail complex</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #7c8c9d 0%, #5e6e7f 100%)'}}>
              <span>Warehouse</span>
            </div>
            <p>Industrial storage facility</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #8d9dae 0%, #6f7f90 100%)'}}>
              <span>School Building</span>
            </div>
            <p>Educational facility renovation</p>
          </div>
          <div className="gallery-item">
            <div className="gallery-placeholder" style={{background: 'linear-gradient(135deg, #9eaebf 0%, #8090a1 100%)'}}>
              <span>Bridge Construction</span>
            </div>
            <p>Infrastructure project completion</p>
          </div>
        </div>
      </section>

      <section id="contact" className="construction-contact">
        <div className="contact-content">
          <h2>Get in Touch</h2>
          <p className="contact-intro">Ready to start your next project? Contact us for a free consultation.</p>
          
          <div className="contact-grid">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="info-item">
                <strong>📍 Address:</strong>
                <p>123 Construction Ave, Building City, BC 12345</p>
              </div>
              <div className="info-item">
                <strong>📞 Phone:</strong>
                <p>(555) 123-4567</p>
              </div>
              <div className="info-item">
                <strong>✉️ Email:</strong>
                <p>info@buildpro.com</p>
              </div>
              <div className="info-item">
                <strong>🕐 Hours:</strong>
                <p>Monday - Friday: 7:00 AM - 6:00 PM<br/>Saturday: 8:00 AM - 2:00 PM</p>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
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
                placeholder="Tell us about your project..."
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

      <footer className="construction-footer">
        <p>&copy; 2024 BuildPro Construction. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Construction;
