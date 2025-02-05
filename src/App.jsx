// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar'; // Update to match Navbar component
import Profile from './components/Profile';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
   
      {/* Content */}
      <Navbar />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
