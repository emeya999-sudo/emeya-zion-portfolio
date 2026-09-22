import Link from "next/link";

export function Hero() {
  const capabilities = [
    "Web Development",
    "UI/UX Design",
    "Graphic Design",
    "Media Buying",
  ];

  return (
    <section className="relative w-full pt-20 pb-24 md:pt-32 md:pb-32 lg:pt-40 lg:pb-48 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Main Content Column */}
          <div className="lg:col-span-8 flex flex-col items-start">
            
            {/* Eyebrow & Visual Element */}
            <div className="flex items-center gap-6 mb-10">
              <div className="h-px w-10 sm:w-16 bg-brand-accent" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
                Creative Developer &middot; Digital Designer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] tracking-tight max-w-[15ch] mb-12">
              I build digital experiences that make businesses look <em className="italic text-brand-accent pr-2">impossible</em> to ignore.
            </h1>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <Link 
                href="/contact" 
                className="btn-primary w-full sm:w-auto text-center"
              >
                Contact Me
              </Link>
              <a 
                href="#work" 
                className="btn-secondary w-full sm:w-auto text-center"
              >
                View My Work
              </a>
            </div>
          </div>

          {/* Supporting Column (Asymmetrical placement) */}
          <div className="lg:col-span-4 flex flex-col gap-12 lg:mt-32">
            
            {/* Supporting Copy */}
            <p className="text-lg md:text-xl text-text-secondary leading-relaxed">
              I design and build websites, digital experiences, visual identities, and campaigns that help businesses present themselves better and connect with their customers.
            </p>

            {/* Services Indicator */}
            <div className="pt-8 border-t border-border-subtle">
              <h2 className="sr-only">Core Capabilities</h2>
              <ul className="flex flex-col gap-4">
                {capabilities.map((service, idx) => (
                  <li 
                    key={idx} 
                    className="flex items-center gap-4 text-sm font-medium uppercase tracking-widest text-text-primary"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-border-strong" aria-hidden="true" />
                    {service}
                  </li>
                ))}
              </ul>
            </div>

          </div>
          
        </div>
      </div>
    </section>
  );
}
