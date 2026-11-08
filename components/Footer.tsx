"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Sparkle } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LINKS } from "./Navbar";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const EASE = [0.22, 1, 0.36, 1] as const;

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/madhu-maneesh", Icon: GithubIcon, iconClass: "text-white" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shetty-madhu-maneesh", Icon: LinkedinIcon, iconClass: "text-[#4ea1f3]" },
  { label: "Email", href: "mailto:madhumaneeshshetty5@gmail.com", Icon: Mail, iconClass: "text-[#4B9BFF]" },
];

const DIVIDER = "min-w-0 lg:border-l lg:border-[#28313D] lg:pl-10";

export default function Footer() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const homeHash = (hash: string) => (onHome ? hash : `/${hash}`);
  const isPrivacy = pathname === "/privacy";

  return (
    <footer className="relative border-t border-[#28313D] bg-[#090B10] overflow-hidden">
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-8 pt-14 sm:px-8 lg:px-10 lg:pt-16">
        {/* ================= Top block ================= */}
        <div className="flex flex-col items-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-[#28313D] bg-[#11151C] px-5 py-2 font-mono text-[11px] tracking-[0.32em] text-[#9AA6B5]"
          >
            {"// SYSTEM READY"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-display mt-6 text-[clamp(2.2rem,3.6vw,3.2rem)] font-extrabold leading-[1.1] tracking-tight text-[#E9EDF2]"
          >
            Engineered with <span className="text-gradient-tomorrow">Purpose.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-4 max-w-[580px] text-[16px] leading-[1.6] text-[#9AA6B5]"
          >
            Building robust backends, intelligent applications, and scalable architectures. Stay curious, keep building.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scaleX: 0.85 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.26, ease: EASE }}
            className="mt-8 flex w-full max-w-[620px] items-center gap-4"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#28313D]" />
            <Sparkle className="h-4 w-4 shrink-0 fill-[#4B9BFF] text-[#C5FF55]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#28313D]" />
          </motion.div>
        </div>

        {/* ================= Grid columns ================= */}
        <div className="mt-12 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.15fr] lg:gap-x-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.05, ease: EASE }}
            className="min-w-0"
          >
            <a href={homeHash("#top")} className="group inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#28313D] bg-[#171D26] text-lg font-bold text-[#C5FF55]">
                MM
              </span>
              <span className="font-display text-2xl font-bold tracking-tight text-[#E9EDF2]">
                Madhu Maneesh
              </span>
            </a>

            <p className="mt-4 max-w-[340px] text-[14px] leading-relaxed text-[#9AA6B5]">
              Java Backend Engineer, Full Stack Developer, and AI Engineer building intelligent software systems.
            </p>

            <div className="mt-6 flex items-center gap-2.5">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#28313D] bg-[#11151C] text-[#9AA6B5] transition-all hover:border-[#4B9BFF]/60 hover:text-[#E9EDF2]"
                >
                  <s.Icon className={`h-4 w-4 ${s.iconClass}`} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.12, ease: EASE }}
            className={DIVIDER}
          >
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#E9EDF2]">
              Navigation
            </p>
            <ul className="mt-5 space-y-3">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={homeHash(l.href)}
                    className="inline-flex items-center gap-2 text-[14px] text-[#9AA6B5] transition-colors hover:text-[#C5FF55]"
                  >
                    <ArrowRight className="h-3 w-3 text-[#4B9BFF]" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Core Focus */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.19, ease: EASE }}
            className={DIVIDER}
          >
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#E9EDF2]">
              Specialization
            </p>
            <ul className="mt-5 space-y-3 text-[14px] text-[#9AA6B5]">
              <li>Java 17 &amp; Spring Boot</li>
              <li>REST APIs &amp; Microservices</li>
              <li>LangChain4j &amp; Gemini AI</li>
              <li>Vector Databases (Pinecone)</li>
              <li>React &amp; Full Stack Web</li>
              <li>Video Processing Pipelines</li>
            </ul>
          </motion.div>

          {/* Let's Connect */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.65, delay: 0.26, ease: EASE }}
            className={DIVIDER}
          >
            <p className="font-mono text-[12px] font-semibold uppercase tracking-[0.25em] text-[#E9EDF2]">
              Direct Contact
            </p>
            <p className="mt-4 text-[13.5px] leading-relaxed text-[#9AA6B5]">
              Based in Hyderabad, India. Open to backend, AI, and full-stack software engineering opportunities.
            </p>

            <a
              href="mailto:madhumaneeshshetty5@gmail.com"
              className="mt-5 inline-flex items-center gap-2 rounded-xl border border-[#4B9BFF]/40 bg-[#4B9BFF]/10 px-4 py-2.5 text-xs font-mono font-medium text-[#4B9BFF] transition-all hover:bg-[#4B9BFF]/20 hover:text-white"
            >
              <Mail className="h-3.5 w-3.5" />
              madhumaneeshshetty5@gmail.com
            </a>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-[#28313D] pt-6 text-xs text-[#9AA6B5] sm:flex-row">
          <p>© {new Date().getFullYear()} Madhu Maneesh. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className={`transition-colors hover:text-[#E9EDF2] ${isPrivacy ? "text-[#C5FF55]" : ""}`}
            >
              Privacy Policy
            </Link>
            <a
              href="https://github.com/madhu-maneesh"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#E9EDF2]"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/shetty-madhu-maneesh"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-[#E9EDF2]"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
