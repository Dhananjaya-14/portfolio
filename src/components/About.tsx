import React, { useEffect, useRef } from 'react';
import './About.css';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

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

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about section" ref={aboutRef}>
      <div className="container">
        <span className="section-eyebrow fade-in">Introduction</span>
        <h2 className="section-title fade-in">
          <span className="section-title-gradient">About me</span>
        </h2>
        <p className="section-subtitle fade-in">
          I enjoy turning requirements into working software — from database and API design to
          polished, responsive interfaces.
        </p>
        
        <div className="about-content">
          {/* Top Row: My Story and My Approach */}
          <div className="about-top-row">
            <div className="about-story slide-in-left">
              <h3>My Story</h3>
              <p>
                I&apos;m a full-stack developer with over a year of experience building web applications
                that are reliable, scalable, and straightforward to extend. I&apos;m happiest when
                backend logic, data, and frontend behavior all line up cleanly.
              </p>
              <p>
                I believe good software is tested, documented enough to onboard others, and structured so
                the next feature doesn&apos;t become a rewrite. I stay curious about new tools but default
                to patterns that teams can maintain.
              </p>
            </div>
            
            <div className="about-approach slide-in-right">
              <h3>My Approach</h3>
              <div className="approach-grid">
                <div className="approach-item">
                  <div className="approach-icon">🎯</div>
                  <h4>Product-focused</h4>
                  <p>Clarify requirements, edge cases, and priorities before writing code</p>
                </div>
                <div className="approach-item">
                  <div className="approach-icon">🔍</div>
                  <h4>Quality-minded</h4>
                  <p>Validation, error handling, and sensible defaults for real users</p>
                </div>
                <div className="approach-item">
                  <div className="approach-icon">✨</div>
                  <h4>End-to-end</h4>
                  <p>APIs, persistence, auth, and UI wired together as one system</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Bottom Row: Personal Info Only */}
          <div className="about-bottom-row">
            <div className="personal-info slide-in-right">
              <h3>Personal Info</h3>
              <div className="info-cards-grid">
                <div className="info-card">
                  <h4>Education</h4>
                  <p>Undergraduate at Sri Lanka Institute of Information Technology</p>
                  <p>BSc (Hons) Information Technology</p>
                </div>
                <div className="info-card">
                  <h4>Location</h4>
                  <p>Sri Lanka</p>
                  <p>Available for remote work</p>
                </div>
                <div className="info-card">
                  <h4>Languages</h4>
                  <p>English (Fluent)</p>
                  <p>Sinhala (Native)</p>
                </div>
                <div className="info-card">
                  <h4>Interests</h4>
                  <p>Web APIs &amp; cloud</p>
                  <p>React &amp; TypeScript</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 