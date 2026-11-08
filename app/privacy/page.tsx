import type { Metadata } from "next";
import PrivacyContent from "../../components/PrivacyContent";

export const metadata: Metadata = {
  title: "Privacy Policy — Madhu Maneesh",
  description:
    "How this portfolio handles data — contact form details, email delivery, and retention in plain language.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyContent />;
}
