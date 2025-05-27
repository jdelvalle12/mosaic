import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import 'tailwindcss/tailwind.css';
import '../index.css';
// import '../App.css';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
    setIsDropdownOpen(false);
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Close the dropdown if the click is outside the menu
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  return (
    <nav className='mobile-nav'>
      {/* <div className="logo">Logo</div> */}
      <div
        ref={dropdownRef}
        className={`menu ${isMenuOpen ? 'open' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>
          <li
               className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
               onClick={toggleDropdown}
          >
          <Link to="#" className="nav-link">
            Services
            <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>&#9662;</span></Link>
          <div className={`mobile-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              {/* Dropdown menu content */}
              <ul>
                <h3>Solutions</h3>
                  <li><Link className='sub-nav-link' to="/services#web-development">Web Development</Link></li>
                  <li><Link className='sub-nav-link' to="/services#api-development">API Development</Link></li>
                  <li><Link className='sub-nav-link' to="/services#mobile-development">Mobile Development</Link></li>
                  <li><Link className='sub-nav-link' to="/services#business-solutions">Business Solutions</Link></li>
                  {/* <li><Link className='sub-nav-link' to="/services#network-services">Network Services</Link></li> */}
                  <li><Link className='sub-nav-link' to="/services#security-solutions">Security Solutions</Link></li>
                <h3>Products</h3>
                  <li><Link
                    // to="https://www.journeeztrip.com"
                    className='sub-nav-link'
                  >
                    In development
                  </Link></li>
                  <h3></h3>
                  <li>
                <Link 
                // to="/services/aurizon" 
                className='sub-nav-link'>In development</Link>
              </li>
              </ul>
            </div>
          </li>
          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/careers" className="nav-link">Careers</Link></li>
          <li><Link to="/news" className="nav-link">News</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          <li><Link to="/signin" className="nav-link">Sign In</Link></li>
        </ul>
      </div>
      {/* Hamburger menu button */}
      {isMobile && (
        <button className="hamburger" onClick={toggleMenu}>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      )}
    </nav>
  );
};

export default Navbar;