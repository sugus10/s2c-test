import Image from "next/image";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function AboutUs() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const rotateY = useTransform(scrollYProgress, [0, 0.6], [0, 180]);
  // Keep section pinned during flip, then move away
  const translateY = useTransform(scrollYProgress, [0, 0.6, 1], [0, 0, -500]);

  // Descriptions fade in
  const descriptionOpacity = useTransform(scrollYProgress, [0.1, 0.3], [0, 1]);

  return (
    <div className="w-full min-h-[200vh] bg-[#1C398E] relative">
      {/* Sticky Flip Section */}
      <motion.div
        ref={sectionRef}
        style={{ y: translateY }}
        className="h-[250vh]"
      >
        <div className="h-[100vh] sticky top-0 flex items-center justify-center perspective-[1000px]">
          <div className="w-full h-full absolute flex items-center justify-center">
            {/* 🔥 Left Description */}
            <motion.div
              style={{ opacity: descriptionOpacity }}
              className="absolute left-8  top-1/2 -translate-y-1/2 text-white text-base max-w-sm pointer-events-none px-2"
            >
              <p className="opacity-80 font-third text-2xl">
                In deinem Sinn, für dich, für deine Kund:innen und nicht zuletzt
                für uns, tun wir alles dafür, dass unsere Arbeit Sinn macht
              </p>
              <button className="w-full p-2 px-5 bg-transparent border-2 rounded-fulls mt-5 rounded-full">
                Learn More
              </button>
            </motion.div>

            {/* 🔥 Right Description */}
            <motion.div
              style={{ opacity: descriptionOpacity }}
              className="absolute right-8 top-1/2 -translate-y-1/2 text-white text-base text-right max-w-sm pointer-events-none px-2"
            >
              <p className="opacity-80 font-third text-2xl">
                In deinem Sinn, für dich, für deine Kund:innen und nicht zuletzt
                für uns, tun wir alles dafür, dass unsere Arbeit Sinn macht
              </p>
              <button className="w-full p-2 px-5 bg-transparent border-2 rounded-fulls mt-5 rounded-full">
                Learn More
              </button>
            </motion.div>

            {/* Flipping Card */}
            <motion.div
              style={{
                rotateY,
                transformStyle: "preserve-3d",
              }}
              className="w-[268px] h-[387px] relative"
            >
              {/* Front Image */}
              <div className="absolute inset-0 backface-hidden">
                <img
                  src="/new-img/im-1.png"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
              {/* Back Image */}
              <div className="absolute inset-0 backface-hidden rotate-y-180">
                <img
                  src="/new-img/im-6.png"
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* After Flip Section */}
    </div>
  );
}

export default AboutUs;
