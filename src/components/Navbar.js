import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMoreVertical } from 'react-icons/fi'; // Importing 3-dot icon from react-icons

const Nav = styled.nav`
  background: #333;
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none; /* Hide menu icon on larger screens */
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')}; /* Toggle display based on isOpen state */
    position: absolute;
    top: 64px; /* Adjust based on the height of your navbar */
    right: 10px;
    background: #333;
    border-radius: 8px;
    padding: 1rem;
    width: 150px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    color: #ffcc70;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0;
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
        <FiMoreVertical /> {/* 3-dot icon */}
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
