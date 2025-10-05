"use client";

import React from "react";
import {
  Zap,
  Shield,
  Users,
  TrendingUp,
  Clock,
  Award,
} from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Zap,
      title: "Innovation First",
      description: "Cutting-edge technologies and forward-thinking solutions"
    },
    {
      icon: Shield,
      title: "Trusted & Secure",
      description: "Enterprise-grade security and data protection standards"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Skilled professionals with diverse industry experience"
    },
    {
      icon: TrendingUp,
      title: "Proven Results",
      description: "Track record of successful projects and satisfied clients"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "Commitment to deadlines without compromising quality"
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Rigorous testing and quality control processes"
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