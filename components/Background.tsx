"use client";

import { motion, useMotionTemplate, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Background({
  mouseX,
  mouseY,
}: {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle parallax: spotlight drifts smoothly with cursor
  const sx = useSpring(mouseX, { stiffness: 45, damping: 22 });
  const sy = useSpring(mouseY, { stiffness: 45, damping: 22 });

  // Spotlight follows cursor
  const spotX = useTransform(sx, [-0.5, 0.5], [25, 75]);
  const spotY = useTransform(sy, [-0.5, 0.5], [20, 70]);
  const spotBg = useMotionTemplate`radial-gradient(650px circle at ${spotX}% ${spotY}%, rgba(75,155,255,0.12), transparent 70%)`;

  // Canvas interactive particle network
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    // Particle setup
    const particleCount = Math.min(Math.floor((width * height) / 20000), 65);
    const particles: {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      alpha: number;
    }[] = [];

    const colors = ["#4B9BFF", "#88C2FF", "#C5FF55", "#9AA6B5"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let cursorX = width / 2;
    let cursorY = height / 2;

    const onMouseMove = (e: MouseEvent) => {
      cursorX = e.clientX;
      cursorY = e.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);

    const checkReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle grid lines
      ctx.strokeStyle = "rgba(40, 49, 61, 0.2)";
      ctx.lineWidth = 0.5;

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!checkReducedMotion) {
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          if (p.y > height) p.y = 0;

          // Gentle mouse interaction
          const dx = cursorX - p.x;
          const dy = cursorY - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            p.x -= (dx / dist) * 0.6;
            p.y -= (dy / dist) * 0.6;
          }
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();

        // Connect nearby particles with subtle blue/gray lines
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = "#4B9BFF";
            ctx.globalAlpha = (1 - dist / 110) * 0.16;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden bg-[#090B10]" aria-hidden="true">
      {/* Interactive 3D particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full opacity-70" />

      {/* Graphite gradient base & soft ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090B10]/80 via-transparent to-[#090B10]" />

      {/* Cursor spotlight — software blue light */}
      <motion.div
        className="pointer-events-none absolute inset-0 hidden md:block"
        style={{ background: spotBg }}
      />

      {/* Subtle film grain */}
      <div className="noise-overlay absolute inset-0 opacity-25" />
    </div>
  );
}
