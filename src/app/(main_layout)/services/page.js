import React from "react";
import ServicesHero from "@/components/services/ServicesHero";
import ServicesGrid from "@/components/services/ServicesGrid";
import ProcessSection from "@/components/services/ProcessSection";
import TechStack from "@/components/services/TechStack";
import IndustriesServed from "@/components/services/IndustriesServed";
import ServicesCTA from "@/components/services/ServicesCTA";

export const metadata = {
  title: "Our Services - Digital Solutions & Development",
  description:
    "Comprehensive digital services including Web Development, Mobile App Development, UI/UX Design, and AR/VR Experiences.",
  keywords:
    "web development, app development, ui ux design, ar vr development, digital services",
};

const Service = () => {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <ServicesGrid />
      <ProcessSection />
      <TechStack />
      <IndustriesServed />
      <ServicesCTA />
    </div>
  );
};

export default Service;
