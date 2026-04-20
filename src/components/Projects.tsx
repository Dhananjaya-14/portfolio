import React, { useState, useEffect, useRef, useMemo } from 'react';
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

const categoryLabel = (category: string) =>
  category === 'web' ? 'Web' : category === 'mobile' ? 'Mobile' : category;

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = useMemo<Project[]>(
    () => [
    {
      id: 1,
      title: 'SIENNA RETREAT web UI',
      category: 'web',
      image: '/project-images/sienna-retreat.jpg',
      description: 'A luxurious hotel booking experience with elegant visuals, intuitive room selection, and a hassle-free reservation process.',
      technologies: ['React', 'TypeScript', 'Node.js'],
      duration: '1 month',
      role: 'Full-stack developer',
      features: ['REST API', 'Auth', 'Responsive UI', 'Deployment'],
      link: '#'
    },
    {
      id: 2,
      title: 'Microimage Clone',
      category: 'web',
      image: '/project-images/microimage-clone.png',
      description: 'A modern and responsive IT company interface featuring clean layouts, clear service highlights, and streamlined user interactions to showcase tech expertise.',
      technologies: ['React', 'CSS', 'Express'],
      duration: '1 month',
      role: 'Full-stack developer',
      features: ['SSR-ready structure', 'API integration', 'SEO basics', 'Performance'],
      link: '#'
    },
    {
      id: 3,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: '/project-images/fitness-app.png',
      description: 'Personal fitness companion with workout tracking, progress visualization, and social features.',
      technologies: ['React Native', 'TypeScript', 'Firebase'],
      duration: '1 month',
      role: 'Full-stack developer',
      features: ['Offline-aware UI', 'API sync', 'State management', 'Analytics hooks'],
      link: '#'
    },
    {
      id: 4,
      title: 'Food Delivery App',
      category: 'mobile',
      image: '/project-images/food-delivery.png',
      description: 'A vibrant and user-friendly food delivery experience with quick restaurant browsing, real-time order tracking, and a smooth checkout process.',
      technologies: ['Next.js', 'PostgreSQL', 'Stripe API'],
      duration: '1 month',
      role: 'Full-stack developer',
      features: ['Payments', 'Real-time orders', 'Role-based access', 'Admin tools'],
      link: '#'
    },
    {
      id: 5,
      title: '3D Music app',
      category: 'mobile',
      image: '/project-images/music-app.png',
      description: 'A visually striking 3D music app interface featuring layered elements, animated transitions, and an engaging user journey that blends depth with functionality.',
      technologies: ['React', 'Web Audio API', 'Node.js'],
      duration: '1 month',
      role: 'Full-stack developer',
      features: ['Media streaming', 'Playlists API', 'Animations', 'Responsive layout'],
      link: '#'
    }
  ],
    []
  );

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        <span className="section-eyebrow fade-in">Portfolio</span>
        <h2 className="section-title fade-in">
          <span className="section-title-gradient">Selected work</span>
        </h2>
        <p className="section-subtitle fade-in">
          Web and app-style builds — swap in your real stack, links, and case-study write-ups when
          you&apos;re ready.
        </p>

        <div className="projects-filters fade-in">
          {filters.map((filter) => (
            <button
              type="button"
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
                <div className="project-category">{categoryLabel(project.category)}</div>
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
          <p>Tell me about your product, timeline, and audience — I&apos;ll follow up with next steps.</p>
          <button type="button" className="btn btn-primary" onClick={scrollToContact}>
            Start a conversation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects; 