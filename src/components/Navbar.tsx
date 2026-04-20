import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main">
      <div className="container">
        <div className="navbar-content">
          <button
            type="button"
            className="navbar-brand"
            onClick={() => scrollToSection('home')}
            aria-label="Go to top"
          >
            <span className="brand-mark">D</span>
            <span className="brand-text-wrap">
              <span className="brand-text">Dhananjaya</span>
              <span className="brand-subtitle">Full-Stack Developer</span>
            </span>
          </button>

          <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <button type="button" onClick={() => scrollToSection('home')} className="nav-link">
              Home
            </button>
            <button type="button" onClick={() => scrollToSection('about')} className="nav-link">
              About
            </button>
            <button type="button" onClick={() => scrollToSection('skills')} className="nav-link">
              Skills
            </button>
            <button type="button" onClick={() => scrollToSection('projects')} className="nav-link">
              Projects
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="nav-link nav-cta"
            >
              Let&apos;s talk
            </button>
          </div>

          <button
            type="button"
            className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
