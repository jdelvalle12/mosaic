import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
// import MarketTeam from '../images/digital-marketing-team.mp4';
import HomePage from '../images/background-image-homepage.jpg';
import Puzzles from '../images/tech-process-3.jpg';
import TeamCollab from '../images/team-collab.jpg';
import WebDev from '../images/web-development-icon.png';
import BizSol from '../images/business-solution-icon.png';
import WebMan from '../images/web-management-icon.png';
import Strategy from '../images/strategy-icon.png';
import Health from '../images/health.jpg';
import Finance from '../images/finance.jpg';
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
import Portal from '../images/portal.mp4';

// import Testimonials from '../components/Testimonials';
import SubscribeForm from '../components/SubscribeForm.js';
import News from '../components/News.js';
import Careers from '../components/Careers.js';

import '../index.css';
// import '../App.css';
import './Home.css';

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
    name: "Healthcare",
    image: Health,
    description: "Tech-driven solutions for modern healthcare systems.",
  },
  {
    name: "Finance",
    image: Finance,
    description: "Secure and scalable financial platforms.",
  },
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
  const typingRef = useRef(null); // this replaces document.getElementById

  useEffect(() => {
    setShowSlogan(true);

    const typingText = 'Your gateway to extraordinary solutions';
    const typingSpeed = 50; // Speed in milliseconds between each character
    let charIndex = 0;

    function typeText() {
      if (charIndex < typingText.length && typingRef.current) {
        typingRef.current.textContent += typingText.charAt(charIndex);
        charIndex++;
        setTimeout(typeText, typingSpeed);
      }
    }

    // Clear previous incase of remounts
    if (typingRef.current) typingRef.current.textContent = '';
    typeText();
  }, []);

  

  return (
    <div className="home-container">
      <video src={HomePage} autoPlay loop muted className="background-video" data-aos='zoom-in' />
      <h1 className={showSlogan ? 'fade-in' : ''}>
        The Full Spectrum of Digital Growth
      </h1>
        <p className="sub-text" data-aos="fade-up">
          We build the pieces that shape your business — development, design, and digital strategy in perfect harmony.
        </p>  
      <div className={`button-container ${showSlogan ? 'slide-in' : ''}`}>
        <Link to="/services" className={`service-button ${showSlogan ? 'slide-in' : ''}`}>Explore Services</Link>
      </div>
      <div className="home-about-container">
        <div className="glass-box" data-aos="fade-in">
          <h3 className='what-we-are-about'>What We Are About</h3>
            <p className='home-about-para'>At Mosaic Digital Creations, we craft
              tailored digital experiences that bring your brand’s story to life. 
              We blend design, technology, and strategy to create meaningful 
              connections that drive impact and inspire growth.</p>
            {/* Tagline placed here for visual emphasis */}
            <Link to="/about" className="about-link">Learn More<span className="arrow">&rarr;</span></Link>
        </div>
      <img src={Puzzles} alt="Puzzles" className="puzzle-picture" data-aos='slide-left'></img>
      </div>
      <div className='our-capabilities-container'>
        <h3 className='capabilities' data-aos='fade-down'>Our Capabilities</h3>
        {/* <p className={showSlogan ? 'slide-in' : ''}>
          We combine data, creativity, and technology to help brands grow in a connected world.
          </p>       */}
        <p className={`mission ${showSlogan ? 'fade-in' : ''}`} data-aos='slide-right'>
         We combine data, creativity, and technology to help brands grow in a connected world. 
        At Mosaic Digital Creations, we blend innovation and insight to craft data-driven strategies 
        and impactful digital experiences that connect, convert, and grow. We lead with bold ideas, 
        guided by clarity and purpose — turning vision into measurable success.
        </p>
          <p className="tagline" data-aos='slide-left'>
            Design. Strategy. Results — Pixel by Pixel.
          </p>
          <img src={TeamCollab} alt="TeamCollab" className="team-collab-picture" data-aos='zoom-in'></img>
        <div className="service-container" >
          <div className="service-box web" data-aos='zoom-in' data-aos-delay='100'>
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
          <div className="service-box business" data-aos='zoom-in' data-aos-delay='200'>
          <img src={BizSol} alt="Business Solution" className="service-icon" />
            <h4>Business Solution</h4>
              <p>Creating tailored software solutions that streamline business processes,
                drive efficiency, and empower organizations to thrive.
              </p>
          </div>
          <div className="service-box manage" data-aos='zoom-in' data-aos-delay='300'> 
          <img src={WebMan} alt="Web Management" className="service-icon" />
            <h4>Web Management</h4>
              <p>
                Efficiently overseeing the operation, maintenance, and optimization of websites
                to ensure seamless performance, security, and a flawless user experience.
              </p>
          </div>
          <div className="service-box consult" data-aos='zoom-in' data-aos-delay='400'>
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
          <Link to="/services" className="in-depth" data-aos='fade-in'>
            In Depth Look<span className='arrow'>&rarr;</span>
          </Link>
        </div>
      </div>   
      <div className="explore-our-work">
        <h2 className="explore-our-work">Explore Our Work</h2>
          <p className="portfolio-intro">
            We specialize in delivering innovative solutions across various industries.
          </p>
        <div className="grid">
          {industries.map((industry, index) => (
          <div className="modern-industry-tile" key={index} data-aos="fade-up">
            <img src={industry.image} alt={industry.name} className="industry-bg" />
            <div className="modern-overlay">
              <h3>{industry.name}</h3>
                <p>{industry.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
          <Link to="/portfolio" className="portfolio-link" data-aos='slide-right'>
            Explore Portfolio<span className='arrow'>&rarr;</span>
          </Link>
          {/* <div className="testimonials-section">
            <h2>Testimonials</h2>
            <p>See what our customers have to say...</p>
            <Testimonials />
            </div> */}
          {/* <div className="news-section">
          <h2>Latest News</h2>
            <News />
          </div> */}
          <div className="subscribe-section" data-aos='zoom-in'>
            <p>Power Your Business with Premium Web Solutions.
              Subscribe to get exclusive updates, smart web development insights, 
              and first access to our newest services and offers.
            </p>
            <SubscribeForm />
          </div>
          <div className='careers-container' data-aos='slide-right'>
            <Careers />
          </div>
            <div className="typing-banner" data-aos='zoom-in'>
              <div className="typing-text-container">
                <h2><span id="typing-text" ref={typingRef}></span></h2>
            </div>
            <div className="typing-image">
              <video className="typing-video" src={Portal} autoPlay muted loop playsInline 
                aria-label="Background video showing Milky Way galaxy">
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <div className="cta-wrapper">
            <p className="cta-tagline">Ready to take your digital presence to the next level?</p>
            <div className={`cta-button-container ${showSlogan ? 'slide-in' : ''}`}>
              <Link to="/contact" className="cta-contact-button">Let's Get Started</Link>
            </div>
          </div>
            {/* Your existing content */}
            {/* ... */}
        </div>            
    );
  };

export default Home;