import React, { useEffect, useState } from 'react';
import ContactUs from '../images/contact-us-two.jpg';
import Reality from '../images/into-reality.jpg';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';
import '../App.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    companyEmail: '',
    phone: '',
    companyName: '',
    industry: '',
    state: '',
    intent: '',
    message: '',
  });

  const [showSlogan, setShowSlogan] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setShowSlogan(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send the email using EmailJS
    emailjs.send(
      'service_5mp7f14',      // Replace with your EmailJS service ID
      'template_bvq9qtx',     // Replace with your EmailJS template ID
      formData,               // The object with all input values
      'Krx007KfoiPSblA70'       // Replace with your EmailJS public key
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmitted(true);
      // Clear the form
      setFormData({
        firstName: '',
        lastName: '',
        companyEmail: '',
        phone: '',
        companyName: '',
        industry: '',
        state: '',
        intent: '',
        message: '',
      });
    })
    .catch((error) => {
      console.error('FAILED...', error);
    })
    .finally(() => setIsSubmitting(false));
  };

  return (
    <div className='contact-container'>
      {/* --- Background Header Section --- */}
      <img
        src={ContactUs}
        alt='Contact us visual'
        className='contact-us-background'
        loading='lazy'
      />
      <h1 className={`contact-title ${showSlogan ? 'fade-in' : ''}`}>
        Hey, Let's Talk About It!
      </h1>
      <p className={showSlogan ? 'slide-in' : ''}>
        Questions? Want to leave feedback? Need further assistance? We are here
        to help. Fill out the form below with your inquiry.
      </p>

      {/* --- Contact Form --- */}
      <div className='design-inquiries'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='firstName'>First Name:</label>
          <input
            type='text'
            name='firstName'
            id='firstName'
            value={formData.firstName}
            onChange={handleChange}
            placeholder='Enter your first name'
            autoComplete='given-name'
            required
          />

          <label htmlFor='lastName'>Last Name:</label>
          <input
            type='text'
            name='lastName'
            id='lastName'
            value={formData.lastName}
            onChange={handleChange}
            placeholder='Enter your last name'
            autoComplete='family-name'
            required
          />

          <label htmlFor='companyEmail'>Company Email:</label>
          <input
            type='email'
            name='companyEmail'
            id='companyEmail'
            value={formData.companyEmail}
            onChange={handleChange}
            placeholder='Enter your company email'
            autoComplete='email'
            required
          />

          <label htmlFor='phone'>Phone:</label>
          <input
            type='tel'
            name='phone'
            id='phone'
            value={formData.phone}
            onChange={handleChange}
            placeholder='Enter your phone number'
            autoComplete='tel'
            required
          />

          <label htmlFor='companyName'>Company Name:</label>
          <input
            type='text'
            name='companyName'
            id='companyName'
            value={formData.companyName}
            onChange={handleChange}
            placeholder='Company Name (optional)'
            autoComplete='organization'
          />

          <label htmlFor='industry'>Industry:</label>
          <input
            type='text'
            name='industry'
            id='industry'
            value={formData.industry}
            onChange={handleChange}
            placeholder='Industry (optional)'
          />

          <label htmlFor='state'>State:</label>
          <input
            type='text'
            name='state'
            id='state'
            value={formData.state}
            onChange={handleChange}
            placeholder='State (optional)'
            autoComplete='address-level1'
          />

          <label htmlFor='intent'>Intent of Message:</label>
          <input
            type='text'
            name='intent'
            id='intent'
            value={formData.intent}
            onChange={handleChange}
            placeholder='Reason for contacting us'
            required
          />

          <label htmlFor='message'>Message:</label>
          <textarea
            name='message'
            id='message'
            value={formData.message}
            onChange={handleChange}
            placeholder='Write your message here...'
            required
          />

          {/* --- Submit Button + Feedback Message --- */}
          <input
            type='submit'
            value={isSubmitting ? 'Submitting...' : 'Submit'}
            disabled={isSubmitting}
          />

          {submitted && (
            <p className='thank-you'>
              Thank you! We’ll be in touch soon.
            </p>
          )}
        </form>
      </div>

      {/* --- End Section --- */}
      <h2 className='contact-end-message'>
        Let's connect, work together, and make the dream become a reality.
      </h2>
      <img
        src={Reality}
        alt='Making ideas into reality'
        className='into-reality'
        loading='lazy'
      />
      <div>
        <h3>
          <span style={{ color: 'red' }}>📧</span> Or contact us at: 
          <a href='mailto:info@mosaicdigitalcreations.com'> info@mosaicdigitalcreations.com</a>
        </h3>
      </div>
    </div>
  );
};

export default Contact;