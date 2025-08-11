import AboutUs from "@/pages/components/about-us";
import Story from "@/pages/components/AboutUs";
import ClientSections from "@/pages/components/ClientSections";
import HeroSection from "@/pages/components/hero-section";
import Services from "@/pages/components/Services";
import React from "react";

function Home() {
  return (
    <div className="w-full min-h-[100svh] bg-blue-400">
      <HeroSection />
      <AboutUs />
      <Story />
      <Services />
      <ClientSections />
    </div>
  );
}

export default Home;
