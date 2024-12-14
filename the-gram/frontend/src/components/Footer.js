import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} The Gram. All rights reserved.</p>
    </footer>
  );
};

// Inline styles for simplicity
const footerStyle = {
  textAlign: 'center',
  padding: '1rem',
  backgroundColor: '#282c34',
  color: 'white',
  position: 'relative',
  bottom: '0',
  width: '100%',
};

export default Footer;
