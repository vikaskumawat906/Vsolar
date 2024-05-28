// src/Footer.js
import React from 'react';
import './App.css';

function Footer() {
  return (
    <>
      <footer className="footer my-1">
        <div className="footer-content">
          <p>&copy; 2024 V-Solar. All rights reserved.</p>
          <nav className="footer-nav">
            <a href="/">Home</a>
            <a href="/contactus">Contact Us</a>
            <a href="/overview">Overview</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
