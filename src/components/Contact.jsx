import React from "react";
import { FaEnvelope, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import "./Home.css"; // Import the CSS file

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {/* Title and Subtitle */}
        <h2 className="contact-title">Get in Touch</h2>
        <p className="contact-subtitle">Feel free to reach out via any of the methods below or use the form to send a message!</p>

        {/* Contact Grid */}
        <div className="contact-grid">
          <a
            href="mailto:rubinsam052@gmail.com"
            className="contact-card"
            aria-label="Email Rubin Sam"
          >
            <FaEnvelope className="icon email" />
            <p className="contact-title">Email</p>
            <p className="contact-detail">rubinsam052@gmail.com</p>
          </a>
          <a
            href="https://linkedin.com/in/rubin-sam-s"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
            aria-label="Visit Rubin Sam's LinkedIn profile"
          >
            <FaLinkedin className="icon linkedin" />
            <p className="contact-title">LinkedIn</p>
            <p className="contact-detail">linkedin.com/in/rubin-sam-s</p>
          </a>
          <div className="contact-card" role="contentinfo">
            <FaMapMarkerAlt className="icon location" />
            <p className="contact-title">Address</p>
            <p className="contact-detail">
              7/322, Keezhavannan Vilai, <br /> Kottar, Nagercoil
            </p>
          </div>
          <a
            href="tel:+919344892578"
            className="contact-card"
            aria-label="Call Rubin Sam"
          >
            <FaPhoneAlt className="icon phone" />
            <p className="contact-title">Phone</p>
            <p className="contact-detail">+91 9344892578</p>
          </a>
        </div>

        {/* Contact Form */}
        {/* Add your contact form here if needed */}
      </div>
    </section>
  );
}

export default Contact;
