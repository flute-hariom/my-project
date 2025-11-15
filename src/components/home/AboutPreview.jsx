"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutPreview = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-3xl blur-3xl"></div>
            <img
              src="/about.png"
              alt="About Our Company"
              className="relative rounded-3xl shadow-2xl w-full"
            />
          </div>

          {/* Right - Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold">
              About Our Company
            </h2>

            <p className="text-xl text-gray-300 leading-relaxed">
              Moolmantra Technologies Private Limited is a creative technology
              studio crafting immersive experiences through apps, games, and
              AR/VR. .
            </p>

            <p className="text-lg text-gray-400 leading-relaxed">
              We collaborate with startups, enterprises, and visionaries to turn
              concepts into products that inspire, engage, and perform.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 py-6">
              <div>
                <h3 className="text-4xl font-bold text-blue-400">15+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-purple-400">100+</h3>
                <p className="text-gray-400">Projects</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-pink-400">50+</h3>
                <p className="text-gray-400">Clients</p>
              </div>
            </div>

            <Link href="/about-us">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-lg transition-all duration-300 group"
              >
                Learn More
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
