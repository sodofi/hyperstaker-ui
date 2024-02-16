import React from "react";
import ProjectItem from "../../components/projectItem";
import projects from "../../projectData";
import metadata from "../../metaData";

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="flex flex-row">
        {projects &&
          projects.map((project, key) => (
            <ProjectItem
              key={key}
              project={project}
              metadata={metadata}
              isLoading={false}
            />
          ))}
      </div>
    </div>
  );
}
