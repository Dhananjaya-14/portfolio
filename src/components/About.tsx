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
        <h2 className="section-title fade-in">About Me</h2>
        <p className="section-subtitle fade-in">
          Passionate about creating meaningful digital experiences that connect people with technology
        </p>
        
        <div className="about-content">
          {/* Top Row: My Story and My Approach */}
          <div className="about-top-row">
            <div className="about-story slide-in-left">
              <h3>My Story</h3>
              <p>
                I'm a passionate UI/UX designer with over 1 years of experience crafting digital experiences 
                that not only look beautiful but also solve real user problems. My journey began with a 
                fascination for how design can bridge the gap between technology and human needs.
              </p>
              <p>
                I believe that great design is invisible - it guides users seamlessly through their journey 
                while creating moments of delight. Every pixel, every interaction, and every decision is 
                made with the user in mind.
              </p>
            </div>
            
            <div className="about-approach slide-in-right">
              <h3>My Approach</h3>
              <div className="approach-grid">
                <div className="approach-item">
                  <div className="approach-icon">🎯</div>
                  <h4>User-Centered</h4>
                  <p>Every design decision starts with understanding user needs and behaviors</p>
                </div>
                <div className="approach-item">
                  <div className="approach-icon">🔍</div>
                  <h4>Research-Driven</h4>
                  <p>Data and insights guide my design process to ensure effective solutions</p>
                </div>
                <div className="approach-item">
                  <div className="approach-icon">✨</div>
                  <h4>Innovative</h4>
                  <p>Pushing boundaries while maintaining usability and accessibility standards</p>
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
                  <p>UI/UX Design</p>
                  <p>Web Development</p>
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