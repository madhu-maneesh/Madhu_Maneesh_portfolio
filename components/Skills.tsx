"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Cpu, DatabaseZap, Layers, Server, Zap } from "lucide-react";
import { useMemo, useState } from "react";
import { SKILLS, SKILL_CATEGORIES, type SkillCategory } from "../data/skills";
import SkillCard from "./SkillCard";

const TOOLBOX_STATS = [
  { icon: Server, value: "Java & Spring", label: "Core Backend" },
  { icon: Cpu, value: "RAG & LLM", label: "AI Integration" },
  { icon: Layers, value: "React & Vite", label: "Modern Frontend" },
  { icon: DatabaseZap, value: "SQL & Vector", label: "Data Persistence" },
];

export default function Skills() {
  const [filter, setFilter] = useState<SkillCategory | "All">("All");

  const visible = useMemo(
    () =>
      filter === "All"
        ? SKILLS.filter((s) => s.featured)
        : SKILLS.filter((s) => s.category === filter),
    [filter]
  );

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="skills" className="relative z-10 scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Header */}
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#4B9BFF]/30 bg-[#4B9BFF]/10 px-4 py-1.5 text-xs font-mono font-medium text-[#4B9BFF]"
          >
            <Zap className="h-3.5 w-3.5 text-[#C5FF55]" />
            {"// 04. TECHNICAL STACK"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mx-auto mt-4 max-w-4xl text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold leading-tight tracking-tight text-[#E9EDF2]"
          >
            Technologies &amp;{" "}
            <span className="text-gradient-tomorrow">Engineering Capabilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-3 max-w-2xl text-base text-[#9AA6B5]"
          >
            A comprehensive overview of programming languages, frameworks, cloud tools, and computer science fundamentals.
          </motion.p>
        </div>

        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2"
          role="tablist"
          aria-label="Filter skills by category"
        >
          {SKILL_CATEGORIES.map((f) => {
            const active = filter === f.value;
            return (
              <motion.button
                key={f.value}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.value)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={`rounded-xl border px-3.5 py-2 text-xs font-medium transition-all duration-300 ${
                  active
                    ? "btn-primary-glow border-[#4B9BFF] bg-[#4B9BFF]/20 text-[#E9EDF2]"
                    : "border-[#28313D] bg-[#11151C]/80 text-[#9AA6B5] backdrop-blur-md hover:border-[#4B9BFF]/40 hover:text-[#E9EDF2]"
                }`}
              >
                {f.label}
              </motion.button>
            );
          })}
        </motion.div>

        {filter === "All" && (
          <p className="mt-3 text-center font-mono text-xs text-[#9AA6B5]/70">
            Showing core featured technologies ({visible.length}) &bull; Select a category above to view all {SKILLS.length} skills
          </p>
        )}

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="mt-8 grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((s, i) => (
              <motion.div
                key={s.id}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: Math.min(i * 0.03, 0.25) }}
                className="min-w-0"
              >
                <SkillCard skill={s} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Quote & Stats Bar */}
        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_280px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-[#28313D] bg-[#11151C]/90 p-5 shadow-[0_20px_50px_rgba(0,0,0,0.4)] backdrop-blur-md sm:p-6"
          >
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:divide-x sm:divide-[#28313D]">
              {TOOLBOX_STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex items-center gap-3 ${i !== 0 ? "sm:pl-4" : ""}`}
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#28313D] bg-[#171D26] text-[#4B9BFF]">
                    <s.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-display text-base font-bold text-[#E9EDF2] sm:text-lg">
                      {s.value}
                    </p>
                    <p className="font-mono text-xs text-[#9AA6B5]">{s.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Quick CTA Card */}
          <motion.a
            href="#projects"
            onClick={scrollToProjects}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -4 }}
            className="group flex items-center justify-between gap-4 rounded-2xl border border-[#4B9BFF]/30 bg-gradient-to-br from-[#171D26] to-[#11151C] p-5 backdrop-blur-xl transition-all hover:border-[#4B9BFF]/70 hover:shadow-[0_10px_35px_rgba(75,155,255,0.25)]"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-wider text-[#C5FF55]">Explore Work</p>
              <p className="font-display mt-1 text-lg font-bold text-[#E9EDF2]">
                View Featured Projects
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#28313D] bg-[#171D26] text-[#E9EDF2] transition-all duration-300 group-hover:border-[#4B9BFF] group-hover:bg-[#4B9BFF] group-hover:text-white">
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
