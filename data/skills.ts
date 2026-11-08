import type { ComponentType } from "react";
import {
  SiDocker,
  SiGit,
  SiGithub,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpringboot,
  SiTailwindcss,
  SiVite,
  SiVercel,
  SiRailway,
  SiRender,
  SiPostman,
  SiIntellijidea,
  SiGooglecolab,
  SiApachemaven,
  SiHibernate,
  SiHtml5,
  SiCss,
  SiJavascript,
} from "react-icons/si";
import { Binary, Bot, Brain, Code2, DatabaseZap, Network, Server, Cpu, Layers, Globe } from "lucide-react";
import { TbApi, TbBrandVscode } from "react-icons/tb";
import { FaJava } from "react-icons/fa";

export type SkillCategory =
  | "Programming"
  | "Frontend"
  | "Backend"
  | "Databases"
  | "AI & Generative AI"
  | "Developer Tools"
  | "Core CS";

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  Icon: ComponentType<{ className?: string }>;
  iconColor: string;
  featured?: boolean;
}

export const SKILLS: Skill[] = [
  // Programming Languages
  { id: "java", name: "Java", category: "Programming", Icon: FaJava, iconColor: "#ED8B00", featured: true },
  { id: "python", name: "Python", category: "Programming", Icon: SiPython, iconColor: "#3776AB", featured: true },
  { id: "javascript", name: "JavaScript", category: "Programming", Icon: SiJavascript, iconColor: "#F7DF1E", featured: true },
  { id: "sql", name: "SQL", category: "Programming", Icon: DatabaseZap, iconColor: "#4B9BFF" },

  // Frontend Development
  { id: "react", name: "React.js", category: "Frontend", Icon: SiReact, iconColor: "#61DAFB", featured: true },
  { id: "html5", name: "HTML5", category: "Frontend", Icon: SiHtml5, iconColor: "#E34F26" },
  { id: "css3", name: "CSS3", category: "Frontend", Icon: SiCss, iconColor: "#1572B6" },
  { id: "tailwindcss", name: "Tailwind CSS", category: "Frontend", Icon: SiTailwindcss, iconColor: "#06B6D4", featured: true },
  { id: "vite", name: "Vite", category: "Frontend", Icon: SiVite, iconColor: "#646CFF" },

  // Backend Development
  { id: "spring-boot", name: "Spring Boot", category: "Backend", Icon: SiSpringboot, iconColor: "#6DB33F", featured: true },
  { id: "spring-mvc", name: "Spring MVC", category: "Backend", Icon: Server, iconColor: "#6DB33F" },
  { id: "spring-data-jpa", name: "Spring Data JPA", category: "Backend", Icon: DatabaseZap, iconColor: "#6DB33F" },
  { id: "hibernate", name: "Hibernate", category: "Backend", Icon: SiHibernate, iconColor: "#59666C" },
  { id: "nodejs", name: "Node.js", category: "Backend", Icon: SiNodedotjs, iconColor: "#339933", featured: true },
  { id: "expressjs", name: "Express.js", category: "Backend", Icon: Globe, iconColor: "#ffffff" },
  { id: "rest-api", name: "REST API Development", category: "Backend", Icon: TbApi, iconColor: "#4B9BFF", featured: true },

  // Databases
  { id: "postgresql", name: "PostgreSQL", category: "Databases", Icon: SiPostgresql, iconColor: "#4169E1", featured: true },
  { id: "mongodb", name: "MongoDB", category: "Databases", Icon: SiMongodb, iconColor: "#47A248", featured: true },
  { id: "mysql", name: "MySQL", category: "Databases", Icon: SiMysql, iconColor: "#4479A1" },
  { id: "h2", name: "H2 Database", category: "Databases", Icon: DatabaseZap, iconColor: "#0000BB" },

  // AI & Generative AI
  { id: "spring-ai", name: "Spring AI", category: "AI & Generative AI", Icon: Cpu, iconColor: "#6DB33F" },
  { id: "langchain4j", name: "LangChain4j", category: "AI & Generative AI", Icon: Brain, iconColor: "#C5FF55", featured: true },
  { id: "gemini-api", name: "Google Gemini API", category: "AI & Generative AI", Icon: Bot, iconColor: "#4285F4", featured: true },
  { id: "rag", name: "Retrieval-Augmented Generation (RAG)", category: "AI & Generative AI", Icon: Layers, iconColor: "#C5FF55", featured: true },
  { id: "vector-db", name: "Vector Databases", category: "AI & Generative AI", Icon: DatabaseZap, iconColor: "#4B9BFF" },
  { id: "pinecone", name: "Pinecone", category: "AI & Generative AI", Icon: Network, iconColor: "#4B9BFF", featured: true },
  { id: "embeddings", name: "Embeddings", category: "AI & Generative AI", Icon: Binary, iconColor: "#C5FF55" },

  // Developer Tools & Technologies
  { id: "git", name: "Git", category: "Developer Tools", Icon: SiGit, iconColor: "#F05032", featured: true },
  { id: "github", name: "GitHub", category: "Developer Tools", Icon: SiGithub, iconColor: "#ffffff", featured: true },
  { id: "docker", name: "Docker", category: "Developer Tools", Icon: SiDocker, iconColor: "#2496ED", featured: true },
  { id: "maven", name: "Maven", category: "Developer Tools", Icon: SiApachemaven, iconColor: "#C71A36" },
  { id: "postman", name: "Postman", category: "Developer Tools", Icon: SiPostman, iconColor: "#FF6C37" },
  { id: "vscode", name: "VS Code", category: "Developer Tools", Icon: TbBrandVscode, iconColor: "#007ACC" },
  { id: "intellij", name: "IntelliJ IDEA", category: "Developer Tools", Icon: SiIntellijidea, iconColor: "#000000" },
  { id: "colab", name: "Google Colab", category: "Developer Tools", Icon: SiGooglecolab, iconColor: "#F9AB00" },
  { id: "vercel", name: "Vercel", category: "Developer Tools", Icon: SiVercel, iconColor: "#ffffff" },
  { id: "render", name: "Render", category: "Developer Tools", Icon: SiRender, iconColor: "#46E3B7" },
  { id: "railway", name: "Railway", category: "Developer Tools", Icon: SiRailway, iconColor: "#0B0D0E" },

  // Core Computer Science
  { id: "dsa", name: "Data Structures and Algorithms", category: "Core CS", Icon: Code2, iconColor: "#C5FF55", featured: true },
  { id: "oop", name: "Object-Oriented Programming", category: "Core CS", Icon: Layers, iconColor: "#4B9BFF" },
  { id: "dbms", name: "DBMS", category: "Core CS", Icon: DatabaseZap, iconColor: "#4B9BFF" },
  { id: "os", name: "Operating Systems", category: "Core CS", Icon: Cpu, iconColor: "#9AA6B5" },
  { id: "cn", name: "Computer Networks", category: "Core CS", Icon: Network, iconColor: "#4B9BFF" },
];

export const SKILL_CATEGORIES: { label: string; value: SkillCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "Programming", value: "Programming" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
  { label: "Databases", value: "Databases" },
  { label: "AI & Generative AI", value: "AI & Generative AI" },
  { label: "Developer Tools", value: "Developer Tools" },
  { label: "Core CS", value: "Core CS" },
];
