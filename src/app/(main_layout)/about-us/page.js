import React from "react";

import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import MissionVision from "@/components/about/MissionVision";
import CompanyStats from "@/components/about/CompanyStats";
import WhyChooseUs from "@/components/about/WhyChooseUs";
// import TeamSection from "@/components/about/TeamSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <OurStory />
      <MissionVision />
      <CompanyStats />
      <WhyChooseUs />
      {/* <TeamSection /> */}
      {/* <TeamImage /> */}
    </div>
  );
};

export default About;
