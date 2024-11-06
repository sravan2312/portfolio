import React from 'react';
import styled from 'styled-components';
import { FaPython, FaCuttlefish, FaJava, FaJsSquare, FaHtml5, FaCss3Alt, FaReact, FaGitAlt, FaAws, FaLinux, FaTable, FaAngular, FaDatabase } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiJupyter } from 'react-icons/si';

const SkillsContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
`;

const SkillCard = styled.div`
  width: 120px;
  height: 140px;
  background: #333;
  color: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 0.5rem;
`;

const SkillName = styled.p`
  font-size: 1rem;
  font-weight: bold;
`;

// Mapping each skill with its corresponding icon
const skills = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'C', icon: <FaCuttlefish /> },
  { name: 'C#', icon: <SiCsharp /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'MySQL', icon: <FaDatabase /> },
  { name: 'C++', icon: <FaCuttlefish /> },
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'CSS', icon: <FaCss3Alt /> },
  { name: 'Angular', icon: <FaAngular /> },
  { name: '.NET', icon: <SiDotnet /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'AWS', icon: <FaAws /> },
  { name: 'Linux', icon: <FaLinux /> },
  { name: 'Jupyter Notebook', icon: <SiJupyter /> },
  { name: 'Tableau', icon: <FaTable /> },
];

const Skills = () => (
  <SkillsContainer>
    {skills.map((skill) => (
      <SkillCard key={skill.name}>
        <Icon>{skill.icon}</Icon>
        <SkillName>{skill.name}</SkillName>
      </SkillCard>
    ))}
  </SkillsContainer>
);

export default Skills;
