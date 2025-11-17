"use client";

import React from "react";
import { Smartphone, Gamepad2, Glasses } from "lucide-react";

const projectsData = {
  mobileApps: [
    {
      id: "audio-streaming",
      title: "Audio Streaming Platform",
      description: "Personalized content, curated playlists, and smart recommendation engine.",
      icon: "smartphone"
    },
    {
      id: "job-matching",
      title: "Swipe-Based Job Matching Platform",
      description: "Fast and intuitive hiring flow with recruiter–candidate swipe interactions.",
      icon: "smartphone"
    },
    {
      id: "smart-parking",
      title: "Smart Parking Solution",
      description: "Real-time slot availability, booking, digital payments, and navigation support.",
      icon: "smartphone"
    }
  ],
  gameProjects: [
    {
      id: "mythology-game",
      title: "Mythology Action-Adventure Game",
      description: "Story-driven experience inspired by Indian cultural themes with combat mechanics.",
      icon: "gamepad"
    },
    {
      id: "puzzle-games",
      title: "Hyper-Casual Puzzle & Logic Games",
      description: "Lightweight gameplay built for quick sessions and global player engagement.",
      icon: "gamepad"
    },
    {
      id: "runner-arcade",
      title: "3D Runner Arcade Experience",
      description: "Optimized environments, smooth controls, and polished visual style.",
      icon: "gamepad"
    }
  ],
  arVrProjects: [
    {
      id: "metaverse-office",
      title: "Metaverse Virtual Office",
      description: "Immersive collaborative workspace with avatars and interactive meeting areas.",
      icon: "glasses"
    },
    {
      id: "digital-twin",
      title: "Convention Center Digital Twin",
      description: "Virtual tours, navigation mapping, and operational visualization.",
      icon: "glasses"
    },
    {
      id: "vr-training",
      title: "VR Industrial Training Simulator",
      description: "Safety procedures, workflow steps, and realistic training interactions.",
      icon: "glasses"
    },
    {
      id: "railway-maintenance",
      title: "VR Railway Maintenance Module",
      description: "Guided repair and inspection tasks in a fully immersive environment.",
      icon: "glasses"
    }
  ]
};

const ProjectCard = ({ project }) => {
  const getIcon = () => {
    switch (project.icon) {
      case "smartphone":
        return <Smartphone className="w-5 h-5 text-blue-400" />;
      case "gamepad":
        return <Gamepad2 className="w-5 h-5 text-blue-400" />;
      case "glasses":
        return <Glasses className="w-5 h-5 text-blue-400" />;
      default:
        return <Smartphone className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <div className="group relative bg-[#0f1629]/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:bg-[#141b33]/80">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 mt-0.5">
          {getIcon()}
        </div>
        <div>
          <h4 className="text-white font-semibold text-base mb-2 group-hover:text-blue-300 transition-colors">
            {project.title}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
};

const ProjectColumn = ({ title, projects, icon: Icon }) => (
  <div className="flex flex-col">
    <div className="text-center mb-8">
      <div className="inline-flex items-center justify-center gap-3 mb-3">
        {Icon && <Icon className="w-5 h-5 text-gray-400" />}
        <h3 className="text-white font-bold text-lg tracking-wide">
          {title}
        </h3>
      </div>
      <div className="h-0.5 w-16 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
    </div>
    
    <div className="space-y-4 flex-1">
      {projects.map((project) => (
        <ProjectCard 
          key={project.id} 
          project={project} 
        />
      ))}
    </div>
  </div>
);

const ProjectsShowcase = () => {
  return (
    <section className="relative min-h-screen bg-[#0a0e27] overflow-hidden py-20">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0d1230] to-[#0a0e27]" />
      
      {/* Grid pattern background */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Innovative solutions across mobile, gaming, and immersive technologies
          </p>
        </div>

        {/* Three Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <ProjectColumn 
            title="Mobile App Projects"
            projects={projectsData.mobileApps}
            icon={Smartphone}
          />
          
          <ProjectColumn 
            title="Game Projects"
            projects={projectsData.gameProjects}
            icon={Gamepad2}
          />
          
          <ProjectColumn 
            title="AR / VR / XR & Metaverse Projects"
            projects={projectsData.arVrProjects}
            icon={Glasses}
          />
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;