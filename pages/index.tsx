import { Geist, Geist_Mono } from "next/font/google";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import HomePage from "./(pages)/home/page";
import LoadingScreen from "./components/LoadingScreen";
import ErrorBoundary from "./components/ErrorBoundary";
import AccessibilityFeatures from "./components/AccessibilityFeatures";
import PerformanceMetrics from "./components/PerformanceMetrics";
import Analytics from "./components/Analytics";
import SEOHead from "./components/SEOHead";
import ContactSection from "./components/ContactSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <ErrorBoundary>
      <SEOHead />
      <Analytics />
      
      {isLoading ? (
        <LoadingScreen onComplete={handleLoadingComplete} />
      ) : (
        <div className="min-h-screen">
          <AccessibilityFeatures />
          <PerformanceMetrics />
          <Navbar />
          <HomePage />
          <ContactSection />
        </div>
      )}
    </ErrorBoundary>
  );
}
