"use client";

import React from "react";
import Link from "next/link";
import { Code, Smartphone, Palette, Glasses } from "lucide-react";
import servicesData from "@/lib/services.json";

const iconMap = {
  code: Code,
  smartphone: Smartphone,
  palette: Palette,
  "vr-headset": Glasses,
};

const ServicesOverview = () => {
  const services = servicesData.services;

  return (
    <section className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Expertise
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer a range of services to help businesses succeed in the
            digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;

            return (
              <Link
                key={service.id}
                href={service.link}
                className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {service.technologies.slice(0, 3).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
