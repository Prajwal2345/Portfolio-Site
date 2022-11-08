import React from "react";
import "./ContactImgStyles.scss";

const HomeImg = () => {
  return (
    <div className="contact">
      <div className="mask">
        <img
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
          alt=""
          className="intro-img"
        />
        <div className="content">
          <h1>Contact Me</h1>
          <p>Leave me a chat on whatsapp or do email.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeImg;
