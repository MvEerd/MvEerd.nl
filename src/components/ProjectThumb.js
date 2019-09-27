import React from "react";

function ProjectThumb({ title, desc }) {
  return (
    <div className="project">
      <div className="name">{title}</div>
      <div className="desc">{desc}</div>
    </div>
  );
}

export default ProjectThumb;
