"use client";

import React from "react";
import { ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectCard = ({ project, index }) => {
  const handleProjectClick = () => {
    if (project.hasWebsite && project.websiteUrl) {
      window.open(project.websiteUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
        index % 2 === 0 ? "lg:mt-0" : "lg:mt-12"
      }`}
    >
      {/* Project Image */}
      <div className="relative h-80 overflow-hidden">
        {/* Gradient Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-40 transition-opacity duration-300 z-10`}
        ></div>
        
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />

        {/* Status Badge */}
        <div className="absolute top-6 right-6 z-20">
          {project.status === "live" ? (
            <span className="px-4 py-2 text-sm font-semibold bg-green-500 text-white rounded-full shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
              Live
            </span>
          ) : (
            <span className="px-4 py-2 text-sm font-semibold bg-orange-500 text-white rounded-full shadow-lg flex items-center gap-2">
              <Clock className="w-4 h-4" />
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-8">
        {/* Title */}
        <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-lg mb-6 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-6">
          <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider">
            Built With
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {project.hasWebsite && project.websiteUrl ? (
          <Button
            onClick={handleProjectClick}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl transition-all duration-300 hover:scale-105"
          >
            Visit Project
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        ) : (
          <Button
            disabled
            className="w-full bg-gray-700 text-gray-400 py-6 text-lg rounded-xl cursor-not-allowed"
          >
            <Clock className="mr-2 h-5 w-5" />
            Coming Soon
          </Button>
        )}
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-3xl transition-all duration-300"></div>
    </div>
  );
};

export default ProjectCard;