import "./FooterStyles.scss";
import React from "react";
import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={25} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Delhi, India</p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +91 9212913998
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk
                size={25}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              mail.prajwalkumar@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h4>About Me</h4>
          <p>
            I am currently 3rd year undergraduate student of Bachelors's in
            Computer Application(BCA) at Maharaja Surajmal Institute.
          </p>

          <div className="social">
            <h4>
              <a href="https://www.github.com/Prajwal2345">
                <FaGithub
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>

              <a href="https://www.linkedin.com/in/prajwal-610383206">
                <FaLinkedin
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />
              </a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
