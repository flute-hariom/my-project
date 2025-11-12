"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27]">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Where Innovation Meets Imagination
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                {" "}
                concepts to seamless digital realities
              </span>
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              We design world-class apps, games, and AR/VR experiences that
              redefine your world
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <Link href="/contact-us">
                <Button
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              {/* 
              <Link href="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-blue-600 hover:bg-blue-700 border-2 border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg transition-all duration-300"
                >
                  Explore Our Work
                </Button>
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
