import React from "react";

function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;
