import Image from "next/image";
import NysLogo from "./NysLogo";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0f1f3d]">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_1049.jpg"
          alt="Federal-style home with New York Sash sign on the lawn"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1f3d]/60 via-[#0f1f3d]/40 to-[#0f1f3d]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1f3d]/50 via-transparent to-[#0f1f3d]/30" />
      </div>

      {/* Decorative corner elements */}
      <div className="absolute top-32 left-8 md:left-16 w-16 h-16 border-l border-t border-[#b8975a]/40" />
      <div className="absolute top-32 right-8 md:right-16 w-16 h-16 border-r border-t border-[#b8975a]/40" />
      <div className="absolute bottom-16 left-8 md:left-16 w-16 h-16 border-l border-b border-[#b8975a]/40" />
      <div className="absolute bottom-16 right-8 md:right-16 w-16 h-16 border-r border-b border-[#b8975a]/40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12 text-center">
        {/* NYS Brand lockup */}
        <div className="flex flex-col items-center gap-4 mb-10">
          <NysLogo className="h-10 w-auto opacity-90" />
          <div className="flex items-center gap-4">
            <div className="h-px w-10 bg-[#b8975a]" />
            <span className="text-[#b8975a] text-xs tracking-[0.35em] uppercase font-light">
              Cooperstown, New York
            </span>
            <div className="h-px w-10 bg-[#b8975a]" />
          </div>
        </div>

        {/* Main Headline */}
        <h1
          className="text-[#f5f0e8] text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] mb-8"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Preserving Cooperstown&apos;s
          <br />
          <em className="text-[#b8975a] font-normal">Historic Character.</em>
        </h1>

        {/* Subheadline */}
        <p className="text-[#f5f0e8]/75 text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto mb-14 tracking-wide">
          Architectural-grade window and door replacements crafted for
          Cooperstown&apos;s historic homes — you&apos;re in expert hands.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.newyorksash.com/quote"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 bg-[#b8975a] hover:bg-[#d4b07a] text-[#0f1f3d] font-semibold text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-[#b8975a]/30 hover:-translate-y-0.5"
          >
            Schedule a Consultation
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#products"
            className="inline-flex items-center gap-3 border border-[#f5f0e8]/30 hover:border-[#b8975a] text-[#f5f0e8]/80 hover:text-[#b8975a] font-light text-sm tracking-widest uppercase px-10 py-4 transition-all duration-300"
          >
            View Our Work
          </a>
        </div>

        {/* Trust badges */}
        <div className="mt-20 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12">
          {[
            { value: "35+", label: "Years of Craftsmanship" },
            { value: "15,000+", label: "Projects Completed" },
            { value: "4.9★", label: "Customer Rating" },
          ].map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-1">
              <span
                className="text-[#b8975a] text-2xl font-semibold"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {badge.value}
              </span>
              <span className="text-[#f5f0e8]/50 text-xs tracking-widest uppercase">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#f5f0e8]/30 text-[10px] tracking-[0.3em] uppercase">
          Scroll
        </span>
        <svg
          className="w-4 h-4 text-[#b8975a]/60"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
