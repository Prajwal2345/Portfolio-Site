import React from "react";
import "./AboutImgStyles.scss";
import pro1 from "../assets/I2.jpg";

const HomeImg = () => {
  return (
    <div className="contact">
      <div className="mask">
        <img src={pro1} alt="" className="intro-img" />
        <div className="content">
          <h1>About Me</h1>

          <div>
            <p>
              I am currently 3rd year undergraduate student of Bachelors's in
              Computer Application(BCA) at Maharaja Surajmal Institute.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImg;
