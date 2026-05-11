import React from "react";
import UiUx from '../images/uiux-design.svg'; // your illustration
import "../styles/UIUX-Design.css";

const UIUXDesign = () => {
  return (
    <div className="uiux-wrapper">

      {/* HERO SECTION */}
      <section className="uiux-hero">
        <img src={UiUx} alt="UI/UX Illustration" className="uiux-image" />
        <h1 className="uiux-title">UI/UX Design Services & User Experience Optimization</h1>
        <p className="uiux-subtitle">
          Creating intuitive and visually appealing interfaces that engage users and drive results.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="uiux-overview">
        <h2 className="uiux-heading">Our Design Approach</h2>
        <p className="uiux-text">
          We focus on user-centered design to deliver seamless experiences across web and mobile platforms.
          From wireframes to prototypes, we ensure every interaction is thoughtful and impactful.
        </p>
      </section>

      <section className="uiux-benefits">
  <h2 className="uiux-heading">Why UI/UX Matters</h2>

  <p className="uiux-text">
    A well-designed user experience improves engagement, increases conversions,
    and keeps users coming back. Great design isn’t just about looks — it’s about
    functionality, clarity, and results.
  </p>
</section>

      {/* FEATURES GRID */}
      <section className="uiux-grid">
        <div className="uiux-card">
          <h3>Wireframing & Prototyping</h3>
          <p>
            Plan and visualize the layout and flow of your application before development begins.
          </p>
        </div>

        <div className="uiux-card">
          <h3>Visual Design</h3>
          <p>
            Craft engaging, modern, and brand-aligned interfaces that resonate with your audience.
          </p>
        </div>

        <div className="uiux-card">
          <h3>User Research</h3>
          <p>
            Understand your users' needs, pain points, and preferences to design meaningful experiences.
          </p>
        </div>

        <div className="uiux-card">
          <h3>Usability Testing</h3>
          <p>
            Test designs with real users to validate usability and optimize for conversions and satisfaction.
          </p>
        </div>
      </section>

{/* Process GRID */}
      <section className="uiux-process">
  <h2 className="uiux-heading">Our Design Process</h2>

  <div className="uiux-process-grid">
    <div className="uiux-step">
      <h3>1. Research</h3>
      <p>We analyze your users, competitors, and business goals.</p>
    </div>

    <div className="uiux-step">
      <h3>2. Wireframing</h3>
      <p>We create structured layouts to map user journeys.</p>
    </div>

    <div className="uiux-step">
      <h3>3. Design</h3>
      <p>We craft visually engaging and intuitive interfaces.</p>
    </div>

    <div className="uiux-step">
      <h3>4. Testing</h3>
      <p>We refine based on feedback and usability insights.</p>
    </div>
  </div>
</section>

<section className="uiux-cta">
  <h2>Ready to Improve Your User Experience?</h2>
  <p>
    Let’s design interfaces that are not only beautiful but also effective.
  </p>

  <a href="/contact" className="uiux-btn">
    Get Started
  </a>
</section>

      {/* FOOTER */}
      <section className="uiux-footer">
        <p>
          More design tools and services are in development. Check back soon for updates!
        </p>
      </section>

    </div>
  );
};

export default UIUXDesign;