import Image from "next/image";

const milestones = [
  { year: "1989", event: "Founded in Central New York" },
  { year: "1995", event: "ENERGY STAR® partner certification" },
  { year: "2005", event: "First Cooperstown historic project" },
  { year: "2015", event: "10,000th project completed" },
  { year: "2026", event: "15,000+ homes transformed" },
];

const standards = [
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    title: "In-House Certified Installers",
    subtitle: "No Subcontractors. Ever.",
    description:
      "Every New York Sash installer is a direct employee — factory-trained, licensed, and insured. We never use subcontractors, ensuring the same accountability and craftsmanship on every Cooperstown project that has built our 4.9★ reputation since 1989.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
    title: "35+ Years of Mastery",
    subtitle: "Serving Central New York Since 1989",
    description:
      "New York Sash has been transforming Central New York homes since 1989 — over 15,000 projects and counting. Our institutional knowledge of local architecture, Otsego County's climate, and the unique demands of custom residential projects is unmatched in the region."
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    title: "Custom-Made to Exact Specifications",
    subtitle: "Never Stock-Sized",
    description:
      "Every New York Sash window and door is custom-made to your opening’s exact measurements. Our field measurements account for historic settling, out-of-square frames, and original plaster reveals — ensuring a perfect fit the first time.",
  },
  {
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Lifetime Transferable Warranty",
    subtitle: "Products & Labor. For Life.",
    description:
      "New York Sash backs every project with a no-nonsense lifetime warranty covering both products and installation workmanship — fully transferable to future homeowners. Diamond Kote® finishes carry an additional 30-year no-fade guarantee.",
  },
];

export default function ArtisanStandard() {
  return (
    <section id="artisan" className="museum-section bg-[#f5f0e8] relative">
      {/* Decorative side rule */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#b8975a]/30 to-transparent hidden lg:block" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#b8975a]" />
            <span className="text-[#b8975a] text-xs tracking-[0.35em] uppercase font-light">
              The Artisan Standard
            </span>
            <div className="h-px w-8 bg-[#b8975a]" />
          </div>
          <h2
            className="text-[#0f1f3d] text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Thirty Years of
            <br />
            <em className="font-normal text-[#6b7a8d]">Uncompromising Work.</em>
          </h2>
          <p className="text-[#6b7a8d] text-lg font-light leading-relaxed">
            New York Sash was built on a single principle: the craftsman who
            sells you the window should be the craftsman who installs it. That
            philosophy hasn&apos;t changed in 35 years — and it&apos;s why
            we carry a 4.9★ rating across 15,000+ completed projects.
          </p>
        </div>

        {/* Main content: image + standards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
          {/* Left: Image with timeline */}
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/images/BD679CA2-0371-49ED-B2E5-0971F299A5C6.jpg"
                alt="New York Sash technician measuring a window opening"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover img-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f3d]/70 via-transparent to-transparent" />

              {/* Overlay text */}
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p
                  className="text-[#f5f0e8] text-3xl font-semibold leading-tight mb-2"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  &ldquo;We don&apos;t subcontract
                  <br />
                  our reputation.&rdquo;
                </p>
                <p className="text-[#b8975a] text-sm tracking-widest uppercase">
                  — New York Sash, Est. 1989
                </p>
              </div>
            </div>

            {/* Decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#b8975a]/20 pointer-events-none" />
          </div>

          {/* Right: Standards grid */}
          <div className="flex flex-col gap-10">
            {standards.map((standard, i) => (
              <div
                key={i}
                className="flex gap-6 group pb-10 border-b border-[#0f1f3d]/10 last:border-0 last:pb-0"
              >
                <div className="flex-shrink-0 w-14 h-14 bg-[#0f1f3d] flex items-center justify-center text-[#b8975a] group-hover:bg-[#b8975a] group-hover:text-[#0f1f3d] transition-all duration-300">
                  {standard.icon}
                </div>
                <div>
                  <p className="text-[#b8975a] text-[10px] tracking-[0.3em] uppercase font-medium mb-1">
                    {standard.subtitle}
                  </p>
                  <h3
                    className="text-[#0f1f3d] text-lg font-semibold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {standard.title}
                  </h3>
                  <p className="text-[#6b7a8d] text-sm font-light leading-relaxed">
                    {standard.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="border-t border-[#0f1f3d]/10 pt-16">
          <p
            className="text-center text-[#0f1f3d]/40 text-xs tracking-[0.35em] uppercase mb-12"
          >
            Our History
          </p>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-3 left-0 right-0 h-px bg-[#b8975a]/20 hidden md:block" />

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {milestones.map((milestone, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="w-6 h-6 rounded-full border-2 border-[#b8975a] bg-[#f5f0e8] mb-4 relative z-10 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#b8975a]" />
                  </div>
                  <span
                    className="text-[#0f1f3d] text-lg font-semibold mb-1"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {milestone.year}
                  </span>
                  <span className="text-[#6b7a8d] text-xs font-light leading-snug">
                    {milestone.event}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
