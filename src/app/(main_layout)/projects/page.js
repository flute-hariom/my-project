import React from "react";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectsGrid from "@/components/projects/ProjectsGrid";
import ProjectsCTA from "@/components/projects/ProjectsCTA";

export const metadata = {
  title: "Our Projects - Innovative Digital Solutions",
  description:
    "Explore our portfolio of innovative projects including Listener App, Gaming Platform, and AR/VR Experiences.",
  keywords:
    "projects, portfolio, listener app, gaming, ar vr, digital products",
};

const Projects = () => {
  return (
    <div className="min-h-screen">
      <ProjectsHero />
      <ProjectsGrid />
      <ProjectsCTA />
    </div>
  );
};

export default Projects;
