import React from "react";
import '../App.css';
import p1 from "../Images/p1.png";
import p2 from "../Images/p2.png";
import p3 from "../Images/p3.png"
import icon from "../Images/icon.png"

const OurHistory = () => {
  return (
    <div className="history-container">
         <div className="vertical-line"></div> 
         <div className="vertical-line2"></div> 
      <h2 className="history-title">Our History</h2>
      <p className="history-text">
      The Okinawan Shorinryu Karate Association of India was founded with the mission of preserving the legacy of Matsubayashi Shorin Ryu Karate as taught by O’Sensei Shoshin Nagamine. Under the leadership of Shihan M. Ravi, a 6th Dan Black Belt with over three decades of experience, the dojo has become a hub for traditional karate training in India.
 <br/><br/>
      <p className="history-subtext">
      With a focus on discipline, respect, and mastery, our dojo has guided countless students in their martial arts journey, ensuring that the rich heritage of Okinawan karate thrives for generations to come.   </p>
 
      </p>
      
      <h3 className="history-subheading">
        Learn More About How Our Founders Paved The Way
      </h3>
      
      <div className="founders-grid">
        {/* Founder 1 */}
        <div className="founder-card">
          <img src={p1} alt="Shihan M.Ravi" className="founder-image" />
          <p className="founder-role">Association Head</p>
          <h4 className="founder-name">Shihan M.Ravi</h4>
          <img src={icon} alt="" style={{height:"36px",width:"36px",position:"relative",left:"80px"}} />
        </div>

        {/* Founder 2 */}
        <div className="founder-card">
          <img src={p2} alt="Shoshin Nagamine" className="founder-image" />
          <p className="founder-role">Creator - O’Sensei</p>
          <h4 className="founder-name">Shoshin Nagamine</h4>
          <img src={icon} alt="" style={{height:"36px",width:"36px",position:"relative",left:"50px"}} />
        </div>

        {/* Founder 3 */}
        <div className="founder-card">
          <img src={p3} alt="Lara Chamberlain" className="founder-image" />
          <p className="founder-role" style={{position:"relative",right:"153px"}}>Founder</p>
          <h4 className="founder-name">Lara Chamberlain</h4>
          <img src={icon} alt="" style={{height:"36px",width:"36px",position:"relative",left:"60px"}} />
        </div>
      </div>
      
      {/* Decorative Line */}
      <div className="decorative-line"></div>
    </div>
  );
};

export default OurHistory;