"use client";

import React from "react";
import {
  Sparkles,
  Box,
  Layers,
  Cpu,
  Palette,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Sparkles,
      title: "We Build Products That Feel Alive",
      description: "From smooth mobile apps to interactive games, we focus on experience quality—not just development speed."
    },
    {
      icon: Box,
      title: "Deep Expertise in XR & Digital Twins",
      description: "We craft AR/VR/XR experiences, 3D simulations, and digital replicas that help businesses train better, sell smarter, and communicate visually."
    },
    {
      icon: Layers,
      title: "End-to-End Development Partner",
      description: "Strategy, design, development, testing, deployment, and ongoing improvements—we handle everything so you stay focused on growth."
    },
    {
      icon: Cpu,
      title: "Future-Ready Technology Stack",
      description: "Unity, Unreal, Flutter, React Native, 3D engines, real-time cloud systems—we pick the right tools for performance and scalability."
    },
    {
      icon: Palette,
      title: "We Think Like Artists & Build Like Engineers",
      description: "Our unique approach combines creativity, storytelling, and technical precision, resulting in products that users love and businesses trust."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We combine expertise, innovation, and dedication to deliver
            exceptional results
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="mb-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Number Badge */}
              {/* <div className="absolute top-6 right-6 text-2xl font-bold text-blue-500/30">
                0{index + 1}
              </div> */}

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed">
                {reason.description}
              </p>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;