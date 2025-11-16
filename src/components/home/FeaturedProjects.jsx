"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import projectsData from "@/lib/projects.json";

const FeaturedProjects = () => {
  const projects = projectsData.projects;

  return (
    <section className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work Speaks
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore a glimpse of what we do:
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, 3).map((project, index) => (
            <Link
              key={project.id}
              href={project.link}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}
                ></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                {/* Tech Stack Pills */}
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div> */}

                {/* Learn More Link */}
                <div className="flex items-center text-blue-400 font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link href="/projects">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-6 text-lg rounded-lg transition-all duration-300"
            >
              See Our Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
