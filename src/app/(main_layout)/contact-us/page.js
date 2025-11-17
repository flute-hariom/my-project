"use client";

import React from "react";
import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles,
  Rocket,
  ArrowRight,
  Gamepad2,
  Smartphone,
  Glasses,
  Zap,
  Globe,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactPage = () => {
  const services = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      label: "Apps",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Gamepad2 className="h-8 w-8" />,
      label: "Games",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Glasses className="h-8 w-8" />,
      label: "AR/VR",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: <Zap className="h-8 w-8" />,
      label: "Innovation",
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a0e27] relative overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[150px]"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-2 mb-8">
                <Sparkles className="h-4 w-4 text-purple-400 animate-pulse" />
                <span className="text-gray-300 text-sm font-medium">
                  Contact Us
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl mx-auto leading-relaxed">
                Have an idea worth experiencing? Let's bring it to life.
              </p>

              <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
                Whether it's an app, a game, or an immersive AR/VR experience —
                we'll help you design the future.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="mailto:info@moolmantra.co">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-purple-500/25"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>

                {/* <Link href="tel:+919818733819">
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-white/5 hover:bg-white/10 border-2 border-white/20 hover:border-white/40 text-white px-10 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <Rocket className="mr-2 h-5 w-5" />
                    Start My Project
                  </Button>
                </Link> */}
              </div>
            </div>
          </div>
        </section>

        {/* Services Icons */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center gap-3"
                >
                  <div
                    className={`p-5 bg-gradient-to-br ${service.color} rounded-2xl shadow-lg group-hover:scale-110 transition-all duration-300 group-hover:shadow-xl`}
                  >
                    <div className="text-white">{service.icon}</div>
                  </div>
                  <span className="text-gray-300 font-medium">
                    {service.label}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-center text-gray-500 mt-8 text-sm">
              Innovation Beyond Boundaries
            </p>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Email Card */}
              <Link href="mailto:info@moolmantra.co" className="group">
                <div className="bg-gradient-to-br from-blue-600/20 to-blue-800/20 backdrop-blur-xl rounded-3xl p-8 border border-blue-500/20 hover:border-blue-500/50 transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20">
                  <div className="text-center">
                    <div className="inline-flex p-5 bg-blue-500/20 rounded-2xl mb-6 group-hover:bg-blue-500/30 transition-colors">
                      <Mail className="h-10 w-10 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-gray-400 text-sm mb-2 uppercase tracking-wider">
                      Email Us
                    </h3>
                    <p className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      info@moolmantra.co
                    </p>
                    <p className="text-gray-500 text-sm">
                      We'll respond within 24 hours
                    </p>
                  </div>
                </div>
              </Link>

              {/* Phone Card */}
              <Link href="tel:+919818733819" className="group">
                <div className="bg-gradient-to-br from-purple-600/20 to-purple-800/20 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 hover:border-purple-500/50 transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-purple-500/20">
                  <div className="text-center">
                    <div className="inline-flex p-5 bg-purple-500/20 rounded-2xl mb-6 group-hover:bg-purple-500/30 transition-colors">
                      <Phone className="h-10 w-10 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-gray-400 text-sm mb-2 uppercase tracking-wider">
                      Call Us
                    </h3>
                    <p className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                      +91-9818733819
                    </p>
                    <p className="text-gray-500 text-sm">
                      Mon-Sat, 10AM - 7PM IST
                    </p>
                  </div>
                </div>
              </Link>

              {/* Address Card */}
              <div className="group">
                <div className="bg-gradient-to-br from-pink-600/20 to-pink-800/20 backdrop-blur-xl rounded-3xl p-8 border border-pink-500/20 hover:border-pink-500/50 transition-all duration-500 h-full group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-pink-500/20">
                  <div className="text-center">
                    <div className="inline-flex p-5 bg-pink-500/20 rounded-2xl mb-6 group-hover:bg-pink-500/30 transition-colors">
                      <MapPin className="h-10 w-10 text-pink-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-gray-400 text-sm mb-2 uppercase tracking-wider">
                      Visit Us
                    </h3>
                    <p className="text-lg font-bold text-white mb-1">
                      Plot No. 5/853 A, G-1
                    </p>
                    <p className="text-gray-300 mb-1">
                      Sector 5, Vaishali, Ghaziabad
                    </p>
                    <p className="text-gray-400 text-sm">U.P. – 201019</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-pink-600/10 backdrop-blur-xl rounded-3xl p-12 border border-white/10 text-center">
                <Globe className="h-12 w-12 text-purple-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Innovate?
                </h2>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                  Join us in creating the next generation of digital
                  experiences. Your vision, our expertise — together, we'll
                  shape the future.
                </p>
                <Link href="mailto:info@moolmantra.co">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-12 py-7 text-lg rounded-xl transition-all duration-300 hover:scale-105 shadow-xl"
                  >
                    Let's Innovate
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactPage;
