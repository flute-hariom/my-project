"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProjectsCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <Lightbulb className="h-10 w-10 text-white" />
            </div>
          </div>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Have a Project in Mind?
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge
            technology and innovative solutions
          </p>

          {/* CTA Button */}
          <Link href="/contact-us">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCTA;