import React from 'react';
import '../../assets/CSS/Footers.css';

const Footers = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>&copy; {currentYear} Your Company. All Rights Reserved.</p>
      <div className="footer-links">
        <a href="/privacy-policy">Privacy Policy</a> | 
        <a href="/terms-of-service">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footers;
