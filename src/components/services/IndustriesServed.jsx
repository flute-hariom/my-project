"use client";

import React from "react";
import {
  Building2,
  ShoppingCart,
  GraduationCap,
  Stethoscope,
  Landmark,
  Plane,
  Smartphone as SmartphoneIcon,
  TrendingUp,
} from "lucide-react";

const IndustriesServed = () => {
  const industries = [
    {
      icon: Building2,
      name: "Real Estate",
    },
    {
      icon: ShoppingCart,
      name: "E-commerce",
    },
    {
      icon: GraduationCap,
      name: "Education",
    },
    {
      icon: Stethoscope,
      name: "Healthcare",
    },
    {
      icon: Landmark,
      name: "Finance",
    },
    {
      icon: Plane,
      name: "Travel & Tourism",
    },
    {
      icon: SmartphoneIcon,
      name: "Technology",
    },
    {
      icon: TrendingUp,
      name: "Startups",
    },
  ];

  return (
    <section className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Delivering innovative solutions across diverse sectors
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 hover:scale-105 text-center"
            >
              {/* Icon */}
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <industry.icon className="h-7 w-7 text-white" />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {industry.name}
              </h3>

              {/* Border Effect */}
              <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;