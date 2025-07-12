import React, { useRef } from 'react';
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaCode } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_jqsiu8w',
      'template_gcy2nxf',
      form.current,
      'YXDV5I1WHjNWXg6ax'
    ).then(
      () => {
        alert('✅ Message sent successfully!');
        form.current.reset();
      },
      () => {
        alert('❌ Failed to send message. Please try again.');
      }
    );
  };

  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in Touch</h1>
        <img src={theme_pattern} alt="theme pattern" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            Have a project in mind or just want to connect? Feel free to reach out — I'm always open to new opportunities, collaborations, and conversations.
          </p>

          <div className="contact-details">
            <div className="contact-detail">
              <FaPhoneAlt className="contact-icon" />
              <span>+91 6382499942</span>
            </div>
            <div className="contact-detail">
              <FaEnvelope className="contact-icon" />
              <span>thouseefshamsu@gmail.com</span>
            </div>
            <div className="contact-detail">
              <FaLinkedin className="contact-icon" />
              <a href="https://www.linkedin.com/in/mohammed-thouseef-ms-3b190a290/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profile
              </a>
            </div>
            <div className="contact-detail">
              <FaCode className="contact-icon" />
              <a href="https://leetcode.com/vvGY1cqxjj/" target="_blank" rel="noopener noreferrer">
                LeetCode Profile
              </a>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Your Name" required />
            <input type="email" name="user_email" placeholder="Your Email" required />
            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      <div className="contact-footer">
        <p>Crafted with passion and precision by Mohammed Thouseef © 2025</p>
      </div>
    </div>
  );
};

export default Contact;
