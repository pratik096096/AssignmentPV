import React from 'react';
import '../App.css';
import v1 from "../Images/Vector1.png";
import v2 from "../Images/Vector2.png"; 
import v3 from "../Images/Vector3.png";

const Philosophy = () => {
  const founders = [
    {
      name: "Respect and Humility ",
      role: "Reigi Saho",
      para: " Honoring tradition and building character through discipline.",
      image: v1, 
    },
    {
      name: "Harmony of Body and Mind",
      role: "Shin Gi Tai",
      para : "Focusing on balance, strength, and mental clarity through kata and mindful breathing",
      image: v2, 
    },
    {
      name: "Perseverance and Growth",
      role: "Kaizen",
      para: "Constantly striving for improvement, both in the dojo and in life.",
      image: v3, 
    },
  ];

  return (
    <div className='p-container'>
      <h2 className="history-title p-title">Our Philosophy</h2>
      <p className="history-text p-text">
      At the Okinawan Shorinryu Karate Association of India, we follow the path of karate-do, a journey where body, mind, and spirit become one. Guided by O’Sensei Shoshin Nagamine’s teachings, our practice embraces three pillars </p>
      
    <div className="f-grid">
      {founders.map((founder, index) => (
        <div className="f-card" key={index}>
          {/* <div className="vertical-lineF" style={{ left: 0 }}></div> */}
          <img src={founder.image} alt={founder.name} className="f-image" />
          <p className="f-role">{founder.role}</p>
          <p className="f-name">{founder.name}</p>
          <p className='f-para'>{founder.para}</p>
          {/* <div className="vertical-line" style={{ right: 0 }}></div>  */}
        </div>
      ))}
    </div>
    </div>
  );
};

export default Philosophy;
