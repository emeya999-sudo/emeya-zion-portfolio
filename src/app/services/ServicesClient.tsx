"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

// A reusable fade-in component for smooth scroll animations
function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string }) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ServicesClient() {
  return (
    <main className="flex-1 flex flex-col bg-background overflow-hidden">
      
      {/* 1. HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.1] tracking-tight max-w-4xl mb-8">
            I help businesses grow through digital.
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-2xl mb-12">
            Websites that convert. Visuals that communicate. Advertising that gets your business noticed.
          </p>
        </FadeIn>
        <FadeIn delay={300} className="flex flex-col sm:flex-row gap-5">
          <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
            Let's Work Together
          </Link>
          <Link href="/#work" className="btn-secondary w-full sm:w-auto text-center">
            View My Work
          </Link>
        </FadeIn>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="py-24 bg-surface-secondary/30 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col gap-32">
          
          {/* SERVICE 01 — WEB DESIGN */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative w-full rounded-sm overflow-hidden bg-background">
                <video
                  src="/videos/web-design.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-contain block"
                />
              </div>
            </FadeIn>
            <FadeIn className="flex flex-col items-start order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">Service 01</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Web Design</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                I build modern websites that make businesses look credible, communicate clearly, and turn visitors into customers.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 w-full">
                {["Business websites", "Landing pages", "Portfolio websites", "Restaurant websites", "School websites", "Service-business websites", "Ecommerce experiences", "Responsive mobile design", "Conversion-focused layouts"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-background border border-border-subtle rounded-sm mb-10 w-full">
                <h3 className="text-xs font-bold tracking-widest uppercase text-foreground mb-2">The Outcome</h3>
                <p className="text-text-secondary font-medium italic">
                  "A stronger online presence that helps customers understand and trust the business."
                </p>
              </div>

              <Link href="/contact" className="btn-primary text-center">
                Start a Web Project
              </Link>
            </FadeIn>
          </div>

          {/* SERVICE 02 — GRAPHIC DESIGN */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="flex flex-col items-start">
              <span className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">Service 02</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Graphic Design</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                Visuals that make your business easier to notice, understand, and remember.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 w-full">
                {["Social media graphics", "Advertising creatives", "YouTube thumbnails", "Promotional designs", "Product advertising", "Marketing materials", "Brand visuals"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-background border border-border-subtle rounded-sm mb-10 w-full">
                <h3 className="text-xs font-bold tracking-widest uppercase text-foreground mb-2">The Outcome</h3>
                <p className="text-text-secondary font-medium italic">
                  "Better visual communication that helps a business compete for attention."
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <Link href="/contact" className="btn-primary text-center">
                  Start a Design Project
                </Link>
                <Link href="/work/graphic-design" className="btn-secondary text-center">
                  View Design Work
                </Link>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative w-full rounded-sm overflow-hidden bg-background">
                <video
                  src="/videos/graphic-design.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-auto object-contain block"
                />
              </div>
            </FadeIn>
          </div>

          {/* SERVICE 03 — MEDIA BUYING */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn className="order-2 lg:order-1">
              <div className="relative w-full rounded-sm overflow-hidden bg-background">
                <img
                  src="/images/media-buying.webp"
                  alt="Media Buying Visualization"
                  className="w-full h-auto object-contain block"
                />
              </div>
            </FadeIn>
            <FadeIn className="flex flex-col items-start order-1 lg:order-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-4">Service 03</span>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Media Buying</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                I help businesses put their offers in front of the right people through paid digital advertising.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 mb-10 w-full">
                {["Campaign setup", "Audience targeting", "Ad creative coordination", "Campaign monitoring", "Budget allocation", "Performance analysis", "Testing and optimization"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="p-6 bg-background border border-border-subtle rounded-sm mb-10 w-full">
                <h3 className="text-xs font-bold tracking-widest uppercase text-foreground mb-2">The Outcome</h3>
                <p className="text-text-secondary font-medium italic">
                  "More targeted attention for the products and services that matter to the business."
                </p>
              </div>

              <Link href="/contact" className="btn-primary text-center">
                Start an Advertising Project
              </Link>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 3. THE DIFFERENCE */}
      <section className="py-24 px-6 lg:px-8 max-w-5xl mx-auto w-full text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-12">One business. Three growth levers.</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
          <FadeIn delay={100} className="p-8 border border-border-subtle rounded-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">Web Design</h3>
            <p className="text-text-secondary leading-relaxed">Builds the digital foundation.</p>
          </FadeIn>
          <FadeIn delay={200} className="p-8 border border-border-subtle rounded-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">Graphic Design</h3>
            <p className="text-text-secondary leading-relaxed">Makes the business visually competitive.</p>
          </FadeIn>
          <FadeIn delay={300} className="p-8 border border-border-subtle rounded-sm">
            <h3 className="text-lg font-bold text-foreground mb-4">Media Buying</h3>
            <p className="text-text-secondary leading-relaxed">Brings targeted attention to the offer.</p>
          </FadeIn>
        </div>

        <FadeIn delay={400} className="inline-flex items-center justify-center gap-4 py-4 px-8 bg-surface-secondary/50 rounded-full">
          <span className="font-bold text-sm tracking-widest uppercase text-foreground">Attention</span>
          <span className="text-brand-accent">&rarr;</span>
          <span className="font-bold text-sm tracking-widest uppercase text-foreground">Trust</span>
          <span className="text-brand-accent">&rarr;</span>
          <span className="font-bold text-sm tracking-widest uppercase text-foreground">Action</span>
        </FadeIn>
      </section>

      {/* 4. WHO I WORK WITH */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-8">Built for businesses that want to grow.</h2>
              <p className="text-lg text-background/80 leading-relaxed max-w-xl">
                I work with businesses, founders, and organizations that need a stronger digital presence.
              </p>
            </FadeIn>
          </div>
          <div className="flex-1">
            <FadeIn delay={150}>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-background/90">
                {[
                  "Restaurants & food businesses",
                  "Schools & educational organizations",
                  "Hotels & hospitality",
                  "Personal brands",
                  "Professional services",
                  "Ecommerce businesses",
                  "Local businesses",
                  "Startups"
                ].map((type, i) => (
                  <li key={i} className="flex items-center gap-3 font-medium">
                    <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0" />
                    {type}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">Process</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { step: "01", title: "Discover", desc: "Understand the business, audience, offer, and goals." },
            { step: "02", title: "Plan", desc: "Define the right digital, design, or advertising approach." },
            { step: "03", title: "Build", desc: "Design and implement the solution." },
            { step: "04", title: "Launch & Improve", desc: "Launch, review performance, and refine where necessary." },
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 100} className="flex flex-col border-t-2 border-foreground pt-6">
              <span className="text-sm font-bold tracking-widest text-brand-accent mb-4">{item.step}</span>
              <h3 className="text-xl font-bold text-foreground mb-4">{item.title}</h3>
              <p className="text-text-secondary leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-surface-secondary/30 border-y border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-16">Questions & Answers</h2>
          </FadeIn>
          <div className="flex flex-col gap-10">
            {[
              {
                q: "Do you work with small businesses?",
                a: "Yes. Projects can be scoped around the business's current needs and budget."
              },
              {
                q: "Can I hire you for just one service?",
                a: "Yes. Web Design, Graphic Design, and Media Buying can be handled independently."
              },
              {
                q: "Can I combine multiple services?",
                a: "Yes. Combining services can make sense when a business needs both a stronger digital presence and better marketing."
              },
              {
                q: "How do I start a project?",
                a: "Use the Contact page and describe what you need. We'll discuss the project, scope, budget, and next steps."
              }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 50} className="border-b border-border-strong pb-8 last:border-0">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">{faq.q}</h3>
                <p className="text-text-secondary leading-relaxed text-lg">{faq.a}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight mb-8">
            Ready to make your business impossible to ignore?
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell me what you're building, what isn't working, and where you want to go.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
              Start a Project
            </Link>
            <Link href="/#work" className="btn-secondary w-full sm:w-auto text-center">
              View My Work
            </Link>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
