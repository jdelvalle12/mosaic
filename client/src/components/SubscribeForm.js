import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';
import '../App.css';
import './SubscribeForm.css';

const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    const serviceID = 'service_m02ixbb';
    const templateID = 'template_sluf7od';
    const publicKey = 'Krx007KfoiPSblA70';

    emailjs.send(serviceID, templateID, { email }, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thanks for subscribing!');
        setEmail('');
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Something went wrong. Please try again.');
      });
  };

  return (
    <div className="subscribe-form">
      <input
        type="email"
        placeholder="Enter email to subscribe and get updates"
        value={email}
        onChange={handleEmailChange}
      />
      <button onClick={handleSubscribe} className="subscribe-button">Subscribe</button>
    </div>
  );
};

export default SubscribeForm;