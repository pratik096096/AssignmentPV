import React from "react";
import '../App.css';
import imgage from "../Images/imgimg.png"
import logo2 from "../Images/logo2.png";
// import line from "../Images/LINES.png"

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h2 style={{fontSize:"28px"}}>
          <span>Learn the</span> <strong>Way of the Warrior</strong>
        </h2>
        <h3 style={{paddingBottom:"32px"}}>Shape Your Body and Mind</h3>
        <p style={{fontSize:"16px",fontFamily:"Nunito",fontWeight:"600"}}>
          Welcome to the Okinawan Shorinryu Karate Association of India. We are
          dedicated to preserving and teaching the traditional art of Matsubayashi Shorin Ryu Karate, 
          as founded by O’Sensei Shoshin Nagamine. Under the guidance of Shihan M. Ravi, 
          a 6th Dan Black Belt with over 30 years of experience, our dojo focuses on 
          developing concentration, discipline, and physical strength through rigorous training.
        </p>
        <br/>
        <p style={{fontSize:"16px",fontFamily:"Nunito",fontWeight:"600"}}>
          Join us to not only master the physical techniques of karate but also cultivate 
          the mindset and discipline essential for lifelong growth and self-improvement.
        </p>
      </div>
        <img src={logo2} alt="japanseselogo" style={{width:"128px",height:"483px",position:"relative",left:"45px"}} />
      <div className="about-images">
        <div className="red-circle"></div> 
        <img src={imgage} alt="Karate Master 1" className="image1" />
       
        
      </div>
      
    </section>
  );
};

export default AboutSection;
