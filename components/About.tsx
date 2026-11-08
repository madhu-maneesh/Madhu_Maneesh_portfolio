"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Boxes,
  Brain,
  CalendarDays,
  Code2,
  GraduationCap,
  Layers,
  MapPin,
  Rocket,
  Server,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const BADGES = [
  {
    icon: GraduationCap,
    value: "B.E. CSE (AI & ML)",
    label: "Neil Gogte Institute of Technology",
  },
  { icon: MapPin, value: "Hyderabad, India", label: "Location" },
  { icon: CalendarDays, value: "2027", label: "Graduation" },
];

const ENJOY = [
  { icon: Server, label: "Java & Spring Boot Backend Systems" },
  { icon: Code2, label: "Full-Stack Development with React" },
  { icon: Brain, label: "RAG Pipelines & Vector Databases" },
  { icon: Zap, label: "REST APIs & Scalable Services" },
  { icon: Target, label: "System Internals & Problem Solving" },
  { icon: Boxes, label: "Transforming Ideas into Real Software" },
];

const ABOUT_STATS = [
  { icon: Rocket, value: "7+", label: "Engineered Projects" },
  { icon: BookOpen, value: "2027", label: "Graduation Year" },
  { icon: Layers, value: "10+", label: "Core Tech Domains" },
  { icon: Server, value: "AIRA HR", label: "Internship Experience" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative z-10 flex min-h-[100vh] scroll-mt-20 flex-col lg:min-h-[105vh]"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pb-14 pt-28 sm:px-8 lg:pt-36">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT — label, heading, exact bio, info badges */}
          <div className="min-w-0">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[13px] tracking-[0.35em] text-[#4B9BFF]"
            >
              {"// 01. ABOUT ME"}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-display mt-5 text-[clamp(2.3rem,4.5vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-[#E9EDF2]"
            >
              Engineering scalable systems
              <br className="hidden sm:inline" /> with{" "}
              <span className="text-gradient-tomorrow">intelligent software.</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-6 space-y-4 text-base leading-relaxed text-[#9AA6B5] sm:text-[16.5px]"
            >
              <p>
                I&apos;m Madhu Maneesh, a Computer Science and Engineering student specializing in
                Artificial Intelligence and Machine Learning. I&apos;m passionate about backend
                engineering, full-stack development, and building intelligent software systems.
              </p>
              <p>
                I primarily work with Java and Spring Boot to develop backend applications, REST APIs,
                and scalable services. I also build full-stack applications using React and modern web
                technologies, integrating AI capabilities using LLMs, RAG pipelines, and vector
                databases.
              </p>
              <p>
                I enjoy understanding how systems work internally, solving engineering problems, and
                transforming ideas into practical software products.
              </p>
            </motion.div>

            {/* Row of 3 info blocks */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {BADGES.map((b, i) => (
                <motion.div
                  key={b.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: 0.1 + i * 0.1, ease: EASE }}
                  className="rounded-xl border border-[#28313D] bg-[#11151C]/80 px-4 py-3.5 backdrop-blur-md"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#4B9BFF]/10 text-[#4B9BFF]">
                    <b.icon className="h-[18px] w-[18px]" />
                  </span>
                  <p className="mt-3 text-[14px] font-bold leading-tight text-[#E9EDF2]">
                    {b.value}
                  </p>
                  <p className="mt-1 text-xs leading-snug text-[#9AA6B5]">{b.label}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — What I Focus On */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
            className="w-full max-w-md rounded-2xl border border-[#28313D] bg-[#11151C]/90 p-5 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-md lg:ml-auto lg:p-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-lg font-bold text-[#E9EDF2] sm:text-xl">
                Technical Focus
              </h3>
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4B9BFF]/15 text-[#4B9BFF] shadow-[0_0_16px_rgba(75,155,255,0.25)]">
                <Sparkles className="h-4 w-4" />
              </span>
            </div>
            <ul className="mt-4 space-y-2.5">
              {ENJOY.map((e, i) => (
                <motion.li
                  key={e.label}
                  initial={{ opacity: 0, x: 18 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: 0.2 + i * 0.08, ease: EASE }}
                  className="group flex items-center gap-3.5 rounded-xl border border-[#28313D]/70 bg-[#171D26]/60 px-3.5 py-3 transition-all duration-300 hover:border-[#4B9BFF]/50 hover:bg-[#4B9BFF]/10 hover:shadow-[0_0_20px_rgba(75,155,255,0.15)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#4B9BFF]/15 text-[#4B9BFF] shadow-[0_0_12px_rgba(75,155,255,0.25)] transition-all duration-300 group-hover:scale-105 group-hover:bg-[#4B9BFF]/25">
                    <e.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-medium text-[#E9EDF2]/90 sm:text-[14.5px]">
                    {e.label}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom — horizontal statistics bar */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-12 rounded-xl border border-[#28313D] bg-[#11151C]/90 px-5 py-4 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md sm:px-6"
        >
          <div className="grid grid-cols-2 gap-y-5 sm:grid-cols-4 sm:divide-x sm:divide-[#28313D]">
            {ABOUT_STATS.map((s) => (
              <div
                key={s.label}
                className="flex min-w-0 items-center gap-3 px-1 sm:px-5 sm:first:pl-0"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#171D26] border border-[#28313D] text-[#C5FF55]">
                  <s.icon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0">
                  <span className="font-display block text-xl font-bold leading-tight text-[#E9EDF2] sm:text-2xl">
                    {s.value}
                  </span>
                  <span className="block break-words text-xs text-[#9AA6B5]">{s.label}</span>
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
