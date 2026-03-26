import Image from "next/image";

const expertiseItems = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    title: "We Understand Your Home",
    description:
      "Older homes weren't built to standard dimensions. We measure every opening individually, accounting for decades of settling, out-of-square frames, and original plaster reveals — then custom-make each window and door to fit perfectly.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
    title: "Preserving Street-Side Character",
    description:
      "The exterior appearance of your home is what makes Cooperstown, Cooperstown. Our profiles are selected to match the proportions and sight lines of original windows — so the character of the street stays intact.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Modern Performance, Historic Look",
    description:
      "You shouldn't have to choose between comfort and character. Our windows deliver ENERGY STAR® performance — LowE glass, Argon fill, and Duralite® Warm Edge Spacers — wrapped in profiles that look like they've always been there.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "The Same Team, Start to Finish",
    description:
      "The specialist who visits your home is part of the same in-house team that installs your windows. No handoffs to subcontractors, no surprises — just one accountable team that takes pride in every project they complete.",
  },
];

export default function VillageBoard() {
  return (
    <section
      id="village-board"
      className="museum-section bg-[#0f1f3d] relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(245,240,232,0.3) 40px, rgba(245,240,232,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(245,240,232,0.3) 40px, rgba(245,240,232,0.3) 41px)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#b8975a]" />
            <span className="text-[#b8975a] text-xs tracking-[0.35em] uppercase font-light">
              Our Expertise
            </span>
          </div>
          <h2
            className="text-[#f5f0e8] text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built for Homes
            <br />
            <em className="font-normal text-[#b8975a]">That Have a Story.</em>
          </h2>
          <p className="text-[#f5f0e8]/60 text-lg font-light leading-relaxed">
            Cooperstown&apos;s homes aren&apos;t just old — they&apos;re
            irreplaceable. New York Sash has spent 35+ years working on exactly
            these kinds of properties across Central New York. We know what it
            takes to replace windows and doors in a way that honors the home
            rather than compromising it.
          </p>
        </div>

        {/* Two-column layout: docs grid + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Expertise items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {expertiseItems.map((item, i) => (
              <div
                key={i}
                className="group border border-[#f5f0e8]/10 hover:border-[#b8975a]/40 p-8 transition-all duration-500 hover:bg-[#f5f0e8]/3"
              >
                <div className="text-[#b8975a] mb-5 transition-transform duration-300 group-hover:scale-110 origin-left">
                  {item.icon}
                </div>
                <h3
                  className="text-[#f5f0e8] text-base font-semibold mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#f5f0e8]/50 text-sm font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Image panel */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/IMG_4770.jpg"
                alt="Federal-style home close-up showing original window detail"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#b8975a] p-6 max-w-[200px]">
              <p
                className="text-[#0f1f3d] text-2xl font-bold leading-none mb-1"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                35+
              </p>
              <p className="text-[#0f1f3d]/80 text-xs tracking-widest uppercase font-semibold">
                Years of Experience
              </p>
            </div>

            {/* Decorative border */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-[#b8975a]/20 pointer-events-none" />
          </div>
        </div>

        {/* Bottom note */}
        <div className="mt-20 pt-12 border-t border-[#f5f0e8]/10">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0">
              <svg
                className="w-8 h-8 text-[#b8975a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <p className="text-[#f5f0e8]/50 text-sm font-light leading-relaxed max-w-2xl">
              <span className="text-[#f5f0e8]/80 font-medium">
                Every project starts with a dedicated in-home consultation.
              </span>{" "}
              We visit your property, assess the existing windows and doors in
              context, and recommend replacements that respect what makes your
              home special — before a single measurement is taken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
