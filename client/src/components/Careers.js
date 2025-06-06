import React from 'react';
import {Link} from 'react-router-dom';
import Career from '../images/career.jpg';
import '../index.css';
import '../App.css';

const Careers = () => {
  return (
    <div className="career-container">
      <div className="career-text">
        <h2>Careers</h2>
        <h3>Come Join Our Team</h3>
        <p>
          We're on an ambitious journey, and we want you to be a part of it.
          Your skills can help shape the future at Mosaic. Explore exciting
          career opportunities with us today!
        </p>
        <Link to="/careers" className="careers-link">
          Join the team <span className="arrow">→</span>
        </Link>
      </div>
      {/* Optional Image */}
      <div className="career-image">
      </div>
        <img src={Career} alt="Career" className="career-image" data-aos='slide-left'></img>
    </div>
  );
};

export default Careers;