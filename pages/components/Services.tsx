"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "Web Application",
    description:
      "Custom, scalable web apps built for speed, security, and seamless performance.",
    bgColor: "#8191E1",
    hoverColor: "#4321ed",
    image: "/new-img/sr-img-1.jpg",
    tech: ["React Js", "Next Js", "Node Js", "Angular", "Vue Js"],
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance Android & iOS apps with smooth, intuitive user experiences.",
    bgColor: "#17323B",
    hoverColor: "#4321ed",
    image: "/new-img/sr-img-2.jpg",
    tech: ["Flutter", "React Native", "Ionic"],
  },
  {
    title: "Product Development",
    description:
      "End-to-end product design and development, from concept to deployment.",
    bgColor: "#D9744E",
    hoverColor: "#4321ed",
    image: "/new-img/sr-img-3.jpg",
    tech: ["Saas", "Ecommerse", "Crm", "Hrms"],
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing strategies that drive traffic, engagement, and conversion.",
    bgColor: "#1A2C3A",
    hoverColor: "#4321ed",
    image: "/new-img/sr-img-4.jpg",
    tech: ["Meta", "Google ads", "Semrush", "GA4"],
  },
];

const ServiceSection = ({
  index,
  scrollYProgress,
  title,
  description,
  bgColor,
  isLast,
  hoverColor,
  bgImage,
  tech,
}: {
  index: number;
  scrollYProgress: any;
  title: string;
  description: string;
  bgColor: string;
  isLast: boolean;
  hoverColor: string;
  bgImage: string;
  tech: string[];
}) => {
  const total = services.length;
  const start = index / total;
  const end = (index + 1) / total;

  // Keep zoom animation as before (no delay)
  const scale = useTransform(
    scrollYProgress,
    [start, end],
    [1, isLast ? 1 : 0.85]
  );

  // Delay opacity reduction - start fading only after next card moves up a bit
  const opacityDelay = 0.08; // Delay within the current card's scroll range
  const opacityStart = end - opacityDelay; // Start opacity reduction before the card section ends
  const opacityEnd = end; // End opacity reduction at card section end

  // Special cases:
  // - First card should disappear when second card reaches top
  // - Second card should disappear when fourth card reaches top
  // - Third card should disappear when fourth card goes up
  const isFirstCard = index === 0; // Check if this is the first card
  const isSecondCard = index === 1; // Check if this is the second card
  const isThirdCard = index === 2; // Check if this is the third card

  const opacity = useTransform(
    scrollYProgress,
    isLast ? [start, end] : [start, opacityStart, opacityEnd],
    isLast
      ? [1, 1]
      : isFirstCard || isSecondCard || isThirdCard
      ? [1, 1, 0] // First, second, and third cards all go to complete opacity 0
      : [1, 1, 0.8] // Other cards fade to 80%
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        backgroundColor: bgColor,
        position: isLast ? "relative" : "sticky",
        top: isLast ? "auto" : "10svh",
      }}
      className={`h-[100svh] group hover:bg-${hoverColor} p-10 text-center px-6 rounded-tl-[3rem] rounded-tr-[3rem] text-white relative overflow-hidden`}
    >
      <div className="absolute w-[90svh] h-[90svh] left-1/2 -bottom-[20%] flex items-center justify-center -translate-x-1/2   rounded-full  overflow-hidden">
        <Image
          src={bgImage}
          alt="bg-image"
          fill
          className="w-full h-full scale-110 "
        />
      </div>
      <div className="max-w-2xl  text-left">
        <h2 className="text-3xl font-third font-bold mb-4 secondary-font text-white">
          {title}
        </h2>
        <p className="text-lg mb-6 font-third text-white/80 max-w-[400px]">
          {description}
        </p>
        <div className="flex gap-3 items-center max-w-[500px] flex-wrap">
          {tech.map((val) => (
            <button key={val} className="p-2 px-5 bg-transparent border-2 rounded-full">
              {val}
            </button>
          ))}
        </div>
        <button className="white font-semibold underline bg-white text-black p-3 px-5 border-none mt-5 rounded-full">
          Learn More
        </button>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="relative px-5 bg-white">
      {/* STATIC HEADING */}
      <div className="h-[50svh] flex flex-col justify-center  p-10 ">
        <h1 className="text-5xl  secondary-font font-bold tracking-tight font-third text-black">
          Our Core Services
        </h1>
        <p className=" mt-4 max-w-xl secondary-font leading-0 tracking-tight font-third text-black text-xl">
          Empowering your digital presence with expert-led services
        </p>
      </div>

      {/* ANIMATED SERVICE SECTIONS */}
      <div
        ref={containerRef}
        className={`relative`}
        style={{ height: `${services.length * 100}svh` }}
      >
        {services.map((service, index) => (
          <ServiceSection
            bgImage={service.image}
            key={index}
            index={index}
            hoverColor={service.hoverColor}
            scrollYProgress={scrollYProgress}
            title={service.title}
            description={service.description}
            bgColor={service.bgColor}
            isLast={index === services.length - 1}
            tech={service.tech}
          />
        ))}
      </div>

      {/* FINAL NORMAL SCROLL SECTION */}
      {/* <div className="h-[100svh] bg-white text-black p-20 flex flex-col justify-center items-start">
        <h1 className="text-4xl font-bold">Let's Work Together</h1>
        <p className="text-lg mt-4 max-w-xl">
          Reach out to grow your brand and digital presence.
        </p>
      </div> */}
    </div>
  );
}
