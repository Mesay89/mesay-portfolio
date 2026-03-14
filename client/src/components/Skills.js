import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNode, FaDatabase, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaPython } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiRedux } from 'react-icons/si';
import '../styles/Skills.css';

const Skills = () => {
  const skills = [
    { name: 'React', icon: <FaReact />, level: 90 },
    { name: 'Node.js', icon: <FaNode />, level: 85 },
    { name: 'MongoDB', icon: <SiMongodb />, level: 80 },
    { name: 'Express', icon: <SiExpress />, level: 85 },
    { name: 'JavaScript', icon: <FaJs />, level: 90 },
    { name: 'HTML5', icon: <FaHtml5 />, level: 95 },
    { name: 'CSS3', icon: <FaCss3Alt />, level: 90 },
    { name: 'Tailwind', icon: <SiTailwindcss />, level: 85 },
    { name: 'Redux', icon: <SiRedux />, level: 75 },
    { name: 'Git', icon: <FaGitAlt />, level: 85 },
    { name: 'Python', icon: <FaPython />, level: 70 },
    { name: 'SQL', icon: <FaDatabase />, level: 75 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Skills & Technologies
        </motion.h2>
        
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="skill-card"
            >
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-bar">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.8 }}
                  className="skill-progress"
                />
              </div>
              <span className="skill-level">{skill.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
