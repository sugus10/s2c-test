"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function StickyWaveSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Circle scaling
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 15]);

  // Boat moves along sea level, tied to scroll
  const boatX = useTransform(scrollYProgress, [0.6, 1], ["-120%", "120%"]);
  const boatOpacity = useTransform(scrollYProgress, [0.6, 0.65], [0, 1]);

  return (
    <section ref={sectionRef} className="relative h-[300svh] bg-blue-300">
      {/* Sticky container */}
      <div className="sticky top-0 h-[100svh] w-full overflow-hidden z-10">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          {/* Boat moving on sea level */}
          <motion.div
            style={{
              x: boatX,
              opacity: boatOpacity,
              bottom: "100px", // matches top of blue sea
            }}
            className="absolute z-10"
          >
            <Image
              src="/new-img/Boat.gif"
              alt="Boat"
              width={300}
              height={150}
              className="pointer-events-none"
            />
          </motion.div>

          {/* Waves & Sea */}
          <div className="absolute h-[200px] bottom-0 w-full z-[15]">
            <div className="h-[100px] relative">
              <Image
                src="/new-img/wave-anim.gif"
                alt="Wave"
                fill
                className="object-cover"
              />
            </div>
            <div className="h-[100px] bg-[#0186B7]" />
          </div>
        </div>

        {/* Scaling mask */}
        <motion.div
          style={{ scale: imageScale }}
          className="absolute inset-0 z-20 pointer-events-none"
        >
          <Image
            src="/new-img/Subtract.svg"
            alt="Mask"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
