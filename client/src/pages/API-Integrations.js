import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/API-Integrations.css';
import API from '../images/api.svg'; // <-- update the file name if needed

const APIIntegrations = () => {
  return (
    <div className="api-container">

      {/* HERO */}
      <section className="api-hero">
        <img src={API} alt="API Integrations Illustration" className="api-image" />
        <h1 className="api-title">API Integrations</h1>
        <p className="api-subtitle">
          Connect your applications to powerful third-party services and unlock new functionality.
        </p>
      </section>

      {/* OVERVIEW */}
   <section className="api-section">
  <h2 className="api-heading">Why API Integrations Matter</h2>
  <p className="api-text">
    Seamless API integrations allow your systems to communicate, automate workflows,
    and expand capabilities without reinventing the wheel. We help you build scalable,
    secure, and fast API connections that enhance your digital ecosystem.
  </p>
</section>

      {/* FEATURES */}
     <section className="api-section api-feature-layout">
  <div className="api-feature-title">
    <h2 className="api-heading">What We Can Integrate</h2>
    <p className="api-text">
      We can connect your platform to a wide range of services, helping you automate workflows
      and expand your capabilities efficiently.
    </p>
  </div>

  <ul className="api-list api-feature-list">
    <li>Payment gateways (Stripe, PayPal, Square)</li>
    <li>Social media & authentication APIs (Google, Meta, X/Twitter)</li>
    <li>Business systems (CRM, ERP, CMS)</li>
    <li>Shipping & logistics APIs</li>
    <li>AI/ML APIs (OpenAI, Google Cloud)</li>
    <li>Custom internal APIs</li>
  </ul>
</section>

      {/* PROCESS */}
  <section className="api-process-section">

  <h2 className="api-heading">Our Integration Process</h2>

  <div className="api-process-flow">

    <div className="api-process-step">
      <span className="api-step-number">1</span>
      <p>Assess your business requirements</p>
    </div>

    <div className="api-arrow">→</div>

    <div className="api-process-step">
      <span className="api-step-number">2</span>
      <p>Choose the right API providers</p>
    </div>

    <div className="api-arrow">→</div>

    <div className="api-process-step">
      <span className="api-step-number">3</span>
      <p>Develop and implement API connections</p>
    </div>

    <div className="api-arrow">→</div>

    <div className="api-process-step">
      <span className="api-step-number">4</span>
      <p>Testing and performance optimization</p>
    </div>

    <div className="api-arrow">→</div>

    <div className="api-process-step">
      <span className="api-step-number">5</span>
      <p>Launch and ongoing support</p>
    </div>

  </div>

</section>

      {/* CTA */}
      <section className="api-cta">
        <h2 className="api-heading">Ready to Expand Your System's Capabilities?</h2>
        <Link to="/contact" className="api-btn">Contact Us</Link>
      </section>

    </div>
  );
};

export default APIIntegrations;