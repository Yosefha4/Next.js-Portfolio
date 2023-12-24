import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 className="title" style={{textAlign:'center'}}>About My Self</h1>

      <div className="text_container">
        <div className="aboutText">My name is Yosef. A passionate software engineer with a bachelor's degree in Software Engineering.</div>
        <div className="aboutText"> In the dynamic world of full-stack development, I specialize in creating  seamless & fully-responsive websites using Python, JavaScript, React, Node.js, CSS, and HTML.</div>
        <div className="aboutText">I love solving problems creatively and working collaboratively. Whether it's coding or enjoying sports and the company of dogs, I find joy in every moment.</div>

        {/* <div className="aboutText">lorem2</div>
        <div className="aboutText">lorem3</div> */}
      </div>
    </div>
  );
};

export default About;
