"use client";
import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // === DIVER 1 (travels across sections, fades out on right) ===
  const diverX = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    ["20vw", "50vw", "80vw"]
  );
  const diverY = useTransform(
    scrollYProgress,
    [0, 0.5, 0.8],
    ["-20vh", "-10vh", "-5vh"]
  );
  const diverScale = useTransform(scrollYProgress, [0, 0.8], [1, 1.3]);
  const diverOpacity = useTransform(scrollYProgress, [0.7, 0.85], [1, 0]);

  // === FISH (only first section) ===
  const fishX = useTransform(scrollYProgress, [0, 0.3], ["-20vw", "-40vw"]);
  const fishY = useTransform(scrollYProgress, [0, 0.3], ["20vh", "5vh"]);
  const fishScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.3]);
  const fishOpacity = useTransform(scrollYProgress, [0.3, 0.5], [1, 0]);

  // Text fades out
  const textOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);

  // Overlays move apart (used for both sections)
  const topOverlayY = useTransform(scrollYProgress, [0, 0.5], ["0%", "-20%"]);
  const bottomOverlayY = useTransform(scrollYProgress, [0, 0.5], ["0%", "20%"]);

  // === NEW DIVER (fades in, stays slightly left of center) ===
  const newDiverOpacity = useTransform(scrollYProgress, [0.75, 0.9], [0, 1]);
  const newDiverX = useTransform(scrollYProgress, [0.75, 1], ["60vw", "40vw"]);
  const newDiverY = useTransform(scrollYProgress, [0.75, 1], ["-5vh", "-5vh"]);

  // Cards appear
  const cardsOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);
  const cardsY = useTransform(scrollYProgress, [0.8, 1], ["50px", "0px"]);

  return (
    <div className="relative w-screen h-[200vh] text-white overflow-hidden">
      {/* === SECTION 1 === */}
      <section
        className="sticky top-0 w-screen h-screen flex items-center justify-center"
        style={{
          backgroundImage: `url('/5.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-500/70"></div>

        {/* Top Overlay */}
        <motion.div className="absolute inset-0" style={{ y: topOverlayY }}>
          <img
            src="/back-top.png"
            alt="Overlay Top"
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div>

        {/* Bottom Overlay */}
        <motion.div
          className="absolute inset-0 flex justify-end items-end overflow-hidden"
          style={{ y: bottomOverlayY }}
        >
          <img
            src="/back-bottom.png"
            alt="Overlay Bottom"
            className="w-full h-auto object-cover pointer-events-none"
            style={{ maxHeight: "50%" }}
          />
        </motion.div>

        {/* Diver 1 */}
        <motion.img
          src="/diver.png"
          alt="Diver"
          className="absolute bottom-0 left-0 w-56 pointer-events-none"
          style={{
            x: diverX,
            y: diverY,
            scale: diverScale,
            opacity: diverOpacity,
          }}
        />

        {/* Fish */}
        <motion.img
          src="/Fish image.png"
          alt="Fish"
          className="absolute top-0 right-0 w-48 pointer-events-none"
          style={{ x: fishX, y: fishY, scale: fishScale, opacity: fishOpacity }}
        />

        {/* Hero Text */}
        <motion.div
          style={{ opacity: textOpacity }}
          className="relative z-10 text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Lost In The Tech Sea</h1>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-white text-blue-500 rounded-lg shadow-lg"
          >
            Way to Crest
          </motion.button>
        </motion.div>
      </section>

      {/* === SECTION 2 (with same background and overlays) === */}
      <section
        className="sticky top-0 w-screen h-screen flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/5.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/70 to-purple-500/70"></div>

        {/* Top Overlay */}
        {/* <motion.div className="absolute inset-0" style={{ y: topOverlayY }}>
          <img
            src="/back-top.png"
            alt="Overlay Top"
            className="w-full h-full object-cover pointer-events-none"
          />
        </motion.div> */}

        {/* Bottom Overlay */}
        <motion.div
          className="absolute inset-0 flex justify-end items-end overflow-hidden"
          style={{ y: bottomOverlayY }}
        >
          <img
            src="/back-bottom.png"
            alt="Overlay Bottom"
            className="w-full h-auto object-cover pointer-events-none"
            style={{ maxHeight: "50%" }}
          />
        </motion.div>

        {/* New Diver */}
        <motion.img
          src="/diverflipped.png"
          alt="New Diver"
          className="absolute w-64 pointer-events-none"
          style={{
            x: newDiverX,
            y: newDiverY,
            opacity: newDiverOpacity,
          }}
        />

        {/* Cards */}
        <motion.div
          style={{ opacity: cardsOpacity, y: cardsY }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 mt-40"
        >
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold">Market Exploration</h3>
            <p className="mt-2 text-sm">
              We dive deep into your industry—analyzing market trends, customer
              behavior, and competitor landscapes to shape a clear path forward.
            </p>
          </motion.div>
          <motion.div
            className="bg-white/20 backdrop-blur-md rounded-xl p-6 text-center shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold">Audience Mapping</h3>
            <p className="mt-2 text-sm">
              We define who your product is for and what they need—so your
              solution speaks directly to the right people, not the crowd.
            </p>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default Hero;
