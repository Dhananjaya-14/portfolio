import React, { useEffect, useState } from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Dhananjaya</h3>
            <p className="footer-description">
              Full-stack developer building reliable APIs and web clients. Based in Kandy, Sri Lanka
              — available for remote work.
            </p>
            <div className="footer-social">
              <a href="https://www.linkedin.com/in/dhananjaya-bulumulla-777a6723b" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-link">
                💼
              </a>
              <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" aria-label="Dribbble" className="footer-social-link">
                🏀
              </a>
              <a href="https://behance.net" target="_blank" rel="noopener noreferrer" aria-label="Behance" className="footer-social-link">
                🎨
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-link">
                🐦
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={scrollToTop}>Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#projects">Web applications</a></li>
              <li><a href="#projects">REST &amp; GraphQL APIs</a></li>
              <li><a href="#projects">Database &amp; integrations</a></li>
              <li><a href="#contact">Maintenance &amp; support</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📧</div>
              <div className="footer-contact-text">
                <div>dhananjaya2859dk@gmail.com</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📱</div>
              <div className="footer-contact-text">
                <div>+94 716324240</div>
              </div>
            </div>
            <div className="footer-contact-item">
              <div className="footer-contact-icon">📍</div>
              <div className="footer-contact-text">
                <div>Kandy, Sri Lanka</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              &copy; {currentYear} Dhananjaya. All rights reserved.
            </div>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
              <a href="#cookies">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
      
      <a 
        href="#top" 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`} 
        onClick={(e) => {
          e.preventDefault();
          scrollToTop();
        }}
        aria-label="Back to top"
      >
        ↑
      </a>
    </footer>
  );
};

export default Footer; 