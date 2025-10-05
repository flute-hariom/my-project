"use client";

import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ServiceCard = ({ service, index }) => {
  return (
    <div
      className={`group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-10 hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        index % 2 === 0 ? "lg:mt-8" : "lg:mb-8"
      }`}
    >
      {/* Icon */}
      <div className="mb-8">
        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
          <service.icon className="h-10 w-10 text-white" />
        </div>
      </div>

      {/* Title */}
      <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-lg mb-6 leading-relaxed">
        {service.description}
      </p>

      {/* Features List */}
      {service.features && (
        <ul className="space-y-3 mb-8">
          {service.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300">
              <Check className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      {/* Technologies */}
      <div className="mb-8">
        <p className="text-sm text-gray-500 mb-3 font-semibold uppercase tracking-wider">
          Technologies We Use
        </p>
        <div className="flex flex-wrap gap-2">
          {service.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1.5 text-sm bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <Link href="/contact-us">
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-6 text-lg rounded-xl transition-all duration-300 group-hover:shadow-lg"
        >
          Get Started
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </Link>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-3xl transition-all duration-300"></div>
    </div>
  );
};

export default ServiceCard;