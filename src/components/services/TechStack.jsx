"use client";

import React from "react";

const TechStack = () => {
 const techCategories = [
  {
    category: "Frontend Technologies",
    technologies: [
      "React.js",
      "Next.js",
      "HTML5 / CSS3",
      "JavaScript / TypeScript",
      "Tailwind CSS",
      "Redux / Zustand",
      "Three.js (3D Web & XR)",
    ],
  },
  {
    category: "Backend Technologies",
    technologies: [
      "Node.js",
      "Python (Django / FastAPI)",
      "Java (Spring Boot)",
      "PHP (Laravel)",
      "Express.js",
      "REST & GraphQL APIs",
      "WebSockets / MQTT (Real-time & IoT)",
    ],
  },
  {
    category: "Mobile App Development",
    technologies: [
      "Flutter",
      "React Native",
      "Swift (iOS)",
      "Kotlin (Android)",
    ],
  },
  {
    category: "Game Development",
    technologies: [
      "Unity",
      "Unreal Engine",
      "C# (Unity scripting)",
      "C++ (Unreal scripting)",
    ],
  },
  {
    category: "AR / VR / XR & Digital Twin",
    technologies: [
      // AR Technologies
      "ARCore",
      "ARKit",
      "Vuforia",
      "WebAR (8thWall, Zappar)",

      // VR / XR
      "Unity XR",
      "Unreal XR",
      "OpenXR",
      "Oculus SDK",
      "HTC Vive",
      "Meta Quest",

      // Digital Twin
      "Unity Reflect",
      "Three.js",
      "CesiumJS",
      "IoT Integrations (MQTT, WebSockets)",
    ],
  },
  {
    category: "Databases",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Firebase / Firestore",
      "Redis",
      "SQLite",
    ],
  },
  {
    category: "Cloud, DevOps & Infrastructure",
    technologies: [
      "AWS",
      "Google Cloud",
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "GitHub Actions",
      "Firebase Cloud",
      "CDNs & Load Balancers",
    ],
  },
  {
    category: "UI / UX & Creative Tools",
    technologies: [
      "Figma",
      "Adobe XD",
      "Photoshop",
      "Illustrator",
      "After Effects",
      "Blender",
      "Substance Painter",
      "Lottie",
    ],
  },
];


  return (
    <section className="py-20 bg-gradient-to-br from-[#0a0e27] to-[#1a1f3a]">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Technology Stack
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our engineering stack covers end-to-end product development — from
            frontend and backend to immersive XR, game engines, and cloud
            infrastructure.
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 hover:from-blue-900/30 hover:to-purple-900/30 transition-all duration-300"
            >
              {/* Category Title */}
              <h3 className="text-2xl font-bold text-white mb-6 pb-4 border-b border-gray-700">
                {category.category}
              </h3>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {category.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-4 py-2 text-sm bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
