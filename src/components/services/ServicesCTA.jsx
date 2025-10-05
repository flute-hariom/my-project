"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ServicesCTA = () => {
  return (
    <section className="py-20 bg-[#0a0e27] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Digital Presence?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's discuss your project requirements and create a customized
            solution that drives results
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="/contact-us">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-xl transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Schedule a Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;