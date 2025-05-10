import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaServer } from 'react-icons/fa'; 
import { SiTypescript, SiBootstrap, SiPhp, SiMysql, SiMongodb, SiGit, SiPostgresql } from 'react-icons/si'; 
import './Home.css';

const Experience = () => {
  return (<>
  
    <section id="experience">
   
      <h1 className="title">Experience</h1>

      {/* Frontend Development */}
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {[ 
                { name: 'HTML', icon: <FaHtml5 className="icon" /> },
                { name: 'CSS', icon: <FaCss3Alt className="icon" /> },
                { name: 'JavaScript', icon: <FaJsSquare className="icon" /> },
                { name: 'React', icon: <FaReact className="icon" /> },
                { name: 'Bootstrap', icon: <SiBootstrap className="icon" /> },
              
              ].map((skill) => (
                <article key={skill.name}>
                  {skill.icon}
                  <div>
                    <h3>{skill.name}</h3>
                   
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Back-End Development */}
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Back-End Development</h2>
            <div className="article-container">
              {[ 
                { name: 'Node.js', icon: <FaNodeJs className="icon" /> },  
                { name: 'PHP', icon: <SiPhp className="icon" /> },
              ].map((skill) => (
                <article key={skill.name}>
                  {skill.icon}
                  <div>
                    <h3>{skill.name}</h3>
                    
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Database Management */}
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Database Management</h2>
            <div className="article-container">
              {[ 
                { name: 'MySQL', icon: <SiMysql className="icon" /> },
                { name: 'PostgreSQL', icon: <SiPostgresql className="icon" /> },
                { name: 'MongoDB', icon: <SiMongodb className="icon" /> },
              ].map((skill) => (
                <article key={skill.name}>
                  {skill.icon}
                  <div>
                    <h3>{skill.name}</h3>
                   
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Tools & Platforms */}
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Tools & Platforms</h2>
            <div className="article-container">
              {[ 
                { name: 'Git', icon: <SiGit className="icon" /> },
                { name: 'WampServer', icon: <FaServer className="icon" /> },
                { name: 'XAMPP', icon: <FaServer className="icon" /> },
              ].map((tool) => (
                <article key={tool.name}>
                  {tool.icon}
                  <div>
                    <h3>{tool.name}</h3>
                  
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Experience;
