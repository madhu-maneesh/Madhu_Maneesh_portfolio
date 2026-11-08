"use client";

import { motion } from "framer-motion";
import { Bot, Database, ExternalLink, FileText, Globe, Link as LinkIcon, Radio, Send, Star } from "lucide-react";
import type { Project } from "../data/projects";
import { GithubIcon } from "./SocialIcons";

function ProjectVisual({ id }: { id: string }) {
  switch (id) {
    case "vectorvault":
      return (
        <div className="flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#111927] to-[#172338]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-md border border-[#4B9BFF]/40 bg-[#4B9BFF]/10 px-2.5 py-1 font-mono text-xs text-[#4B9BFF]">
              <Database className="h-3.5 w-3.5" /> Vector DB + RAG
            </span>
            <span className="font-mono text-xs text-[#C5FF55]">Java 17</span>
          </div>
          <div className="my-auto space-y-2 py-3 font-mono text-xs">
            <div className="flex items-center gap-2 text-[#9AA6B5]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#4B9BFF]" />
              <span>Doc Ingestion &rarr; Chunking &rarr; Embeddings</span>
            </div>
            <div className="flex items-center gap-2 text-[#C5FF55]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5FF55]" />
              <span>Pinecone Vector Search &rarr; Gemini RAG</span>
            </div>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-[#9AA6B5]/70 border-t border-[#28313D]/60 pt-2">
            <span>LangChain4j + Spring Boot</span>
            <span>Apache PDFBox</span>
          </div>
        </div>
      );

    case "rscorer":
      return (
        <div className="flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#121b22] to-[#192b38]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-md border border-[#C5FF55]/40 bg-[#C5FF55]/10 px-2.5 py-1 font-mono text-xs text-[#C5FF55]">
              <FileText className="h-3.5 w-3.5" /> ATS Scoring Engine
            </span>
            <span className="font-mono text-xs text-[#4B9BFF]">Live App</span>
          </div>
          <div className="my-auto space-y-2 py-3 font-mono text-xs">
            <div className="flex items-center justify-between rounded bg-[#11151C]/80 px-3 py-1.5 border border-[#28313D]">
              <span className="text-[#E9EDF2]">PDF / DOCX Parser</span>
              <span className="text-[#C5FF55]">Score: 94/100</span>
            </div>
            <div className="text-[11px] text-[#9AA6B5]">
              Gemini AI Profile Analysis &bull; Keyword Matcher
            </div>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-[#9AA6B5]/70 border-t border-[#28313D]/60 pt-2">
            <span>React + Node.js + Express</span>
            <span>Mammoth.js</span>
          </div>
        </div>
      );

    case "shortify":
      return (
        <div className="flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#141822] to-[#1c2230]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-md border border-[#4B9BFF]/30 bg-[#4B9BFF]/10 px-2.5 py-1 font-mono text-xs text-[#4B9BFF]">
              <LinkIcon className="h-3.5 w-3.5" /> URL Router
            </span>
            <span className="font-mono text-xs text-[#9AA6B5]">PostgreSQL</span>
          </div>
          <div className="my-auto py-3 font-mono text-xs text-center">
            <div className="rounded border border-[#28313D] bg-[#11151C]/90 p-2 text-[#4B9BFF]">
              https://short.io/3xK9p &rarr; Target URL
            </div>
            <p className="mt-2 text-[11px] text-[#9AA6B5]">Spring Boot REST API + React UI</p>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-[#9AA6B5]/70 border-t border-[#28313D]/60 pt-2">
            <span>Hash Key Generator</span>
            <span>Relational Indexing</span>
          </div>
        </div>
      );

    case "tripnest":
      return (
        <div className="flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#121620] to-[#18202c]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-md border border-[#28313D] bg-[#171D26] px-2.5 py-1 font-mono text-xs text-[#E9EDF2]">
              <Globe className="h-3.5 w-3.5 text-[#4B9BFF]" /> MERN Platform
            </span>
            <span className="font-mono text-xs text-[#9AA6B5]">MongoDB</span>
          </div>
          <div className="my-auto space-y-1.5 py-3 font-mono text-xs text-[#9AA6B5]">
            <p className="text-[#E9EDF2]">Travel Property Listing & Booking</p>
            <p className="text-[11px]">Express REST APIs &bull; React State Store</p>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-[#9AA6B5]/70 border-t border-[#28313D]/60 pt-2">
            <span>Full Stack Architecture</span>
            <span>CRUD Operations</span>
          </div>
        </div>
      );

    case "agrobench":
      return (
        <div className="flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#121919] to-[#172624]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-md border border-[#C5FF55]/30 bg-[#C5FF55]/10 px-2.5 py-1 font-mono text-xs text-[#C5FF55]">
              <Bot className="h-3.5 w-3.5" /> Agri-Vision ML
            </span>
            <span className="font-mono text-xs text-[#9AA6B5]">Python</span>
          </div>
          <div className="my-auto space-y-1.5 py-3 font-mono text-xs text-[#9AA6B5]">
            <p className="text-[#E9EDF2]">Agricultural Assistance Inference</p>
            <p className="text-[11px] text-[#C5FF55]">Python Inference &bull; Crop Disease Detection</p>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-[#9AA6B5]/70 border-t border-[#28313D]/60 pt-2">
            <span>Machine Learning</span>
            <span>Google Colab</span>
          </div>
        </div>
      );

    case "smart-notify":
      return (
        <div className="flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#141822] to-[#1c2230]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-md border border-[#4B9BFF]/30 bg-[#4B9BFF]/10 px-2.5 py-1 font-mono text-xs text-[#4B9BFF]">
              <Radio className="h-3.5 w-3.5" /> Event Dispatcher
            </span>
            <span className="font-mono text-xs text-[#C5FF55]">Spring Boot</span>
          </div>
          <div className="my-auto space-y-1.5 py-3 font-mono text-xs text-[#9AA6B5]">
            <p className="text-[#E9EDF2]">Notification Management Service</p>
            <p className="text-[11px]">Multi-channel Alert Routing & Queueing</p>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-[#9AA6B5]/70 border-t border-[#28313D]/60 pt-2">
            <span>Backend Engineering</span>
            <span>Java</span>
          </div>
        </div>
      );

    case "toptech":
      return (
        <div className="flex h-full w-full flex-col justify-between p-6 bg-gradient-to-br from-[#131b26] to-[#1a2839]">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 rounded-md border border-[#4B9BFF]/40 bg-[#4B9BFF]/10 px-2.5 py-1 font-mono text-xs text-[#4B9BFF]">
              <Send className="h-3.5 w-3.5" /> Telegram Bot API
            </span>
            <span className="font-mono text-xs text-[#C5FF55]">Real-time</span>
          </div>
          <div className="my-auto space-y-1.5 py-3 font-mono text-xs text-[#9AA6B5]">
            <p className="text-[#E9EDF2]">Hacker News Tech Broadcasts</p>
            <p className="text-[11px] text-[#4B9BFF]">Automated Feed Ingestion & Formatting</p>
          </div>
          <div className="flex items-center justify-between font-mono text-[11px] text-[#9AA6B5]/70 border-t border-[#28313D]/60 pt-2">
            <span>Spring Boot</span>
            <span>Java Bot</span>
          </div>
        </div>
      );

    default:
      return null;
  }
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border bg-[#11151C]/90 backdrop-blur-xl transition-all duration-300 ${
        project.featured
          ? "border-[#4B9BFF]/40 shadow-[0_0_35px_rgba(75,155,255,0.18)] hover:border-[#4B9BFF]/80"
          : "border-[#28313D] hover:border-[#4B9BFF]/40 hover:shadow-[0_15px_40px_rgba(0,0,0,0.5)]"
      }`}
    >
      {/* Featured badge */}
      {project.featured && (
        <span className="absolute left-4 top-4 z-20 inline-flex items-center gap-1.5 rounded-full border border-[#C5FF55]/40 bg-[#090B10]/90 px-3 py-1 text-xs font-semibold text-[#C5FF55] shadow-[0_0_15px_rgba(197,255,85,0.3)] backdrop-blur-md">
          <Star className="h-3 w-3 fill-[#C5FF55]" />
          Featured Architecture
        </span>
      )}

      {/* Visual Header */}
      <div className="relative block aspect-[16/9] w-full overflow-hidden border-b border-[#28313D]">
        <ProjectVisual id={project.id} />
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        {/* Category & Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-md border border-[#28313D] bg-[#171D26] px-2.5 py-1 font-mono text-[11px] text-[#9AA6B5]"
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-display mt-4 text-[20px] font-bold tracking-tight text-[#E9EDF2]">
          {project.name}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-[#9AA6B5]">
          {project.oneliner}
        </p>

        {/* Action Buttons: Only show when URLs exist! */}
        <div className="mt-6 flex items-center justify-between border-t border-[#28313D] pt-4">
          <div>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-[#C5FF55] transition-colors hover:text-[#d4ff82]"
              >
                Live Demo
                <ExternalLink className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5" />
              </a>
            ) : (
              <span className="font-mono text-xs text-[#9AA6B5]/50">Engineered System</span>
            )}
          </div>

          <div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} repository`}
                title="View GitHub Repository"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#28313D] bg-[#171D26] text-[#9AA6B5] transition-all duration-300 hover:border-[#4B9BFF]/60 hover:bg-[#4B9BFF]/10 hover:text-[#E9EDF2]"
              >
                <GithubIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
