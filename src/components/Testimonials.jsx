import React from "react";
import "../App.css";
import testimoni from "../Images/testimoni.png";
import slider from "../Images/slider.png";
import jpnfont from "../Images/jpnfont.png";
// import curly from "../Images/curly.png";

const Testimonials = () => {
  return (
    <div className="tesi-container">
       
      <div className="testi-data">
        <p className="testi-head">
          Throughout Our Journey, We Have Helped Countless People
        </p>
     
        <p className="testi-subhead">Transform Their Lives</p>
        <p className="testi-text">
          Here are some kind words from a few of them
        </p>
      </div>
      <div className="circle-testi"></div>
      <center>
        <div className="testi-data2">
          <div className="testi-para">
          {/* <img src={curly} alt="" /> */}
            <p>
              <span style={{color:"red",fontSize:"50px"}}>"</span>My son was always full of energy, Almost too much! Keeping him
              focused was a challenge, and he needed something that taught him
              discipline in a positive way. Since joining the dojo, he’s
              transformed. He’s not only more focused in school, but he’s also
              respectful and more considerate of others. Karate has given him an
              outlet for his energy and a purpose to strive toward. Watching him
              practice with dedication is a joy, and I’m grateful for the sense
              of responsibility and respect this dojo has instilled in him. It’s
              been a blessing for our family."
            </p>
            <div className="verticalLine-testi"></div>
            <p className="sec-text">Anjali, Proud Mother</p>
          </div>
          <div className="testi-image">
            <img src={testimoni} alt="" />
          </div>
        </div>
        
      </center>
      <img src={slider} alt="" style={{position:"relative",bottom:"130px"}} />
      <img src={jpnfont} alt="" style={{position:"relative",left:"500px",bottom:"100px"}} />
    </div>
  );
};

export default Testimonials;
