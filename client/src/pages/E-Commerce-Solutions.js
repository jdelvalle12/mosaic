import React from 'react';
import '../styles/E-commerce-Solutions.css';
import Ecommerce from '../images/e-commerce.svg';

const EcommerceSolutions = () => {
  return (
    <div className="ecom-container">

      {/* HERO */}
      <section className="ecom-hero">
        <img src={Ecommerce} alt="E-commerce illustration" className="ecom-image" />
        <div className="ecom-hero-text">
          <h1 className="ecom-title">E-Commerce Solutions</h1>
          <p className="ecom-subtitle">
            Powerful, scalable online stores built to convert visitors into customers 
            and support long-term business growth.
          </p>
          <a href="/contact" className="ecom-btn primary-btn">Start Your Store</a>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="ecom-section">
        <h2 className="ecom-heading">Complete E-Commerce Development & Growth</h2>
        <p className="ecom-text">
          We design, develop, and optimize custom e-commerce platforms tailored 
          to your brand and business objectives. From storefront architecture 
          to revenue optimization, every solution is engineered for performance.
        </p>
      </section>

      {/* DEVELOPMENT FEATURES */}
     <section className="ecom-section">
  <div className="ecom-feature-layout">

    <div className="ecom-feature-title">
      <h2 className="ecom-heading">Development Features</h2>
      <p className="ecom-text">
        Our e-commerce platforms are engineered for performance,
        scalability, and seamless customer experiences.
      </p>
    </div>

    <ul className="ecom-list">
      <li>Custom online store architecture</li>
      <li>Secure checkout & payment integrations</li>
      <li>Mobile-first responsive design</li>
      <li>Inventory & order management systems</li>
      <li>API integrations & third-party tools</li>
      <li>Performance & speed optimization</li>
    </ul>

  </div>
</section>

      {/* GROWTH & REVENUE SECTION */}
     <section className="ecom-revenue">
  <div className="ecom-feature-layout reverse">

    <ul className="ecom-list">
      <li>Product page SEO optimization</li>
      <li>Conversion rate optimization (CRO)</li>
      <li>Email marketing automation</li>
      <li>Google Analytics & tracking setup</li>
      <li>Paid advertising integration</li>
    </ul>

    <div className="ecom-feature-title">
      <h2 className="ecom-heading">Built for Revenue & Growth</h2>
      <p className="ecom-text">
        An online store should do more than look good — it should generate revenue.
        We implement SEO strategies, conversion optimization, analytics tracking,
        and marketing integrations to ensure your store performs and scales.
      </p>
    </div>

  </div>
</section>

      {/* PROCESS */}
  <section className="ecom-process-section">
  <div className="ecom-process-title">
    <h2 className="ecom-heading">Our Process</h2>
    <p className="ecom-text">
      Our structured approach ensures your e-commerce platform is scalable, high-performing, and optimized for conversions.
    </p>
  </div>

  <ol className="ecom-list">
    <li>Strategy & goal-setting consultation</li>
    <li>UX/UI design tailored to your audience</li>
    <li>Full-stack development & integrations</li>
    <li>Testing, optimization & security checks</li>
    <li>Launch, analytics setup & ongoing support</li>
  </ol>
</section>

      {/* TECH STACK */}
      <section className="ecom-stack">
        <h2 className="ecom-heading">Technologies We Use</h2>
        <p className="ecom-text">
          We leverage modern frameworks and secure technologies to build 
          scalable, high-performance e-commerce platforms.
        </p>

        <div className="ecom-tech-icons">
          <div>
            <i className="devicon-react-original colored"></i>
            <span>React</span>
          </div>

          <div>
            <i className="devicon-nextjs-plain colored"></i>
            <span>Next.js</span>
          </div>

          <div>
            <i className="devicon-nodejs-plain colored"></i>
            <span>Node.js</span>
          </div>

          <div>
            <i className="devicon-mongodb-plain colored"></i>
            <span>MongoDB</span>
          </div>

          <div>
            <i className="devicon-mysql-plain colored"></i>
            <span>MySQL</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ecom-cta">
        <h2 className="ecom-heading">Ready to Build & Scale Your Online Store?</h2>
        <p className="ecom-text">
          Let’s create an e-commerce experience designed to grow your brand 
          and maximize your revenue.
        </p>
        <a href="/contact" className="ecom-btn secondary-btn">Get Started</a>
      </section>

    </div>
  );
};

export default EcommerceSolutions;