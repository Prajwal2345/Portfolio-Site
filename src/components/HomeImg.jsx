import React from "react";
import { Link } from "react-router-dom";
import "./HomeImgStyles.scss";

const HomeImg = () => {
  return (
    <div className="home">
      <div className="mask">
        <img
          src="https://images.unsplash.com/photo-1543966888-cbd9a4456f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80"
          alt=""
          className="intro-img"
        />
        <div className="content">
          <h1>Hi, I am Prajwal.</h1>

          <div>
            <Link to="/project" className="btn">
              Projects
            </Link>

            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeImg;
