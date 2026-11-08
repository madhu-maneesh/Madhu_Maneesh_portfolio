"use client";

import { motion } from "framer-motion";
import { Mouse } from "lucide-react";
import DeveloperWorkstation from "./DeveloperWorkstation";
import HeroContent from "./HeroContent";

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="top"
      className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 items-center px-5 pb-24 pt-[115px] sm:px-8 lg:pb-20"
    >
      <div className="w-full">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Left Column: Hero Personal Info, Title, Terminal Quote, CTAs */}
          <div>
            <HeroContent />
          </div>

          {/* Right Column: 3D Developer Workstation with Navy MM T-Shirt & Screen */}
          <div className="flex items-center justify-center">
            <DeveloperWorkstation />
          </div>
        </div>

        {/* Scroll cue */}
        <motion.a
          href="#projects"
          onClick={scrollToProjects}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute -bottom-2 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#9AA6B5]/60 transition-colors hover:text-[#E9EDF2] md:flex"
          aria-label="Scroll to projects"
        >
          <span className="flex h-10 w-6 items-start justify-center rounded-full border border-[#28313D] p-1.5">
            <span className="animate-scroll-dot h-2 w-1 rounded-full bg-[#4B9BFF]" />
          </span>
          <span className="text-xs tracking-wide">Scroll to explore</span>
          <span className="h-8 w-px bg-gradient-to-b from-[#4B9BFF]/70 to-transparent" />
        </motion.a>

        {/* Bottom-left live badge for mobile */}
        <div className="absolute -bottom-2 left-5 flex items-center gap-2 text-xs text-[#9AA6B5]/60 md:hidden">
          <Mouse className="h-4 w-4 text-[#C5FF55]" /> Scroll to explore
        </div>
      </div>
    </section>
  );
}
