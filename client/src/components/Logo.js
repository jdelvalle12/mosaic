import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo">
        {/* Add the SVG arc here */}
        <svg className="arc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          {/* The arc path goes from A to Z, passing over "uri" */}
          {/* <path d="M 10 90 Q 30 30 50 10 Q 10 20 180 10 Q 15 20 17 100" fill="transparent" stroke="aqua" stroke-width="20" /> */}
        </svg>
        {/* Display the letters A and Z */}
        {/* <span>A</span>uri<span>z</span>on */}
      </div>
      <Link className="no-underline flex items-center" to="/">
        <span className="logo-span bg-aqua text-black bold px-1">A</span>URIZON
      </Link>
    </div>
  );
};

export default Logo;