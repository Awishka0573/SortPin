import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Pricing from './Pages/Pricing.jsx';
import UncoverInsights from './Pages/UncoverInsights.jsx';
import PinterestDownloader from './Pages/PinterestDownloader.jsx';
import ExpertsTalk from './Pages/ExpertsTalk.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pricing" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grow pt-20">
              <Pricing />
            </div>
            <Footer />
          </div>
        } />
        <Route path="/features" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grow pt-20">
              <UncoverInsights showButtons={true} />
            </div>
            <Footer />
          </div>
        } />
        <Route path="/downloader" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grow pt-20">
              <PinterestDownloader />
            </div>
            <Footer />
          </div>
        } />
        <Route path="/experts" element={
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="grow pt-20">
              <ExpertsTalk />
            </div>
            <Footer />
          </div>
        } />
      </Routes>
    </Router>
  );
}

export default App;
