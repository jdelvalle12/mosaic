import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Navbar from "../components/Navbar";
import Logo from './Logo';
import '../components/Header.css';
import '../index.css';
import '../App.css';

const Header = () => {
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Check if the screen width is less than or equal to 768px

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
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
      <div className="relative">
      <div
              // to="/technologies"
              className={`technologies inline-flex items-center space-x-1 font-medium text-gray-700 hover:text-gray-900 ${isServiceDropdownOpen ? 'active' : ''}`}
              onClick={toggleServiceDropdown}
              // onMouseLeave={toggleServiceDropdown}
            >
              Our Technologies
              <span className={`dropdown-arrow ${isServiceDropdownOpen ? 'open' : ''}`}>&#9662;</span>
            </div>
            {isServiceDropdownOpen && (
              <ul className="dropdown-menu absolute z-10 hidden mt-2 py-1 text-gray-700 bg-white border rounded shadow">
                  <h2>Solutions</h2>
                  
                <li>
                  <Link
                    to="/technologies#web-development"
                    className="flex px-4 py-2 hover:bg-gray-100"
                  >
                    Web Development
                  </Link>
                </li>
              <li>
                <Link to="/technologies#api-development" className="flex px-4 py-2 hover:bg-gray-100">API Development</Link>
              </li>
              <li>
                <Link to="/technologies#mobile-app-development" className="flex px-4 py-2 hover:bg-gray-100">Mobile App Development</Link>
              </li>
              <li>
                <Link to="/technologies#business-solutions" className="flex px-4 py-2 hover:bg-gray-100">Business Solutions</Link>
              </li>      
              <li>
                <Link to="/technologies#network-services" className="flex px-4 py-2 hover:bg-gray-100">Network Services</Link>
              </li> 
              <li>
                <Link to="/technologies#security-solutions" className="flex px-4 py-2 hover:bg-gray-100">Security Solutions</Link>
              </li> 
                <h2>Products</h2>
                <li>
                  <Link
                    // to="https://www.journeeztrip.com"
                    className="flex px-4 py-2 hover:bg-gray-100"
                  >
                    In development
                  </Link>
                </li>
                <h2>Work tools</h2>
              <li>
                <Link 
                // to="/solutions/accorplan" 
                className="flex px-4 py-2 hover:bg-gray-100">In development</Link>
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
      <Link className="about" to="/about">Who We Are</Link>
      <Link className="portfolio" to="/portfolio">Portfolio</Link>
      <Link className="careers" to="/careers">Careers</Link>
      <Link className="insider" to="/insider">Insider</Link>
      <Link className="contact" to="/contact">Contact</Link>
      <Link className="sign-in" to="/signin">Sign In</Link>
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