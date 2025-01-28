import React from "react";
// import "./Header.css";
import logo from "../Images/logo1.png"
import '../App.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <img src={logo} alt="Logo" className="logo" />

        {/* Navigation */}
        <nav className="nav">
          <a href="/" className="nav-link">Home</a>
          <a href="/programmes" className="nav-link">Programmes</a>
          <a href="/about" className="nav-link active">About MTKA</a>
          <a href="/gallery" className="nav-link">Gallery</a>
        </nav>

        {/* Contact Button */}
        <button className="contact-btn">Contact Us</button>
      </div>
    </header>
  );
}

export default Header;
