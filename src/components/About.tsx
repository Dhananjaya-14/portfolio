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
          <div className="about-text slide-in-left">
            <div className="about-story">
              <h3>My Story</h3>
              <p>
                I'm a passionate UI/UX designer with over 3 years of experience crafting digital experiences 
                that not only look beautiful but also solve real user problems. My journey began with a 
                fascination for how design can bridge the gap between technology and human needs.
              </p>
              <p>
                I believe that great design is invisible - it guides users seamlessly through their journey 
                while creating moments of delight. Every pixel, every interaction, and every decision is 
                made with the user in mind.
              </p>
            </div>
            
            <div className="about-approach">
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
          
          <div className="about-visual slide-in-right">
            <div className="experience-timeline">
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Senior UI/UX Designer</h4>
                  <p>TechCorp Inc.</p>
                  <span className="timeline-date">2023 - Present</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>UI/UX Designer</h4>
                  <p>DesignStudio</p>
                  <span className="timeline-date">2021 - 2023</span>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h4>Junior Designer</h4>
                  <p>Creative Agency</p>
                  <span className="timeline-date">2020 - 2021</span>
                </div>
              </div>
            </div>
            
            <div className="personal-info">
              <div className="info-card">
                <h4>Education</h4>
                <p>Bachelor's in Design</p>
                <p>Design Institute, 2020</p>
              </div>
              <div className="info-card">
                <h4>Location</h4>
                <p>San Francisco, CA</p>
                <p>Available for remote work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 