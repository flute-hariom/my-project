"use client";

import React from "react";

const AboutHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="text-white space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              About Us
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              We are a digital innovation company specializing in Web, AR/VR,
              Gaming, and Real-time Communication platforms
            </p>

            <div className="pt-4">
              <p className="text-lg text-gray-400 leading-relaxed">
                Our mission is to transform ideas into reality by leveraging
                cutting-edge technologies and innovative solutions that drive
                business growth and user engagement.
              </p>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/images/about/about-hero.jpg"
                alt="About Our Company"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;