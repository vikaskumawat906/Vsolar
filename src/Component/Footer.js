import { Link } from 'react-router-dom';
import React from 'react';
import { Image } from 'react-bootstrap';
import './App.css';

function Footer() {
  return (
    <>
      <footer className="footer my-1">
        <div className="footer-content">
          <p>&copy; 2024 DADU-SOLAR. All rights reserved.</p>
          <nav style={{display:'flex'}}>
            <Link className='nav-link' style={{marginInline:'15px'}} to="/" >Home</Link> 
            <Link className='nav-link' style={{marginInline:'15px'}} to="/contactus" >Contact Us</Link> 
            <Link className='nav-link' style={{marginInline:'15px'}} to="/overview" >Overview</Link> 
            <Link className='nav-link' style={{marginInline:'15px'}} to="/services" >Services</Link> 
          </nav>
          <div style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                        <Link className='nav-link icons card-transition'  to="https://www.snapchat.com/add/vkumawat5258?share_id=xS4rSDCSDBs&locale=en-US"><Image className='iconsimg' src={require('../Component/Images/snapchat-icon.png')}/></Link>
                        <Link className='nav-link icons card-transition' to="https://www.instagram.com/vikas__kumwt?igsh=d2ZyaWF4djE3NWd3"><Image className='iconsimg' src={require('../Component/Images/insta-icon.png')}/></Link>
                        <Link className='nav-link icons card-transition' to="https://youtube.com/@minimilitiapro2.0?si=bkRGNcQTbVmpyAKd"><Image className='iconsimg' src={require('../Component/Images/youtube-icon.png')}/></Link>
                    </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
