"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export const LINKS = [
  { label: "Home", href: "#top" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const contactEl = document.getElementById("contact");
      const skillsEl = document.getElementById("skills");
      const projectsEl = document.getElementById("projects");
      const experienceEl = document.getElementById("experience");
      const aboutEl = document.getElementById("about");
      const contactTop = contactEl?.getBoundingClientRect().top ?? Infinity;
      const skillsTop = skillsEl?.getBoundingClientRect().top ?? Infinity;
      const projectsTop = projectsEl?.getBoundingClientRect().top ?? Infinity;
      const experienceTop = experienceEl?.getBoundingClientRect().top ?? Infinity;
      const aboutTop = aboutEl?.getBoundingClientRect().top ?? Infinity;
      if (contactTop <= 140) setActive("Contact");
      else if (skillsTop <= 140) setActive("Skills");
      else if (projectsTop <= 140) setActive("Projects");
      else if (experienceTop <= 140) setActive("Experience");
      else if (aboutTop <= 140) setActive("About");
      else setActive("Home");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? "glass-strong shadow-[0_8px_40px_rgba(0,0,0,0.45)]" : "bg-transparent"
        }`}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        {/* Logo */}
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-[#171D26] border border-[#28313D]">
            <span className="font-display text-lg font-bold text-[#C5FF55]">MM</span>
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-[#E9EDF2]">
            Madhu Maneesh
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => {
            const isActive = l.label === active;
            return (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith("http") ? "_blank" : undefined}
                  rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                  className={`group relative text-[15px] transition-colors ${isActive ? "font-medium text-[#C5FF55]" : "text-[#9AA6B5] hover:text-[#E9EDF2]"
                    }`}
                >
                  {l.label}
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-[#4B9BFF] to-[#C5FF55] transition-all duration-300 ${isActive ? "w-full shadow-[0_0_12px_rgba(75,155,255,0.9)]" : "w-0 group-hover:w-full"
                      }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        {/* CTA */}
        <div className="hidden lg:block">
          <MagneticButton href="https://www.linkedin.com/in/shetty-madhu-maneesh">
            Let&apos;s Connect
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </MagneticButton>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="glass flex h-11 w-11 items-center justify-center rounded-xl text-[#E9EDF2] lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="glass-strong overflow-hidden lg:hidden"
          >
            <ul className="space-y-1 px-5 py-4">
              {LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(false);
                      history.pushState(null, "", l.href);
                      setTimeout(() => {
                        document
                          .getElementById(l.href.slice(1))
                          ?.scrollIntoView({ behavior: "smooth" });
                      }, 350);
                    }}
                    className={`block rounded-lg px-3 py-2.5 text-[15px] transition ${l.label === active
                        ? "bg-[#4B9BFF]/15 text-[#C5FF55]"
                        : "text-[#9AA6B5] hover:bg-white/5 hover:text-[#E9EDF2]"
                      }`}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="https://www.linkedin.com/in/shetty-madhu-maneesh"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-glow flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4B9BFF] to-[#3578CC] px-5 py-3 text-sm font-semibold text-white"
                >
                  Let&apos;s Connect <ArrowRight className="h-4 w-4" />
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

function MagneticButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        setPos({
          x: (e.clientX - r.left - r.width / 2) * 0.18,
          y: (e.clientY - r.top - r.height / 2) * 0.28,
        });
      }}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 200, damping: 16 }}
      className="group btn-primary-glow shimmer-sweep inline-flex items-center gap-2 rounded-full border border-[#4B9BFF]/40 bg-[#4B9BFF]/10 px-6 py-2.5 text-sm font-medium text-[#E9EDF2] backdrop-blur-md transition-colors hover:border-[#4B9BFF]/70 hover:bg-[#4B9BFF]/25"
    >
      {children}
    </motion.a>
  );
}
