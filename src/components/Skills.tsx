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

  const coreSkills = [
    { name: 'JavaScript / TypeScript', progress: 92 },
    { name: 'React & modern front end', progress: 90 },
    { name: 'REST APIs & Node.js', progress: 88 },
    { name: 'Databases (SQL & NoSQL)', progress: 85 },
    { name: 'Git, testing & tooling', progress: 86 },
    { name: 'Deployment & Dev basics', progress: 82 }
  ];

  const tools = [
    { name: 'VS Code', icon: '💻', level: 'Daily' },
    { name: 'Git & GitHub', icon: '🔗', level: 'Advanced' },
    { name: 'Postman / API tools', icon: '📡', level: 'Advanced' }
  ];

  const expertise = [
    {
      category: 'Front end',
      skills: ['React', 'Responsive UI', 'State management', 'Performance basics']
    },
    {
      category: 'Back end',
      skills: ['Node.js', 'Express-style APIs', 'Auth & sessions', 'Validation & errors']
    },
    {
      category: 'Data & delivery',
      skills: ['MongoDB / PostgreSQL', 'Schema design', 'Migrations mindset', 'Environment config']
    }
  ];

  return (
    <section id="skills" className="skills section" ref={skillsRef}>
      <div className="container">
        <span className="section-eyebrow fade-in">Capabilities</span>
        <h2 className="section-title fade-in">
          <span className="section-title-gradient">Skills &amp; expertise</span>
        </h2>
        <p className="section-subtitle fade-in">
          Languages, frameworks, and practices I use to ship full-stack features — adjust the list to
          match your exact stack anytime.
        </p>

        <div className="skills-content">
          <div className="skills-section slide-in-left">
            <h3>Core skills</h3>
            <div className="skills-grid">
              {coreSkills.map((skill, index) => (
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
            <h3>Stack &amp; tools</h3>
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
          <h3>How I work across the stack</h3>
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
          <h3>Learning &amp; credentials</h3>
          <div className="certifications-grid">
            <div className="certification-card">
              <div className="cert-icon">🏆</div>
              <h4>BSc (Hons) Information Technology</h4>
              <p>SLIIT — software engineering, databases, and web systems</p>
              <span className="cert-date">SLIIT</span>
            </div>
            <div className="certification-card">
              <div className="cert-icon">🎓</div>
              <h4>Professional courses</h4>
              <p>LinkedIn Learning &amp; other platforms — web &amp; tooling</p>
              <span className="cert-date">2025</span>
            </div>
            <div className="certification-card">
              <div className="cert-icon">⭐</div>
              <h4>Self-directed builds</h4>
              <p>Portfolio apps, APIs, and integrations — see Projects</p>
              <span className="cert-date">Ongoing</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 