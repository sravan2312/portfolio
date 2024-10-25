import React from 'react';
import SkillBar from '../components/SkillBar';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  padding: 2rem;
`;

const Skills = () => (
  <SkillsContainer>
    <h2>Skills</h2>
    <SkillBar skill="Python" level="80%" />
    <SkillBar skill="React" level="70%" />
    <SkillBar skill="JavaScript" level="75%" />
    {/* Add more skills as needed */}
  </SkillsContainer>
);

export default Skills;
