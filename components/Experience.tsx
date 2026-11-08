"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Server } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1] as const;

const CONTRIBUTIONS = [
  "Developed a Java-based file watcher service to monitor incoming interview recordings.",
  "Worked with rsync to transfer video recordings from a remote Sentinel VM.",
  "Implemented automated recording movement from incoming directories to archive storage.",
  "Integrated recording paths with interview history database records.",
  "Contributed to REST APIs for recording retrieval, streaming and pipeline status.",
  "Worked with Linux file systems and FFmpeg-based video processing.",
];

const TECHNOLOGIES = [
  "Java",
  "Spring Boot",
  "Linux",
  "rsync",
  "FFmpeg",
  "REST APIs",
  "Database Integration",
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative z-10 scroll-mt-20 py-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-mono text-[13px] tracking-[0.35em] text-[#4B9BFF]"
          >
            {"// 02. EXPERIENCE"}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-display mt-4 text-[clamp(2.2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-[#E9EDF2]"
          >
            Engineering in <span className="text-gradient-tomorrow">Production.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-4 text-[16px] leading-relaxed text-[#9AA6B5]"
          >
            Hands-on backend systems engineering for real-world platforms, pipelines, and distributed data workflows.
          </motion.p>
        </div>

        {/* Experience Timeline */}
        <div className="relative mt-12">
          {/* Vertical timeline connector */}
          <div className="absolute left-4 top-4 bottom-4 hidden w-px bg-gradient-to-b from-[#4B9BFF] via-[#28313D] to-transparent sm:block sm:left-6" />

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.75, ease: EASE }}
            className="relative sm:pl-16"
          >
            {/* Timeline icon */}
            <div className="absolute left-2.5 top-5 hidden h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full border border-[#4B9BFF] bg-[#11151C] text-[#4B9BFF] shadow-[0_0_12px_rgba(75,155,255,0.4)] sm:flex">
              <Briefcase className="h-3.5 w-3.5" />
            </div>

            {/* Experience Card */}
            <div className="rounded-2xl border border-[#28313D] bg-[#11151C]/90 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.45)] backdrop-blur-md sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#28313D] pb-6">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-md border border-[#4B9BFF]/30 bg-[#4B9BFF]/10 px-2.5 py-1 text-xs font-mono font-medium text-[#4B9BFF]">
                    <Server className="h-3.5 w-3.5" />
                    AI-Powered Recruitment Platform
                  </div>
                  <h3 className="font-display mt-2.5 text-2xl font-bold text-[#E9EDF2]">
                    Software Engineer Intern
                  </h3>
                  <p className="mt-1 text-base font-semibold text-[#C5FF55]">
                    AIRA HR
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#28313D] bg-[#171D26] px-3.5 py-1.5 font-mono text-xs text-[#9AA6B5]">
                  <Calendar className="h-3.5 w-3.5 text-[#4B9BFF]" />
                  Internship
                </span>
              </div>

              {/* Description */}
              <p className="mt-6 text-[15.5px] leading-relaxed text-[#E9EDF2]/90">
                Worked on backend engineering for an AI-powered recruitment platform, contributing to the interview recording and video-processing pipeline.
              </p>

              {/* Key Contributions */}
              <div className="mt-6">
                <h4 className="font-mono text-xs uppercase tracking-wider text-[#9AA6B5]">
                  Key Contributions & Architecture
                </h4>
                <ul className="mt-3.5 grid gap-3 sm:grid-cols-2">
                  {CONTRIBUTIONS.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 rounded-lg border border-[#28313D]/60 bg-[#171D26]/50 p-3 text-sm text-[#9AA6B5] transition-colors hover:border-[#4B9BFF]/40 hover:text-[#E9EDF2]"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#C5FF55]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack tags */}
              <div className="mt-6 border-t border-[#28313D] pt-5">
                <p className="font-mono text-xs uppercase tracking-wider text-[#9AA6B5]">
                  Technologies Used
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {TECHNOLOGIES.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-[#28313D] bg-[#171D26] px-3 py-1 font-mono text-xs text-[#E9EDF2]/80 transition-colors hover:border-[#4B9BFF]/50 hover:text-[#4B9BFF]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

