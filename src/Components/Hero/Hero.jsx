import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';  // ✅ Added import
import './Hero.css';
import img from './img1.jpeg';
import resumePDF from '../../assets/Thouseef_Resume.pdf'; 

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={img} alt="profile" className='circular-img' />

      <h1>I'm <span>Mohammed Thouseef</span>, Software Developer</h1>
      <p>A passionate developer with a strong foundation in full-stack development, focused on building clean, efficient, and scalable applications.</p>

      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' href='#contact' offset='50'>
            Connect with me
          </AnchorLink>
        </div>

        <div className="hero-resume">
          {/* Option 1 — smooth scroll to Resume section */}
          <AnchorLink className='anchor-link' href='#resume' offset='50'>My Resume</AnchorLink>

          {/* Option 2 — download resume as PDF */}
          {/* <a className='anchor-link' href={resumePDF} download="Thouseef_Resume.pdf" target="_blank" rel="noopener noreferrer"> */}
            {/* Download Resume
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
