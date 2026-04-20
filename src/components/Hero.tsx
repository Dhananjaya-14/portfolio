import React, { useEffect, useRef } from 'react';
import './Hero.css';
import profileImage from '../profile-image.jpg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      <div className="hero-background" aria-hidden="true">
        <div className="hero-grid" />
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-badge fade-in">
              <span className="hero-badge-dot" />
              Open to freelance &amp; collaborations
            </p>
            <h1 className="hero-title fade-in">
              <span className="greeting">Hello — I&apos;m</span>
              <span className="name">Dhananjaya</span>
              <span className="title">Full-stack developer</span>
            </h1>

            <p className="hero-description fade-in">
              I build end-to-end web applications — solid APIs, databases, and performant
              front ends. I care about clean architecture, maintainable code, and shipping features
              that work reliably in production.
            </p>

            <div className="hero-stats fade-in">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Client focus</span>
              </div>
            </div>

            <div className="hero-buttons fade-in">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View work
              </button>
              <button
                type="button"
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Contact
              </button>
            </div>
          </div>

          <div className="hero-visual">
            <div className="profile-image-container">
              <div className="profile-frame" />
              <div className="profile-image">
                <img
                  src={profileImage}
                  alt="Portrait of Dhananjaya, full-stack developer"
                  className="profile-photo"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="profile-placeholder hidden">
                  <div className="placeholder-icon">👤</div>
                  <div className="placeholder-text">Add your photo</div>
                </div>
              </div>
              <div className="profile-glow" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow" />
        <span>Scroll</span>
      </div>
    </section>
  );
};

export default Hero;
