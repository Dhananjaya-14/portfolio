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
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
        <div className="gradient-orb orb-3"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-visual">
            <div className="profile-image-container">
              <div className="profile-image">
                <img 
                  src={profileImage} 
                  alt="Dhananjaya - UI/UX Designer"
                  className="profile-photo"
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
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
              <div className="profile-glow"></div>
            </div>
          </div>
          
          <div className="hero-text">
            <h1 className="hero-title fade-in">
              <span className="greeting">Hello, I'm</span>
              <span className="name">Dhananjaya</span>
              <span className="title">UI/UX Designer</span>
            </h1>
            
            <p className="hero-description fade-in">
              Crafting digital experiences that blend creativity with functionality. 
              I transform ideas into intuitive, beautiful, and user-centered designs 
              that make a lasting impact.
            </p>
            
            <div className="hero-stats fade-in">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-number">1+</span>
                <span className="stat-label">Years</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
            
            <div className="hero-buttons fade-in">
              <button 
                className="btn btn-primary"
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-outline"
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
};

export default Hero; 