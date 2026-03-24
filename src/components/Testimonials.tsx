const testimonials = [
  {
    quote:
      "I would especially like to thank the person doing the scheduling who went above and beyond to make the schedule date work because of my unexpected knee and back issues. Whatever you are paying her, you need to pay her more! She was great!",
    author: "Sandra Engel",
    role: "Utica, NY · Verified New York Sash Customer",
    initials: "SE",
  },
  {
    quote:
      "New patio doors are beautiful and work so smoothly. Installation was quick and the installers were very respectful of our home. We’re very pleased with the results!",
    author: "Jennifer Davis",
    role: "Clinton, NY · Verified New York Sash Customer",
    initials: "JD",
  },
  {
    quote:
      "These windows feature LowE Argon gas-filled glass, multi-chambered insulated frames, and fusion-welded sashes — offering improved energy efficiency, noise reduction, and year-round comfort in the unpredictable Central New York climate.",
    author: "Sauquoit Project",
    role: "Sauquoit, NY · New York Sash Window Replacement",
    initials: "NY",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#ede5d4] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#b8975a]" />
            <span className="text-[#b8975a] text-xs tracking-[0.35em] uppercase font-light">
              Client Voices
            </span>
            <div className="h-px w-8 bg-[#b8975a]" />
          </div>
          <h2
            className="text-[#0f1f3d] text-3xl md:text-4xl font-semibold"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Trusted by Cooperstown&apos;s
            <em className="font-normal text-[#6b7a8d]"> Finest Homes.</em>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#f5f0e8] p-8 lg:p-10 flex flex-col relative"
            >
              {/* Large quote mark */}
              <span
                className="absolute top-6 right-8 text-[#b8975a]/15 text-8xl font-bold leading-none select-none"
                style={{ fontFamily: "var(--font-playfair)" }}
                aria-hidden="true"
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <svg
                    key={s}
                    className="w-3.5 h-3.5 text-[#b8975a]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-[#0f1f3d]/70 text-sm font-light leading-relaxed flex-1 mb-8 relative z-10">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 border-t border-[#0f1f3d]/10 pt-6">
                <div className="w-10 h-10 rounded-full bg-[#0f1f3d] flex items-center justify-center flex-shrink-0">
                  <span
                    className="text-[#b8975a] text-xs font-semibold"
                    style={{ fontFamily: "var(--font-playfair)" }}
                  >
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-[#0f1f3d] text-sm font-semibold">
                    {t.author}
                  </p>
                  <p className="text-[#6b7a8d] text-xs font-light">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
