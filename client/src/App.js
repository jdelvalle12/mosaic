import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';
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
import Hosting from './pages/Hosting';
import MarketingSupport from './pages/Marketing-Support';
import MobileAppDevelopment from './pages/Mobile-App-Development';
import SecuritySolutions from './pages/Security-Solutions';
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
          <Route path="/hosting" element={<Hosting />} />
          <Route path="/marketing-support" element={<MarketingSupport />} />
          <Route path="/mobile-app-development" element={<MobileAppDevelopment />} />
          <Route path="/security-solutions" element={<SecuritySolutions />} />
          <Route path="/tech-strategy" element={<TechStrategy />} />
          <Route path="/uiux-design" element={<UIUXDesign />} />
          <Route path="/web-development" element={<WebDevelopment />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;