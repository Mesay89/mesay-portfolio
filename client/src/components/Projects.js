import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import axios from 'axios';
import '../styles/Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await axios.get('/api/projects');
      setProjects(res.data);
    } catch (error) {
      setProjects(demoProjects);
    }
  };

  const demoProjects = [
    {
      _id: '1',
      title: 'E-Commerce Platform',
      description: 'Full-featured online shopping platform with payment integration',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      _id: '2',
      title: 'Social Media App',
      description: 'Real-time social networking application with chat features',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Express', 'Socket.io', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com'
    },
    {
      _id: '3',
      title: 'Task Management Tool',
      description: 'Collaborative project management with drag-and-drop interface',
      image: '/placeholder-project.jpg',
      technologies: ['React', 'Redux', 'Node.js', 'PostgreSQL'],
      category: 'fullstack',
      github: 'https://github.com',
      live: 'https://demo.com'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects.length ? projects : demoProjects
    : (projects.length ? projects : demoProjects).filter(p => p.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Featured Projects
        </motion.h2>

        <div className="project-filters">
          <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
          <button className={filter === 'fullstack' ? 'active' : ''} onClick={() => setFilter('fullstack')}>Full Stack</button>
          <button className={filter === 'frontend' ? 'active' : ''} onClick={() => setFilter('frontend')}>Frontend</button>
          <button className={filter === 'backend' ? 'active' : ''} onClick={() => setFilter('backend')}>Backend</button>
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
