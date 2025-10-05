"use client";

import React from "react";
import { Target, Eye, Heart } from "lucide-react";

const MissionVision = () => {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To empower businesses with innovative digital solutions that transform ideas into reality, driving growth and creating exceptional user experiences through cutting-edge technology.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To be the global leader in digital innovation, recognized for excellence in Web, AR/VR, Gaming, and Real-time Communication technologies, shaping the future of digital experiences.",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Heart,
      title: "Our Values",
      description:
        "Innovation, Excellence, Integrity, Collaboration, and Customer Success. We believe in pushing boundaries, delivering quality, and building lasting relationships with our clients.",
      gradient: "from-pink-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our mission, vision, and core values guide everything we do
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${value.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-4">
                {value.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {value.description}
              </p>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;