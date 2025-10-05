import React from "react";
import BannerView from "@/components/banner/BannerView";
import HeroSection from "@/components/home/HeroSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import AboutPreview from "@/components/home/AboutPreview";
import ServicesOverview from "@/components/home/ServicesOverview";
import LatestBlogs from "@/components/home/LatestBlogs";
import CTASection from "@/components/home/CTASection";
const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Keep your existing banner if you want, or replace with HeroSection */}
      <BannerView />

      {/* New Homepage Sections */}
      <HeroSection />
      <FeaturedProjects />
      <AboutPreview />
      <ServicesOverview />
      <LatestBlogs />
      <CTASection />
    </div>
  );
};

export default Home;
