import React from 'react';
import ProfilePic from '../assets/Resume Suhaimee.png'; // Ensure this path is correct

function Header() {
  return (
    <header className="header">
      <div className="profile">
        <img src={ProfilePic} alt="Suhaimee Kaje" className="profile-pic" />
        <div className="contact-details">
          <h1>Suhaimee Kaje</h1>
          <ul>
            <li>LINE: Suhaimeekajae</li>
            <li>Phone: 0987231910, 0640826028</li>
            <li>Email: Suhaimee499@gmail.com</li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
