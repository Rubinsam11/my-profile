import React from 'react';
import './Home.css'; // Ensure the correct path to your CSS file
import about from '../assets/about.png';  // Correct image import

const About = () => {
  return (
    <section id="about">
      <p className="section__text__p1">Get To Know More</p>
      <h1 className="title">About Me</h1>

      <div className="about-content-container">
        {/* Image Section (left side) */}
        <div className="about-image-container">
          <img
            src={about}  // Use the imported 'about' image
            alt="About Me"
            className="about-pic"
          />
        </div>

        {/* Right Side: About Text */}
        <div className="about-text-container">
          <div className="about-text">
            <p>
              I am Rubin Sam, a third-year Bachelor of Computer Applications (BCA) student with a strong passion
              for web development and full-stack development. I am seeking an internship opportunity to apply
              my skills in HTML, CSS, JavaScript, and React for creating scalable and user-friendly web solutions.
              With a focus on innovation and problem-solving, I aim to contribute to impactful projects and gain
              practical experience in the field during the summer internship period.
            </p>
          </div>
        </div>
      </div>

      {/* Internship and Education Sections (side by side in a row) */}
      <div className="details-row">
        {/* Internship Section */}
        <div className="details-container">
          <h3>Internship</h3>
          <div className="internship-details">
            <div>
              <h4>For AK Infotech</h4>
              <p>Collaborated with a team of 4 to design responsive websites using React and Bootstrap, achieving 95% mobile compatibility.</p>
            </div>
            <div>
              <h4>For YBI Foundation</h4>
              <p>Completed 3 Python-based machine learning projects, integrating web applications with AI capabilities.</p>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="details-container">
          <h3>Education</h3>
          <div className="education-details">
            <div>
              <h4>VKV High School</h4>
              <p>2021-2022</p>
              <p>Higher Secondary School</p>
            </div>
            <div>
              <h4>Manonmaniam Sundaranar University</h4>
              <p>2022 - 2025</p>
              <p>Bachelor of Computer Applications (BCA)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
