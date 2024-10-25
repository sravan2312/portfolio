import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ProjectsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  padding: 1.5rem;
  width: 100%;
  max-width: 500px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  color: #555;
`;

const Projects = () => (
  <ProjectsContainer>
    <h2>Projects</h2>

    <ProjectCard
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <ProjectTitle>Mini-Facebook</ProjectTitle>
      <ProjectDescription>
        Developed a secure social media platform with HTTPS, password hashing, CSRF protection, and RBAC to enhance security.
        <br /><br />
        <strong>Technologies Used:</strong> MySQL, SQL, HTTPS, CSRF protection, RBAC
      </ProjectDescription>
    </ProjectCard>

    <ProjectCard
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <ProjectTitle>Music-Genre Classification using Machine Learning</ProjectTitle>
      <ProjectDescription>
        Created a system to classify music genres using ML algorithms, achieving 97.5% accuracy with XGBoost, and an interface with Django.
        <br /><br />
        <strong>Technologies Used:</strong> Python, Django, XGBoost, LSTM, MFCC
      </ProjectDescription>
    </ProjectCard>
  </ProjectsContainer>
);

export default Projects;
