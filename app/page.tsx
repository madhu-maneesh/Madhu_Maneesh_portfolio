"use client";

import { MotionConfig, useMotionValue } from "framer-motion";
import About from "../components/About";
import Background from "../components/Background";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  // -0.5 .. 0.5 normalized cursor for parallax + spotlight (fixed video bg)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const onMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX / window.innerWidth - 0.5);
    mouseY.set(e.clientY / window.innerHeight - 0.5);
  };

  return (
    <MotionConfig reducedMotion="user">
      <div onMouseMove={onMouseMove} className="relative flex min-h-screen flex-col bg-[#090B10]">
        <Navbar />
        <main className="relative flex flex-1 flex-col">
          {/* Hero Section with Interactive 3D Workstation and Background */}
          <div className="relative flex min-h-screen flex-col">
            <Background mouseX={mouseX} mouseY={mouseY} />
            <Hero />
          </div>

          {/* Section 01: About Me */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[#090B10] via-[#11151C]/60 to-[#090B10]">
            <About />
          </div>

          {/* Section 02: Experience Timeline */}
          <div className="relative overflow-hidden bg-[#090B10] border-y border-[#28313D]/50">
            <Experience />
          </div>

          {/* Section 03: Featured Projects */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[#090B10] via-[#11151C]/40 to-[#090B10]">
            <Projects />
          </div>

          {/* Section 04: Technical Stack & Capabilities */}
          <div className="relative overflow-hidden bg-[#090B10] border-y border-[#28313D]/50">
            <Skills />
          </div>

          {/* Section 05: Contact */}
          <div className="relative overflow-hidden bg-gradient-to-b from-[#090B10] to-[#11151C]/70">
            <Contact />
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </MotionConfig>
  );
}
