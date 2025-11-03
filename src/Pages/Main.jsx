// src/Pages/Main.jsx
import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import FAQ from './FAQ.jsx';
import Pricing from './Pricing.jsx';
import TrustedCreators from './TrustedCreators.jsx';
import ExpertsTalk from './ExpertsTalk.jsx';
import UncoverInsights from './UncoverInsights.jsx';
import GetStart from './GetStrat.jsx';
import HeroSection from './HeroSection.jsx';

const Main = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ExpertsTalk />
      <UncoverInsights />
      <TrustedCreators />
      <GetStart />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
};

export default Main;
