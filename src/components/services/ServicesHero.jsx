"use client";

import React from "react";

const ServicesHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0a0e27] via-[#1a1f3a] to-[#0a0e27] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Services
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            We offer a range of services to help businesses succeed in the
            digital age.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;