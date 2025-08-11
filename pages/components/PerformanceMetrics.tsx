"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Metrics {
  loadTime: number;
  renderTime: number;
  interactionReady: number;
}

const PerformanceMetrics: React.FC = () => {
  const [metrics, setMetrics] = useState<Metrics | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const measurePerformance = () => {
      if (typeof window !== "undefined" && window.performance) {
        const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming;
        
        const loadTime = navigation.loadEventEnd - navigation.navigationStart;
        const renderTime = navigation.domContentLoadedEventEnd - navigation.navigationStart;
        const interactionReady = navigation.domInteractive - navigation.navigationStart;

        setMetrics({
          loadTime: Math.round(loadTime),
          renderTime: Math.round(renderTime),
          interactionReady: Math.round(interactionReady)
        });
      }
    };

    // Wait for page to fully load
    if (document.readyState === "complete") {
      measurePerformance();
    } else {
      window.addEventListener("load", measurePerformance);
    }

    // Show metrics after 3 seconds, hide after 8 seconds
    const showTimer = setTimeout(() => setIsVisible(true), 3000);
    const hideTimer = setTimeout(() => setIsVisible(false), 8000);

    return () => {
      window.removeEventListener("load", measurePerformance);
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!metrics || !isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      className="fixed bottom-4 right-4 z-50 bg-black/80 backdrop-blur-md rounded-lg p-4 text-white text-xs"
    >
      <h4 className="font-semibold mb-2">Performance Metrics</h4>
      <div className="space-y-1">
        <div>Load: {metrics.loadTime}ms</div>
        <div>Render: {metrics.renderTime}ms</div>
        <div>Interactive: {metrics.interactionReady}ms</div>
      </div>
    </motion.div>
  );
};

export default PerformanceMetrics;