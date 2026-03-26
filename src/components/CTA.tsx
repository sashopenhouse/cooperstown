import Image from "next/image";

const consultationSteps = [
  {
    step: "01",
    title: "Historic Assessment",
    description:
      "We visit your home and document existing window and door conditions, architectural style, and the character details that make it irreplaceable.",
  },
  {
    step: "02",
    title: "Design Specification",
    description:
      "Our team prepares period-correct product specifications with profile drawings, material options, and finish recommendations.",
  },
  {
    step: "03",
    title: "Seamless Project Management",
    description:
      "We handle every detail of the project from start to finish — with the same in-house team throughout. No subcontractors, no handoffs.",
  },
  {
    step: "04",
    title: "Artisan Installation",
    description:
      "Our certified in-house team installs your windows and doors with the precision and care your home deserves.",
  },
];

export default function CTA() {
  return (
    <section id="cta" className="museum-section bg-[#0f1f3d] relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/IMG_4760.jpg"
          alt="Exterior of a beautiful home served by New York Sash"
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top: Process steps */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="h-px w-8 bg-[#b8975a]" />
              <span className="text-[#b8975a] text-xs tracking-[0.35em] uppercase font-light">
                Our Process
              </span>
              <div className="h-px w-8 bg-[#b8975a]" />
            </div>
            <h2
              className="text-[#f5f0e8] text-4xl md:text-5xl font-semibold leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              From First Visit to
              <br />
              <em className="font-normal text-[#b8975a]">Final Installation.</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationSteps.map((step, i) => (
              <div key={i} className="relative">
                {/* Connector line */}
                {i < consultationSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#b8975a]/20 z-0" />
                )}
                <div className="relative z-10">
                  <span
                    className="text-[#b8975a]/30 text-6xl font-bold leading-none block mb-4"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.step}
                  </span>
                  <h3
                    className="text-[#f5f0e8] text-lg font-semibold mb-3"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#f5f0e8]/50 text-sm font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA block */}
        <div className="border border-[#b8975a]/30 p-10 md:p-16 lg:p-20 relative">
          {/* Corner ornaments */}
          <div className="absolute top-4 left-4 w-8 h-8 border-l border-t border-[#b8975a]/50" />
          <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-[#b8975a]/50" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-[#b8975a]/50" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-r border-b border-[#b8975a]/50" />

          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px w-12 bg-[#b8975a]/50" />
              <svg
                className="w-5 h-5 text-[#b8975a]"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <div className="h-px w-12 bg-[#b8975a]/50" />
            </div>

            <h2
              className="text-[#f5f0e8] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight mb-6"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Schedule a Historic
              <br />
              <em className="text-[#b8975a] font-normal">
                Design Consultation.
              </em>
            </h2>

            <p className="text-[#f5f0e8]/60 text-lg font-light leading-relaxed mb-12 max-w-xl mx-auto">
              Meet with our historic preservation specialists at your home.
              No obligation. No pressure. Just expert guidance on preserving
              what makes your property irreplaceable.
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
              href="tel:+13156247344"
                className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#b8975a] hover:bg-[#d4b07a] text-[#0f1f3d] font-semibold text-sm tracking-widest uppercase px-10 py-5 transition-all duration-300 hover:shadow-xl hover:shadow-[#b8975a]/30 hover:-translate-y-0.5"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (315) 624-7344
              </a>
              <a
                href="https://www.newyorksash.com/quote"
              target="_blank"
              rel="noopener noreferrer"
                className="w-full sm:w-auto flex items-center justify-center gap-3 border border-[#f5f0e8]/20 hover:border-[#b8975a] text-[#f5f0e8]/70 hover:text-[#b8975a] font-light text-sm tracking-widest uppercase px-10 py-5 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Free Estimate Online
              </a>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-[#f5f0e8]/30 text-xs tracking-widest uppercase">
              <span className="flex items-center gap-2">
                <svg className="w-3 h-3 text-[#b8975a]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Free Consultation
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-3 h-3 text-[#b8975a]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                No Obligation
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-3 h-3 text-[#b8975a]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Serving CNY Since 1989
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
