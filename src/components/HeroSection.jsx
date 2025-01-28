import React from "react";
import '../App.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h2 className="hero-title">About Us</h2>
          <h1 className="hero-heading">
            Welcome To Okinawa Matsubayashi Shorin Ryu Karate-Do Kubodo
            Association India
          </h1>
          <p className="hero-text">
            Step into our dojo to train in the purest form of Matsubayashi Shorin Ryu karate. 
            Our programs guide you to build strength, focus, and self-discipline while 
            embracing the deep cultural heritage of Okinawan martial arts.
          </p>
          <button className="hero-btn">Browse our Programmes</button>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
