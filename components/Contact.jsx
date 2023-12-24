"use client";

import React, { useState } from "react";
import { MdOutlineMailOutline, MdOutlineMarkEmailRead } from "react-icons/md";

const Contact = () => {
  const [copied, setCopied] = useState("");

  const myEmail = "Yosef050468@gmail.com";

  const handleCopy = () => {
    setCopied("Yosef050468@gmail.com");
    navigator.clipboard.writeText("Yosef050468@gmail.com");
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div className="contact">
      <div className="leftContact">
        <div className="title">Let's talk.</div>
        <div className="thirdTitle">
          Communication is key, and I'm here for it.
          <br />
          Send me a message with your questions or ideas.
        </div>
        <div className="desc">Let's create something together 🤟</div>
        <div className="emailBtn" onClick={handleCopy}>
          {copied === myEmail ? (
            <MdOutlineMarkEmailRead />
          ) : (
            <MdOutlineMailOutline />
          )}
          <div className="copyEmailText">
            <p style={{ fontSize: 14 }}>Yosef050468@gmail.com </p>
          </div>
        </div>
      </div>
      <div className="rightContact">
        <h1 className="secondTitle">Send me a message 🚀</h1>
            <form className="emailForm">
              <input type="text" placeholder="Full Name" className="emailInput" />
              <input type="text" placeholder="Email Address" className="emailInput" />
              <input type="text" placeholder="Subject" className="emailInput" />
              <span>*Tell me more* </span>
              <textarea    required className="form_textarea"  placeholder="Your Message"/>
           
            <button type="submit" className="sendEmail">Send</button>
            </form>
      </div>
    </div>
  );
};

export default Contact;
