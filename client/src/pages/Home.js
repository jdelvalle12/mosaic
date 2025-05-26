import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DigiEarth from '../images/rotating-digital-planet.mp4';
import Digital from '../images/digital-motion.mp4';
import WebDev from '../images/web-development-icon.png';
import BizSol from '../images/business-solution-icon.png';
import WebMan from '../images/web-management-icon.png';
import Strategy from '../images/strategy-icon.png';
import Entertainment from "../images/entertainment.jpg";
import Sports from "../images/sports.jpg";
import Journeez from '../images/Journeez.jpg';
import Office from "../images/office-software.jpg"
import Technology from "../images/abstract-digital-image.jpg";
import Food from "../images/food-beverage.jpg";
import RealEstate from "../images/real-estate.jpg";
import Logistics from "../images/logistics.jpg";
import EnterIcon from "../images/entertainment-icon.png";
import SportIcon from "../images/sports-icon.png";
import TravelIcon from "../images/travel.png";
import ProfessionalIcon from "../images/professional-service-icon.png";
import TechIcon from "../images/microchip-icon.png";
import FBIcon from "../images/food-beverage-icon.png";
import RealEstateIcon from "../images/real-estate-icon.png";
import LogisticsIcon from "../images/logistics-icon.png";

import Testimonials from '../components/Testimonials';
import SubscribeForm from '../components/SubscribeForm.js';
import News from '../components/News.js';
import Careers from '../components/Careers.js';

import '../index.css';
import '../App.css';

const ServiceBox = ({ title, description, icon }) => {
  return (
    <div className={`service-box ${icon}`}>
      <img src={icon} alt={title} className="service-icon" />
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

const industries = [
  {
    name: 'Entertainment',
    image: Entertainment,
    icon: EnterIcon,
    description: 'Elevate the entertainment experience with our cutting-edge solutions. From immersive VR experiences to content streaming platforms, we redefine entertainment',
  },
  {
    name: 'Sports',
    image: Sports,
    icon: SportIcon,
    description: 'Join the winning team with our sports industry solutions. We provide analytics, fan engagement, and tech-driven training for athletes and organizations.',
  },
  {
    name: 'Travel',
    image: Journeez,
    icon: TravelIcon,
    description: 'Embark on a journey of innovation in the travel sector. Discover how we enhance travel booking, accommodation, and experiences with technology.',
  },
  {
    name: 'Professional Services',
    image: Office,
    icon: ProfessionalIcon,
    description: 'Transform your professional services with our expertise. We offer digital solutions, data analytics, and automation for streamlined operations.',
  },
  {
    name: 'Technology',
    image: Technology,
    icon: TechIcon,
    description: 'Unleash the power of technology with our solutions. Explore AI, IoT, and blockchain to stay at the forefront of the tech revolution.',
  },
  {
    name: 'Food & Beverage',
    image: Food,
    icon: FBIcon,
    description: 'Savor success in the food & beverage industry. Discover our solutions for online ordering, supply chain optimization, and customer engagement.',
  },
  {
    name: 'Real-Estate',
    image: RealEstate,
    icon: RealEstateIcon,
    description: 'Discover our real estate innovations. We are revolutionizing property management and market analysis, making real estate transactions more efficient and profitable.',
  },
  {
    name: 'Logistics',
    image: Logistics,
    icon: LogisticsIcon,
    description: 'Explore our cutting-edge logistics solutions. We optimize supply chains and enhance global transportation, improving efficiency and reducing costs.',
  }
];

const Home = () => {
  const [showSlogan, setShowSlogan] = useState(false);

  useEffect(() => {
    setShowSlogan(true);

    const typingText = 'Your gateway to extraordinary solutions';
    const typingSpeed = 50; // Speed in milliseconds between each character

    const typingContainer = document.getElementById('typing-text');
    let charIndex = 0;

    function typeText() {
      if (charIndex < typingText.length) {
        typingContainer.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      }
    }

    typeText();
  }, []);

  return (
    <div className="home-container">
      <video src={DigiEarth} autoPlay loop muted className="background-video"></video>
      <h1 className={showSlogan ? 'fade-in' : ''}>"Engineering Digital Experiences. Creating Real Impact."</h1>
      <h2>
        <span id="typing-text"></span>
      </h2>
        <span className={`mission ${showSlogan ? 'fade-in' : ''}`}>
        Embarking on an innovation journey, we lead with purpose,
        guiding progress towards a brighter future. Committed to 
        pioneering technology, we empower businesses and individuals 
        through cutting-edge solutions.
        </span>
      <div className={`button-container ${showSlogan ? 'slide-in' : ''}`}>
        <Link to="/contact" className={`contact-button ${showSlogan ? 'slide-in' : ''}`}>Let's Get Started</Link>
      </div>
      <div className="home-about-container">
        <div className="glass-box">
          <h3 className='who-we-are'>Who We Are</h3>
            <p className='home-about-para'>At Aurizon, we are passionate about pushing boundaries and 
            exploring new horizons in the tech industry. We are committed to empowering businesses and 
            individuals with cutting-edge technologies that drive growth.</p>
            <Link to="/about" className="about-link">Learn More<span className="arrow">&rarr;</span></Link>
        </div>
      <video src={Digital} autoPlay loop muted className="motion-video"></video>
      </div>
      <div className='what-we-do-container'>
        <h3 className='what-we-do'>What We Do</h3>
        <p className={showSlogan ? 'slide-in' : ''}>
          We build and manage technology that helps businesses succeed and develop intuitive
          and user-friendly products to simplify everyday tasks.
        </p>      
        <div className="service-container">
          <div className="service-box web">
          <img src={WebDev} alt="Web Development" className="service-icon" />
            <h4>Web Development</h4>
              <p>Crafting user-focused websites with stunning designs and 
                seamless functionality, transforming ideas into engaging 
                online experiences.
              </p>
          </div>
          {/* <div className="service-box api">
            <h4>API Development</h4>
            <p>Building powerful APIs that connect applications and services,
            enabling smooth data exchange and enhancing software interoperability.
            </p>
          </div> */}
          <div className="service-box business">
          <img src={BizSol} alt="Business Solution" className="service-icon" />
            <h4>Business Solution</h4>
              <p>Creating tailored software solutions that streamline business processes,
                drive efficiency, and empower organizations to thrive.
              </p>
          </div>
          <div className="service-box manage">
          <img src={WebMan} alt="Web Management" className="service-icon" />
            <h4>Web Management</h4>
              <p>
                Efficiently overseeing the operation, maintenance, and optimization of websites
                to ensure seamless performance, security, and a flawless user experience.
              </p>
          </div>
          <div className="service-box consult">
          <img src={Strategy} alt="Consult & Strategy" className="service-icon" />
            <h4>Consult & Strategy</h4>
              <p>
              We offer technology consulting services to help clients define their digital strategies,
              align technology solutions with business goals, and plan for future growth.
              </p>
          </div>
          {/* <div className="service-box mobile">
            <h4>Mobile App Developemnt</h4>
            <p>Coming soon: Expertly crafting mobile applications that bring your ideas 
            to life on smartphones and tablets, delivering unique user experiences.
            </p>
          </div> */}
          <Link to="/technologies" className="in-depth">
            In Depth Look<span className='arrow'>&rarr;</span>
          </Link>
        </div>
      </div>   
      <div className='home-portfolio-container'>
        <h3 className='explore-our-work'>Explore Our Work</h3>
          <p className={showSlogan ? 'fade-in' : ''}>We specialize in delivering innovative solutions across a wide spectrum of industries.
            Explore our portfolio to see how we can help you achieve success and with more to come...</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {industries.map((industry, index) => (
                <div className="industry-card" key={index}>
                <div className="industry-content">
                  <img className="industry-image" src={industry.image} alt={`${industry.name} Image`} />
                  <img className='industry-icon'src={industry.icon} alt={`${industry.name} Icon`} />
                  <h4 className="industry-name">{industry.name} <span className='arrow'>&rarr;</span></h4>
                  <div className="industry-back">
                    <h4 className='industry-name'>{industry.name}</h4>
                      <p>{industry.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link to="/portfolio" className="portfolio-link">
            Explore Portfolio<span className='arrow'>&rarr;</span>
          </Link>
          <div className="testimonials-section">
            <h2>Testimonials</h2>
              <p>See what our customers have to say...</p>
            <Testimonials />
          </div>
          <div className="news-section">
          <h2>Latest News</h2>
            <News />
          </div>
          <div className="subscribe-section">
            <p>Stay ahead of the tech curve! Subscribe to our newsletter and be the first to access new insights,
               tech updates, and exclusive offers for your business.
            </p>
            <SubscribeForm />
          </div>
          <div className='careers-section'>
            <Careers />
          </div>
            {/* Your existing content */}
            {/* ... */}
        </div>
      </div>
            
    );
  };

export default Home;