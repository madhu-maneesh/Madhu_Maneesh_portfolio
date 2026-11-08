"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";

export default function DeveloperWorkstation() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 120 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const floatY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set(e.clientX / innerWidth - 0.5);
      mouseY.set(e.clientY / innerHeight - 0.5);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative flex w-full items-center justify-center py-4">
      {/* Soft ambient software blue glow behind avatar */}
      <div className="pointer-events-none absolute -inset-6 rounded-3xl bg-radial from-[#4B9BFF]/20 via-[#4B9BFF]/5 to-transparent blur-3xl" />

      {/* 3D Perspective Tilt Card */}
      <motion.div
        style={{
          perspective: 1200,
          rotateX,
          rotateY,
          y: floatY,
        }}
        className="relative w-full max-w-[540px] transition-shadow duration-300"
      >
        <div className="group relative overflow-hidden rounded-2xl border border-[#28313D] bg-gradient-to-b from-[#171D26] to-[#090B10] p-2 shadow-[0_25px_60px_rgba(0,0,0,0.6)] backdrop-blur-xl transition-all duration-300 hover:border-[#4B9BFF]/50 hover:shadow-[0_30px_70px_rgba(75,155,255,0.2)]">
          {/* Main Avatar Container */}
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#090B10]">
            <Image
              src="/avatar.jpg"
              alt="Madhu Maneesh Avatar"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 540px"
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Subtle cinematic gradient vignette */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090B10]/80 via-transparent to-transparent opacity-60" />

            {/* Subtle inner highlight border */}
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
          </div>

          {/* Minimalist Bottom Info Bar */}
          <div className="flex items-center justify-between px-3 py-2.5">
            <div className="flex items-center gap-2">
              <span className="flex h-2 w-2 rounded-full bg-[#C5FF55] shadow-[0_0_8px_rgba(197,255,85,0.8)] animate-pulse" />
              <span className="font-mono text-xs font-semibold text-[#E9EDF2]">
                Madhu Maneesh
              </span>
            </div>
            <span className="font-mono text-[11px] text-[#4B9BFF]">
              Software Engineer
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
