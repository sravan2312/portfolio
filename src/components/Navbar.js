import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background: #333;
  color: #fff;
  display: flex;
  justify-content: space-around;
  padding: 1rem;
  position: sticky;
  top: 0;
`;

const Navbar = () => (
  <Nav>
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/skills">Skills</Link>
    <Link to="/projects">Projects</Link>
    <Link to="/contact">Contact</Link>
  </Nav>
);

export default Navbar;
