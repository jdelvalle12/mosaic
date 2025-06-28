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
// import '../App.css';
import './About.css';

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
     <div className='about-our-story' data-aos='fade-up'> 
        <div className='story-description' data-aos='fade-right' data-aos-delay='100'>
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
            <img src={Innovation} alt='innovation' className='innovation' data-aos='fade-left' data-aos-delay='200'></img>
        </div>        
        <div className='about-our-mission'>
          <img src={Passion} alt='passion' className='passion' data-aos='slide-left'></img>
            <div className='mission-description' data-aos='slide-right'>
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
<div className='about-our-value' data-aos='fade-in'>            
  <h2>Our Values</h2>
    <p>
      At Mosaic, our company culture is built on principles that shape how we work, connect, and grow—together.
    </p>
  <ul>
    <li>
      <img className='value-icon' src={BalanceIcon} alt='Work-Life Balance Icon' data-aos='zoom-in' data-aos-delay='200' />
      <strong>Work-Life Balance:</strong> We encourage a healthy blend of work and personal time, so our team stays refreshed and inspired.
    </li>
    <li>
      <img className='value-icon' src={TransparencyIcon} alt='Transparency Icon' data-aos='zoom-in' data-aos-delay='300'/>
      <strong>Transparency:</strong> We believe honesty and open communication build lasting trust—with clients and each other.
    </li>
    <li>
      <img className='value-icon' src={DiversityIcon} alt='Diversity Icon' data-aos='zoom-in' data-aos-delay='400'/>
      <strong>Diversity:</strong> We celebrate different backgrounds and perspectives as the foundation for innovation.
    </li>
    <li>
      <img className='value-icon' src={PositivityIcon} alt='Positivity Icon' data-aos='zoom-in' data-aos-delay='500'/>
      <strong>Positivity:</strong> We approach every challenge with optimism, creativity, and a solutions-first mindset.
    </li>
    <li>
      <img className='value-icon' src={TeamworkIcon} alt='Teamwork Icon' data-aos='zoom-in' data-aos-delay='600'/>
      <strong>Teamwork:</strong> Collaboration fuels our success. We create space where every voice is valued and great ideas thrive.
    </li>
    <li>
      <img className='value-icon' src={GrowthIcon} alt='Growth Icon' data-aos='zoom-in' data-aos-delay='700'/>
      <strong>Personal Growth:</strong> We support continuous learning, helping every team member reach their fullest potential.
    </li>
    <li>
      <img className='value-icon' src={InnovationIcon} alt='Innovation Icon' data-aos='zoom-in' data-aos-delay='800'/>
      <strong>Innovation:</strong> We’re driven by curiosity, always exploring new ideas to push boundaries and lead change.
    </li>
    <li>
      <img className='value-icon' src={AutonomyIcon} alt='Autonomy Icon' data-aos='zoom-in' data-aos-delay='900'/>
      <strong>Autonomy:</strong> We trust our team to lead, create, and take ownership of their impact.
    </li>
  </ul>
</div>
<div className='about-our-history'>
  <img src={History} alt='history' className='history-pic' data-aos='slide-right'/>
  <div className='history-description' data-aos='slide-left'>
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
<div className='about-facts-figures' data-aos='zoom-in'>
  <h2>Facts & Figures</h2>
  <p>
    As a young and ambitious company, we're proud of what we've built so far and excited about what lies ahead. 
    Here’s a snapshot of our journey and momentum:
  </p>
  <ul data-aos='zoom-in'>
    <li>
      <img className='facts-icon' src={CalenderIcon} alt='Founded' data-aos='zoom-in' data-aos-delay='200'/>
      <strong> Founded:</strong> 2025
    </li>
    <li>
      <img className='facts-icon' src={TeamIcon} alt='Team' data-aos='zoom-in' data-aos-delay='300'/>
      <strong> Core Team Members:</strong> 2 (and growing)
    </li>
    <li>
      <img className='facts-icon' src={HandshakeIcon} alt='Clients' data-aos='zoom-in' data-aos-delay='400'/>
      <strong> Clients Served:</strong> 1+ (with new partnerships developing)
    </li>
    <li>
      <img className='facts-icon' src={ConstructionIcon} alt='Projects' data-aos='zoom-in' data-aos-delay='500'/>
      <strong> Projects in Progress:</strong> 1 (more in the pipeline)
    </li>
  </ul>
</div>
<div className='about-partners' data-aos='slide-left'>
  <h2>Our Partners</h2>
  <p>
    We recognize that achieving success in the ever-evolving tech landscape 
    requires collaboration—we cannot do it alone. That’s why we are committed 
    to forming strategic partnerships that amplify our strengths and open 
    doors to new opportunities.
  </p>

  {/* Visible placeholder until carousel is added */}
  {/* <div className="partner-carousel-placeholder">
    <p><em>Partner logos will appear here as we grow our collaborations.</em></p>
  </div>
</div> */}

  {/* Future carousel (example using Swiper.js or any other lib) */}
  {/* <Swiper
  spaceBetween={50}
  slidesPerView={3}
  loop={true}
  autoplay={{ delay: 3000 }}
  breakpoints={{
    480: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
>
  {partners.map((partner, index) => (
    <SwiperSlide key={index}>
      <img src={partner.logo} alt={partner.name} />
    </SwiperSlide>
  ))}
</Swiper> */}
</div>

{/* Optional: Future Achievements & Awards Section */}
{/* <div className='about-awards'>
  <h2>Achievements & Awards</h2>
  <p><em>Stay tuned as we continue to build our reputation and grow our accomplishments.</em></p>
</div> */}
<div className='about-goals-vision'>
  <div className='vision' data-aos='slide-right'>
    <h2>Our Goals & Vision</h2>
    <p>
      At Mosaic, our vision is to become a premier digital marketing and MarTech company — 
      where creativity meets technology to deliver impactful, measurable results. 
      We aim to help businesses grow by blending innovative strategy, compelling storytelling, 
      and data-driven solutions.
    </p>
    <p>
      We believe marketing is more than just promotion — it's about creating meaningful connections, 
      building trust, and inspiring action. Our team is committed to staying at the forefront 
      of emerging trends, constantly refining our approach through research, experimentation, 
      and collaboration.
    </p>
    <p>
      Our goal is to empower brands of all sizes to reach their audiences with clarity, consistency, 
      and purpose — whether through modern web development, digital campaigns, content creation, 
      or marketing automation.
    </p>
    <p>
      As a company born from the success of Aurizon, Mosaic carries forward the same spirit of innovation 
      and adaptability — now focused on delivering cutting-edge marketing solutions that drive real-world impact.
    </p>
    <p>
      Join us as we build bold campaigns, elevate digital presence, and shape the future of marketing — 
      one pixel, one message, one Mosaic at a time.
    </p>
  </div>
  <img src={Vision} alt='vision' className='horizon-vision' data-aos='slide-left'></img>
  </div>
    {/* <div className='about-community'>
      <h2>Community Involvement</h2>
  </div> */}
  <div className='about-timeline'>
    <h2>Our Journey</h2>
      <Timeline/>
  </div>
  <FAQ/>
  </div>
  );
};

export default About;