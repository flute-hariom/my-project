"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import { Code, Smartphone, Palette, Glasses } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      id: "web-development",
      icon: Code,
      title: "Web Development",
      description:
        "Building responsive and scalable websites and web applications",
      features: [
        "Custom website design and development",
        "Responsive and mobile-first design",
        "E-commerce solutions",
        "Progressive Web Apps (PWA)",
        "API integration and development",
        "Performance optimization",
      ],
      technologies: [
        "Next.js",
        "React",
        "Node.js",
        "TypeScript",
        "Tailwind CSS",
        "MongoDB",
        "PostgreSQL",
      ],
    },
    {
      id: "app-development",
      icon: Smartphone,
      title: "App Development",
      description:
        "Creating user-friendly mobile applications for iOS and Android",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development",
        "App UI/UX design",
        "App Store optimization",
        "Push notifications",
        "Offline functionality",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Firebase",
        "Expo",
      ],
    },
    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      description: "Designing intuitive and engaging user interfaces",
      features: [
        "User research and analysis",
        "Wireframing and prototyping",
        "Visual design and branding",
        "Usability testing",
        "Design systems",
        "Accessibility compliance",
      ],
      technologies: [
        "Figma",
        "Adobe XD",
        "Sketch",
        "InVision",
        "Miro",
        "Principle",
      ],
    },
    {
      id: "arvr-experiences",
      icon: Glasses,
      title: "AR/VR Experiences",
      description:
        "Developing immersive augmented and virtual reality solutions",
      features: [
        "Virtual reality applications",
        "Augmented reality experiences",
        "360° video experiences",
        "3D modeling and animation",
        "Interactive simulations",
        "Cross-platform VR/AR",
      ],
      technologies: [
        "Unity",
        "Unreal Engine",
        "ARKit",
        "ARCore",
        "WebXR",
        "Oculus SDK",
        "Vuforia",
      ],
    },
  ];

  return (
    <section className="py-20 bg-[#0a0e27]">
      <div className="container mx-auto px-4">
        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;