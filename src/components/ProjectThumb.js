import React from "react";

function ProjectThumb({ title, desc }) {
  return (
    <div className="project">
      <div className="desc-bg"></div>
      <div className="desc-cont">
        <div className="name">{title}</div>
        <div className="desc">{desc}</div>
      </div>
      <div className="img-fade"></div>
      <div className="img-cont"></div>
    </div>
  );
}

export default ProjectThumb;
