import React from 'react';
import './App.css'; 
import image1 from '../pages/MacBook Air - 48.png'; // Adjust path if necessary

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <img src={image1} alt="About" className="additional-image" />
    </div>
  );
}

export default About;
