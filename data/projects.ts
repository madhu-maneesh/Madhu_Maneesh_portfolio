export type ProjectCategory = "Full Stack" | "AI / ML" | "Backend" | "Automation";

export interface Project {
  id: string;
  name: string;
  oneliner: string;
  liveUrl?: string;
  githubUrl?: string;
  category: ProjectCategory;
  tags: string[];
  image?: string;
  featured?: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: "vectorvault",
    name: "VectorVault",
    oneliner:
      "A Retrieval-Augmented Generation application that enables users to upload documents, retrieve relevant contextual information using vector search, and interact with their documents through AI-powered question answering.",
    githubUrl: "https://github.com/madhu-maneesh/vectorvault",
    category: "AI / ML",
    tags: ["Java 17", "Spring Boot", "LangChain4j", "Gemini", "Pinecone", "PDFBox"],
    featured: true,
  },
  {
    id: "rscorer",
    name: "R-Scorer",
    oneliner:
      "An AI-powered resume analysis platform that extracts information from PDF and DOCX resumes and evaluates candidate profiles using AI-powered analysis and ATS-style scoring.",
    liveUrl: "https://rscore.vercel.app",
    githubUrl: "https://github.com/madhu-maneesh/Rscore",
    category: "Full Stack",
    tags: ["React", "Node.js", "Express.js", "Gemini API", "PDF Parse"],
    featured: true,
  },
  {
    id: "shortify",
    name: "Shortify",
    oneliner:
      "A URL-shortening application with a Java Spring Boot backend, React frontend and PostgreSQL database, demonstrating REST API development and relational database integration.",
    githubUrl: "https://github.com/madhu-maneesh/Shortify",
    category: "Full Stack",
    tags: ["Java", "Spring Boot", "React", "PostgreSQL"],
  },
  {
    id: "tripnest",
    name: "TripNest",
    oneliner:
      "A MERN-stack travel property listing application built to demonstrate full-stack development, REST API integration and database-driven web applications.",
    githubUrl: "https://github.com/madhu-maneesh/TripNest",
    category: "Full Stack",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js"],
  },
  {
    id: "agrobench",
    name: "AgroBench / Agrobot",
    oneliner:
      "An AI-powered agricultural assistance application combining a React frontend with Python backend services for machine learning inference and agriculture-related assistance.",
    category: "AI / ML",
    tags: ["React", "Python", "Machine Learning", "Google Colab"],
  },
  {
    id: "smart-notify",
    name: "Smart Notify",
    oneliner:
      "A notification-focused software application for backend engineering and notification pipeline management.",
    githubUrl: "https://github.com/madhu-maneesh",
    category: "Backend",
    tags: ["Java", "Spring Boot", "Notifications"],
  },
  {
    id: "toptech",
    name: "TopTech Telegram Bot",
    oneliner:
      "A Telegram bot developed using Java and Spring Boot, demonstrating backend application development and Telegram bot integration.",
    githubUrl: "https://github.com/madhu-maneesh/toptech",
    category: "Automation",
    tags: ["Java", "Spring Boot", "Telegram Bot"],
  },
];

export const FILTERS: { label: string; value: ProjectCategory | "All" }[] = [
  { label: "All Projects", value: "All" },
  { label: "Full Stack", value: "Full Stack" },
  { label: "AI / ML", value: "AI / ML" },
  { label: "Backend", value: "Backend" },
  { label: "Automation", value: "Automation" },
];
