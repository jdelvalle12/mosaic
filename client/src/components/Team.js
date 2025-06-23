import React, { useState } from 'react';
import Me from '../images/Me.jpg';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

import '../index.css';
import '../App.css';
import './Team.css';

function AboutTheTeam() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const teamMembers = [
  {
    name: 'Jose Del Valle Founder and CEO',
    photoSrc: Me,
    description: `Jose Del Valle is the passionate Founder and CEO of Aurizon, a software development company that helps businesses—large or small—succeed and empowers individuals through innovative technology solutions. With a couple of years of experience in the industry, Jose has been the driving force behind the company’s success.
His visionary leadership and unwavering commitment to the mission have propelled Aurizon to new heights. His expertise in business strategy, technology, finance, and marketing has been instrumental in shaping its direction. He's a forward-thinker, problem solver, and dedicated leader who inspires the team to excel and thrives on forming partnerships that drive collective success in the ever-evolving tech landscape.
Building on Aurizon’s foundation, Jose later founded Mosaic, a company spun off from Aurizon to focus specifically on web development and digital marketing. As CEO of Mosaic, he continues to explore creative ways to support clients in building their online presence with meaningful, results-driven solutions.
Outside the office, Jose enjoys spending time with friends, traveling the world, and playing video games. He has a passion for lifelong learning in both tech and non-tech areas, which reflects his diverse and creative mindset. He holds a Bachelor of Science in Criminal Justice and a certificate in Full Stack Web Development.`
  }
];
    // Add more team members here



  const openModal = (teamMember) => {
    setSelectedTeamMember(teamMember);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedTeamMember(null);
    setModalVisible(false);
  };

  return (
    <div className="about-the-team">
      <h2>The Team</h2>
      <p>Meet the team that makes it all happen...</p>

      {/* Render team members */}
      {teamMembers.map((member, index) => (
        <div key={index} className="team-member">
          <button
            className='team-member-button'
            aria-label={`More about ${member.name}`}
            onClick={() => openModal(member)}
          >
            <img
              src={member.photoSrc}
              alt={member.name}
            />
          </button>
          <p>{member.name}</p>
        </div>
      ))}

      {/* Modal */}
      <Modal show={modalVisible} onHide={closeModal}>
        {selectedTeamMember && ( // Check if selectedTeamMember is not null
      <>
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
  <img src={selectedTeamMember.photoSrc} alt={selectedTeamMember.name} />
  <Modal.Title><h2>{selectedTeamMember.name}</h2></Modal.Title>
  <div className="social-icons-team-member">
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

  {/* ✅ This is correct placement */}
  <p style={{ whiteSpace: 'pre-line' }}>{selectedTeamMember.description}</p>
</Modal.Body>
    </>
  )}
</Modal>
    </div>
  );
}

export default AboutTheTeam;