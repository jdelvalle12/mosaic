import React, {useEffect}from 'react';
import Innovation from '../images/innovation.jpg';
import Passion from '../images/passion.jpg';
import Vision from '../images/vision.jpg';
import History from '../images/history-2.jpg';

import DigitalMarketingTeam from '../images/digital-marketing-team.mp4';

import BalanceIcon from '../images/work-life-balance.png';
import TransparencyIcon from '../images/transparency.png';
import DiversityIcon from '../images/diversity.png';
import PositivityIcon from '../images/positivity.png';
import TeamworkIcon from '../images/teamwork.png';
import GrowthIcon from '../images/personal-growth.png';
import InnovationIcon from '../images/innovation-value.png';
import AutonomyIcon from '../images/autonomy.png';
import CalenderIcon from '../images/calendar.png';
import TeamIcon from '../images/team-icon.png';
import HandshakeIcon from '../images/handshake.png';
import ConstructionIcon from '../images/construction.png';

import Team from '../components/Team.js';
import Timeline from '../components/Timeline.js';
import FAQ from '../components/FAQ.js';

import '../index.css';
import '../App.css';

const About = () => {

    useEffect(() => {
        const video = document.querySelector('.about-background-video');
        video.play();
      }, []);

  return (
    <div className="about-container" > 
        <video src={DigitalMarketingTeam} play loop muted className='about-background-video' data-aos='slide-up'></video>
            <div className="content-container" data-aos='slide-left'>
                <h1>More Than Code</h1>
                    <h2>Our Culture at Mosaic</h2>
                        <p>At Mosaic, we believe in creating meaningful digital experiences that go beyond lines of code. 
                           Our team blends creativity, technology, and purpose to build solutions that inspire, connect, 
                           and deliver results. Every project starts with people — our clients, our team, and the 
                           communities we serve.
                        </p>
            </div>
     <div className='about-our-story'> 
        <div className='story-description'>
            <h2>What’s Our Story?</h2>  
              <p>
                Mosaic was founded on a simple idea: that technology should empower, not overwhelm.
                What started as a small vision to help local businesses build a stronger online presence 
                quickly grew into a broader mission — to create smart, elegant digital solutions that make life easier.
              </p>
              <p>
                From building websites that tell your story, to developing tools that solve everyday problems, 
                our focus is always the same: clarity, creativity, and results. We're passionate about design, 
                driven by code, and inspired by the people we serve.
              </p>
              <p>
                Whether you're a growing brand, a nonprofit, or an entrepreneur with big ideas — 
                we're here to help you bring it to life. At Aurizon Technologies, we don’t just build software, 
                we build possibilities.
              </p>
          </div>            
            <img src={Innovation} alt='innovation' className='innovation'></img>
        </div>        
        <div className='about-our-mission'>
          <img src={Passion} alt='passion' className='passion'></img>
            <div className='mission-description'>
          <h2>Our Mission</h2>
          <p>
          We're on a mission to lead technological advancements by providing innovative solutions 
          that empower businesses and individuals. We're driven by our passion for innovation, 
          creativity, and user-centric design, making technology accessible to all and illuminating 
          a brighter future.
          </p>
          <p>
          We believe in the power of collaboration and talent. That's why we've assembled a team 
          of industry-leading experts who leverage cutting-edge tools to exceed client expectations 
          and drive growth. Join us on this journey, where your talents will shape tomorrow's technology landscape.
          </p>
            </div>
        </div>
        <div className='about-our-value'>
            
          <h2>Our Value</h2>
            <p>
              At Aurizon, our culture is guided by core values:
            </p>
            <ul>              
              <li><img className='value-icon' src={BalanceIcon} alt='Icon Description' />
              <strong>Work-Life Balance</strong> Promoting harmony between professional 
                  and personal life for a fulfilling journey.
              </li>              
              <li><img className='value-icon' src={TransparencyIcon} alt='Icon Description' />
              <strong>Transparency</strong> Open and honest communication builds trust.</li>              
              <li><img className='value-icon' src={DiversityIcon} alt='Icon Description' />
              <strong>Diversity</strong> We embrace diverse backgrounds and perspectives.</li>              
              <li><img className='value-icon' src={PositivityIcon} alt='Icon Description' />
              <strong>Positivity</strong> We approach challenges with optimism and creativity.</li>              
              <li><img className='value-icon' src={TeamworkIcon} alt='Icon Description' />
              <strong>Teamwork</strong> Collaboration drives our success. We foster an environment 
                    where every team member's voice is heard, ideas are valued, and 
                    innovation flourishes.
              </li>
              <li><img className='value-icon' src={GrowthIcon} alt='Icon Description' />
              <strong>Personal Growth</strong> We believe in fostering an environment where each 
                  team member has the opportunity to learn, grow, and reach their 
                  full potential.
              </li>              
              <li><img className='value-icon' src={InnovationIcon} alt='Icon Description' />
              <strong>Innovation</strong> Cultivating creative brilliance to pioneer innovative 
                  solutions and drive industry progress
              </li>              
              <li><img className='value-icon' src={AutonomyIcon} alt='Icon Description' />
              <strong>Autonomy</strong> We empower our team to innovate and take ownership.</li>
            </ul>
        </div>
        <div className='about-our-history'>
            <img src={History} alt='history' className='history-pic'></img>
            <div className='history-description'>
             <h2>The rest is history...</h2>
              <p>
                ...the Founder and CEO Jose Del Valle originally did not think about starting a business, 
                much less get into the tech industry. He attended the University of Central Florida to pursue 
                a degree in Criminal Justice and work in Law enforcement, but things didn’t go as planned and 
                it wasn’t meant to be, however he knew he liked to take on projects and build something from the ground up. 
                He eventually realized he had an interest in Software Engineering, but going back to school to 
                pursue another degree was pricey, so instead, he learned how code on his own for only 
                a fraction of the price. Months later, he decided to enter a 6 month bootcamp to streamline the 
                process of learning to code and met incredible people, worked alongside with them on different 
                projects and also did one on his own. After a grueling 6 month bootcamp, he applied for several jobs 
                to enter the industry, however, after more than 50 jobs applied, with many rejecting him the opportunity 
                for even an interview, he was motivated and decided to start a company with little money and founded Aurizon, 
                which is a name he found by accident, but realized it made sense, a new beginning with endless possibilities, 
                to provide other developers with opportunities to hone their skills, achieve personal growth and a make a 
                meaningful impact. Today, he is determined more than ever as a new entrepreneur, to grow the company and make 
                his vision become a reality, just like he would do for his customers and others, make their vision a reality.
              </p>
            </div>
        </div>
        <Team/>
        <div className='about-facts-figures'>
          <h2>Facts & Figures</h2>
          <p>
            As a young and dynamic company, we're committed to growth and excellence. 
            While our journey has just begun, we're excited about the path ahead. 
            Here are some key facts and figures about us:
          </p>
          <ul>
            <li><img className='facts-icon' src={CalenderIcon} alt='Fact' />
              <strong>Company Founded in</strong> 2023
            </li>
            <li><img className='facts-icon' src={TeamIcon} alt='Fact' />
              <strong>The number of team members</strong> 1
            </li>
            <li><img className='facts-icon' src={HandshakeIcon} alt='Fact' />
              <strong>Number of Clients Served</strong> 1
            </li>
            <li><img className='facts-icon' src={ConstructionIcon} alt='Fact' />
              <strong>Projects in Progress</strong> 3
            </li>
          </ul>
        </div>
        <div className='about-partners'>
          <h2>Our Partners</h2>
            <p>We recognize that achieving success in the ever-evolving tech landscape 
               requires collaboration; we cannot do it alone. That's why we are committed 
               to forming strategic partnerships that amplify our strengths and open doors 
               to new opportunities.
            </p>
        </div>
        {/* <div className='about-awards'>
          <h2>Achievements & Awards</h2>
        </div> */}
        <div className='about-goals-vision'>
          <div className='vision'>
            <h2>Our Goals & Vision</h2>
            <p>
              Our Vision is to be a leading tech company as we embark on a journey of 
              innovation and transformation, illuminating the path to a better tomorrow. 
              Our dedicated team of brilliant technologists harnesses creative brilliance 
              and cutting-edge advancements, empowering businesses and individuals with 
              limitless possibilities.
            </p>
            <p>
              We believe in the power of personal growth, continuous learning, and 
              collaboration. At Aurizon, we foster an environment where developers thrive, 
              learn from one another, and have a place to gather and collaborate on 
              groundbreaking projects. We envision a bright future not only for our clients 
              but also for our team members.
            </p>
            <p>
              We strive to shape this bright future by offering high-end solutions that 
              exceed expectations and drive meaningful impact in the digital landscape. 
              As your gateway to extraordinary solutions, we are committed to creating 
              a brighter, tech-driven world, where endless innovations illuminate the path ahead.
            </p>
            <p>
              Join us on this exciting journey, and together, let's shape a future that goes beyond the horizon.
            </p>
          </div>
          <img src={Vision} alt='vision' className='horizon-vision'></img>
        </div>
        {/* <div className='about-community'>
          <h2>Community Involvement</h2>
        </div> */}
        <div className='about-timeline'>
          <h2>Travel In time...</h2>
            <Timeline/>
        </div>
        <FAQ/>
    </div>
  );
};

export default About;