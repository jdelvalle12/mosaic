import React from "react";
import HostingMaintenance from '../images/hosting-maintenance.svg'; // your hosting illustration
import "../styles/Hosting-Maintenance.css";

const Hosting = () => {
  return (
    <div className="hosting-wrapper">
      
      {/* HERO SECTION */}
      <section className="hosting-hero">
        <img src={HostingMaintenance} alt="Hosting Illustration" className="hosting-image" />
        <h1 className="hosting-title">Web Hosting & Maintenance</h1>
        <p className="hosting-subtitle">
          Reliable, secure, and scalable hosting solutions designed to keep your business online — always.
        </p>
      </section>

      {/* OVERVIEW */}
      <section className="hosting-overview">
        <h2 className="hosting-heading">Our Hosting Solutions</h2>
        <p className="hosting-text">
          Mosaic Digital Creations offers a range of hosting services to meet the needs of businesses,
          from small startups to growing enterprises. Our infrastructure ensures fast loading speeds,
          strong security, and reliable uptime so your website performs at its best.
        </p>
      </section>

      <section className="hosting-benefits">
  <h2 className="hosting-heading">Why Choose Our Hosting</h2>

  <div className="hosting-benefits-grid">
    <div>
      <h3>Fast Performance</h3>
      <p>Optimized servers to ensure your website loads quickly and efficiently.</p>
    </div>

    <div>
      <h3>Reliable Uptime</h3>
      <p>We prioritize stability so your website stays online when it matters most.</p>
    </div>

    <div>
      <h3>Security Focused</h3>
      <p>Protection against threats with secure configurations and monitoring.</p>
    </div>

    <div>
      <h3>Scalable Solutions</h3>
      <p>Upgrade your hosting as your business grows without disruption.</p>
    </div>
  </div>
</section>

      {/* FEATURES GRID */}
      <section className="hosting-grid">
        
        <div className="hosting-card">
          <h3>Shared Hosting</h3>
          <p>
            A cost-effective solution ideal for small websites and early-stage businesses.
            Easy to maintain with dependable uptime and performance.
          </p>
        </div>

        <div className="hosting-card">
          <h3>VPS Hosting</h3>
          <p>
            Gain more power and flexibility with a Virtual Private Server, giving you
            dedicated resources and higher performance for growing websites.
          </p>
        </div>

        <div className="hosting-card">
          <h3>Cloud Hosting</h3>
          <p>
            Scalable, high-availability cloud hosting with automatic resource allocation,
            perfect for e-commerce and high-traffic platforms.
          </p>
        </div>

        <div className="hosting-card">
          <h3>Custom Hosting Plans</h3>
          <p>
            Need something specific? We can build hosting solutions based on your
            unique business requirements and long-term goals.
          </p>
        </div>

        <div className="hosting-card">
          <h3>Email Hosting (Coming Soon)</h3>
          <p>
            Professional business email with your domain for a polished, credible online presence.
          </p>
        </div>

        <div className="hosting-card">
          <h3>Advanced Backups & Monitoring (Coming Soon)</h3>
          <p>
            Daily backups, uptime monitoring, and performance analytics to keep your site running smoothly.
          </p>
        </div>

      </section>

      <section className="hosting-maintenance">
  <h2 className="hosting-heading">Ongoing Maintenance & Support</h2>

  <p className="hosting-text">
    We don’t just host your website — we keep it running smoothly. Our maintenance
    services ensure your site stays updated, secure, and optimized at all times.
  </p>

  <ul className="hosting-list">
    <li>Website updates & performance optimization</li>
    <li>Security monitoring & protection</li>
    <li>Backup management & recovery</li>
    <li>Technical support when you need it</li>
  </ul>
</section>

<section className="hosting-cta">
  <h2>Need Reliable Hosting for Your Website?</h2>
  <p>
    Let us handle your hosting and maintenance so you can focus on growing your business.
  </p>

  <a href="/contact" className="hosting-btn">
    Get Started
  </a>
</section>

      {/* FOOTER */}
      <section className="hosting-footer">
        <p>
          More hosting tools and advanced features are in development. Stay tuned as we continue expanding!
        </p>
      </section>

    </div>
  );
};

export default Hosting;