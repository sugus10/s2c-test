"use client";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useAnimationFrame,
} from "framer-motion";
import Image from "next/image";

export default function CursorCircle() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Option 1: Much higher damping for smoother movement
  const springX = useSpring(mouseX, { stiffness: 100, damping: 50 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 50 });

  // Option 2: Alternative - use different spring config for more linear movement
  // const springX = useSpring(mouseX, { stiffness: 200, damping: 30 });
  // const springY = useSpring(mouseY, { stiffness: 200, damping: 30 });

  const [isInside, setIsInside] = useState(false);
  const [rotation, setRotation] = useState(0);

  // Continuous rotation using framer-motion's animation frame
  useAnimationFrame((t, delta) => {
    setRotation((prev) => (prev + delta * 0.06) % 360); // ~360deg every 6s
  });

  const updateMousePosition = (clientX: number, clientY: number) => {
    const container = containerRef.current;
    if (!container) return;

    const rect = container.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const isHovering =
      clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom;

    if (isHovering) {
      mouseX.set(x - 50); // center offset
      mouseY.set(y - 50);
      setIsInside(true);
    } else {
      setIsInside(false);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let lastMouseX = 0;
    let lastMouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      updateMousePosition(e.clientX, e.clientY);
    };

    const handleScroll = () => {
      // Update position using the last known mouse coordinates
      updateMousePosition(lastMouseX, lastMouseY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-[1000] pointer-events-none"
    >
      {isInside && (
        <motion.div
          className="w-[100px] h-[100px] absolute"
          style={{
            x: springX,
            y: springY,
            rotate: rotation,
          }}
        >
          <Image
            src="/new-img/cursor-circle.svg"
            alt="cursor circle"
            width={100}
            height={100}
          />
        </motion.div>
      )}
    </div>
  );
}
