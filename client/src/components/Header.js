import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Logo from './Logo';
import '../components/Header.css';
import '../index.css';
// import '../App.css';
import './Navbar.css';

const Header = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen width is less than or equal to 768px

  const timeoutRef = useRef(null);

const handleMouseEnter = () => {
  if (timeoutRef.current) {
    clearTimeout(timeoutRef.current);
  }
  setIsServiceDropdownOpen(true);
};

const handleMouseLeave = () => {
  timeoutRef.current = setTimeout(() => {
    setIsServiceDropdownOpen(false);
  }, 200); // 200ms delay
};

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
<header className="text-light mb-4 py-1">
  <div className="header-container flex flex-col lg:flex-row justify-between items-center">
    <Logo />
    {!isMobile && (
    <nav className="navi">
      <div 
  className="relative"
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <Link to="/services" className={`services inline-flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900`}>
    <span>Services</span>
    <span className="dropdown-arrow">&#9662;</span>
  </Link>
            {isServiceDropdownOpen && (
              <ul className={`dropdown-menu ${isServiceDropdownOpen ? 'open' : ''}`}>
                  {/* <h2>Solutions</h2> */}
                  
                <li>
                  <Link to="/services/web-development" className="flex px-4 py-2 hover:bg-gray-100">Web Development</Link>
                </li>
              <li>
                <Link to="/services/api-development" className="flex px-4 py-2 hover:bg-gray-100">API Development</Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="flex px-4 py-2 hover:bg-gray-100">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/services/business-solutions" className="flex px-4 py-2 hover:bg-gray-100">Business Solutions</Link>
              </li>      
              <li>
                {/* <Link to="/services#network-services" className="flex px-4 py-2 hover:bg-gray-100">Network Services</Link> */}
              </li> 
              <li>
                <Link to="/services/security-solutions" className="flex px-4 py-2 hover:bg-gray-100">Security Solutions</Link>
              </li> 
              <li>
                <Link to="/services/marketing-support" className="flex px-4 py-2 hover:bg-gray-100">Marketing Support</Link>
              </li>
              <li>
                <Link to="/services/hosting" className="flex px-4 py-2 hover:bg-gray-100">Hosting & Development</Link>
              </li>
              <li>
                <Link to="/services/uiux-design" className="flex px-4 py-2 hover:bg-gray-100">UI/UX Design</Link>
              </li>
              <li>
                <Link to="/services/tech-strategy" className="flex px-4 py-2 hover:bg-gray-100">Tech Strategy</Link>
              </li>
                {/* <h2>Products</h2> */}
                <li>
                  {/* <Link
                    // to="https://www.journeeztrip.com"
                    className="flex px-4 py-2 hover:bg-gray-100"
                  >
                    In development
                  </Link> */}
                </li>
                <h2></h2>
              <li>
                {/* <Link 
                // to="/solutions/accorplan" 
                className="flex px-4 py-2 hover:bg-gray-100">In development</Link> */}
              </li>
              {/* <li>
                <Link to="/solutions/front-end-development">Frontend-Development</Link>
                </li>
                <li>
                <Link to="/solutions/back-end-development">Backend-Development</Link>
              </li> */}
              
            </ul>
          )}
          </div>
      <Link className="about" to="/about">About</Link>
      <Link className="portfolio" to="/portfolio">Portfolio</Link>
      <Link className="careers" to="/careers">Careers</Link>
      <Link className="news" to="/news">News</Link>
      <Link className="contact" to="/contact">Contact</Link>
      {/* <Link className="sign-in" to="/signin">Sign In</Link> */}
    </nav>
    )}
    <div className="mobile-menu">
          <Navbar /> 
    </div>
  </div>
</header>
  );
}

export default Header;