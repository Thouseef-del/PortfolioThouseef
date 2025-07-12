import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Navbar.css';
import logo from './logo.svg';

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="logo" />

      <ul className='nav-menu'>
        <li>
          <AnchorLink className='anchor-link' href='#home' offset='50'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#about' offset='50'>
            <p onClick={() => setMenu("about")}>About me</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#skill' offset='50'>
            <p onClick={() => setMenu("skill")}>Skill</p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className='anchor-link' href='#resume' offset='50'>
            <p onClick={() => setMenu("resume")}>Resume</p>
          </AnchorLink>
        </li>
      </ul>

      <div className="nav-connect">
        <AnchorLink className='anchor-link' href='#contact' offset='50'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
