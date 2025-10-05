"use client";

import React from "react";
import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const ProcessSection = () => {
  const processSteps = [
    {
      icon: Search,
      step: "01",
      title: "Discovery",
      description:
        "We start by understanding your business goals, target audience, and project requirements through detailed consultation and research.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Lightbulb,
      step: "02",
      title: "Design",
      description:
        "Our design team creates wireframes, prototypes, and visual designs that align with your brand and provide exceptional user experience.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Code2,
      step: "03",
      title: "Development",
      description:
        "Our developers bring designs to life using cutting-edge technologies, following best practices and agile methodologies.",
      color: "from-pink-500 to-orange-500",
    },
    {
      icon: Rocket,
      step: "04",
      title: "Launch",
      description:
        "We thoroughly test, deploy, and launch your project, followed by ongoing support and maintenance to ensure continued success.",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A proven methodology that delivers exceptional results
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Connecting Line (hidden on mobile) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-purple-500/50"></div>
              )}

              <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 hover:scale-105 h-full">
                {/* Step Number */}
                <div className="text-6xl font-bold text-blue-500/20 mb-4">
                  {step.step}
                </div>

                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                  >
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
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

export default ProcessSection;