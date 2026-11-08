"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  Mail,
  MapPin,
  RadioTower,
  Send,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./SocialIcons";

const EASE = [0.22, 1, 0.36, 1] as const;

type Card = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href: string;
  external: boolean;
  iconClass: string;
  glowClass: string;
};

const CARDS: Card[] = [
  {
    icon: Mail,
    title: "Email",
    value: "madhumaneeshshetty5@gmail.com",
    href: "mailto:madhumaneeshshetty5@gmail.com",
    external: false,
    iconClass: "bg-[#4B9BFF]/20 text-[#4B9BFF]",
    glowClass: "shadow-[0_0_30px_rgba(75,155,255,0.18)]",
  },
  {
    icon: GithubIcon,
    title: "GitHub",
    value: "github.com/madhu-maneesh",
    href: "https://github.com/madhu-maneesh",
    external: true,
    iconClass: "bg-white/10 text-white",
    glowClass: "shadow-[0_0_30px_rgba(255,255,255,0.1)]",
  },
  {
    icon: LinkedinIcon,
    title: "LinkedIn",
    value: "linkedin.com/in/shetty-madhu-maneesh",
    href: "https://www.linkedin.com/in/shetty-madhu-maneesh",
    external: true,
    iconClass: "bg-[#0A66C2]/20 text-[#4ea1f3]",
    glowClass: "shadow-[0_0_30px_rgba(78,161,243,0.18)]",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Hyderabad, India",
    href: "https://www.google.com/maps/place/Hyderabad",
    external: true,
    iconClass: "bg-[#C5FF55]/20 text-[#C5FF55]",
    glowClass: "shadow-[0_0_30px_rgba(197,255,85,0.18)]",
  },
];

type Pill = {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  iconClass: string;
};

const PILLS: Pill[] = [
  { icon: Mail, label: "Direct Email", href: "mailto:madhumaneeshshetty5@gmail.com", iconClass: "text-[#4B9BFF]" },
  { icon: GithubIcon, label: "GitHub Profile", href: "https://github.com/madhu-maneesh", iconClass: "text-white" },
  { icon: LinkedinIcon, label: "LinkedIn Network", href: "https://www.linkedin.com/in/shetty-madhu-maneesh", iconClass: "text-[#4ea1f3]" },
];

const SUBJECT_OPTIONS = [
  "Software Engineering Role",
  "Backend Development Project",
  "AI / RAG Integration",
  "Full-Stack Collaboration",
  "General Inquiry",
];

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const inFlight = useRef(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inFlight.current) return;
    inFlight.current = true;
    setStatus("submitting");
    try {
      // 1. Try internal API route
      let sent = false;
      try {
        const apiRes = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        });
        if (apiRes.ok) {
          sent = true;
        }
      } catch {}

      // 2. If static host or API route unavailable, submit directly to Web3Forms
      if (!sent) {
        const w3Res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            access_key:
              process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
              process.env.WEB3FORMS_ACCESS_KEY ||
              "",
            name,
            email,
            subject: `[MM Portfolio] ${subject}`,
            message,
            from_name: name,
            replyto: email,
          }),
        });
        const w3Data = await w3Res.json();
        if (w3Data.success) {
          sent = true;
        }
      }

      if (!sent) {
        setStatus("error");
        return;
      }

      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setStatus("success");
    } catch {
      // Fallback: mailto trigger
      window.location.href = `mailto:madhumaneeshshetty5@gmail.com?subject=${encodeURIComponent(
        subject || "Portfolio Contact"
      )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      setStatus("success");
    } finally {
      inFlight.current = false;
    }
  };

  const inputClass =
    "mt-2 h-10 w-full rounded-lg border border-[#28313D] bg-[#090B10]/90 px-3 text-[14px] text-[#E9EDF2] placeholder:text-[#9AA6B5]/40 outline-none transition focus:border-[#4B9BFF] focus:bg-[#11151C] focus:ring-1 focus:ring-[#4B9BFF]/30 lg:px-3.5";
  const labelClass = "block text-[13px] font-medium text-[#9AA6B5]";

  return (
    <section
      id="contact"
      className="relative z-10 flex min-h-screen scroll-mt-20 flex-col overflow-hidden py-24 sm:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-y-12 lg:flex-row lg:items-start lg:justify-between lg:gap-x-12">
          {/* LEFT — Intro, Contact Cards, Quote */}
          <div className="min-w-0 lg:w-[45%]">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-mono text-[13px] tracking-[0.35em] text-[#4B9BFF]"
            >
              {"// 05. GET IN TOUCH"}
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
              className="font-display mt-5 text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold leading-[1.08] tracking-tight text-[#E9EDF2]"
            >
              Let&apos;s engineer
              <br />
              intelligent solutions <span className="text-gradient-tomorrow">together.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-4 max-w-[480px] text-[16px] leading-[1.65] text-[#9AA6B5]"
            >
              Have an engineering opportunity, backend project, or want to discuss AI integration?
              I&apos;d love to connect. Reach out directly or send a message using the form.
            </motion.p>

            {/* 2 × 2 contact cards */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {CARDS.map((c, i) => (
                <motion.a
                  key={c.title}
                  href={c.href}
                  target={c.external ? "_blank" : undefined}
                  rel={c.external ? "noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: EASE }}
                  className={`group relative flex items-center gap-3 rounded-xl border border-[#28313D] bg-[#11151C]/90 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#4B9BFF]/50 hover:bg-[#171D26] ${c.glowClass}`}
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${c.iconClass}`}
                  >
                    <c.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0 pr-4">
                    <p className="text-[14px] font-bold text-[#E9EDF2]">{c.title}</p>
                    <p className="truncate text-xs text-[#9AA6B5]">{c.value}</p>
                  </div>
                  <ArrowUpRight className="absolute right-3.5 top-3.5 h-4 w-4 text-[#9AA6B5]/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C5FF55]" />
                </motion.a>
              ))}
            </div>

            {/* Quote block */}
            <motion.figure
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: EASE }}
              className="mt-8 rounded-xl border border-[#28313D] bg-[#11151C]/80 p-5 backdrop-blur-md"
            >
              <blockquote className="font-mono text-sm leading-relaxed text-[#E9EDF2]">
                &ldquo;Never hesitate to work, or someone else will take your opportunity.&rdquo;
              </blockquote>
              <footer className="mt-2 font-mono text-[11px] uppercase tracking-wider text-[#C5FF55]">
                — Madhu Maneesh
              </footer>
            </motion.figure>
          </div>

          {/* RIGHT — Clean Glass Form Panel */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            className="min-w-0 lg:w-[50%]"
          >
            <form
              onSubmit={handleSubmit}
              className="w-full rounded-2xl border border-[#28313D] bg-[#11151C]/90 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl sm:p-8"
            >
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#4B9BFF]/20 text-[#4B9BFF]">
                  <RadioTower className="h-4 w-4" />
                </span>
                <span className="font-mono text-xs tracking-wider text-[#9AA6B5]">
                  DIRECT COMMUNICATION
                </span>
              </div>

              <h3 className="font-display mt-3 text-2xl font-bold text-[#E9EDF2] sm:text-3xl">
                Send a Message
              </h3>

              <p className="mt-2 text-sm text-[#9AA6B5]">
                Fill out the details below to start a conversation.
              </p>

              <div className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Jane Doe"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jane@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-subject" className={labelClass}>
                    Subject
                  </label>
                  <div className="relative">
                    <select
                      id="contact-subject"
                      required
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className={`${inputClass} appearance-none pr-10 ${
                        subject ? "text-[#E9EDF2]" : "text-[#9AA6B5]/60"
                      }`}
                    >
                      <option value="" disabled>
                        Select a Subject
                      </option>
                      {SUBJECT_OPTIONS.map((s) => (
                        <option key={s} value={s} className="bg-[#11151C] text-[#E9EDF2]">
                          {s}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#9AA6B5]" />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    minLength={10}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your project, team opportunity, or inquiry..."
                    className={`${inputClass} h-[110px] resize-none py-2.5`}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-6 flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4B9BFF] via-[#3578CC] to-[#4B9BFF] text-sm font-semibold text-white shadow-[0_0_25px_rgba(75,155,255,0.35)] transition-all duration-300 hover:brightness-110 active:scale-[0.99] disabled:opacity-60"
              >
                <Send className="h-4 w-4" />
                {status === "submitting" ? "Sending..." : "Send Message"}
                <ArrowRight className="h-4 w-4" />
              </button>

              {status === "success" && (
                <p role="status" className="mt-3 text-center text-xs font-mono text-[#C5FF55]">
                  Message sent successfully! I will reply shortly.
                </p>
              )}
              {status === "error" && (
                <p role="status" className="mt-3 text-center text-xs font-mono text-red-400">
                  Direct connection initiated. You can also email directly to madhumaneeshshetty5@gmail.com
                </p>
              )}
            </form>

            {/* Social pills */}
            <div className="mt-6 flex flex-wrap gap-2.5">
              {PILLS.map((p) => (
                <a
                  key={p.label}
                  href={p.href}
                  target={p.href.startsWith("http") ? "_blank" : undefined}
                  rel={p.href.startsWith("http") ? "noreferrer" : undefined}
                  className="flex items-center gap-2 rounded-lg border border-[#28313D] bg-[#11151C] px-3.5 py-2 text-xs font-mono text-[#9AA6B5] transition-colors hover:border-[#4B9BFF]/50 hover:text-[#E9EDF2]"
                >
                  <p.icon className={`h-3.5 w-3.5 ${p.iconClass}`} />
                  <span>{p.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
