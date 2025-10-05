"use client";

import React from "react";
import { Building2, Users, Briefcase, Globe } from "lucide-react";

const CompanyStats = () => {
  const stats = [
    {
      icon: Building2,
      number: "15+",
      label: "Years Experience",
      description: "In digital innovation"
    },
    {
      icon: Briefcase,
      number: "200+",
      label: "Projects Delivered",
      description: "Across various industries"
    },
    {
      icon: Users,
      number: "50+",
      label: "Team Members",
      description: "Expert professionals"
    },
    {
      icon: Globe,
      number: "30+",
      label: "Countries Served",
      description: "Global presence"
    }
  ];

  return (
    <section className="py-20 bg-[#0a0e27] relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
            >
              <div className="inline-block mb-4">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="h-10 w-10 text-white" />
                </div>
              </div>
              
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-1">
                {stat.label}
              </h3>
              
              <p className="text-gray-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyStats;