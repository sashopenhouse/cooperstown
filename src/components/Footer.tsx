import Image from "next/image";

const footerLinks = {
  Products: [
    { label: "Replacement Windows", href: "https://www.newyorksash.com/windows" },
    { label: "Entry & Patio Doors", href: "https://www.newyorksash.com/doors" },
    { label: "Storm Doors", href: "https://www.newyorksash.com/doors" },
    { label: "Siding", href: "https://www.newyorksash.com/siding" },
    { label: "Bathroom Remodeling", href: "https://www.newyorksash.com/bathrooms" },
  ],
  Information: [
    { label: "Financing Options", href: "https://www.newyorksash.com/financing" },
    { label: "Lifetime Warranty", href: "https://www.newyorksash.com/warranty" },
    { label: "FAQ", href: "https://www.newyorksash.com/faq" },
    { label: "Our Team", href: "https://www.newyorksash.com/staff" },
    { label: "Careers", href: "https://www.newyorksash.com/careers" },
  ],
  Community: [
    { label: "Offers & Promotions", href: "https://newyorksashoffers.com/" },
    { label: "CNY Open House", href: "https://cnyopenhouse.com/" },
    { label: "Teddy Bear Toss", href: "https://uticateddybeartoss.com/" },
    { label: "Free Estimate", href: "https://www.newyorksash.com/quote" },
    { label: "Blog", href: "https://www.newyorksash.com/blog" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#0a1628] text-[#f5f0e8]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="https://www.newyorksash.com/assets/NYLOGO-copy_1759006724430-BHTfyIKn.png"
                alt="New York Sash"
                width={160}
                height={54}
                className="h-12 w-auto brightness-0 invert mb-3"
              />
              <p className="text-[#b8975a] text-[9px] tracking-[0.3em] uppercase font-light">
                Cooperstown Historic District Campaign
              </p>
            </div>
            <p className="text-[#f5f0e8]/40 text-sm font-light leading-relaxed mb-8 max-w-xs">
              New York Sash brings 35+ years of Central New York craftsmanship
              to Cooperstown&apos;s legacy homes. ENERGY STAR® certified,
              custom-made to fit, and backed by a lifetime warranty.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3">
              <a
                href="tel:+13156247344"
                className="flex items-center gap-3 text-[#f5f0e8]/60 hover:text-[#b8975a] text-sm transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 text-[#b8975a] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                (315) 624-7344
              </a>
              <a
                href="https://www.newyorksash.com/quote"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#f5f0e8]/60 hover:text-[#b8975a] text-sm transition-colors duration-300"
              >
                <svg
                  className="w-4 h-4 text-[#b8975a] flex-shrink-0"
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
                Free Estimate at newyorksash.com
              </a>
              <div className="flex items-start gap-3 text-[#f5f0e8]/60 text-sm">
                <svg
                  className="w-4 h-4 text-[#b8975a] flex-shrink-0 mt-0.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>
                  349 Oriskany Blvd, Whitesboro NY 13492
                  <br />
                  Showroom: Mon–Fri 8AM–6PM · Sat 9AM–1PM
                </span>
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-[#f5f0e8] text-xs tracking-[0.3em] uppercase font-medium mb-6">
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f5f0e8]/40 hover:text-[#b8975a] text-sm font-light transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#f5f0e8]/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#f5f0e8]/25 text-xs font-light tracking-wide">
            © {new Date().getFullYear()} New York Sash. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {[
              { label: "Privacy", href: "https://www.newyorksash.com/privacy" },
              { label: "Terms", href: "https://www.newyorksash.com/terms" },
              { label: "Accessibility", href: "https://www.newyorksash.com/accessibility" },
            ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#f5f0e8]/25 hover:text-[#b8975a] text-xs font-light transition-colors duration-300"
                >
                  {item.label}
                </a>
              )
            )}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#b8975a]" />
            <span className="text-[#f5f0e8]/25 text-xs font-light">
              Licensed &amp; Insured · newyorksash.com
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
