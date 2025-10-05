"use client";

import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "@/lib/projects1.json";

const ProjectsGrid = () => {
  const projects = projectsData.projects;

  return (
    <section className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGrid;