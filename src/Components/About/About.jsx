import React from 'react';
import './About.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import abt_img from '../../assets/Straightface.jpg';

const About = () => {
  return (
    <div id='about' className='about'>

      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="about-section">
        <div className="about-left">
          <img src={abt_img} alt="profile" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I’m a dynamic and driven Software Developer with a keen interest in Cloud Computing and Cybersecurity. Constantly curious and adaptable, I thrive on learning new technologies and turning ideas into impactful, real-world solutions.</p>
            <p>I love tackling complex problems, architecting scalable applications, and fortifying systems with robust security practices. I’m fueled by challenges and inspired by opportunities to innovate, evolve, and deliver meaningful results.</p>
            <p>With a mindset rooted in growth and precision, I aim to craft digital experiences that are not just functional — but future-ready.</p>
          </div>
        </div>
      </div>

      <div id='skill' className="about-title">
        <h1>Skills</h1>
        <img src={theme_pattern} alt="pattern" />
      </div>

      <div className="skills-section">
        <div className="skills">
          <div className="about-skill">Java</div>
          <div className="about-skill">React JS</div>
          <div className="about-skill">MySQL</div>
          <div className="about-skill">C++</div>
          <div className="about-skill">Data Structures and Algorithms</div>
          <div className="about-skill">DBMS</div>
          <div className="about-skill">Selenium-Java (Testing)</div>
          <div className="about-skill">HTML / CSS</div>
          <div className="about-skill">AWS Cloud Computing</div>
        </div>
        {/* <div className="about-skill-familiar">
          <p><span>Familiar with:</span> AWS, React, Git, Networking, Linux, Python, MS Word, PowerPoint</p>
        </div> */}
      </div>

    </div>
  )
}

export default About;
