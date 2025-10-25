import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Import the GitHub and LinkedIn icons from the font icon library
import '../index.css';
// import '../App.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Top brand section */}
      <div className="footer-top">
        <div className="footer-brand">
          <h3>
            <Link className="back-home" to="/">MOSAIC</Link>
          </h3>
          <p className="footer-message">Innovating digital solutions for your business.</p>
        </div>
      </div>

      {/* Footer columns */}
      <div className="footer-columns">
        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li><Link to='/services/web-development'>Web Development</Link></li>
            <li><Link to='/services/api-integrations'>API & Integrations</Link></li>
            <li><Link to='/services/mobile-app-development'>Mobile App Development</Link></li>
            <li><Link to='/services/business-solutions'>Business Solutions</Link></li>
            <li><Link to='/services/e-commerce-solutions'>E-Commerce Solutions</Link></li>
            <li><Link to='/services/marketing-support'>Marketing Support</Link></li>
            <li><Link to='/services/hosting-maintenance'>Hosting & Maintenance</Link></li>
            <li><Link to='/services/uiux-design'>UI/UX Design</Link></li>
            <li><Link to='/services/tech-strategy'>Tech Strategy</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Technical Support</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to='/services'>Our Services</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/careers'>Careers</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/contact'>Contact Us</Link></li>
            <li><Link to='/about#faq'>FAQ</Link></li>
          </ul>
        </div>
      </div>
      {/* Legal / social section */}
      <div className="footer-legal">
        <div className="footer-legal-content">
          <div className="copyright">© 2025 Mosaic Digital Services, LLC</div>
          <p><Link to="/privacy-policy">Privacy Policy</Link></p>
          <p><Link to="/terms-of-service">Terms of Service</Link></p>
          <div className="social-icons">
            <a href="mailto:info@mosaicdigitalcreations.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelope className="icon" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;