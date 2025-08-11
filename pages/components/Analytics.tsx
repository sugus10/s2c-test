"use client";
import { useEffect } from "react";
import { useRouter } from "next/router";

// Simple analytics tracking
const Analytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      // Track page views
      if (typeof window !== "undefined") {
        // Google Analytics 4
        if (window.gtag) {
          window.gtag("config", "GA_MEASUREMENT_ID", {
            page_path: url,
          });
        }

        // Custom analytics
        trackPageView(url);
      }
    };

    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const trackPageView = (url: string) => {
    // Custom tracking logic
    const data = {
      page: url,
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenResolution: `${screen.width}x${screen.height}`,
    };

    // Send to analytics endpoint
    fetch("/api/analytics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).catch(console.error);
  };

  return null;
};

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export default Analytics;