import React from "react";
import { Link } from 'react-router-dom';
import TechStrategy from '../images/tech-strategy.svg'; // your illustration
import "../styles/Tech-Strategy.css";

const Tech = () => {
  return (
    <div className="tech-wrapper">

      {/* HERO SECTION */}
      <section className="tech-hero">
        <img src={TechStrategy} alt="Tech Strategy Illustration" className="tech-image" />
        <h1 className="tech-title">Tech Strategy & Consulting</h1>
        <p className="tech-subtitle">
          Define your technology vision and roadmap to achieve long-term success.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="tech-overview">
        <h2 className="tech-heading">What We Offer</h2>
        <p className="tech-text">
          We help businesses plan and execute effective tech strategies, from system integrations and architecture planning to emerging technology adoption.
        </p>
      </section>

      <section className="tech-benefits">
        <h2 className="tech-heading">Why Tech Strategy Matters</h2>
          <p className="tech-text">
            A clear technology strategy helps businesses reduce costs, improve efficiency,
            and scale with confidence. Without a plan, companies risk using disconnected tools,
            outdated systems, and missed growth opportunities.
          </p>
      </section>

      {/* FEATURES GRID */}
      <section className="tech-grid">
        <div className="tech-card">
          <h3>System Integrations</h3>
          <p>
            Seamlessly connect your tools and platforms for better efficiency and data flow.
          </p>
        </div>

        <div className="tech-card">
          <h3>Technology Roadmaps</h3>
          <p>
            Plan future tech investments and milestones to achieve your business goals.
          </p>
        </div>

        <div className="tech-card">
          <h3>Emerging Technologies</h3>
          <p>
            Explore and adopt innovative tech solutions to stay ahead of the competition.
          </p>
        </div>

        <div className="tech-card">
          <h3>Consulting & Planning</h3>
          <p>
            Get expert advice on optimizing processes and implementing the right tools.
          </p>
        </div>
      </section>

      <section className="tech-process">
        <h2 className="tech-heading">Our Approach</h2>

        <div className="tech-process-grid">
          <div className="tech-step">
            <h3>1. Assessment</h3>
            <p>We evaluate your current systems, tools, and workflows.</p>
          </div>

          <div className="tech-step">
            <h3>2. Planning</h3>
            <p>We design a tailored technology roadmap aligned with your goals.</p>
          </div>

          <div className="tech-step">
            <h3>3. Implementation</h3>
            <p>We guide or assist in executing your strategy effectively.</p>
          </div>

          <div className="tech-step">
            <h3>4. Optimization</h3>
            <p>We refine and improve systems as your business grows.</p>
          </div>
        </div>
      </section>

      <section className="tech-cta">
        <h2>Ready to Build a Strong Tech Foundation?</h2>
        <p>
          Let’s create a strategy that supports your growth and future goals.
        </p>

        <Link to="/contact" className="tech-btn">
          Get Started
        </Link>
      </section>

      {/* FOOTER */}
      <section className="tech-footer">
        <p>
          More insights and services are coming soon — stay tuned!
        </p>
      </section>

    </div>
  );
};

export default Tech;