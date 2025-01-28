import React from "react";
import "../App.css";
import fimg from "../Images/fimg.png";
import jpnfont2 from "../Images/jpnfont2.png";

function Footer() {
  return (
    <div className="f-container">
      <div className="f-data">
        <p className="f-title">Get Started <span style={{color:"#D32F2F"}}>Today</span></p>
        <p className="f-title2">Free Trial Class Available</p>
        
        <p className="f-para" style={{position:"relative",right:"10px"}}>
          Take the first step towards equipping your child with the tools to
          face life’s. 
          <br/><p style={{position:"relative",right:"24px"}}>Register for a free trial class and see the
          transformation for yourself.</p>
        </p>
     
        
        <button className="f-btn">Browse Our Classes</button>
        <img src={jpnfont2} alt="" style={{position:"relative",left:"500px",bottom:"250px"}}/>
        <div>
        <img className="f-img" src={fimg} alt=""  />
        </div>
       
      </div>
    </div>
  );
}

export default Footer;
