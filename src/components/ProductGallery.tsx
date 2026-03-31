import Image from "next/image";
import TrackedLink from "./TrackedLink";

const products = [
  {
    id: 1,
    category: "Windows",
    title: "Period-Correct Profiles",
    description:
      "New York Sash windows are custom-made to your opening's exact measurements — never stock-sized. Our double-hung and casement profiles replicate the sash dimensions and rail widths of 19th-century originals, indistinguishable from the street.",
    features: [
      "Custom-made to your exact opening measurements",
      "Double-hung, casement, bay & bow styles available",
      "ENERGY STAR® certified for maximum efficiency",
      "Lifetime transferable warranty on products & labor",
    ],
    image: "/images/IMG_1056.jpg",
    imageAlt: "Large window wall on a beautiful home replaced by New York Sash",
    accent: "Windows",
    serviceUrl: "https://www.newyorksash.com/windows",
  },
  {
    id: 2,
    category: "Glazing",
    title: "Simulated Divided Lites",
    description:
      "True divided lite character without the thermal penalty. New York Sash uses our Duralite® Warm Edge Spacer — a polycarbonate design with no metal — delivering the industry’s most energy-efficient spacer system alongside authentic muntin profiles.",
    features: [
      "Duralite® Warm Edge Spacer — no metal, maximum efficiency",
      "LowE Argon gas-filled glass standard",
      "Air infiltration as low as 0.04 CFM",
      "ENERGY STAR® certified — exceeds all standards",
    ],
    image: "/images/09488CE2-CED6-4A6E-95C6-9AE79E81790F.jpg",
    imageAlt: "New York Sash simulated divided lite window detail",
    accent: "Glazing",
    serviceUrl: "https://www.newyorksash.com/windows",
  },
  {
    id: 3,
    category: "Finishes",
    title: "Custom Historic Finishes",
    description:
      "New York Sash entry and patio doors are individually customized to your home’s exact measurements. Choose from Signet, Embarq, or Heritage fiberglass lines — or Legacy Steel — with decorative glass, stain finishes, and multi-point locking systems built for Cooperstown’s winters.",
    features: [
      "Diamond Kote® factory finish — 30-year no-fade warranty",
      "Signet, Embarq & Heritage fiberglass door lines",
      "Legacy Steel construction available",
      "Fully transferable lifetime warranty",
    ],
    image: "/images/DB159592-05A9-47B8-8D8E-EF2DC7D3A365.jpg",
    imageAlt: "New York Sash custom historic finish and door detail",
    accent: "Finishes",
    serviceUrl: "https://www.newyorksash.com/doors",
  },
];

export default function ProductGallery() {
  return (
    <section id="products" className="museum-section bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-8 bg-[#b8975a]" />
            <span className="text-[#b8975a] text-xs tracking-[0.35em] uppercase font-light">
              Product Gallery
            </span>
            <div className="h-px w-8 bg-[#b8975a]" />
          </div>
          <h2
            className="text-[#0f1f3d] text-4xl md:text-5xl font-semibold leading-tight mb-6"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Crafted for
            <br />
            <em className="font-normal text-[#6b7a8d]">Historic Integrity.</em>
          </h2>
          <p className="text-[#6b7a8d] text-lg font-light leading-relaxed">
            Every New York Sash product is custom-made, ENERGY STAR®
            certified, and backed by a lifetime warranty — delivering
            modern performance with timeless visual appeal.
          </p>
        </div>

        {/* 3-Column Museum Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {products.map((product, i) => (
            <article
              key={product.id}
              className="group flex flex-col bg-white hover:shadow-2xl hover:shadow-[#0f1f3d]/10 transition-all duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover img-hover"
                />
                {/* Category tag */}
                <div className="absolute top-4 left-4 bg-[#0f1f3d]/80 backdrop-blur-sm px-3 py-1">
                  <span className="text-[#b8975a] text-[10px] tracking-[0.3em] uppercase font-medium">
                    {product.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8 lg:p-10">
                {/* Number */}
                <span
                  className="text-[#ede5d4] text-6xl font-bold leading-none mb-4 select-none"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  0{i + 1}
                </span>

                <h3
                  className="text-[#0f1f3d] text-xl font-semibold mb-4 leading-snug"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  {product.title}
                </h3>

                <p className="text-[#6b7a8d] text-sm font-light leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Feature list */}
                <ul className="flex flex-col gap-2 mt-auto">
                  {product.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#0f1f3d]/70"
                    >
                      <span className="mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-[#b8975a]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Learn more link */}
                <TrackedLink
                  href={product.serviceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center gap-2 text-[#b8975a] text-xs tracking-widest uppercase font-medium group-hover:gap-3 transition-all duration-300"
                  eventName="outbound_link_click"
                  eventCategory="product_gallery"
                  eventLabel={`Request Samples - ${product.title}`}
                >
                  Request Samples
                  <svg
                    className="w-3.5 h-3.5"
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
                </TrackedLink>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-20 bg-[#0f1f3d] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p
              className="text-[#f5f0e8] text-2xl md:text-3xl font-semibold mb-2"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Not sure which profile fits your home?
            </p>
            <p className="text-[#f5f0e8]/50 font-light text-sm">
              Our historic design specialists will analyze your home&apos;s
              architecture and recommend the exact match.
            </p>
          </div>
          <TrackedLink
            href="https://www.newyorksash.com/quote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-3 border border-[#b8975a] text-[#b8975a] hover:bg-[#b8975a] hover:text-[#0f1f3d] font-semibold text-sm tracking-widest uppercase px-8 py-4 transition-all duration-300"
            eventName="cta_click"
            eventCategory="product_gallery"
            eventLabel="Get a Free Assessment"
          >
            Get a Free Assessment
          </TrackedLink>
        </div>
      </div>
    </section>
  );
}
