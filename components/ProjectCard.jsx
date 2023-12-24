"use client";

import React from "react";

const ProjectCard = ({ imgAdd, title, projUrl }) => {

  const handleOpenUrl = (url) => {
    console.log("handle click")
    if (typeof window !== "undefined") {
      window.open(url, "_blank", "noreferrer");
      // Your client-side code that uses window goes here
    }
  };

  return (
    <div className="projCard">
      <div
        className="topCard"
        style={{
          borderRadius: "8px",
        }}
        onClick={() => handleOpenUrl(projUrl)}

      >
        <img
        alt={title}
          src={imgAdd}
          // onClick={handleOpenUrl(projUrl)}
          style={{
            width: "100%",
            height: "100%",

            borderRadius: "8px",
          }}
        />

      </div>
      <div className="button-container" style={{}}>
        <button className="cardBtn">{title}</button>
      </div>
    </div>
  );
};

export default ProjectCard;
