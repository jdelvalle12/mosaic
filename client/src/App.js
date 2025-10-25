import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Marketplace from './pages/Marketplace';
import Portfolio from './pages/Portfolio';
import Careers from './pages/Careers';
import News from './pages/News';
import Contact from './pages/Contact';
import SignIn from './pages/Sign-In';
import ApiIntegrations from './pages/API-Integrations';
import EcommerceSolutions from './pages/E-Commerce-Solutions';
import HostingMaintenance from './pages/Hosting-Maintenance';
import MarketingSupport from './pages/Marketing-Support';
import MobileAppDevelopment from './pages/Mobile-App-Development';
import SecuritySolutions from './pages/Security-Solutions';
import BusinessSolutions from './pages/BusinessSolutions';
import TechStrategy from './pages/Tech-Strategy';
import UIUXDesign from './pages/UIUX-Design';
import WebDevelopment from './pages/Web-Development';

import './index.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar, Nav } from 'react-bootstrap';



function App() {
  useEffect(() => {
    AOS.init ({
      duration: 1000, // animation duration in ms
      once: true, // whether animation should happen only once - while scrolling down 
    });
  }, []);


return (

  <Router>
    <ScrollToTop />
      <div>
        <Header>
          <Logo/>
          <Navbar/>
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/services/hosting-maintenance" element={<HostingMaintenance />} />
          <Route path="/services/marketing-support" element={<MarketingSupport />} />
          <Route path="/services/api-integrations" element={<ApiIntegrations />} />
          <Route path="/services/e-commerce-solutions" element={<EcommerceSolutions />} />
          <Route path="/services/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/security-solutions" element={<SecuritySolutions />} />
          <Route path="/services/business-solutions" element={<BusinessSolutions />} />
          <Route path="/services/tech-strategy" element={<TechStrategy />} />
          <Route path="/services/uiux-design" element={<UIUXDesign />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;