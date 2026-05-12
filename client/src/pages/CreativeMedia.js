import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/CreativeMedia.css';
import Creative from '../images/creative-media.svg';

const CreativeMedia = () => {
  return (
    <div className="creative-media-page">

      {/* Hero Section */}
      <section className="creative-media-hero">
        <img 
          src={Creative} 
          alt="Creative Media Illustration" 
          className="creative-media-image"
        />

        <h1>Creative Media</h1>

        <p>
          Bring your brand to life through professional photography,
          videography, and digital content designed for modern audiences.
        </p>
      </section>


      {/* Overview Section */}
      <section className="creative-media-overview">
        <h2>What We Offer</h2>

        <p>
          Our Creative Media services help businesses tell their story visually.
          From high-quality photography to compelling video and branded digital
          content, we create media that strengthens your brand and connects with
          your audience.
        </p>
      </section>


      {/* Services Section */}
      <section className="creative-media-services">

        <div className="creative-media-card">
          <h3>Photography</h3>
          <p>
            Professional photography for websites, products, branding,
            and promotional content.
          </p>
        </div>

        <div className="creative-media-card">
          <h3>Videography</h3>
          <p>
            Video content designed for storytelling, marketing, and
            digital platforms.
          </p>
        </div>

        <div className="creative-media-card">
          <h3>Editing & Post Production</h3>
          <p>
            Professional editing and enhancement for both photography
            and video content.
          </p>
        </div>

        <div className="creative-media-card">
          <h3>Brand Visuals</h3>
          <p>
            Custom graphics, banners, and visual elements that support
            your brand identity.
          </p>
        </div>

      </section>


      {/* Featured Work / Portfolio */}
      <section className="creative-media-portfolio">

        <h2>Featured Work</h2>

        <div className="portfolio-grid">

          <div className="portfolio-item">
            <div className="portfolio-placeholder"></div>
            <h4>Brand Photography</h4>
            <p>Professional imagery designed to elevate brand presence.</p>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-placeholder"></div>
            <h4>Product Content</h4>
            <p>High-quality visuals created for websites and marketing.</p>
          </div>

          <div className="portfolio-item">
            <div className="portfolio-placeholder"></div>
            <h4>Promotional Media</h4>
            <p>Visual storytelling built for digital marketing campaigns.</p>
          </div>

        </div>

      </section>


      {/* Platforms Section */}
      <section className="creative-media-platforms">

        <h2>Optimized for Modern Platforms</h2>

        <div className="platforms-grid">
          <span>Websites</span>
          <span>Social Media</span>
          <span>Advertising Campaigns</span>
          <span>E-commerce Stores</span>
          <span>Brand Marketing</span>
        </div>

      </section>


      {/* CTA Section */}
      <section className="creative-media-cta">

        <h3>Ready to elevate your brand visually?</h3>

        <p>
          Let’s create engaging visual content that captures attention
          and strengthens your brand presence.
        </p>

        <Link to="/contact" className="btn primary-btn">
          Get in Touch
        </Link>

      </section>

    </div>
  );
};

export default CreativeMedia;