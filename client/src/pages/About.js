import React, {useEffect}from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
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
            At Mosaic, our mission is to create innovative, impactful solutions that help businesses grow,
            connect, and thrive in a digital world. We blend forward-thinking design, intuitive technology,
            and a deep understanding of user needs to build experiences that make a difference.
          </p>
          <p>
            Powered by a passionate, diverse team, we bring creativity and precision to every project. Whether it's 
            launching a new website, strengthening your brand, or developing custom software, we partner with you 
            to turn bold ideas into real-world results.
          </p>
          </div>
        </div>
        <div className='about-our-value'>
            
          <h2>Our Values</h2>
            <p>
              At Mosaic, our company culture is built on principles that shape how we work, connect, and grow—together.
            </p>
            <ul>
    <li>
      <img className='value-icon' src={BalanceIcon} alt='Work-Life Balance Icon' />
      <strong>Work-Life Balance:</strong> We encourage a healthy blend of work and personal time, so our team stays refreshed and inspired.
    </li>
    <li>
      <img className='value-icon' src={TransparencyIcon} alt='Transparency Icon' />
      <strong>Transparency:</strong> We believe honesty and open communication build lasting trust—with clients and each other.
    </li>
    <li>
      <img className='value-icon' src={DiversityIcon} alt='Diversity Icon' />
      <strong>Diversity:</strong> We celebrate different backgrounds and perspectives as the foundation for innovation.
    </li>
    <li>
      <img className='value-icon' src={PositivityIcon} alt='Positivity Icon' />
      <strong>Positivity:</strong> We approach every challenge with optimism, creativity, and a solutions-first mindset.
    </li>
    <li>
      <img className='value-icon' src={TeamworkIcon} alt='Teamwork Icon' />
      <strong>Teamwork:</strong> Collaboration fuels our success. We create space where every voice is valued and great ideas thrive.
    </li>
    <li>
      <img className='value-icon' src={GrowthIcon} alt='Growth Icon' />
      <strong>Personal Growth:</strong> We support continuous learning, helping every team member reach their fullest potential.
    </li>
    <li>
      <img className='value-icon' src={InnovationIcon} alt='Innovation Icon' />
      <strong>Innovation:</strong> We’re driven by curiosity, always exploring new ideas to push boundaries and lead change.
    </li>
    <li>
      <img className='value-icon' src={AutonomyIcon} alt='Autonomy Icon' />
      <strong>Autonomy:</strong> We trust our team to lead, create, and take ownership of their impact.
    </li>
  </ul>
</div>
<div className='about-our-history'>
  <img src={History} alt='history' className='history-pic' />
  <div className='history-description'>
    <h2>The Rest Is History...</h2>
    <p>
      Mosaic began with a vision that started years earlier. Founder and CEO Jose Del Valle didn’t set out to become a tech entrepreneur. With a background in Criminal Justice from the University of Central Florida, he originally pursued a career in law enforcement. But as life unfolded, a different passion emerged—one rooted in creativity, problem-solving, and building something meaningful from the ground up.
    </p>
    <p>
      Jose discovered a deep interest in software engineering and took the initiative to teach himself how to code. After months of self-study, he enrolled in a rigorous 6-month coding bootcamp, where he collaborated with others and led solo projects that pushed his skills to the next level. Yet after graduation, he faced the harsh realities of breaking into the industry—over 50 job applications and countless rejections.
    </p>
    <p>
      Refusing to be discouraged, he decided to create his own path. With little capital but a clear purpose, he founded <strong>Aurizon Technologies</strong>—a company focused on innovation, opportunity, and building tools that empower others.
    </p>
    <p>
      Two years later, as Aurizon began expanding, Jose launched <strong>Mosaic</strong>, a dedicated division with a focus on web development and digital marketing. Mosaic was created to bring businesses a bold online presence—blending sleek design, smart code, and strategic storytelling into one seamless experience.
    </p>
    <p>
      What started as a personal journey has now become a platform for others to grow, create, and thrive. Today, Mosaic continues to evolve—helping clients turn their vision into reality through thoughtful design, powerful technology, and a commitment to excellence.
    </p>
  </div>
</div>
<Team/>
<div className='about-facts-figures'>
  <h2>Facts & Figures</h2>
  <p>
    As a young and ambitious company, we're proud of what we've built so far and excited about what lies ahead. 
    Here’s a snapshot of our journey and momentum:
  </p>
  <ul>
    <li>
      <img className='facts-icon' src={CalenderIcon} alt='Founded' />
      <strong> Founded:</strong> 2025
    </li>
    <li>
      <img className='facts-icon' src={TeamIcon} alt='Team' />
      <strong> Core Team Members:</strong> 2 (and growing)
    </li>
    <li>
      <img className='facts-icon' src={HandshakeIcon} alt='Clients' />
      <strong> Clients Served:</strong> 1+ (with new partnerships developing)
    </li>
    <li>
      <img className='facts-icon' src={ConstructionIcon} alt='Projects' />
      <strong> Projects in Progress:</strong> 1 (more in the pipeline)
    </li>
  </ul>
</div>
<div className='about-partners'>
  <h2>Our Partners</h2>
  <p>
    We recognize that achieving success in the ever-evolving tech landscape 
    requires collaboration—we cannot do it alone. That’s why we are committed 
    to forming strategic partnerships that amplify our strengths and open 
    doors to new opportunities.
  </p>

  {/* Placeholder message while no partners exist */}
  {/* <div className="partner-carousel-placeholder">
    <p><em>Partner logos will appear here as we grow our collaborations.</em></p>
  </div> */}

  {/* Future carousel (example using Swiper.js or any other lib) */}
  {/*
  <Swiper
    spaceBetween={50}
    slidesPerView={3}
    autoplay={{ delay: 3000 }}
    loop={true}
  >
    {partners.map((partner, index) => (
      <SwiperSlide key={index}>
        <img src={partner.logo} alt={partner.name} />
      </SwiperSlide>
    ))}
  </Swiper>
  */}
</div>

{/* Optional: Future Achievements & Awards Section */}
{/* <div className='about-awards'>
  <h2>Achievements & Awards</h2>
  <p><em>Stay tuned as we continue to build our reputation and grow our accomplishments.</em></p>
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