import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'; // Import the GitHub and LinkedIn icons from the font icon library
import '../index.css';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <h3>
        <Link className='back-home' to='/' >AURIZON</Link>
      </h3>
      <div className='footer-column'>
        <h4>Products</h4>
          <ul>
            <li><Link
                    // to="https://www.journeeztrip.com"
                    >
                    In development
                  </Link></li>
            <li></li>
            <li></li>
          </ul>
      </div>
      <div className='footer-column'>
        <h4>Solutions</h4>
          <ul>
            <li><Link to='/technologies/web-development' >Web Development</Link></li>
            <li><Link to='/technologies/api-development' >API Development</Link></li>
            <li>Mobile App Development</li>
            <li><Link to='/technologies/business-solutions' >Business Solutions</Link></li>
            <li>Network Services</li>
            <li>Security Solutions</li>
          </ul>
      </div>
      <div className='footer-column'>
        <h4>Resources</h4>
          <ul>
            <li>Technical Support</li>
            <li>Aurizon Community</li>
            <li>Marketplace</li>
            <li>My Account</li>
          </ul>
      </div>
      <div className='footer-column'>
        <h4>Expand Your Aurizons</h4>
          <ul>
            <li>Aurizon University</li>
            <li>Documentation</li>
            <li>Developer Resources</li>
            <li>Partners</li>
            <li>Webinars</li>
          </ul>
      </div>
      <div className='footer-column'>
        <h4>Company</h4>
          <ul>
            <li><Link to='/technologies' >Our Technologies</Link></li>
            <li><Link to='/about' >Who we are</Link></li>
            <li><Link to='/portfolio'>Portfolio</Link></li>
            <li><Link to='/careers' >Careers</Link></li>
            <li>Events</li>
            <li>Blogs</li>
            <li><Link to='/insider' >Insider</Link></li>
            <li><Link to='/contact' >Contact Us</Link></li>
            <li><Link to='/about#faq'>FAQ</Link></li>
          </ul>
      </div>
      <div className="footer-legal">
  <div className="footer-legal-content">
    <div className="copyright">© 2023-2024 Aurizon Technologies, LLC</div>
  <p>Privacy Policy</p>
  <p>Terms of Service</p>
    <div className="social-icons">
      <a href="https://github.com/jdelvalle12" target="_blank" rel="noopener noreferrer">
        <FaGithub className="icon" />
      </a>
      <a href="https://linkedin.com/in/jose-del-valle-94993a124/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="icon" />
      </a>
      <a href="https://www.facebook.com/jose.j.delvalle.58" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="icon" />
      </a>
      <a href="mailto:jdelvalle88@live.com" target="_blank" rel="noopener noreferrer">
        <FaEnvelope className="icon" />
      </a>
    </div>
  </div>
</div>
    </footer>
  );
};

export default Footer;
