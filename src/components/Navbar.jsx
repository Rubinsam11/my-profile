import React, { useState, useEffect } from 'react'; 
import { Menu, X } from 'lucide-react'; 
import './navbar.css';  
import logo from '../assets/logo.png';  // Adjusted path for src/assets

function Navbar() {   
  const [isMenuOpen, setIsMenuOpen] = useState(false);   
  const [scrolled, setScrolled] = useState(false);   
  const [activeSection, setActiveSection] = useState('about');    

  useEffect(() => {     
    const handleScroll = () => {       
      const isScrolled = window.scrollY > 100;      
      if (isScrolled !== scrolled) {         
        setScrolled(isScrolled);       
      }     
    };      

    window.addEventListener('scroll', handleScroll);     
    return () => window.removeEventListener('scroll', handleScroll);   
  }, [scrolled]);    

  const toggleMenu = () => {     
    setIsMenuOpen(!isMenuOpen);   
  };    

  const handleNavClick = (section) => {     
    setActiveSection(section);     
    setIsMenuOpen(false);   
  };    

  return (  
    <>
           
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>       
      <div className="navContainer">         
        <div className="navContent">           
          {/* Logo */}           
          <div className="logo">             
            <img src={logo} alt="Logo" className="logoImage" /> {/* Use the imported logo */}              
          </div>     
          <div className="space"/>       

          {/* Desktop Navigation */}           
          <div className="desktopNav">             
            {['about', 'experience', 'projects', 'contact'].map((section) => (               
              <a                 
                key={section}                 
                href={`#${section}`}                 
                onClick={() => handleNavClick(section)}                 
                className={`navLink ${activeSection === section ? 'active' : ''}`}               
              >                 
                {section.charAt(0).toUpperCase() + section.slice(1)}               
              </a>             
            ))}           
          </div>            

          {/* Mobile Menu Button */}           
          <button             
            type="button"             
            className="menuButton"             
            onClick={toggleMenu}             
            aria-expanded={isMenuOpen}           
          >             
            <span className="srOnly">Toggle menu</span>             
            {isMenuOpen ? (               
              <X className="menuIcon" />             
            ) : (               
              <Menu className="menuIcon" />             
            )}           
          </button>         
        </div>       
      </div>        

      {/* Mobile Menu */}       
      <div          
        className={`mobileMenu ${isMenuOpen ? 'mobileMenuOpen' : 'mobileMenuClosed'}`}         
        aria-hidden={!isMenuOpen}       
      >         
        <div className="mobileNavLinks">           
          {['about', 'experience', 'projects', 'contact'].map((section) => (              
            <a               
              key={section}               
              href={`#${section}`}               
              onClick={() => handleNavClick(section)}               
              className={`mobileNavLink ${activeSection === section ? 'mobileNavLinkActive' : ''}`}             
            >               
              {section.charAt(0).toUpperCase() + section.slice(1)}             
            </a>           
          ))}         
        </div>       
      </div>     
    </nav> 
    </>  
  ); 
}  

export default Navbar;
