import React from "react";
import "./ProjectImgStyles.scss";

const HomeImg = () => {
  return (
    <div className="project">
      <div className="mask">
        <img
          src="https://images.unsplash.com/photo-1614947746254-4fd8c6cb1a7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=767&q=80"
          alt=""
          className="intro-img"
        />
        <div className="content">
          <h1>Some of my recent work.</h1>
        </div>
      </div>
    </div>
  );
};

export default HomeImg;
