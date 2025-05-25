import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import emailjs from 'emailjs-com'; // Import email.js library
import CareersBackground from '../images/careers-background.jpg';
import LearningToo from '../images/learning-2.jpg';
import Learning from '../images/learning.jpg';
import Working from '../images/working.jpg';
import HavingFun from '../images/having-fun.jpg'

import BalanceIcon from '../images/work-life-balance.png';
import PersonalGrowthIcon from '../images/personal-growth.png';
import AnywhereIcon from '../images/diversity.png';
import EquityIcon from '../images/equity.png';
import ProfessionalIcon from '../images/education.png';
import HealthIcon from '../images/health.png';

import '../index.css';
import '../App.css';

const Careers = () => {
    const [showCareerTitle, setCareerTitle] = useState(false);

    useEffect(() => {
        setCareerTitle(true);

        const typingText = "Be part of a team that is ambitious, creative, & bold, who wants to be part of the journey on building something from nothing.";
        const typingSpeed = 30;

        const typingContainer = document.getElementById('typing-text');
        let charIndex = 0;

        function typeText() {
            if(charIndex < typingText.length) {
                typingContainer.textContent += typingText.charAt(charIndex);
                charIndex++;
                setTimeout(typeText, typingSpeed);
            }
        }
        typeText();
    }, []);

    
return (
    <div className='careers-container'>
      <img src={CareersBackground} alt='CareersBackground' className='careers-background'></img>
        <div className={`career-title ${showCareerTitle ? 'slide-in' : ''}`} >
            <h2>Careers</h2>
                <p>The Future starts with you</p>
        </div>
        <div className='head-text'>
            <p id='typing-text'></p>
        </div>
        {/* <div className={`button-container ${showCareerTitle ? 'slide-in' : ''}`}>
            <Link to='/job-list' className={`careers-button ${showCareerTitle ? 'slide-in' : ''}`}>Explore Job Opportunities<span className='arrow'>&rarr;</span></Link>
        </div> */}
        <div className='why-work'>
            <h1>Why Work at Aurizon?</h1>
        </div>
        <div className='career-description'>
           <p>
           At Aurizon, we're fueled by ambitious goals and innovative ideas,
           and we recognize that achieving them requires a dedicated and talented
           team. We invite individuals from diverse backgrounds, whether you're a
           developer, designer, analyst, marketer, or possess any other skill set, 
           to join our dynamic workforce.
           </p>
        </div>
           <img src={LearningToo} alt='learning-too' className='learning-too'></img>
           <span className='random-design'></span>
        <div className='career-description-two'>
           <p>
           By becoming a part of the Aurizon team, you'll have the opportunity to
           contribute to our growth story and play a crucial role in shaping the 
           future. Here, you'll find an inclusive and collaborative work environment,
           ongoing learning and development opportunities, and a chance to work on 
           exciting projects that make a real impact.
           </p>
        {/* <span className='random-design'></span>
        <span className='random-design'></span>   */}
        </div> 
            <img src={Learning} alt='learning' className='learning'></img>
           <span className='random-design'></span> {/* Second circle */}
        <div className='having-fun-description'>
            <p>
             More importantly, at Aurizon, we believe in fostering an environment 
             where you can have fun and be yourself. We value authenticity and 
             encourage you to bring your unique personality to the workplace.   
            </p>
        {/* <span className='random-design'></span>
        <span className='random-design'></span> */}
        </div>
            <img src={HavingFun} alt='having-fun' className='having-fun'></img>
            <span className='random-design'></span>
        <div className='we-offer'>
            <h2>What We Offer</h2>
                <p>
                We are all about transparency, NO BS. As a startup, there aren't any fancy
                perks right now, but that will come over time as the company grows. In the 
                meantime, being part of a startup team from the beginning will give the sense 
                of satisfaction that you helped build something from the ground up. Doesn't 
                mean you won't receive anything in the beginning. Here is what you will receive 
                from the start with more added in the near future...
                </p>
                <ul>              
              <li><img className='offer-icon' src={BalanceIcon} alt='Icon Description' />
              <strong>Work-Life Balance</strong> We believe in promoting harmony between professional 
                  and personal life for a fulfilling journey, having flexible time off for the days that
                  are important to you. In addition, spending time with family is important so we also offer 
                  long Thanksgiving weekend and one week off between Christmas & New Years.
              </li>              
              <li><img className='offer-icon' src={EquityIcon} alt='Icon Description' />
              <strong>Equity</strong> As part of our ongoing efforts to recognize and reward your dedication, 
              we're actively exploring the introduction of equity opportunities for our team. This initiative 
              is designed to align everyone with the long-term success and prosperity of Aurizon. While 
              the details are still in progress, we're committed to ensuring that every team member has the 
              chance to share in the success they contribute to.</li>              
              <li><img className='offer-icon' src={AnywhereIcon} alt='Icon Description' />
              <strong>Work Anywhere</strong> As a startup, we work anywhere and everywhere, in other words remotely,
                    but in the spirit of transparency, eventually we will have the option to have a hybrid option
                    especially for those who don't fully like to work remotely and have the balance of working from
                    home, but also see your fellow coworkers.</li>              
              <li><img className='offer-icon' src={HealthIcon} alt='Icon Description' />
              <strong>Health</strong> We are diligently working towards the implementation of comprehensive health 
              insurance coverage for all team members. Our goal is to provide you with the security and support 
              needed to thrive both inside and outside the workplace. We understand the importance of health, 
              and we're excited about the positive impact this will have on our team. .</li>              
              {/* <li><img className='offer-icon' src={TeamworkIcon} alt='Icon Description' />
              <strong>Teamwork</strong> Collaboration drives our success. We foster an environment 
                    where every team member's voice is heard, ideas are valued, and 
                    innovation flourishes.
              </li> */}
              <li><img className='offer-icon' src={PersonalGrowthIcon} alt='Icon Description' />
              <strong>Personal Growth</strong> We believe in fostering an environment where each 
                  team member has the opportunity to learn, grow, and reach their 
                  full potential.
              </li>              
              <li><img className='offer-icon' src={ProfessionalIcon} alt='Icon Description' />
              <strong>Professional</strong> We believe it is important to continue your education, especially in the 
                    tech industry, new technologies are constantly emerging. Thats why we offer our own inhouse university 
                    to learn new technologies and as well as refresher courses to go back to what you know already know but
                    may not have worked with in awhile.
              </li>              
              {/* <li><img className='offer-icon' src={AutonomyIcon} alt='Icon Description' />
              <strong>Autonomy</strong> We empower our team to innovate and take ownership.</li> */}
            </ul>
        </div>
        <span className='random-design'></span>
        <div className='hiring-process'>
            <h2>Hiring Process</h2>
              <p>
                We understand how tough it can be to enter the tech industry and we
                want to give you the chance to showcase your work and test your knowledge.
                Here is our hiring process...
              </p>
              <ul>              
                <li>
                    <h3>1</h3>
                    <strong>Online Application</strong>The online application is your first 
                    step towards joining our dynamic team at Aurizon. We've designed this 
                    process to be straightforward, giving you the opportunity to showcase 
                    your skills and experiences. Your application allows us to understand 
                    more about you, your professional journey, and what excites you about 
                    joining Aurizon. We value authenticity, so be yourself and tell us your 
                    story. 
                <span className='hiring-arrow'>&rarr;</span>            
                </li>  
                <li>
                    <h3>2</h3>
                    <strong>Phone Interview</strong>Congratulations on making it to the phone 
                    interview stage! This is an exciting opportunity for us to learn more about 
                    you beyond your resume. During the phone interview, we'll delve into your 
                    experiences, skills, and what motivates you. It's also a chance for you to 
                    gain insights into our company culture, values, and the exciting projects 
                    we're working on. Prepare to discuss your journey and how it aligns with our 
                    vision at Aurizon. 
                    <span className='hiring-arrow'>&rarr;</span>              
                </li> 
                <li>
                    <h3>3</h3>
                    <strong>Online Testing</strong>As part of our commitment to thorough 
                    assessments, the online testing phase allows us to gauge your technical 
                    and problem-solving skills. This step is crucial, especially in the tech 
                    industry where innovation and problem-solving are key. We're interested 
                    in understanding how you approach challenges and find solutions. Don't worry; 
                    we design our tests to be fair and reflective of real-world scenarios. 
                    <span className='hiring-arrow'>&rarr;</span> 
                </li>              
                <li>
                    <h3>4</h3>
                    <strong>Interviews</strong>Congratulations! You've reached the interview 
                    stage. This is an opportunity for you to meet our team and showcase your 
                    expertise. Expect a mix of technical and behavioral questions to understand 
                    your skills, experience, and how you'd fit into our collaborative environment. We're interested in your thought process and how you approach problem-solving. This is a two-way conversation, so feel free to ask us questions too. 
                    <span className='hiring-arrow'>&rarr;</span> 
                </li>              
                <li>
                    <h3>5</h3>
                    <strong>Offer</strong>If you receive an offer from Aurizon, congratulations! 
                    This means we see great potential in you and believe you'll be a valuable 
                    addition to our team. The offer includes details about your role, responsibilities, 
                    benefits, and other important information. Take your time to review and feel 
                    free to ask any questions you may have. We're excited about the prospect of 
                    having you on board. 
                    <span className='hiring-arrow'>&rarr;</span> 
                </li>              
                <li>
                    <h3>6</h3>
                    <strong>Joining The Team</strong>Welcome to Aurizon! The "Joining The Team" 
                    phase marks the beginning of an exciting journey. As you integrate into our 
                    work culture, you'll have access to onboarding resources, mentorship, and our 
                    in-house university for continuous learning. This is a time for you to familiarize 
                    yourself with our projects, colleagues, and the collaborative spirit that defines 
                    Aurizon. We encourage you to bring your unique perspectives, ideas, and enthusiasm 
                    to make a meaningful impact. 
                </li>
            </ul>
        </div>
        <span className='random-design'></span>
        <div className='hiring-process'>
           <h2>Remember...</h2>   
           <ul>
            <li>
              <strong>Be prepared</strong>Do your research and be ready by interview day to confident   
            </li>
            <li>
                <strong>Be yourself</strong>Be unique and just be you, we want to see who you really are.
            </li>
            <li>
                <strong>Just ask away!</strong>Ask us questions about your role, the company, etc. 
            </li>
           </ul>
        </div>
        <div className='career-description-three'>
            <p> 
            Join us in our journey to redefine possibilities and create meaningful
            solutions. Together, we can achieve remarkable milestones and advance 
            your career in the process. Explore our current job openings and take 
            the first step toward a rewarding future with Aurizon.
            </p>
           {/* <span className='random-design'></span>
           <span className='random-design'></span> */}
        </div>
            <img src={Working} alt='working' className='working'></img>        
            {/* <div className={`button-container ${showCareerTitle ? 'slide-in' : ''}`}>
                <Link to='/job-list' className={`careers-button ${showCareerTitle ? 'slide-in' : ''}`}>Explore Job Opportunities<span className='arrow'>&rarr;</span></Link>
            </div> */}
            <span className='random-design'></span>
        <div className='opportunity'>
            <h2>Job Opportunities</h2>    
                <p>
                  See any roles that best fit you? Go ahead and apply.  
                </p>
                    <hr />
                <p>At this time, there are no open positions. Please continue to check 
                back as we are a new growing startup company.
                </p>
        </div>  
        <div className='dont-see'>
            <h2>Don't see the job for you?</h2>
                <p>
                    Send your resume anyway and we will keep you in mind for future openings.
                </p>
                <div className={`button-container ${showCareerTitle ? 'slide-in' : ''}`}>
                    <a href="mailto:jdelvalle88@live.com" className={`careers-button ${showCareerTitle ? 'slide-in' : ''}`}>
                    Send Your Resume<span className='arrow'>&rarr;</span>
                    </a>
                </div>
        </div>  
    </div>        
    );
};

export default Careers;