"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 bg-[#0a0e27] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Content */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Next Project?
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Let's collaborate to build innovative digital solutions that drive
            your business forward
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Link href="/contact-us">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link href="tel:+1234567890">
              <Button
                size="lg"
                variant="outline"
                className="bg-blue-600 hover:bg-blue-700 border-2 border-white/30 text-white hover:bg-white/10 px-10 py-7 text-lg rounded-xl transition-all duration-300"
              >
                <Phone className="mr-2 h-5 w-5 " />
                Call Us Now
              </Button>
            </Link>
          </div>

          {/* Quick Contact Info */}
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <Link href="mailto:info@moolmantra.co" className="group">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Mail className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <p className="text-gray-400 text-sm mb-1">Email us at</p>
                <p className="text-white font-semibold">info@moolmantra.co</p>
              </div>
            </Link>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <Phone className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <p className="text-gray-400 text-sm mb-1">Call us at</p>
              <p className="text-white font-semibold">+91-9818733819</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
