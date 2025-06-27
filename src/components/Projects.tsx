import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  duration: string;
  role: string;
  features: string[];
  link: string;
}

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Mobile App',
      category: 'mobile',
      image: '🛍️',
      description: 'A comprehensive mobile shopping experience with intuitive navigation and seamless checkout flow.',
      technologies: ['Figma', 'Principle', 'Sketch'],
      duration: '3 months',
      role: 'Lead UI/UX Designer',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      link: '#'
    },
    {
      id: 2,
      title: 'Banking Dashboard',
      category: 'web',
      image: '🏦',
      description: 'Modern banking interface designed for both desktop and mobile users with advanced security features.',
      technologies: ['Figma', 'Adobe XD', 'InVision'],
      duration: '4 months',
      role: 'Senior Designer',
      features: ['Information Architecture', 'Design System', 'Accessibility', 'Responsive Design'],
      link: '#'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: '💪',
      description: 'Personal fitness companion with workout tracking, progress visualization, and social features.',
      technologies: ['Figma', 'Framer', 'Principle'],
      duration: '2 months',
      role: 'UI/UX Designer',
      features: ['User Journey Mapping', 'Micro-interactions', 'Data Visualization', 'Gamification'],
      link: '#'
    },
    {
      id: 4,
      title: 'Restaurant Booking Platform',
      category: 'web',
      image: '🍽️',
      description: 'Streamlined restaurant discovery and booking platform with real-time availability and reviews.',
      technologies: ['Figma', 'Sketch', 'InVision'],
      duration: '3 months',
      role: 'Lead Designer',
      features: ['Competitive Analysis', 'User Flows', 'Prototyping', 'A/B Testing'],
      link: '#'
    },
    {
      id: 5,
      title: 'Travel Companion App',
      category: 'mobile',
      image: '✈️',
      description: 'All-in-one travel app with itinerary planning, booking management, and local recommendations.',
      technologies: ['Figma', 'Adobe XD', 'Framer'],
      duration: '5 months',
      role: 'Senior UI/UX Designer',
      features: ['User Research', 'Persona Development', 'Wireframing', 'Usability Testing'],
      link: '#'
    },
    {
      id: 6,
      title: 'Educational Platform',
      category: 'web',
      image: '📚',
      description: 'Interactive learning platform with personalized content delivery and progress tracking.',
      technologies: ['Figma', 'Principle', 'InVision'],
      duration: '4 months',
      role: 'UX Designer',
      features: ['Learning Analytics', 'Content Strategy', 'User Onboarding', 'Feedback Systems'],
      link: '#'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'web', label: 'Web Platforms' }
  ];

  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeFilter));
    }
  }, [activeFilter, projects]);

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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects section" ref={projectsRef}>
      <div className="container">
        <h2 className="section-title fade-in">Featured Projects</h2>
        <p className="section-subtitle fade-in">
          A showcase of my recent work, demonstrating user-centered design solutions
        </p>

        <div className="projects-filters fade-in">
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="project-card fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="project-image">
                <div className="project-icon">{project.image}</div>
                <div className="project-overlay">
                  <button className="view-project-btn">View Project</button>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-header">
                  <h3>{project.title}</h3>
                  <span className="project-category">{project.category}</span>
                </div>
                
                <p className="project-description">{project.description}</p>
                
                <div className="project-details">
                  <div className="detail-item">
                    <span className="detail-label">Role:</span>
                    <span className="detail-value">{project.role}</span>
                  </div>
                  <div className="detail-item">
                    <span className="detail-label">Duration:</span>
                    <span className="detail-value">{project.duration}</span>
                  </div>
                </div>
                
                <div className="project-technologies">
                  <h4>Technologies</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech: string, techIndex: number) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
                
                <div className="project-features">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {project.features.map((feature: string, featureIndex: number) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta fade-in">
          <h3>Interested in working together?</h3>
          <p>Let's discuss your next project and create something amazing together.</p>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 