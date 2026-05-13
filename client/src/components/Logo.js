import React from 'react';
import { Link } from 'react-router-dom';
import MosaicLogo from '../images/mosaic-logo.png';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <Link className="logo-link" to="/">
        <img
          src={MosaicLogo}
          alt="Mosaic Digital Creations Logo"
          className="mosaic-logo"
        />

        <span className="logo-text">OSAIC</span>
      </Link>
    </div>
  );
};

export default Logo;