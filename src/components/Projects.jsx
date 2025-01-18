// src/components/Projects.jsx
import React from 'react';
import './Home.css';  // Corrected the import path for the CSS

const Projects = () => {
  const projects = [
    {
      title: 'Anime T-shirt Website',
      github: 'https://github.com/Rubinsam11/Anime_Tshirt_Website',
      liveDemo: 'https://your-live-demo-url.com', // Replace with actual live demo link if available
      imageUrl: './assets/project-1.png'
    },
    {
      title: 'E-perfume',
      github: 'https://github.com/Rubinsam11/E-perfume',
      liveDemo: 'https://e-perfume-sams-projects-1db21b01.vercel.app/', // Replace with actual live demo link if available
      imageUrl: '   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMECk-XvnkoznDqmZ083gSjbqnC-ZzZG0N-y9LgdcMA&s',
    },
    {
      title: 'Group Project',
      github: 'https://github.com/Rubinsam11/grp-project',
      liveDemo: 'https://grpgroups.in/', // Replace with actual live demo link if available
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYMECk-XvnkoznDqmZ083gSjbqnC-ZzZG0N-y9LgdcMA&s  ',
    },
    {
      title: 'Image Mining',
      github: 'https://github.com/Rubinsam11/image-mining',
      liveDemo: 'https://image-mining.vercel.app/', // Updated live demo link
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_V-dHdudxpysexiVcZSXn0ZZTEfznFFXvLSC5FJHEIf2yxPRbd7dSZOlm&s=10',
    },
    {
      title: 'College Website',
      github: 'https://github.com/Rubinsam11/college_website',
      liveDemo: 'https://college-website-silk.vercel.app/', // Replace with actual live demo link if available
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4wM1D20qbxpHxXOHUq9YVXlUazkcyCFyKxQ&usqp=CAU',
    }
  ];

  return (
    <section id="projects">
      <p className="section__text__p1">Browse My Recent</p>
      <h1 className="title">Projects</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          {projects.map((project, index) => (
            <div className="details-container color-container" key={index}>
              <div className="article-container">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h2 className="experience-sub-title project-title">{project.title}</h2>
              <div className="btn-container">
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.github)} // GitHub link
                >
                  Github
                </button>
                <button
                  className="btn btn-color-2 project-btn"
                  onClick={() => window.open(project.liveDemo)} // Live Demo link
                >
                  Live Demo
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
