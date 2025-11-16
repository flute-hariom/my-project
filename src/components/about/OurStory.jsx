"use client";

import React from "react";
import { Sparkles, Gamepad2, Building, TrendingUp, Star } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      icon: Sparkles,
      year: "2021",
      title: "The Spark",
      description:
        "Moolmantra Technologies was born with a simple belief: technology should feel human. With a small but passionate team, we began crafting intuitive apps and digital experiences.",
    },
    {
      icon: Gamepad2,
      year: "2022",
      title: "Enter the World of Games & XR",
      description:
        "We expanded into game development and AR/VR prototypes, setting the foundation for what would become our signature strength—interactive, immersive digital solutions.",
    },
    {
      icon: Building,
      year: "2023",
      title: "Building Digital Twins & Smart Experiences",
      description:
        "Our work grew beyond screens. We started creating Digital Twin environments, virtual walkthroughs, and 3D experiences for education, real estate, manufacturing, and enterprise training.",
    },
    {
      icon: TrendingUp,
      year: "2024",
      title: "Scaling Creativity",
      description:
        "We upgraded our pipelines with advanced 3D workflows, AI-assisted content creation, and real-time engines like Unity & Unreal. Projects became larger, partnerships became deeper, and our solutions became more immersive.",
    },
    {
      icon: Star,
      year: "2025",
      title: "Today",
      description:
        "Moolmantra stands as a multi-disciplinary tech studio, building apps, games, XR simulations, and digital twin platforms for next-generation businesses. Our story is still unfolding—and every product we build becomes a part of it.",
    },
  ];

  return (
    <section className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Story Header */}
        <div className="max-w-4xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Story
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            A journey shaped by curiosity, creativity, and the constant urge to
            build better.
          </p>
        </div>

        {/* Timeline/Milestones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8">
          {milestones.map((milestone, index) => (
            <div key={index} className="relative group">
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 hover:scale-105 h-full">
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <milestone.icon className="h-7 w-7 text-white" />
                  </div>
                </div>

                {/* Year */}
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {milestone.year}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-white mb-2">
                  {milestone.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed">
                  {milestone.description}
                </p>

                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurStory;
