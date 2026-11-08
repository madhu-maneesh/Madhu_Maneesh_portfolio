"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Bot, Code2, Cpu, LayoutGrid, Server } from "lucide-react";
import { useMemo, useState } from "react";
import { FILTERS, PROJECTS, type ProjectCategory } from "../data/projects";
import ProjectCard from "./ProjectCard";

const FILTER_ICONS: Record<string, typeof LayoutGrid> = {
  All: LayoutGrid,
  "Full Stack": Code2,
  "AI / ML": Bot,
  Backend: Server,
  Automation: Cpu,
};

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");

  const visible = useMemo(
    () => (filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter)),
    [filter]
  );

  return (
    <section id="projects" className="relative z-10 scroll-mt-20 py-20">
      <div className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        {/* Header */}
        <div className="relative text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[13px] tracking-[0.35em] text-[#4B9BFF]"
          >
            {"// 03. FEATURED PROJECTS"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mx-auto mt-4 max-w-4xl text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold leading-tight tracking-tight text-[#E9EDF2]"
          >
            Intelligent architectures &amp;{" "}
            <span className="text-gradient-tomorrow">scalable engineering.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 text-base text-[#9AA6B5] sm:text-lg"
          >
            High-performance backend services, AI-powered systems, and full-stack applications.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-2.5"
          role="tablist"
          aria-label="Filter projects by category"
        >
          {FILTERS.map((f) => {
            const Icon = FILTER_ICONS[f.value] ?? LayoutGrid;
            const active = filter === f.value;
            return (
              <motion.button
                key={f.value}
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.value)}
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "btn-primary-glow border-[#4B9BFF]/80 bg-[#4B9BFF]/15 text-[#E9EDF2]"
                    : "border-[#28313D] bg-[#11151C]/80 text-[#9AA6B5] backdrop-blur-md hover:border-[#4B9BFF]/40 hover:text-[#E9EDF2]"
                }`}
              >
                <Icon className="h-4 w-4 text-[#4B9BFF]" />
                {f.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Grid of Projects */}
        <motion.div
          layout
          className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 50, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={p.featured && i < 2 ? "lg:col-span-1" : ""}
              >
                <ProjectCard project={p} index={i} />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
