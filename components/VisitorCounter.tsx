"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

export default function VisitorCounter({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [count, setCount] = useState<number>(1313);

  useEffect(() => {
    let ignore = false;

    const fetchLiveCount = () => {
      fetch("/api/visitors", { cache: "no-store" })
        .then((res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (ignore) return;
          if (data && typeof data.count === "number") {
            setCount(data.count);
          }
        })
        .catch(() => {});
    };

    fetchLiveCount();
    const interval = setInterval(fetchLiveCount, 30000);

    return () => {
      ignore = true;
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      title="Portfolio visitors"
      className={`inline-flex items-center gap-2 rounded-full border border-[#28313D] bg-[#11151C]/90 px-3.5 py-1.5 font-mono text-xs text-[#9AA6B5] shadow-sm backdrop-blur-md transition-colors hover:border-[#4B9BFF]/50 ${className}`}
    >
      <Eye className="h-3.5 w-3.5 text-[#4B9BFF]" />
      <span className="font-semibold text-[#E9EDF2] tabular-nums">
        {count.toLocaleString()}
      </span>
      {!compact && <span className="text-[#9AA6B5]/70">visitors</span>}
    </div>
  );
}
