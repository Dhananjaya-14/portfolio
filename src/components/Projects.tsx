import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

// Import your project images here
// import siennaRetreat from '../project-images/sienna-retreat.jpg';
// import microimageClone from '../project-images/microimage-clone.jpg';
// import fitnessApp from '../project-images/fitness-app.jpg';
// import foodDelivery from '../project-images/food-delivery.jpg';
// import musicApp from '../project-images/music-app.jpg';

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
      title: 'SIENNA RETREAT web UI',
      category: 'web',
      image: '/project-images/sienna-retreat.jpg',
      description: 'A luxurious hotel booking experience with elegant visuals, intuitive room selection, and a hassle-free reservation process.',
      technologies: ['Figma','Photoshop'],
      duration: '1 months',
      role: 'Lead UI/UX Designer',
      features: ['User Research', 'Wireframing', 'Prototyping', 'User Testing'],
      link: '#'
    },
    {
      id: 2,
      title: 'Microimage Clone',
      category: 'web',
      image: '/project-images/microimage-clone.png',
      description: 'A modern and responsive IT company interface featuring clean layouts, clear service highlights, and streamlined user interactions to showcase tech expertise.',
      technologies: ['Figma', 'Adobe XD'],
      duration: '1 months',
      role: 'Lead UI/UX Designer',
      features: ['Wireframing', 'Prototyping', 'Accessibility', 'Responsive Design'],
      link: '#'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: '/project-images/fitness-app.png',
      description: 'Personal fitness companion with workout tracking, progress visualization, and social features.',
      technologies: ['Figma','Principle'],
      duration: '1 months',
      role: 'UI/UX Designer',
      features: ['Wireframing', 'Prototyping', 'Accessibility', 'Responsive Design'],
      link: '#'
    },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'mobile',
      image: '/project-images/food-delivery.png',
      description: 'A vibrant and user-friendly food delivery experience with quick restaurant browsing, real-time order tracking, and a smooth checkout process.',
      technologies: ['Figma','Photoshop'],
      duration: '1 months',
      role: 'Lead UI/UX Designer',
      features: ['Competitive Analysis', 'Prototyping', 'Accessibility', 'Responsive Design'],
      link: '#'
    },
    {
      id: 5,
      title: '3D Music app',
      category: 'mobile',
      image: '/project-images/music-app.png',
      description: 'A visually striking 3D music app interface featuring layered elements, animated transitions, and an engaging user journey that blends depth with functionality.',
      technologies: ['Figma', 'Adobe XD'],
      duration: '1 months',
      role: 'Lead UI/UX Designer',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Accessibility', 'Responsive Design'],
      link: '#'
    },
    
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
                <img 
                  src={project.image} 
                  alt={project.title}
                  onError={(e) => {
                    // Fallback to a placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="project-placeholder hidden">
                  <div className="placeholder-icon">📱</div>
                  <div className="placeholder-text">Add project image</div>
                </div>
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.link} className="project-link">
                      View Project
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-content">
                <div className="project-category">{project.category}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-tech">
                  {project.technologies.map((tech: string, techIndex: number) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-stats">
                  <div className="project-stat">
                    <span className="stat-number">{project.role}</span>
                    <span className="stat-label">Role</span>
                  </div>
                  <div className="project-stat">
                    <span className="stat-number">{project.duration}</span>
                    <span className="stat-label">Duration</span>
                  </div>
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