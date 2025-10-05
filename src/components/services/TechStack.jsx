"use client";

import React from "react";

const TechStack = () => {
  const techCategories = [
    {
      category: "Frontend",
      technologies: [
        "React",
        "Next.js",
        "Vue.js",
        "Angular",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      technologies: [
        "Node.js",
        "Express",
        "Python",
        "Django",
        "FastAPI",
        "PHP",
        "Laravel",
        "GraphQL",
      ],
    },
    {
      category: "Mobile",
      technologies: [
        "React Native",
        "Flutter",
        "Swift",
        "Kotlin",
        "Ionic",
        "Xamarin",
      ],
    },
    {
      category: "Database",
      technologies: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Redis",
        "Firebase",
        "DynamoDB",
      ],
    },
    {
      category: "Cloud & DevOps",
      technologies: [
        "AWS",
        "Azure",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Terraform",
      ],
    },
    {
      category: "AR/VR & Gaming",
      technologies: [
        "Unity",
        "Unreal Engine",
        "ARKit",
        "ARCore",
        "WebXR",
        "Three.js",
        "Blender",
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
            Leveraging cutting-edge technologies to build robust solutions
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