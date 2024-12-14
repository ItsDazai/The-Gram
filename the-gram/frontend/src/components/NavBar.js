import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={navStyle}>
      <h2 style={logoStyle}>The Gram</h2>
      <div>
        <Link to="/" style={linkStyle}>Home</Link>
        <Link to="/login" style={linkStyle}>Login</Link>
        <Link to="/register" style={linkStyle}>Register</Link>
        <Link to="/create-post" style={linkStyle}>Create Post</Link>
      </div>
    </nav>
  );
};

// Inline styles for simplicity
const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#282c34',
  color: 'white',
};

const logoStyle = {
  margin: 0,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  marginLeft: '20px',
};

export default NavBar;
