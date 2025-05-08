// src/components/Profile.jsx
import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import './Home.css';
import profile from '../assets/profile.png';
import TrueFocus from './TrueFocus'; // Ensure this path is correct

const Profile = () => {
  return (
    <>
      <div className="space-profile" />
      <section id="profile">
        <div className="section__pic-container">
          <img src={profile} alt="Rubin Sam profile" />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>

          {/* Animated Name */}
          <TrueFocus 
            sentence="RUBIN SAM .S"
            manualMode={false}
            blurAmount={5}
            borderColor="green"
            animationDuration={2}
            pauseBetweenAnimations={1}
          />
<p className="space"></p>
          <p className="section__text__p2">
            W E B  &  F U L L- S T A C K  D E V E L O P E R  <br /> I N T E R N
          </p>

          <div className="btn-container">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="btn btn-color-2">Download CV</button>
            </a>

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
