import React from 'react';
import { Link } from 'react-router-dom';
import WebDevIllustration from '../images/web-development.svg'; // your image or illustration
import '../styles/WebDevelopment.css'; // optional external CSS file



const WebDevelopment = () => {
  return (
    <div className="webdev-container">
      {/* Hero Section */}
      <section className="webdev-hero">
        <img src={WebDevIllustration} alt="Web Development Illustration" className="webdev-hero-img" />
        <div className="webdev-hero-text">
          <h1>Web Design & Development</h1>
          <p>
            We build stunning, responsive websites that are fast, modern, and tailored to your brand.
            Whether it’s a portfolio, business site, or e-commerce platform — we bring your ideas to life.
          </p>
          <Link to="/contact" className="btn primary-btn">Start Your Project</Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="webdev-services">
        <h2>Professional Web Design & Development Services</h2>
        <div className="webdev-grid">
          <div className="webdev-card">
            <h3>Custom Website Design</h3>
            <p>Beautiful, user-friendly designs built from scratch — no templates, just creativity and purpose.</p>
          </div>
          <div className="webdev-card">
            <h3>Full Stack Development</h3>
            <p>From the front-end visuals to the back-end infrastructure — we handle it all for seamless performance.</p>
          </div>
          <div className="webdev-card">
            <h3>E-Commerce Solutions</h3>
            <p>Launch your online store with secure payments, inventory systems, and a smooth shopping experience.</p>
          </div>
          <div className="webdev-card">
            <h3>Website Maintenance</h3>
            <p>Keep your website up-to-date, fast, and secure with our ongoing maintenance and support packages.</p>
          </div>
        </div>
      </section>

      <section className="webdev-process">
        <h2>Our Development Process</h2>
        <div className="process-grid">
          <div>
            <h3>1. Discovery</h3>
            <p>We learn about your goals, audience, and brand to plan the perfect solution.</p>
          </div>
          <div>
            <h3>2. Design</h3>
            <p>Wireframes and UI designs crafted for usability, performance, and aesthetics.</p>
          </div>
          <div>
            <h3>3. Development</h3>
            <p>Clean, scalable code built using modern frameworks and best practices.</p>
          </div>
          <div>
            <h3>4. Launch</h3>
            <p>Testing, optimization, and deployment — your site goes live ready to perform.</p>
          </div>
        </div>
      </section>

      {/* Tech Stack / Tools Section */}
      <section className="webdev-stack">
        <h2>Technologies We Use</h2>
          <p>We leverage modern frameworks and scalable technologies to build fast, secure, 
             and future-proof web applications tailored to your business goals.</p>
            <div className="tech-icons">
              <div>
                <i className="devicon-html5-plain colored"></i>
                <span>HTML5</span>
              </div>

              <div>
                <i className="devicon-css3-plain colored"></i>
                <span>CSS3</span>
              </div>

              <div>
                <i className="devicon-javascript-plain colored"></i>
                <span>JavaScript</span>
              </div>

              <div>
                <i className="devicon-react-original colored"></i>
                <span>React</span>
              </div>

              <div>
                <i className="devicon-nodejs-plain colored"></i>
                <span>Node.js</span>
              </div>

              <div>
                <i className="devicon-mongodb-plain colored"></i>
                <span>MongoDB</span>
              </div>

              <div>
                <i className="devicon-graphql-plain colored"></i>
                <span>GraphQL</span>
              </div>

              <div>
                <i className="devicon-mysql-plain colored"></i>
                <span>MySQL</span>
              </div>

              <div>
                <i className="devicon-nextjs-plain colored"></i>
                <span>NextJs</span>
              </div>
            </div>
      </section>

      {/* CTA */}
      <section className="webdev-cta">
        <h2>Ready to Build Your Website?</h2>
        <p>Let’s bring your vision to life with a powerful, responsive, and professional web solution.</p>
        <Link to="/contact" className="btn secondary-btn">Get in Touch</Link>
      </section>
    </div>
  );
};

export default WebDevelopment;