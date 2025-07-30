"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection: React.FC = () => {
  const { scrollY } = useScroll();

  // Parallax background movement
  const backgroundY = useTransform(scrollY, [0, 1000], ["0%", "30%"]);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/5.png')`,
          y: backgroundY,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-500/70"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h2 className="text-4xl font-bold mb-4">Welcome to the Second Section</h2>
        <p className="text-lg max-w-xl text-center">
          This section has a parallax effect on the background as you scroll.
        </p>
      </div>
    </section>
  );
};

export default ParallaxSection;
