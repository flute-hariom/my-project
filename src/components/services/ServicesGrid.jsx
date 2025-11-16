"use client";

import React from "react";
import ServiceCard from "./ServiceCard";
import { Code, Smartphone, Palette, Glasses } from "lucide-react";

const ServicesGrid = () => {
  const services = [
    {
      id: "app-development",
      icon: Smartphone,
      title: "App Development",
      description: `We create mobile applications that balance smart engineering with elegant design.
 Every app we build is smooth, stable, and crafted to deliver a delightful user experience.`,
      features: [
        "Android, iOS & cross-platform apps",
        "MVP development for startups",
        "Enterprise systems & workflow automation",
        "Real-time features: chat, maps, tracking, payments",
        "Backend, API & cloud infrastructure",
        "App modernization & redesign",
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
      id: "web-development",
      icon: Code,
      title: "Web Development",
      description: `We build games that merge creativity, strategy, and technology.
 Every game is crafted with attention to gameplay feel, smooth mechanics, and stunning visuals.`,
      features: [
        "2D / 3D Mobile Games",
        "Hyper-casual & arcade games",
        "Simulation & training games",
        "Multiplayer experiences",
        "WebGL games",
        "Gamification systems",
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
      id: "arvr-experiences",
      icon: Glasses,
      title: "AR/VR/XR & Digital Twin Solutions",
      description: `We create immersive digital worlds that transform how businesses train, visualize, and operate.
 Our AR, VR, XR, and digital twin solutions help industries adopt the future today`,
      features: [
        "AR apps & filters",
        "VR training modules",
        "XR product visualization",
        "Digital Twin environments",
        "Virtual tours & 3D walkthroughs",
        "Metaverse experiences",
        "Real-time 3D simulations",
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

    {
      id: "ui-ux-design",
      icon: Palette,
      title: "UI/UX Design",
      description:
        "We design experiences that look beautiful, work smoothly, and guide users effortlessly.",
      features: [
        "UI/UX for mobile & web",
        "Game UI/UX",
        "Enterprise dashboard design",
        "User research & flow mapping",
        "Wireframes, prototypes & design systems",
        "Branding & visual identity",
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
