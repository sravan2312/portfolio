import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const lightAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Section = styled(motion.div)`
  background: linear-gradient(135deg, #333, #444);
  border-radius: 12px;
  padding: 1.5rem;
  width: 100%;
  max-width: 800px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5), inset 0px 0px 15px rgba(255, 255, 255, 0.2);
  position: relative;
  overflow: hidden;
  perspective: 1000px;

  /* Gradient overlay with animation */
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 0, 150, 0.5), rgba(0, 204, 255, 0.5), rgba(255, 255, 0, 0.5));
    background-size: 300% 300%;
    animation: ${lightAnimation} 6s ease infinite;
    mix-blend-mode: overlay;
    z-index: 1;
    border-radius: 12px;
  }

  /* 3D shadow effect */
  &:hover {
    transform: scale(1.05) rotateY(10deg) rotateX(10deg);
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.8), inset 0px 0px 20px rgba(255, 255, 255, 0.3);
  }

  /* Inner shadow for depth */
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 0px 20px rgba(0, 0, 0, 0.7);
    border-radius: 12px;
    z-index: 0;
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  color: #fff;
  margin-top: 1rem;
  cursor: pointer;
  z-index: 2;
  position: relative;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  line-height: 1.5;
  margin: 0.5rem 0;
  z-index: 2;
  position: relative;
`;

const About = () => {
  const [expanded, setExpanded] = useState({ summary: false, education: false });

  const toggleSection = (section) => {
    setExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section]
    }));
  };

  return (
    <AboutContainer>
      <Heading>About Me</Heading>

      <Section onClick={() => toggleSection('summary')}>
        <SubHeading>Summary</SubHeading>
        {expanded.summary && (
          <Text>
            Innovative software developer with a proven track record across multiple domains.
            Designed and deployed over 10 scalable applications, achieving up to 30% improvement
            in performance and a 25% reduction in development time. Proficient in Python,
            JavaScript, and C++, with 5+ certifications in Machine Learning and Cloud Infrastructure.
          </Text>
        )}
      </Section>

      <Section onClick={() => toggleSection('education')}>
        <SubHeading>Education</SubHeading>
        {expanded.education && (
          <>
            <Text>
              <strong>Master of Science in Information Technology</strong><br />
              University of Cincinnati, Ohio <br />
              <em>August 2023 - Present</em><br />
              Relevant Coursework: Web Application Programming, Hacking, Machine Learning,
              Data Mining, Statistical Data Analysis, Mobile Application Technologies.
            </Text>
            <Text>
              <strong>Bachelor of Technology in Electronics and Communication Engineering</strong><br />
              Vignan’s Foundation for Science, Technology and Research, Andhra Pradesh, India <br />
              <em>July 2019 - April 2023</em><br />
              Relevant Coursework: C Programming, Network Theory, Data Structures, VLSI,
              Image Processing.
            </Text>
          </>
        )}
      </Section>
    </AboutContainer>
  );
};

export default About;
