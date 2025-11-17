// "use client";

// import React from "react";
// import Link from "next/link";
// import { Code, Smartphone, Palette, Glasses } from "lucide-react";
// import servicesData from "@/lib/services.json";

// const iconMap = {
//   code: Code,
//   smartphone: Smartphone,
//   palette: Palette,
//   "vr-headset": Glasses,
// };

// const ServicesOverview = () => {
//   const services = servicesData.services;

//   return (
//     <section className="py-20 bg-[#0a0e27]">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Our Expertise
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto">
//             We offer a range of services to help businesses succeed in the
//             digital age
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {services.map((service, index) => {
//             const IconComponent = iconMap[service.icon] || Code;

//             return (
//               <Link
//                 key={service.id}
//                 href={service.link}
//                 className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 hover:from-blue-900/50 hover:to-purple-900/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
//               >
//                 {/* Icon */}
//                 <div className="mb-6">
//                   <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
//                     <IconComponent className="h-8 w-8 text-white" />
//                   </div>
//                 </div>

//                 {/* Content */}
//                 <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
//                   {service.title}
//                 </h3>

//                 <p className="text-gray-400 mb-4 leading-relaxed">
//                   {service.description}
//                 </p>

//                 {/* Tech Stack */}
//                 {/* <div className="flex flex-wrap gap-2">
//                   {service.technologies.slice(0, 3).map((tech, i) => (
//                     <span
//                       key={i}
//                       className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div> */}

//                 {/* Hover Effect Overlay */}
//                 <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300"></div>
//               </Link>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesOverview;

"use client";

import React from "react";
import Link from "next/link";
import { Smartphone, Gamepad2, Glasses, Building2, Check } from "lucide-react";

const servicesData = {
  services: [
    {
      id: "app-dev",
      title: "App Development",
      description: "",
      icon: "smartphone",
      features: [
        "Scalable mobile apps for businesses and startups",
        "E-commerce platforms with secure payments",
        "On-demand service apps with real-time tracking",
        "Learning and training apps with dashboards",
        "Healthcare and wellness apps with custom integrations",
      ],
      link: "/services#app-development",
      accentColor: "from-blue-500 to-cyan-500",
    },
    {
      id: "game-dev",
      title: "Game Development",
      description: "",
      icon: "gamepad",
      features: [
        "Hyper-casual and casual mobile games",
        "Multiplayer and online PvP game systems",
        "3D character design, animations, and levels",
        "Reward systems, leaderboards, and in-app economy",
        "Unity & Unreal Engine gameplay mechanics",
      ],
      link: "/services#game-development",
      accentColor: "from-purple-500 to-pink-500",
    },
    {
      id: "ar-vr-xr",
      title: "AR/VR/XR Solutions",
      description: "",
      icon: "glasses",
      features: [
        "AR product visualizers",
        "VR training simulations & safety modules",
        "Mixed reality walkthroughs & interactive 3D scenes",
        "Virtual showrooms for real estate, retail & automotive",
        "Immersive storytelling and brand experiences",
      ],
      link: "/services#ar-vr-xr",
      accentColor: "from-blue-500 to-indigo-500",
    },
    {
      id: "digital-twin",
      title: "Digital Twin & Metaverse",
      description: "",
      icon: "building",
      features: [
        "Real-time digital twins for buildings & campuses",
        "3D virtual environments for events & collaboration",
        "Interactive spaces for training and remote engagement",
        "Spatial mapping and sensor-based real-time updates",
        "Multi-platform metaverse environments",
      ],
      link: "/services#digital-twin",
      accentColor: "from-purple-500 to-violet-500",
    },
  ],
};

const iconMap = {
  smartphone: Smartphone,
  gamepad: Gamepad2,
  glasses: Glasses,
  building: Building2,
};

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Smartphone;

  return (
    <Link href={service.link} className="group relative block">
      <div className="bg-[#0f1629]/80 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 hover:bg-[#141b33]/80 h-full">
        {/* Header with Icon and Title */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-br ${service.accentColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
          >
            <IconComponent className="h-5 w-5 text-white" />
          </div>
          <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
            {service.title}
          </h3>
        </div>

        {/* Main Description */}

        {/* Features List with Checkmarks */}
        <div className="space-y-3 pt-3">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3 ">
              <div className="flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-blue-400" />
              </div>
              <span className="text-gray-400  leading-relaxed">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

const ServicesOverview = () => {
  const services = servicesData.services;

  return (
    <section className="py-20 bg-[#0a0e27] relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e27] via-[#0d1230] to-[#0a0e27]" />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px)
        `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Our </span>
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We offer a range of services to help businesses succeed in the
            digital age
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
