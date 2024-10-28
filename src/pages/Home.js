import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import profileImage from '../assets/img/Myimage.jpeg';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  text-align:top;
   padding: 0px 35px;
`;

const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom:5px;
`;

const ProfileImageStyled = styled.img`
        content: '';
        position: relative;
        top: 150px;
        left: 200px;
        width: 200px;
        height: 250px;
        flex-direction:row;
        margin-right: 1500px;
        background-image: url(${profileImage});
        background-size: cover;
        background-position: relative;
        border-radius: 50%;
        border: 2px solid #fff; /* Optional border for effect */
        box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.1); /* Optional shadow */
        transform: translate(+20%, +10%);
        z-index: 1000;
`;

const Home = () => {
    const navigate = useNavigate(); // Initialize navigate within the functional component
  
    return (
      <HomeContainer>
            <ProfileImageStyled src={profileImage} alt="Profile Picture" />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Heading>Hi, I'm Sravan Kumar Bhavana</Heading>
          <p>Welcome to my portfolio!</p>
          <button onClick={() => navigate('/about')}>Learn More About Me</button>
        </motion.div>
      </HomeContainer>
    );
  };

export default Home;
