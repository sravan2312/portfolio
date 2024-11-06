// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes } from 'react-icons/fa';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block; /* Show menu icon on smaller screens */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    position: fixed;
    top: 64px; /* Height of the navbar to position the menu right below it */
    left: 0;
    width: 100%;
    background: #333;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
    transition: max-height 0.3s ease;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: bold;
  transition: color 0.3s ease;
  padding: 0.5rem 1rem;

  &:hover {
    color: #ffcc70;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    width: 100%;
    text-align: center;
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <Logo>My Portfolio</Logo>
      <MenuIcon onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </MenuIcon>
      <NavLinks isOpen={isOpen}>
        <StyledLink to="/home" onClick={() => setIsOpen(false)}>Home</StyledLink>
        <StyledLink to="/about" onClick={() => setIsOpen(false)}>About</StyledLink>
        <StyledLink to="/skills" onClick={() => setIsOpen(false)}>Skills</StyledLink>
        <StyledLink to="/projects" onClick={() => setIsOpen(false)}>Projects</StyledLink>
        <StyledLink to="/contact" onClick={() => setIsOpen(false)}>Contact</StyledLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
