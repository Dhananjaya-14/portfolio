import React, { useEffect, useRef } from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate progress bars
            const progressBars = entry.target.querySelectorAll('.progress-bar-fill');
            progressBars.forEach((bar) => {
              const targetWidth = bar.getAttribute('data-progress');
              if (targetWidth) {
                setTimeout(() => {
                  (bar as HTMLElement).style.width = targetWidth;
                }, 500);
              }
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const designSkills = [
    { name: 'UI Design', progress: 95 },
    { name: 'UX Research', progress: 90 },
    { name: 'Wireframing', progress: 92 },
    { name: 'Prototyping', progress: 88 },
    { name: 'Design Systems', progress: 85 },
    { name: 'User Testing', progress: 87 }
  ];

  const tools = [
    { name: 'Figma', icon: '🎨', level: 'Expert' },
    { name: 'Adobe XD', icon: '✨', level: 'Advanced' },
    { name: 'Sketch', icon: '📱', level: 'Advanced' },
    { name: 'InVision', icon: '🔗', level: 'Expert' },
    { name: 'Principle', icon: '🎬', level: 'Intermediate' },
    { name: 'Framer', icon: '🚀', level: 'Advanced' }
  ];

  const expertise = [
    {
      category: 'Design Process',
      skills: ['User Research', 'Persona Development', 'Journey Mapping', 'Information Architecture']
    },
    {
      category: 'Visual Design',
      skills: ['Typography', 'Color Theory', 'Layout Design', 'Icon Design']
    },
    {
      category: 'Interaction Design',
      skills: ['Micro-interactions', 'Animation', 'Responsive Design', 'Accessibility']
    }
  ];

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <h2 className="section-title fade-in">Skills & Expertise</h2>
        <p className="section-subtitle fade-in">
          A comprehensive toolkit for creating exceptional user experiences
        </p>

        <div className="skills-content">
          <div className="skills-section slide-in-left">
            <h3>Core Skills</h3>
            <div className="skills-grid">
              {designSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.progress}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-bar-fill"
                      data-progress={`${skill.progress}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="tools-section slide-in-right">
            <h3>Design Tools</h3>
            <div className="tools-grid">
              {tools.map((tool, index) => (
                <div key={index} className="tool-card">
                  <div className="tool-icon">{tool.icon}</div>
                  <h4>{tool.name}</h4>
                  <span className="tool-level">{tool.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="expertise-section fade-in">
          <h3>Areas of Expertise</h3>
          <div className="expertise-grid">
            {expertise.map((area, index) => (
              <div key={index} className="expertise-card">
                <h4>{area.category}</h4>
                <ul className="expertise-list">
                  {area.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="certifications-section fade-in">
          <h3>Certifications & Training</h3>
          <div className="certifications-grid">
            <div className="certification-card">
              <div className="cert-icon">🏆</div>
              <h4>Google UX Design</h4>
              <p>Professional Certificate</p>
              <span className="cert-date">2023</span>
            </div>
            <div className="certification-card">
              <div className="cert-icon">🎓</div>
              <h4>Interaction Design Foundation</h4>
              <p>UX Design Course</p>
              <span className="cert-date">2022</span>
            </div>
            <div className="certification-card">
              <div className="cert-icon">⭐</div>
              <h4>Figma Advanced</h4>
              <p>Design Systems & Prototyping</p>
              <span className="cert-date">2022</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 