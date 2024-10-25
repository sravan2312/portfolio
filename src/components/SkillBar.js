import React from 'react';
import styled from 'styled-components';

const SkillContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5rem 0;
`;

const SkillLabel = styled.div`
  font-size: 1.2rem;
`;

const SkillProgress = styled.div`
  background: #ddd;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 5px;
`;

const SkillBarFill = styled.div`
  background: #4CAF50;
  height: 10px;
  width: ${({ width }) => width || '0%'};
`;

const SkillBar = ({ skill, level }) => (
  <SkillContainer>
    <SkillLabel>{skill}</SkillLabel>
    <SkillProgress>
      <SkillBarFill width={level} />
    </SkillProgress>
  </SkillContainer>
);

export default SkillBar;
