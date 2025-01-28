import React from 'react';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection ';
import OurHistory from './components/OurHistory';
import Philosophy from './components/Philosophy';
import Testimonials from './components/Testimonials';
import Thought from './components/Thought';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header/>
        <HeroSection/>
        <AboutSection/>
        <OurHistory/>
        <Philosophy/>
        <Testimonials/>
        <Thought/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
