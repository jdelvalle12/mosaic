import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const dropdownRef = useRef(null);

  // Handle screen resizing
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdown if clicking outside of it
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('click', handleDocumentClick);
    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);

  // Handlers
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const closeDropdown = () => setIsDropdownOpen(false);

  const handleDropdownInteraction = () => {
    if (isMobile) {
      toggleDropdown();
    }
  };

  return (
    <nav className="mobile-nav">
      <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" className="nav-link">Home</Link></li>
          <li><Link to="/about" className="nav-link">About</Link></li>

          <li
            className={`dropdown ${isDropdownOpen ? 'open' : ''}`}
            onClick={handleDropdownInteraction}
            ref={dropdownRef}
          >
            <Link to="#" className="nav-link">
              Services
              <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>&#9662;</span>
            </Link>
            <div className={`mobile-dropdown-menu ${isDropdownOpen ? 'open' : ''}`}>
              <ul>
                {/* <h3>Solutions</h3> */}
                <li><Link className='sub-nav-link' to="/services/web-development">Web Development</Link></li>
                <li><Link className='sub-nav-link' to="/services/api-development">API Development</Link></li>
                {/* <li><Link className='sub-nav-link' to="/services/mobile-development">Mobile Development</Link></li> */}
                <li><Link className='sub-nav-link' to="/services/business-solutions">Business Solutions</Link></li>
                {/* <li><Link className='sub-nav-link' to="/services/security-solutions">Security Solutions</Link></li> */}
                <li><Link className='sub-nav-link' to="/services/marketing-support">Marketing Support</Link></li>
                <li><Link className='sub-nav-link' to="/services/hosting">Hosting</Link></li>
                <li><Link className='sub-nav-link' to="/services/uiux-design">UI/UX Design</Link></li>
                <li><Link className='sub-nav-link' to="/services/tech-strategy">Tech Strategy</Link></li>
                {/* <h3>Products</h3>
                <li><Link className='sub-nav-link'>In development</Link></li>
                <li><Link className='sub-nav-link'>In development</Link></li> */}
              </ul>
            </div>
          </li>

          <li><Link to="/portfolio" className="nav-link">Portfolio</Link></li>
          <li><Link to="/careers" className="nav-link">Careers</Link></li>
          <li><Link to="/news" className="nav-link">News</Link></li>
          <li><Link to="/contact" className="nav-link">Contact</Link></li>
          {/* <li><Link to="/signin" className="nav-link">Sign In</Link></li> */}
        </ul>
      </div>

      {/* Hamburger menu button for mobile */}
      {isMobile && (
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>
      )}
    </nav>
  );
};

export default Navbar;