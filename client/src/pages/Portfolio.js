import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';
// import Flick from '../images/Flick-Tracker.jpg';
// import manifesto from '../images/manifesto.jpg';
import SEO from '../images/SEO.jpg';
import Journeez from '../images/Journeez.jpg';
import Weather from '../images/weather-forecast.jpg';
import Planner from '../images/day-planner.jpg';
import Notepad from '../images/notepad.jpg';
import Winery from '../images/Winery.jpg';
import Background from '../images/digital background.jpg';

// import Codes from '../images/coding.mp4';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../styles/Portfolio.css';
import '../App.css';
import { FaReact, FaNodeJs, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import { DiMongodb, DiBootstrap } from 'react-icons/di';


const projects = [
  // { image: Flick, 
  //   name: "Flick Tracker", 
  //   description: "Flick Tracker is looking to create a new way to engage with fellow movie lovers, through a user database system. Each user will have a profile where you can view their followed users, following, watched movies, etc. We want to show you analytics based off of the information you provide, to help refine and diversify your taste. We will allow people to post reviews on movies they have seen, in order for their followers to potentially add new items into their watchlist that wouldn't be curated from their own analytics.", 
  //   technologies: [<FaNodeJs />, <FaHtml5 />, <FaCss3 />, <FaJs />, "Express"], 
  //   category: "Full Stack", link: "https://flick-tracker.herokuapp.com/" },
  // { image: manifesto, 
  //   name: "Gambling Manifesto", 
  //   link: "https://stickkman.github.io/gamblingManifesto-Proj01/" },
  { image: SEO, 
    name: "Horiseon", 
    description: "This project is a visually stunning representation of modern web design principles, showcasing the perfect blend of aesthetics and functionality. Explore the beautifully crafted user interface, seamless navigation, and eye-catching visual elements that make a true visual delight. Immerse yourself in the world of elegant design and get inspired by the possibilities of web development.", 
    technologies: [<FaHtml5 />, <FaCss3 />] , 
    category: "Front-end", 
    link: "https://jdelvalle12.github.io/horiseon-webpage/" , 
    tags: ["Development Type", "Front-End Development", "Industry", "Technology"]
  },
  { image: Journeez, 
    name: "JourneEZ", 
    description: "Many people travel to many parts of the world everyday, and some of them are first time solo travelers, but they get overwhelmed with all the information that is out there, about where to go, where to stay, where to eat, what to do, etc. This app aims to ease those nerves for first time travelers in the most simplistic way by providing information and tips as well as share their experience with other solo travelers and a way to document their experiences.", 
    technologies: [<FaReact />, <FaNodeJs />, <FaHtml5 />, <FaCss3 />, <FaJs />, <DiBootstrap />, "GraphQL"] , 
    category: "Full Stack", 
    link: "https://www.journeeztrip.com/",
    tags: ["Development Type", "Full Stack Development", "Industry", "Travel", "Our Products"] 
  },
  { image: Weather, 
    name: "Weather Forecast", 
    description: "Stay prepared for any weather condition with this intuitive app. Get real-time weather updates and accurate forecasts for your location and other areas of interest. Plan your activities, trips, and outdoor adventures with confidence, knowing you have reliable weather information at your fingertips. Stay informed and make the most of your day with the Weather Forecast app", 
    technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />] , 
    category: "Software", 
    link: "https://jdelvalle12.github.io/5-day-national-weather-forecast/",
    tags: ["Development Type", "Software Development", "Industry", "Technology"] 
  },
  { image: Planner, 
    name: "Day Planner", 
    description: "A user-friendly app that helps you organize your daily schedule. Input appointments, meetings, and important events, and save them in a day planner. Stay organized and never miss a task with this intuitive and convenient tool.", 
    technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaNodeJs />] , 
    category: "Software", 
    link: "https://jdelvalle12.github.io/day-planner/",
    tags: ["Development Type", "Software Development", "Industry", "Technology"] 
  },
  { image: Notepad, 
    name: "Notepad", 
    description: "Capture and organize your thoughts with ease using this versatile note-taking app. Jot down important information, ideas, and reminders, and conveniently access them whenever you need. Stay productive and never forget a thing with this handy digital notebook.", 
    technologies: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaNodeJs />, "Express"] , 
    category: "Software", 
    link: "https://notetaken.herokuapp.com/",
    tags: ["Development Type", "Software Development", "Industry", "Technology"] 
  },
  { image: Winery, 
    name: "The Valley Winery", 
    description: "This project is a visually stunning representation of modern web design principles, showcasing the perfect blend of aesthetics and functionality. Explore the beautifully crafted user interface, seamless navigation, and eye-catching visual elements that make a true visual delight. Immerse yourself in the world of elegant design and get inspired by the possibilities of web development.", 
    technologies: [<FaHtml5 />, <FaCss3 />] , 
    category: "Front-end", 
    link: "https://jdelvalle12.github.io/thevalleywinery/",
    tags: ["Development Type", "Front-End Development", "Industry", "Food & Beverage"] 
  }
];

const ProjectCard = ({project, onClick}) => {
  const handleCardClick = () => {
    onclick(project.tags); // Pass the tags to the parent component
  };

  return (
  <div className='project-card' onclick={handleCardClick}>
    <Image src={project.image} alt={project.name} width={600} height={400} />
    <div className='project-card-overlay'>
      <Link to={project.link} className='project-card-image-link'>
        <h3>{project.name}</h3>
      </Link>
    </div>
    <div className='project-card-details'>
      <h3>{project.category}</h3>
      <h4>{project.name}</h4>
      <p>{project.description}</p>
        <h5>Technologies</h5>
      <div className='project-card-icons'>
        {project.technologies.map((technology, i) => (
          <span key={i} className='technology-icon'>
            {technology}
          </span>
        ))}
        <span className='additional-text'></span>
      </div>
    </div>
  </div> 
  ); 
};

const ProjectsGrid = ({ projects, onButtonClick }) => (
  <div className='projects-grid'>
    {projects.map((project, index) => (
      <ProjectCard key={index} project={project} onClick={onButtonClick} />
    ))}
  </div>
);

const SubNavbar = ({onSelectedCategory, setSelectedCategory}) => {
  const [isDevelopmentDropdownOpen, setIsDevelopmentDropdownOpen] = useState(false);
  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);

  const toggleDevelopmentDropdown = () => {
    setIsDevelopmentDropdownOpen(!isDevelopmentDropdownOpen);
    // Close Industry dropdown when Development dropdown is opened
    if (!isDevelopmentDropdownOpen && isIndustryDropdownOpen) {
      setIsIndustryDropdownOpen(false);
    }
  };

  const toggleIndustryDropdown = () => {
    setIsIndustryDropdownOpen(!isIndustryDropdownOpen);
    // Close Development dropdown when Industry dropdown is opened
    if (!isIndustryDropdownOpen && isDevelopmentDropdownOpen) {
      setIsDevelopmentDropdownOpen(false);
    }
  };

  return (
    <nav className={`sub-navbar ${isDevelopmentDropdownOpen || isIndustryDropdownOpen ? 'active' : ''}`}>
      <ul>
        <li>
          <button 
            onClick={() => setSelectedCategory('All')} 
            style={{ 
            textDecoration: 'none', 
            transition: 'color 0.3s, background 0.3s', 
            border: 'none',  // Remove default button styling
             // Remove default button styling
            cursor: 'pointer'  // Show pointer cursor on hover
          }} 
          className="hover-effect"
          >
            All
          </button>
        </li>
        <li>
          <span onClick={toggleDevelopmentDropdown} 
                style={{cursor: 'pointer', textDecoration: 'none', transition: 'color 0.3s, background 0.3s' }} 
                className="hover-effect">
            Development Type
          <span className={`portolio-dropdown-arrow ${isDevelopmentDropdownOpen ? 'open' : ''}`}>&#9662;</span></span></li>
          {/*Nested unordered list for the dropdown */}
          {isDevelopmentDropdownOpen && (
            <ul className='development-dropdown'>
              <li>
                <button 
                  onClick={() => onSelectedCategory('Front-End Development')} 
                  style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
                  className="hover-effect"
                >
                  Front-End Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectedCategory('Full Stack Development')} 
                  style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
                  className="hover-effect"
                >
                  Full Stack Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectedCategory('Software Development')} 
                  style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
                  className="hover-effect"
                >
                  Software Development
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onSelectedCategory('Mobile App Development')} 
                  style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
                  className="hover-effect"
                >
                  Mobile App Development
                </button>
              </li>
            </ul>
          )}
        <li>
          <span 
            onClick={toggleIndustryDropdown} 
            style={{cursor: 'pointer', textDecoration: 'none', transition: 'color 0.3s, background 0.3s' }} 
            className="hover-effect">
            Industry
          <span className={`portolio-dropdown-arrow ${isIndustryDropdownOpen ? 'open' : ''}`}>&#9662;</span></span></li>
          {/*Nested unordered list for the dropdown */}
          {isIndustryDropdownOpen && (
            <ul className='industry-dropdown'>
               <li>
          <button 
            onClick={() => onSelectedCategory('Entertainment')} 
            style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
            className="hover-effect"
          >
            Entertainment
          </button>
        </li>
        <li>
        <button 
          onClick={() => onSelectedCategory('Sports')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          Sports
        </button>
      </li>
      <li>
        <button 
          onClick={() => onSelectedCategory('Travel')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          Travel
        </button>
      </li>
      <li>
        <button 
          onClick={() => onSelectedCategory('Technology')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          Technology
        </button>
      </li>
      <li>
        <button 
          onClick={() => onSelectedCategory('Food & Beverage')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          Food & Beverage
        </button>
      </li>
      <li>
        <button 
          onClick={() => onSelectedCategory('Real-Estate')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          Real-Estate
        </button>
      </li>
      <li>
        <button 
          onClick={() => onSelectedCategory('Logistics')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          Logistics
        </button>
      </li>
      <li>
        <button 
          onClick={() => onSelectedCategory('E-Commerce')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          E-Commerce
        </button>
      </li>
      <li>
        <button 
          onClick={() => onSelectedCategory('Finance')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          Finance
        </button>
      </li>
      <li>
        <button 
          onClick={() => onSelectedCategory('Health')} 
          style={{ textDecoration: 'none',  transition: 'color 0.3s, background 0.3s' }} 
          className="hover-effect"
        >
          Health
        </button>
      </li>
            </ul>
          )}
          <li>
  <button 
    onClick={() => setSelectedCategory('Our Products')} 
    style={{ 
      textDecoration: 'none', 
      transition: 'color 0.3s, background 0.3s', 
      border: 'none',  // Remove default button styling
      cursor: 'pointer'  // Show pointer cursor on hover
    }} 
    className="hover-effect"
  >
    Our Products
  </button>
</li>
          <li>
            <button 
              onClick={() => setSelectedCategory('Our Partners')} 
              style={{ textDecoration: 'none', transition: 'color 0.3s, background 0.3s' }} 
              className="hover-effect"
            >
              Our Partners
            </button>
          </li>
      </ul>
    </nav>
  );
}



const Projects = () => {
  const [showTitle, setShowTitle] = useState(false);
  const [showText, setShowText] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All'); // Track the selected category

    useEffect(() => {
      setShowTitle(true); //When the component mounts, set showTitle to true.
      setShowText(true);

      const typingText = 'Take a look at our work that we have done so far, and we have more to come. We are always developing new projects and updating previous projects with new technologies.';
      const typingSpeed = 30; // Speed in milliseconds between each character

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

    // Filter projects based on the selctced category
    const filteredProjects = projects.filter(project => {
      console.log('Selected Category:', selectedCategory);
      console.log('Project Tags:', project.tags);
    
      if (selectedCategory === 'All') {
        return true; // Show all projects
      }
      return project.tags.includes(selectedCategory);
    });

    console.log('Filtered Projects:', filteredProjects);

return (
  <div className='portfolio-container'>
      <img src={Background} alt='portfolio-background' className='portfolio-background'></img>
      {/* // <video src={Codes} autoPlay loop muted className="projects-background-video"></video>       */}
        <div className={`title ${showTitle ? 'fade-in' : ''}`} >
          <h2>Our Portfolio</h2>
        </div>
        <div className='sub-text'>
            <p id='typing-text'></p>
        </div>
      <div className='sub-navbar'>
       <SubNavbar
        selectedCategory={selectedCategory}
        onSelectedCategory={(category) => setSelectedCategory(category)}
        setSelectedCategory={setSelectedCategory} // Pass setSelectedCategory as a prop
        />
      </div>
      <div className={`mid-text ${showText ? 'slide-in' : ''}`}>
        <p>Not only do we display our work or products, but we also display and advertise your website in "Our Partners" tab for customers to view. Take a look, you may find what you are looking for.</p>
      </div>
        {/*Display the filtered projects */}
        <div>
        <ProjectsGrid projects={filteredProjects} onButtonClick={(category) => setSelectedCategory(category)} />
        </div>
        <div className='post-text'>
          <p>If you like the designs you see from our work or our software products, go to our marketplace for more.</p> 
            <Link to='/marketplace' className='marketplace-link'>Marketplace<span className='arrow'>&rarr;</span></Link>
        </div>
    </div>
  );
}

export default Projects ;