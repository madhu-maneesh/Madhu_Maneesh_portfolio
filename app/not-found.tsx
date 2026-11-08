import Link from "next/link";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#090B10] px-5 text-center">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#4B9BFF]/10 blur-[120px]" />
        <div className="noise-overlay absolute inset-0 opacity-20" />
      </div>

      <div className="relative z-10">
        <p className="font-mono text-[13px] tracking-[0.35em] text-[#4B9BFF]">
          {"// 404"}
        </p>
        <h1 className="font-display mt-6 text-[clamp(2.75rem,8vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-[#E9EDF2]">
          Page <span className="text-gradient-tomorrow">Not Found</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-[16px] leading-relaxed text-[#9AA6B5]">
          The resource you&apos;re looking for doesn&apos;t exist or has moved.
          Let&apos;s get you back on track.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="btn-primary-glow inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4B9BFF] to-[#3578CC] px-7 py-3.5 text-[15px] font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            Back Home
          </Link>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl border border-[#28313D] bg-[#11151C] px-7 py-3.5 text-[15px] font-semibold text-[#E9EDF2] backdrop-blur-md transition hover:border-[#4B9BFF]/50"
          >
            View Projects
          </Link>
        </div>
      </div>
    </main>
  );
}
