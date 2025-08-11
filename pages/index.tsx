import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "./components/Navbar";
import HomePage from "./(pages)/home/page";

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
      <HomePage />
    </div>
  );
}
