import React from "react";
import "../App.css";
import box from "../Images/boxbox.png";

function Thought() {
  return (
    
    <div className="thought-container">
        <div className="verti-t"></div>
        
      <div>
        <p className="t-title">What Sets Us Apart</p>
        <p>
          <img src={box} alt="" />
        </p>

        <p className="t-para">
          At the Okinawan Shorinryu Karate Association of India, we are
          committed to preserving the true essence of Matsubayashi Shorin Ryu,
          as passed down through generations of Okinawan masters. What sets us
          apart is our devotion to authentic training every movement, kata, and
          breath technique remains faithful to its origins.
        </p>
        <br/>
        <p className="t-para2">
          We offer a rare opportunity to experience traditional weapons practice
          and deep philosophical teachings that cultivate not just physical
          prowess but also a resilient spirit, disciplined mind, and respectful
          heart. Here, karate is a path of lifelong self-cultivation and
          mastery.
        </p>
        <div className="verti-t2"></div>
      </div>
    </div>
  );
}

export default Thought;
