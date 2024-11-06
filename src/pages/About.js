import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Section = styled(motion.div)`
  background: #fff;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  padding: 1.5rem;
  width: 100%;
  max-width: 800px;
  transition: transform 0.3s ease;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #333;
  text-align: center;
  border-bottom: 2px solid #4CAF50;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-top: 1rem;
`;

const Text = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.5;
  margin: 0.5rem 0;
`;

const About = () => (
  <AboutContainer>
    <Heading>About Me</Heading>

    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <SubHeading>Summary</SubHeading>
      <Text>
      Innovative software developer with a proven track record across multiple domains. 
      Designed and deployed over 10 scalable applications, achieving up to 30% improvement in performance and a 25% reduction in development time. 
      Proficient in Python, JavaScript, and C++, with 5+ certifications in Machine Learning and Cloud Infrastructure. 
      Demonstrated expertise in leveraging Tableau for data visualization, increasing user engagement by 20%. 
      Collaborative team player with experience across 3+ industries and in 
      handling projects totaling over 2000 lines of code, maintaining 98% code efficiency across 30+ releases.
      </Text>
    </Section>

    <Section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <SubHeading>Education</SubHeading>
      <Text>
        <strong>Master of Science in Information Technology</strong><br />
        University of Cincinnati, Ohio <br />
        <em>August 2023 - Present</em><br />
        Relevant Coursework: Web Application Programming, Hacking, Machine
        Learning, Data Mining, Statistical Data Analysis, Mobile Application
        Technologies.
      </Text>
      <Text>
        <strong>Bachelor of Technology in Electronics and Communication Engineering</strong><br />
        Vignan’s Foundation for Science, Technology and Research, Andhra Pradesh, India <br />
        <em>July 2019 - April 2023</em><br />
        Relevant Coursework: C Programming, Network Theory, Data Structures,
        VLSI, Image Processing.
      </Text>
    </Section>
     
  </AboutContainer>
);

export default About;
