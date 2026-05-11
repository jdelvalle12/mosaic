import React from 'react';
import { Helmet } from 'react-helmet';
import ServicesBackground from '../images/team-collab.jpg';
import WebDevelopment from '../images/web-development.svg';
import Ecommerce from '../images/e-commerce.svg';
import API from '../images/api.svg';
import MobileApp from '../images/mobile-app-development.svg';
import CreativeMedia from '../images/creative-media.svg';
import HostingMaintenance from '../images/hosting-maintenance.svg';
import Marketing from '../images/marketing.svg';
import UiUx from '../images/uiux-design.svg';
import TechStrategy from '../images/tech-strategy.svg';

import '../styles/Services.css';

const Services = () => {
  return (

     <>
    <Helmet>
      <title>
        Web Design, SEO & Digital Marketing Services | Mosaic Digital Creations
      </title>

      <meta
        name="description"
        content="Explore professional web design, digital marketing, SEO, mobile app development, branding, hosting, and technology solutions from Mosaic Digital Creations."
      />

      <meta
        name="keywords"
        content="web design services, SEO services, digital marketing agency, mobile app development, UI UX design, website maintenance"
      />

      <link
        rel="canonical"
        href="https://mosaicdigitalcreations.com/services"
      />

      <meta
        property="og:title"
        content="Our Services | Mosaic Digital Creations"
      />

      <meta
        property="og:description"
        content="Discover web development, SEO, digital marketing, branding, hosting, and app development services designed to help businesses grow."
      />

      <meta
        property="og:type"
        content="website"
      />
    </Helmet>

    <div className="services-page">
      {/* Hero Section */}
      <div className="services-hero">
        <img src={ServicesBackground} alt="Our Services" className="services-background" />
        <div className="hero-overlay">
          <h1>Web Design, SEO & Digital Marketing Services</h1>
          <p>Custom web design, SEO, branding, mobile apps, and digital marketing solutions built to help businesses grow online.</p>
        </div>
      </div>

      {/* Overview Section */}
      <section className="services-overview">
        <h2>
          At Mosaic Digital Creations, we offer a blend of creativity and technology to help businesses
          build their brand, attract customers, and grow online.
        </h2>

        <div className="services-grid">
          <div className="service-card">
            <img src={WebDevelopment} alt="Web Development Services" className="service-icon" />
            <h3>Web Design & Development</h3>
            <p>Beautiful, responsive websites tailored to your brand and goals.</p>
            <a href="/services/web-development" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <img src={Ecommerce} alt="E-Commerce" className="service-icon"/>
            <h3>E-Commerce Solutions</h3>
            <p>Build powerful online stores with secure checkout, modern design, and seamless customer experiences.</p>
            <a href="/services/e-commerce-solutions" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <img src={API} alt= "API" className="service-icon"/>
            <h3>API & Integrations</h3>
            <p>Connect your platforms and automate workflows with custom integrations that boost efficiency and performance.</p>
            <a href="/services/api-integrations" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <img src={MobileApp} alt= "Mobile-App-Development" className="service-icon"/>
            <h3>Mobile App Development</h3>
            <p>Deliver engaging mobile experiences with apps designed for performance, usability, and scalability across devices.</p>
            <a href="/services/mobile-app-development" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <img src={CreativeMedia} alt= "Creative-Media" className="service-icon"/>
            <h3>Creative Media</h3>
            <p>Streamline your operations with tailored software solutions that help your business grow smarter and faster.</p>
            <a href="/services/creative-media" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <img src={Marketing} alt= "Marketing" className="service-icon" />
            <h3>Marketing Support</h3>
            <p>Enhance your brand’s visibility with strategic campaigns, social media management, and creative digital content.</p>
            <a href="/services/marketing-support" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <img src={HostingMaintenance} alt="Hosting-Maintenance" className="service-icon" />
            <h3>Hosting & Maintenance</h3>
            <p>Keep your site running smoothly with secure hosting, regular updates, and ongoing technical support.</p>
            <a href="/services/hosting-maintenance" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <img src={UiUx} alt="UI and UX design services" className="service-icon" />
            <h3>UI/UX Design</h3>
            <p>Create intuitive, visually stunning interfaces that deliver seamless user experiences and strengthen your brand identity.</p>
            <a href="/services/uiux-design" className="btn">Learn More</a>
          </div>
          <div className="service-card">
            <img src={TechStrategy} alt="Tech-Strategy" className="service-icon" />
            <h3>Tech Strategy</h3>
            <p>Develop a clear technology roadmap aligned with your business goals to maximize innovation and growth.</p>
            <a href="/services/tech-strategy" className="btn">Learn More</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Ready to bring your vision to life?</h2>
        <a href="/contact" className="btn primary-btn">Get in Touch</a>
      </section>
    </div>
   </> 
  );
};

export default Services;