import { Link } from 'react-router-dom';
import React from 'react';
import './App.css';

function Footer() {
  return (
    <>
      <footer className="footer my-1">
        <div className="footer-content">
          <p>&copy; 2024 V-Solar. All rights reserved.</p>
          <nav style={{display:'flex'}}>
            <Link className='nav-link' style={{paddingInline:'15px'}} to="/" >Home</Link> 
            <Link className='nav-link' style={{paddingInline:'15px'}} to="/contactus" >Contact Us</Link> 
            <Link className='nav-link' style={{paddingInline:'15px'}} to="/overview" >Overview</Link> 
          </nav>
        </div>
      </footer>
    </>
  );
}

export default Footer;
