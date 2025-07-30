  import { Geist, Geist_Mono } from "next/font/google";
  import Navbar from "./components/Navbar";
  import Hero from "./components/Hero";
import ParallaxSection from "./components/research-section";

  const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
  });

  const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
  });

  export default function Home() {
    return (
      <div className="h-screen">
      <Navbar />
      <Hero />
      {/* <ParallaxSection/> */}
      </div>
    );
  }
