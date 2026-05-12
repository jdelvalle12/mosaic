import React from "react";
import { Link } from 'react-router-dom';
import Marketing from "../images/marketing.svg";
import { 
  FaInstagram, 
  FaFacebook, 
  FaTiktok, 
  FaGoogle, 
  FaYoutube, 
  FaLinkedin 
} from 'react-icons/fa';
import "../styles/Marketing-Support.css";

const MarketingSupport = () => {
  return (
    <div className="ms-wrapper">
      {/* HERO SECTION */}
      <section className="ms-hero">
        <img src={Marketing} alt="Marketing Illustration" className="ms-image" />
        <h1 className="ms-title">Marketing Support</h1>
        <p className="ms-subtitle">
          Professional marketing solutions designed to elevate your brand and expand your digital footprint.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="ms-section">
        <h2 className="ms-heading">What We Offer</h2>
        <p className="ms-text">
          At Mosaic Digital Creations, we provide a wide range of marketing services to help businesses
          attract, engage, and convert their audiences. Whether you’re a startup or an established brand,
          we tailor strategies to meet your specific goals.
        </p>

        <div className="ms-grid">
          <div className="ms-card">
            <h3>Social Media Management</h3>
            <p>
              From content scheduling to engagement analytics, we manage your social presence to ensure
              your brand stays active and connected.
            </p>
          </div>

          <div className="ms-card">
            <h3>Content Creation</h3>
            <p>
              High-quality posts, graphics, videos, captions, and storytelling — we create content that
              aligns with your brand identity and resonates with your audience.
            </p>
          </div>

          <div className="ms-card">
            <h3>Branding & Identity</h3>
            <p>
              Logo design, brand color palettes, tone-of-voice guidelines, and full brand kits tailored
              to reflect your business vision.
            </p>
          </div>

          <div className="ms-card">
            <h3>Photography & Videography</h3>
            <p>
              Professional product photography, promo videos, short-form content, and creative media
              designed to strengthen your visual presence.
            </p>
          </div>

          <div className="ms-card">
            <h3>Digital Advertising (Coming Soon)</h3>
            <p>
              Facebook Ads, Instagram Ads, Google Ads, remarketing campaigns — all crafted to drive
              conversions and maximize ROI.
            </p>
          </div>

          <div className="ms-card">
            <h3>Digital Business Cards (Coming Soon)</h3>
            <p>
              Sleek, futuristic digital business cards that you can share instantly via QR code or direct link.
            </p>
          </div>
        </div>
      </section>

      {/* PLATFORMS SECTION */}
     <section className="ms-platforms">
  <h2 className="ms-heading">Marketing Platforms We Support</h2>

  <div className="ms-platform-grid">

    <div className="ms-platform">
      <FaInstagram className="ms-icon instagram" />
      <span>Instagram</span>
    </div>

    <div className="ms-platform">
      <FaFacebook className="ms-icon facebook" />
      <span>Facebook</span>
    </div>

    <div className="ms-platform">
      <FaTiktok className="ms-icon tiktok" />
      <span>TikTok</span>
    </div>

    <div className="ms-platform">
      <FaGoogle className="ms-icon google" />
      <span>Google</span>
    </div>

    <div className="ms-platform">
      <FaYoutube className="ms-icon youtube" />
      <span>YouTube</span>
    </div>

    <div className="ms-platform">
      <FaLinkedin className="ms-icon linkedin" />
      <span>LinkedIn</span>
    </div>

  </div>
</section>

      {/* PROCESS SECTION */}
      <section className="ms-process">
        <h2 className="ms-heading">Our Marketing Process</h2>

        <div className="ms-process-grid">
          <div className="ms-step">
            <h3>1. Discovery</h3>
            <p>We learn about your business, audience, and goals.</p>
          </div>

          <div className="ms-step">
            <h3>2. Strategy</h3>
            <p>We create a marketing strategy tailored to your brand.</p>
          </div>

          <div className="ms-step">
            <h3>3. Creation</h3>
            <p>We develop content, campaigns, and branding assets.</p>
          </div>

          <div className="ms-step">
            <h3>4. Growth</h3>
            <p>We monitor results and optimize campaigns for performance.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="ms-cta">
        <h2>Ready to Grow Your Brand?</h2>
        <p>
          Let Mosaic Digital Creations help you expand your reach and connect
          with the right audience.
        </p>

        <Link to="/contact" className="ms-btn">
          Get Started
        </Link>
      </section>

      {/* FOOTER */}
      <section className="ms-footer">
        <p>
          We’re continually expanding our marketing services. More features and capabilities are on the way!
        </p>
      </section>
    </div>
  );
};

export default MarketingSupport;