import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Madhu Maneesh — Java Backend Engineer | Full Stack Developer | AI Engineer",
    short_name: "Madhu Maneesh",
    description:
      "Madhu Maneesh is a Java Backend Engineer, Full Stack Developer, and AI Engineer building intelligent software systems. Based in Hyderabad, India.",
    start_url: "/",
    display: "standalone",
    background_color: "#090B10",
    theme_color: "#090B10",
    icons: [
      {
        src: "/logo-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
