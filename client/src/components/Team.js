import React, { useState } from 'react';
import Me from '../images/Me.jpg';
import {Modal} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa';

import '../index.css';
import '../App.css';

function AboutTheTeam() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const teamMembers = [
    {
      name: 'Jose Del Valle Founder and CEO',
      photoSrc: Me,
      description: (
        <p style={{ whiteSpace: 'pre-line' }}>
          Jose Del Valle is the passionate Founder and CEO of Aurizon, 
          a software development company that helps businesses (large or small) 
          to be successful and empower individuals. With a couple of years of 
          experience in the industry, Jose has been the driving force behind our success. 
          His visionary leadership and unwavering commitment to our mission have propelled 
          us to new heights. His expertise in business strategy, technology, finance, marketing, 
          just to name a few, has been instrumental in shaping the company's direction. 
          He's a forward-thinker, a problem solver, a dedicated leader who inspires the team to 
          excel and likes to develop partnerships to work with, in achieving success in the 
          ever-evolving tech landscape. Outside the office, Jose enjoys time with friends, 
          travel around the world, play videogames, constantly likes to learn new things 
          regarding technology and non-tech, which reflect his diverse and creative mindset. 
          He holds a Bachelor of Science in Criminal Justice and a certificate in Full Stack Web Development as of now.
        </p>
      )
    }
    // Add more team members here
  ];


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
        <p>{selectedTeamMember.description}</p>
      </Modal.Body>
    </>
  )}
</Modal>
    </div>
  );
}

export default AboutTheTeam;