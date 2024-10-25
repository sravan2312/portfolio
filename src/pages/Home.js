import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
`;

const Home = () => (
  <HomeContainer>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Heading>Hi, I'm Sravan Kumar Bhavana</Heading>
      <p>Welcome to my portfolio!</p>
    </motion.div>
  </HomeContainer>
);

export default Home;
