"use client";

import { motion } from "framer-motion";
import type { Skill } from "../data/skills";

export default function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const { Icon } = skill;
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4, delay: (index % 12) * 0.03, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4, scale: 1.02 }}
      className="group relative flex min-w-0 items-center gap-3.5 rounded-xl border border-[#28313D] bg-[#11151C]/90 p-3.5 shadow-sm backdrop-blur-xl transition-all duration-300 hover:border-[#4B9BFF]/60 hover:bg-[#171D26] hover:shadow-[0_8px_25px_rgba(75,155,255,0.18)]"
    >
      {/* Icon with glowing badge */}
      <span
        style={{ color: skill.iconColor }}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#28313D] bg-[#171D26] transition-transform duration-300 group-hover:scale-110"
      >
        <Icon className="h-5 w-5" />
      </span>

      {/* Name and Category */}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[14px] font-semibold text-[#E9EDF2] group-hover:text-white">
          {skill.name}
        </p>
        <p className="truncate font-mono text-[11px] text-[#9AA6B5]">
          {skill.category}
        </p>
      </div>

      {/* Subtle indicator dot */}
      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#28313D] transition-colors group-hover:bg-[#C5FF55]" />
    </motion.div>
  );
}
