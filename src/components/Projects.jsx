import React from 'react';
import './Home.css';
import foodImage from '../assets/foodimage.png'; // Corrected the path to the image
import projectImage from '../assets/project.png'; // Corrected the path for 'project' image
import GrpImage from '../assets/grp.png';
import gym from '../assets/gym.png';
import  Ration from '../assets/Ration.png';
import  weather from '../assets/weather.png';
import anime from '../assets/amine.png';

const Projects = () => {
  const projects = [
    {
      title: 'Anime T-shirt Website',
      github: 'https://github.com/Rubinsam11/Anime_Tshirt_Website',
      liveDemo: 'https://anime-tshirt-website.vercel.app/', // Replace with actual live demo link if available
      imageUrl: anime // Corrected the typo in the image URL
    },
    { 
      title: 'Rs foods website',
      github: 'https://github.com/Rubinsam11/food-restaurant',
      liveDemo: 'https://food-restaurant-pied.vercel.app/', // Your actual live demo link
      imageUrl: foodImage  // Use the imported image here
    }, 
    {

      title: 'weather',
      github: 'https://github.com/Rubinsam11/grp-project',
      liveDemo: 'https://weather-sigma-pied.vercel.app/', // Replace with actual live demo link if available
      imageUrl: weather
    },
    {
      title: 'E-perfume',
      github: 'https://github.com/Rubinsam11/E-perfume',
      liveDemo: 'https://e-perfume-sams-projects-1db21b01.vercel.app/', // Replace with actual live demo link if available
      imageUrl: projectImage
    },
    {
      title: 'Group Project',
      github: 'https://github.com/Rubinsam11/grp-project',
      liveDemo: 'https://grpgroups.in/', // Replace with actual live demo link if available
      imageUrl: GrpImage
    },
    {
      title: 'Gym website',
      github: 'https://github.com/Rubinsam11/gym-websit-',
      liveDemo: 'https://gym-websit-two.vercel.app/', // Replace with actual live demo link if available
      imageUrl: gym
    },
    {
      title: 'Ration  managemnt system',
      github: 'https://github.com/Rubinsam11/ration',
      liveDemo: 'https://ration-flax.vercel.app/', // Replace with actual live demo link if available
      imageUrl: Ration
    },
   
 
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
                  className="project-image" // Renamed class for clarity
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
