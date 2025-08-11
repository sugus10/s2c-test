"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Home() {
  const sectionRef = useRef(null);
  const [screenHeight, setScreenHeight] = useState(800);
  const [screenWidth, setScreenWidth] = useState(1200);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    }
  }, []);

  // Track scroll within this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // start of section to end
  });

  // Background color change when wave reaches top - wider range and more noticeable color
  const sectionBg = useTransform(
    scrollYProgress,
    [0.75, 0.85], // Wider range for smoother transition
    ["rgb(125, 211, 252)", "rgb(1, 134, 183)"] // Using rgb format for both
  );

  // Wave grows then moves up
  const waveHeight = useTransform(
    scrollYProgress,
    [0.3, 0.5],
    [350, screenHeight]
  );
  const waveY = useTransform(scrollYProgress, [0.5, 0.8], [0, -screenHeight]);

  // Plants
  const leftPlantX = useTransform(scrollYProgress, [0.3, 0.8], [0, -150]);
  const rightPlantX = useTransform(scrollYProgress, [0.3, 0.8], [0, 150]);

  // Rocks
  const leftRockX = useTransform(scrollYProgress, [0.3, 0.8], [0, -300]);
  const rightRockX = useTransform(scrollYProgress, [0.3, 0.8], [0, 300]);

  // Text lines
  const line1X = useTransform(scrollYProgress, [0.3, 0.8], [0, -300]);
  const line2X = useTransform(scrollYProgress, [0.3, 0.8], [0, 300]);
  const line3X = useTransform(scrollYProgress, [0.3, 0.8], [0, -300]);
  const line4X = useTransform(scrollYProgress, [0.3, 0.8], [0, 300]);
  const line5X = useTransform(scrollYProgress, [0.3, 0.8], [0, -300]);

  // Fade
  const fadeOpacity = useTransform(scrollYProgress, [0.7, 0.8], [1, 0]);

  // BG overlay fade after wave
  const bgOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 1]);

  return (
    <div className="w-full">
      {/* Outer container gives extra scroll space */}
      <div ref={sectionRef} className="relative h-[200vh]">
        <motion.div
          style={{ backgroundColor: sectionBg }}
          className="sticky top-0 w-full h-screen overflow-hidden relative"
        >
          {/* Pink plants */}
          <motion.div
            style={{ x: leftPlantX, opacity: fadeOpacity }}
            className="absolute bottom-0 left-30 z-20"
          >
            <Image
              src="/new-img/pink-grass-one.png"
              alt="left-grass"
              width={130}
              height={130}
            />
          </motion.div>
          <motion.div
            style={{ x: rightPlantX, opacity: fadeOpacity }}
            className="absolute bottom-0 right-30 z-20"
          >
            <Image
              src="/new-img/pink-grass-one.png"
              alt="right-grass"
              width={130}
              height={130}
            />
          </motion.div>

          {/* Rocks */}
          <motion.div
            style={{ x: leftRockX, opacity: fadeOpacity }}
            className="w-[350px] h-[200px] absolute -bottom-1 -left-1 z-10"
          >
            <Image src="/new-img/left-rock.png" alt="left-rock" fill />
          </motion.div>
          <motion.div
            style={{ x: rightRockX, opacity: fadeOpacity }}
            className="w-[350px] h-[200px] absolute -bottom-1 -right-1 z-10"
          >
            <Image src="/new-img/right-rock.png" alt="right-rock" fill />
          </motion.div>

          {/* Sea grass */}
          <motion.div
            style={{ opacity: fadeOpacity }}
            className="w-full absolute bottom-0 left-0 z-[20]"
          >
            <Image src="/new-img/sea-grass.png" alt="sea-grass" fill />
          </motion.div>

          {/* Wave */}
          <motion.div
            style={{ height: waveHeight }}
            className="w-full absolute bottom-0 left-0 z-[3] bg-[#0186B7]"
          >
            <div className="relative h-full w-full">
              <motion.img
                src="/new-img/wave-anim.gif"
                alt="wave"
                className="absolute top-[-380px] left-0 w-full object-contain"
              />
            </div>
          </motion.div>

          {/* Text */}
          <div className="text-center absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[60] space-y-2">
            <motion.h2
              style={{ x: line1X, opacity: fadeOpacity }}
              className="text-lg md:text-xl font-third font-extrabold uppercase tracking-wide text-[#0B2D4B] whitespace-nowrap"
            >
              Transform Your Digital Presence
            </motion.h2>
            <motion.h1
              style={{ x: line2X, opacity: fadeOpacity }}
              className="text-4xl md:text-6xl font-third font-extrabold uppercase text-[#e0f7ff] whitespace-nowrap"
            >
              Innovating
            </motion.h1>
            <motion.h1
              style={{ x: line3X, opacity: fadeOpacity }}
              className="text-4xl md:text-6xl font-third font-extrabold uppercase text-[#e0f7ff] whitespace-nowrap"
            >
              Digital
            </motion.h1>
            <motion.h1
              style={{ x: line4X, opacity: fadeOpacity }}
              className="text-4xl md:text-6xl font-third font-extrabold uppercase text-[#e0f7ff] whitespace-nowrap"
            >
              Experiences
            </motion.h1>
            <motion.h3
              style={{ x: line5X, opacity: fadeOpacity }}
              className="text-lg md:text-2xl font-medium font-third text-[#0B2D4B] whitespace-nowrap"
            >
              Delivering Results That Last
            </motion.h3>
          </div>

          {/* BG overlay */}
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
