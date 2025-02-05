// src/components/Profile.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';  // Import the icons from react-icons
import './Home.css';
import profile from '../assets/profile.png';  // Import image

const Profile = () => {
  return (
    <>
      <div className="space-profile" />
      <section id="profile">
        <div className="section__pic-container">
          {/* Use the imported image directly */}
          <img src={profile} alt="Rubin Sam profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">.      RUBIN SAM</h1>
          <p className="section__text__p2">
            W E B  &  F U L L- S T A C K  D E V E L O P E R  <br />I N T E R N
          </p>
          <div className="btn-container">
            <button
              className="btn btn-color-2"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              Download CV
            </button>
            <button
              className="btn btn-color-1"
              onClick={() => window.location.href = '#contact'}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <FaLinkedin
              className="icon"
              onClick={() => window.open('https://linkedin.com/in/rubin-sam-s')}
            />
            <FaGithub
              className="icon"
              onClick={() => window.open('https://github.com/Rubinsam11')}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
