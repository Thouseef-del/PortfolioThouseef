import React from 'react';
import './Resume.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import resumePDF from '../../assets/Thouseef_Resume.pdf';  // imported PDF

const Resume = () => {
  return (
    <div id='resume' className="resume-container">
      <div className="resume-title">
        <h1>Resume</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="resume-description">
        <p>
          I thrive on creating innovative, scalable, and efficient digital solutions.
          Explore my resume to discover the projects I’ve built, skills I’ve honed, and the impact I aim to deliver.
        </p>
        <p>
          You can either download my resume or view it online using the buttons below.
        </p>
      </div>

      <div className="resume-buttons">
        <a
          href={resumePDF}
          download
          className="resume-btn"
        >
          📥 Download Resume
        </a>

        <a
          href={resumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          👁️ View Resume
        </a>
      </div>
    </div>
  );
}

export default Resume;
