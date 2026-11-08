"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const fadeUp = {
  hidden: { y: 28, opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

function useTypewriter(text: string, speed = 50, startDelay = 400) {
  const [out, setOut] = useState("");
  useEffect(() => {
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const timeout = setTimeout(() => {
      interval = setInterval(() => {
        i += 1;
        setOut(text.slice(0, i));
        if (i >= text.length && interval) clearInterval(interval);
      }, speed);
    }, startDelay);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, startDelay]);
  return out;
}

function useISTClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () =>
      setTime(
        new Intl.DateTimeFormat("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
          timeZone: "Asia/Kolkata",
        }).format(new Date())
      );
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function HeroContent() {
  const typed = useTypewriter("// HELLO WORLD, I'M");
  const ist = useISTClock();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  return (
    <div
      className="max-w-2xl"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setTilt({
          x: ((e.clientX - r.left) / r.width - 0.5) * 6,
          y: ((e.clientY - r.top) / r.height - 0.5) * -6,
        });
      }}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={0}
        className="mb-3 font-mono text-[13px] tracking-[0.35em] text-[#4B9BFF]"
      >
        {typed}
        <span className="animate-blink ml-1 inline-block h-4 w-[2px] translate-y-[3px] bg-[#C5FF55]" />
      </motion.p>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={1}
        style={{ transform: `perspective(900px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
        className="transition-transform duration-150 ease-out"
      >
        <h1 className="font-display text-gradient-aakash cursor-default text-[clamp(3.2rem,8.5vw,5.8rem)] font-extrabold leading-[0.98] tracking-tight">
          Madhu Maneesh
        </h1>
        <h2 className="font-display mt-3.5 text-[clamp(1.35rem,3.2vw,2.2rem)] font-bold leading-[1.15] tracking-tight text-[#E9EDF2]">
          I build intelligent software
          <br />
          and engineer <span className="text-gradient-tomorrow">scalable systems.</span>
        </h2>
      </motion.div>

      {/* Role Pill */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={2}
        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#28313D] bg-[#11151C]/90 px-3.5 py-1.5 font-mono text-xs sm:text-[13px] text-[#C5FF55]"
      >
        <span className="inline-block h-2 w-2 rounded-full bg-[#C5FF55] animate-pulse" />
        Java Backend Engineer | Full Stack Developer | AI Engineer
      </motion.div>

      <motion.p
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={3}
        className="mt-5 max-w-xl text-[15px] leading-relaxed text-[#9AA6B5] sm:text-base"
      >
        I&apos;m Madhu Maneesh, a Computer Science and Engineering student specializing in
        Artificial Intelligence and Machine Learning. Passionate about backend engineering,
        full-stack development, and building intelligent software systems.
      </motion.p>

      {/* Floating Animated Terminal Code Quote */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={4}
        className="mt-6 max-w-xl overflow-hidden rounded-xl border border-[#28313D] bg-[#11151C]/90 shadow-[0_0_25px_rgba(75,155,255,0.12)] backdrop-blur-md"
      >
        <div className="flex items-center justify-between border-b border-[#28313D] px-4 py-2 bg-[#171D26]/70">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
            <span className="ml-2 font-mono text-[11px] text-[#9AA6B5]/70">quote.sh</span>
          </div>
          <span className="font-mono text-[10px] text-[#4B9BFF]/80">bash</span>
        </div>
        <div className="p-3.5 font-mono text-[13px] leading-relaxed">
          <p className="text-[#9AA6B5]/70">
            <span className="text-[#C5FF55]">$</span> echo $DEV_MOTTO
          </p>
          <p className="mt-1 text-[#E9EDF2] font-semibold drop-shadow-[0_0_12px_rgba(75,155,255,0.4)]">
            &ldquo;Never hesitate to work, or someone else will take your opportunity.&rdquo;
          </p>
        </div>
      </motion.div>

      {/* CTAs */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={5}
        className="mt-7 flex flex-wrap items-center gap-4"
      >
        <a
          href="#projects"
          className="btn-primary-glow shimmer-sweep group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-[#4B9BFF] via-[#3578CC] to-[#4B9BFF] px-6 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:scale-[1.02] active:scale-[0.98]"
        >
          View My Work
          <ArrowRight className="h-[18px] w-[18px] transition-transform duration-300 group-hover:translate-x-1.5" />
        </a>
        <a
          href="#contact"
          className="group inline-flex items-center gap-2.5 rounded-xl border border-[#28313D] bg-[#171D26]/80 px-6 py-3.5 text-[15px] font-medium text-[#E9EDF2] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#4B9BFF]/60 hover:bg-[#4B9BFF]/10 hover:shadow-[0_8px_30px_rgba(75,155,255,0.25)]"
        >
          Get In Touch
        </a>
      </motion.div>

      {/* Socials & Location */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        custom={6}
        className="mt-6 flex flex-wrap items-center gap-4"
      >
        <div className="flex items-center gap-3">
          <SocialButton
            href="https://github.com/madhu-maneesh"
            label="GitHub — madhu-maneesh"
          >
            <GithubIcon className="h-5 w-5" />
          </SocialButton>
          <SocialButton
            href="https://www.linkedin.com/in/shetty-madhu-maneesh"
            label="LinkedIn — shetty-madhu-maneesh"
          >
            <LinkedinIcon className="h-5 w-5" />
          </SocialButton>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-[#28313D] bg-[#11151C]/80 px-3.5 py-1.5 backdrop-blur-md">
          <MapPin className="h-3.5 w-3.5 text-[#C5FF55]" />
          <span className="text-xs text-[#9AA6B5]">
            Hyderabad, India · <span className="tabular-nums font-mono text-[#E9EDF2]">{ist}</span> IST
          </span>
        </div>
      </motion.div>
    </div>
  );
}

function SocialButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
      className="glass group flex h-11 w-11 items-center justify-center rounded-xl border border-[#28313D] text-[#9AA6B5] transition-all duration-300 hover:-translate-y-1 hover:border-[#4B9BFF]/60 hover:text-[#E9EDF2] hover:shadow-[0_6px_20px_rgba(75,155,255,0.3)]"
    >
      <span className="transition-transform duration-300 group-hover:scale-110">{children}</span>
    </a>
  );
}
