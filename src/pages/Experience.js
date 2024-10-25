import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ExperienceContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ExperienceCard = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  padding: 1.5rem;
  width: 100%;
  max-width: 600px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const JobTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
`;

const Company = styled.h4`
  font-size: 1.2rem;
  color: #777;
  margin-top: 0.5rem;
`;

const JobDescription = styled.p`
  font-size: 1rem;
  color: #555;
  margin-top: 0.5rem;
`;

const Experience = () => (
  <ExperienceContainer>
    <h2>Experience</h2>

    <ExperienceCard
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <JobTitle>Data Analyst Intern</JobTitle>
      <Company>Vasista Enterprise Solutions | Hyderabad, India | Jan 2023 – Jun 2023</Company>
      <JobDescription>
        - Developed Python scripts using boto3 to transfer over 500 GB of data to AWS S3, improving data accessibility.<br />
        - Created and managed 50+ tables in AWS Athena for optimized data retrieval.<br />
        - Designed QuickSight dashboards for real-time reporting and insights.
      </JobDescription>
    </ExperienceCard>

    <ExperienceCard
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      <JobTitle>Software Developer Intern</JobTitle>
      <Company>SS&C Technologies | Hyderabad, India | Sep 2023 – Dec 2023</Company>
      <JobDescription>
        - Integrated Alpha Vantage API for real-time stock data with 99% uptime.<br />
        - Implemented multithreading to improve efficiency by 40% and added moving averages for stock insights.<br />
        - Enhanced error handling, reducing API timeout failures by 50%.
      </JobDescription>
    </ExperienceCard>
  </ExperienceContainer>
);

export default Experience;
