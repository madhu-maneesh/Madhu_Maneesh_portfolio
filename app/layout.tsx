import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://madhumaneesh.dev"),
  applicationName: "MM — Madhu Maneesh Portfolio",
  title: "MM | Madhu Maneesh — Java Backend Engineer",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  description:
    "Madhu Maneesh is a Java Backend Engineer, Full Stack Developer, and AI Engineer passionate about building intelligent software systems. Based in Hyderabad, India.",
  keywords: ["Madhu Maneesh", "Java developer", "backend engineer", "full-stack developer", "AI engineer", "portfolio", "Hyderabad"],
  authors: [{ name: "Madhu Maneesh" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Madhu Maneesh — Java Backend Engineer | Full Stack Developer | AI Engineer",
    description:
      "Java Backend Engineer, Full Stack Developer, and AI Engineer building intelligent software systems.",
    type: "website",
    url: "https://madhumaneesh.dev",
    siteName: "Madhu Maneesh — Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Madhu Maneesh — Java Backend Engineer | Full Stack Developer | AI Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Madhu Maneesh — Java Backend Engineer | Full Stack Developer | AI Engineer",
    description:
      "Java Backend Engineer, Full Stack Developer, and AI Engineer building intelligent software systems.",
    images: ["/og.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Madhu Maneesh",
      url: "https://madhumaneesh.dev",
      sameAs: [
        "https://github.com/madhu-maneesh",
        "https://www.linkedin.com/in/shetty-madhu-maneesh",
      ],
    },
    {
      "@type": "WebSite",
      name: "Madhu Maneesh — Java Backend Engineer | Full Stack Developer | AI Engineer",
      url: "https://madhumaneesh.dev",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-[#090B10] text-[#E9EDF2] antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
