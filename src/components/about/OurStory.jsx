"use client";

import React from "react";
import { Rocket, Users, Target, Award } from "lucide-react";

const OurStory = () => {
  const milestones = [
    {
      icon: Rocket,
      year: "2010",
      title: "Company Founded",
      description: "Started our journey with a vision to innovate digital solutions"
    },
    {
      icon: Users,
      year: "2015",
      title: "Team Expansion",
      description: "Grew to 50+ talented professionals across multiple domains"
    },
    {
      icon: Target,
      year: "2020",
      title: "Global Reach",
      description: "Expanded services to international markets and clients"
    },
    {
      icon: Award,
      year: "2025",
      title: "Industry Leader",
      description: "Recognized as a leading innovator in digital technologies"
    }
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
            Founded in 2010, we have been at the forefront of digital innovation
            for over a decade. Our team of experts are passionate about creating
            cutting-edge solutions that drive results for our clients.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            From humble beginnings as a small startup to becoming a recognized
            leader in Web, AR/VR, Gaming, and Real-time Communication platforms,
            our journey has been marked by continuous innovation, dedication to
            excellence, and an unwavering commitment to our clients' success.
          </p>
        </div>

        {/* Timeline/Milestones */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="relative group"
            >
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