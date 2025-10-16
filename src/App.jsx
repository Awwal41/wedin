import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import Registry from './pages/Registry';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cream">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/registry" element={<Registry />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
