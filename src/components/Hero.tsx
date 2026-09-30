import Link from "next/link";

export function Hero() {
  const websiteTypes = [
    "Business Websites",
    "Landing Pages",
    "E-commerce Websites",
    "Website Maintenance",
  ];

  return (
    <section className="relative w-full pt-24 pb-20 md:pt-36 md:pb-28 lg:pt-44 lg:pb-36 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Main Content Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Eyebrow */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
              <div className="h-px w-8 sm:w-16 bg-brand-accent" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
                SYNDORA &middot; Marketing &amp; Digital Solutions
              </span>
              <span className="hidden sm:inline text-xs text-text-tertiary">&bull;</span>
              <span className="text-xs tracking-wider uppercase text-text-tertiary">
                Founded by Emeya Zion
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.08] tracking-tight max-w-[16ch] mb-8 sm:mb-10">
              I design and build websites for businesses that want a <em className="italic text-brand-accent font-normal">stronger</em> online presence.
            </h1>

            {/* Supporting Pitch */}
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl mb-10 sm:mb-12">
              At SYNDORA, founded by Emeya Zion, I partner directly with business owners and founders to create clean, responsive websites that represent their brand with credibility, communicate clearly, and make it effortless for customers to get in touch.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto">
              <a                href="#work"                className="btn-primary w-full sm:w-auto text-center"
              >
                View Selected Work
              </a>
              <Link                href="/contact"                className="btn-secondary w-full sm:w-auto text-center"
              >
                Let&apos;s Work Together
              </Link>
            </div>
          </div>

          {/* Supporting Column (Specialization highlight) */}
          <div className="lg:col-span-4 flex flex-col gap-8 lg:mt-16 bg-surface-secondary/40 border border-border-subtle p-6 sm:p-8 rounded-sm">
            <div className="flex flex-col gap-2">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent">
                Current Focus
              </span>
              <h2 className="text-xl sm:text-2xl font-serif text-foreground">
                Website Design &amp; Development
              </h2>
              <p className="text-sm text-text-secondary leading-relaxed mt-1">
                While SYNDORA encompasses broader digital solutions, my active offer is focused strictly on delivering high-quality, custom websites.
              </p>
            </div>

            {/* Services List */}
            <div className="pt-6 border-t border-border-subtle">
              <span className="text-xs font-semibold tracking-wider uppercase text-text-tertiary block mb-4">
                Active Services
              </span>
              <ul className="flex flex-col gap-3">
                {websiteTypes.map((type, idx) => (
                  <li                    key={idx}                    className="flex items-center gap-3 text-sm font-medium text-text-primary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent flex-shrink-0" aria-hidden="true" />
                    <span>{type}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-border-subtle/80 flex items-center justify-between text-xs text-text-tertiary">
              <span>Founded by Emeya Zion</span>
              <span>&middot;</span>
              <span>Clean Code</span>
              <span>&middot;</span>
              <span>Mobile-First</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
