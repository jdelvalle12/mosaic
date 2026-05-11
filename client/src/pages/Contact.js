import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
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

    emailjs.send(
      'service_5mp7f14',
      'template_bvq9qtx',
      formData,
      'Krx007KfoiPSblA70'
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);

      setSubmitted(true);

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
    <>
      <Helmet>
        <title>
          Contact Mosaic Digital Creations | Web Design & Digital Marketing
        </title>

        <meta
          name="description"
          content="Contact Mosaic Digital Creations for web design, SEO, digital marketing, branding, and mobile app development services for businesses and startups."
        />

        <meta
          name="keywords"
          content="contact web designer, digital marketing agency, SEO services, web development company, mobile app development"
        />

        <meta
          property="og:title"
          content="Contact Mosaic Digital Creations"
        />

        <meta
          property="og:description"
          content="Get in touch with Mosaic Digital Creations for web development, digital marketing, SEO, branding, and creative solutions."
        />

        <meta
          property="og:type"
          content="website"
        />
      </Helmet>

      <div className="contact-container">

        {/* ================= HERO SECTION ================= */}

        <div className="contact-hero">

          <img
            src={ContactUs}
            alt="Web design and digital marketing consultation"
            className="contact-us-background"
            loading="lazy"
          />

          <div className="contact-hero-overlay">

            <h1 className={`contact-title ${showSlogan ? 'fade-in' : ''}`}>
              Contact Mosaic Digital Creations
            </h1>

            <p className={`contact-subtext ${showSlogan ? 'slide-in' : ''}`}>
              Contact Mosaic Digital Creations for web design,
              SEO, digital marketing, branding, and mobile app
              development solutions tailored for growing businesses.
            </p>

          </div>
        </div>

        {/* ================= MAIN CONTENT ================= */}

        <div className="contact-content">

          {/* ================= FORM ================= */}

          <div className="design-inquiries">

            <form onSubmit={handleSubmit}>

              <label htmlFor="firstName">First Name:</label>

              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Enter your first name"
                autoComplete="given-name"
                required
              />

              <label htmlFor="lastName">Last Name:</label>

              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter your last name"
                autoComplete="family-name"
                required
              />

              <label htmlFor="companyEmail">Company Email:</label>

              <input
                type="email"
                name="companyEmail"
                id="companyEmail"
                value={formData.companyEmail}
                onChange={handleChange}
                placeholder="Enter your company email"
                autoComplete="email"
                required
              />

              <label htmlFor="phone">Phone:</label>

              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
              />

              <label htmlFor="companyName">Company Name:</label>

              <input
                type="text"
                name="companyName"
                id="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Company Name (optional)"
                autoComplete="organization"
              />

              <label htmlFor="industry">Industry:</label>

              <input
                type="text"
                name="industry"
                id="industry"
                value={formData.industry}
                onChange={handleChange}
                placeholder="Industry (optional)"
              />

              <label htmlFor="state">State:</label>

              <input
                type="text"
                name="state"
                id="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State (optional)"
                autoComplete="address-level1"
              />

              <label htmlFor="intent">Intent of Message:</label>

              <input
                type="text"
                name="intent"
                id="intent"
                value={formData.intent}
                onChange={handleChange}
                placeholder="Reason for contacting us"
                required
              />

              <label htmlFor="message">Message:</label>

              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                required
              />

              <input
                type="submit"
                value={isSubmitting ? 'Submitting...' : 'Submit'}
                disabled={isSubmitting}
              />

              {submitted && (
                <p className="thank-you">
                  Thank you! We’ll be in touch soon.
                </p>
              )}

            </form>
          </div>

          {/* ================= SIDE CONTENT ================= */}

          <div className="contact-side-content">

            <div className="local-seo-text">

              <p>
                Mosaic Digital Creations provides web design,
                SEO, digital marketing, branding, and mobile
                app development services for businesses across
                Florida and beyond.
              </p>

            </div>


            <img
              src={Reality}
              alt="Turning digital ideas into reality"
              className="into-reality"
              loading="lazy"
            />

            <h2 className="contact-end-message">
              Let’s work together to build your brand through
              modern web design, SEO, and digital marketing solutions.
            </h2>
            <div className="contact-email">

              <h3>
                <span style={{ color: 'red' }}>📧</span>
                {' '}Fill out the form or contact us at:
                <a href="mailto:info@mosaicdigitalcreations.com">
                  {' '}info@mosaicdigitalcreations.com
                </a>
              </h3>

            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;