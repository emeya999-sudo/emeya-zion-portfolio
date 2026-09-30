"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

function FadeIn({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
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

export default function AboutClient() {
  const projectsShowcase = [
    { title: "Martha's Kitchen", niche: "Restaurant & Online Ordering", link: "/#work" },
    { title: "Crown & Blades", niche: "Luxury Grooming & Booking", link: "/#work" },
    { title: "Diamonds International School", niche: "Institutional & Admissions", link: "/#work" },
    { title: "La Taverna", niche: "Hospitality & Restaurant Experience", link: "/#work" },
    { title: "Blessed Baidoo", niche: "Creative Studio & Motion Showcase", link: "/#work" },
  ];

  return (
    <main className="flex-1 flex flex-col bg-background overflow-hidden">
      
      {/* 1. HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8">
            <div className="h-px w-8 sm:w-16 bg-brand-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
              SYNDORA &middot; Marketing &amp; Digital Solutions
            </span>
            <span className="hidden sm:inline text-xs text-text-tertiary">&bull;</span>
            <span className="text-xs tracking-wider uppercase text-text-tertiary">
              Founded by Emeya Zion
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.08] tracking-tight max-w-4xl mb-8">
            Building digital solutions that help businesses move forward.
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mb-12">
            SYNDORA is a marketing and digital solutions company founded by Emeya Zion. While our broader scope encompasses digital solutions, our current core offer is specialized in custom Website Design &amp; Development — creating clean, fast, and responsive websites that establish immediate credibility and make it effortless for customers to get in touch.
          </p>
        </FadeIn>
        <FadeIn delay={300} className="flex flex-col sm:flex-row gap-5">
          <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
            Let&apos;s Work Together
          </Link>
          <Link href="/#work" className="btn-secondary w-full sm:w-auto text-center">
            View Case Studies
          </Link>
        </FadeIn>
      </section>

      {/* 2. WHO I AM / PHILOSOPHY */}
      <section className="py-24 bg-surface-secondary/30 border-y border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
              Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground mb-8">
              More than just making things look good.
            </h2>
            <div className="flex flex-col gap-6 text-base sm:text-lg md:text-xl text-text-secondary leading-relaxed">
              <p>
                A website isn&apos;t an ornament or a placeholder. For a real business, it is often the single most influential point of contact with prospective clients.
              </p>
              <p>
                A good website answers a visitor&apos;s basic questions quickly: <em className="text-foreground italic font-medium">Who are you? Can I trust you? What do you offer? And how do I contact you?</em>
              </p>
              <p>
                When a website is confusing, outdated, or difficult to use on a smartphone, potential customers simply move on.
              </p>
              <p className="pt-4 font-medium text-foreground">
                That is why every website designed and developed under SYNDORA is centered on:
                <span className="font-serif text-2xl sm:text-3xl mt-4 block text-brand-accent">
                  Thoughtful Design + Clean Code + Clear Communication
                </span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. CORE WEB DISCIPLINES */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
            Core Disciplines
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
            How we approach website projects.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Led by founder Emeya Zion, we handle the full project workflow — from structuring content and designing the interface to writing clean code and testing across devices.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <FadeIn delay={0} className="flex flex-col">
            <span className="w-2 h-2 rounded-full bg-brand-accent block mb-6" />
            <h3 className="text-2xl font-serif text-foreground mb-4">Clean UI/UX Design</h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
              Intentional interfaces designed to present your offerings clearly, remove friction, and make your business feel established.
            </p>
            <Link href="/services" className="text-xs font-bold tracking-widest uppercase text-brand-accent hover:text-foreground transition-colors mt-auto">
              Explore Services &rarr;
            </Link>
          </FadeIn>

          <FadeIn delay={150} className="flex flex-col">
            <span className="w-2 h-2 rounded-full bg-brand-accent block mb-6" />
            <h3 className="text-2xl font-serif text-foreground mb-4">Modern Web Development</h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
              Built with modern standards (Next.js, TypeScript, Tailwind CSS) for fast load times, reliable security, and fluid mobile responsiveness.
            </p>
            <Link href="/services" className="text-xs font-bold tracking-widest uppercase text-brand-accent hover:text-foreground transition-colors mt-auto">
              Explore Services &rarr;
            </Link>
          </FadeIn>

          <FadeIn delay={300} className="flex flex-col">
            <span className="w-2 h-2 rounded-full bg-brand-accent block mb-6" />
            <h3 className="text-2xl font-serif text-foreground mb-4">Direct Contact Paths</h3>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
              Every section includes accessible contact options and one-tap WhatsApp links so interested visitors can reach you without hassle.
            </p>
            <Link href="/services" className="text-xs font-bold tracking-widest uppercase text-brand-accent hover:text-foreground transition-colors mt-auto">
              Explore Services &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 4. HOW I THINK & MY APPROACH */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="flex-1">
            <FadeIn>
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
                Mindset
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-8 leading-tight">
                Good web design starts with understanding the business.
              </h2>
              <p className="text-base sm:text-lg text-background/80 leading-relaxed mb-8">
                Before writing code or choosing colors, we focus on the practical questions that matter:
              </p>
              <ul className="flex flex-col gap-4 text-base sm:text-lg font-medium text-background/90">
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> Who are your customers, and what are they looking for?
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> What is the primary action someone should take on your site?
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> What details or proof points will give visitors confidence?
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> How can we make the mobile browsing experience seamless?
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> What happens when someone is ready to get in touch?
                </li>
              </ul>
            </FadeIn>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <FadeIn delay={100}>
                <h3 className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-2">01 — Clarity</h3>
                <p className="text-sm sm:text-base text-background/80 leading-relaxed">
                  Make your message and offerings easy to understand right away.
                </p>
              </FadeIn>
              <FadeIn delay={200}>
                <h3 className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-2">02 — Credibility</h3>
                <p className="text-sm sm:text-base text-background/80 leading-relaxed">
                  Present your business with the care and polish that builds customer trust.
                </p>
              </FadeIn>
              <FadeIn delay={300}>
                <h3 className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-2">03 — Craft</h3>
                <p className="text-sm sm:text-base text-background/80 leading-relaxed">
                  Thoughtful typography, responsive spacing, and a smooth reading experience.
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <h3 className="text-xs font-bold tracking-widest uppercase text-brand-accent mb-2">04 — Purpose</h3>
                <p className="text-sm sm:text-base text-background/80 leading-relaxed">
                  Every button, section, and image exists to serve a clear purpose.
                </p>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* 5. SELECTED BUILDS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          
          <div className="lg:w-5/12">
            <FadeIn>
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
                Work Examples
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-6">
                Websites built for real businesses.
              </h2>
              <p className="text-base text-text-secondary leading-relaxed mb-8">
                Complete, functional web experiences built by founder Emeya Zion that businesses use daily to present their services and connect with clients.
              </p>
              <Link href="/#work" className="btn-primary inline-block text-center">
                Explore Case Studies
              </Link>
            </FadeIn>
          </div>

          <div className="lg:w-7/12 w-full flex flex-col gap-4">
            <FadeIn delay={150}>
              <div className="flex flex-col gap-4">
                {projectsShowcase.map((proj, i) => (
                  <Link
                    key={i}
                    href={proj.link}
                    className="group p-6 bg-surface-secondary/40 border border-border-subtle rounded-sm hover:border-foreground transition-colors flex items-center justify-between"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-brand-accent transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-text-tertiary uppercase tracking-widest">
                        {proj.niche}
                      </p>
                    </div>
                    <span className="text-brand-accent group-hover:translate-x-2 transition-transform">
                      &rarr;
                    </span>
                  </Link>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 6. WORKING WITH SYNDORA */}
      <section className="py-24 bg-surface-secondary/30 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-6 mb-16">
              <h2 className="text-2xl md:text-3xl font-serif text-foreground">Working with SYNDORA</h2>
              <div className="h-px flex-1 bg-border-subtle" />
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <FadeIn delay={0} className="border-l-2 border-brand-accent pl-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Direct Collaboration with the Founder</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                You work directly with founder Emeya Zion from start to finish. We discuss your needs openly without account managers, interns, or middlemen.
              </p>
            </FadeIn>
            <FadeIn delay={100} className="border-l-2 border-brand-accent pl-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Clear Scope &amp; Milestones</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Before any work starts, we agree on the pages, structure, and timeline so you always know what to expect.
              </p>
            </FadeIn>
            <FadeIn delay={200} className="border-l-2 border-brand-accent pl-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Tested on Real Phones</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Every layout is thoroughly tested on real mobile devices to ensure it looks and performs cleanly before launch.
              </p>
            </FadeIn>
            <FadeIn delay={300} className="border-l-2 border-brand-accent pl-6">
              <h3 className="text-lg font-bold text-foreground mb-2">Clean Client Ownership</h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                Your website is built on standard code. You own your domain, code, and accounts with no proprietary lock-in.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
            SYNDORA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight mb-8">
            Have a business that needs a better website?
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
            Let&apos;s talk about what you&apos;re building, what isn&apos;t working with your current setup, and how SYNDORA can solve it.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
              Start a Project
            </Link>
            <Link href="/services" className="btn-secondary w-full sm:w-auto text-center">
              View Services &amp; Process
            </Link>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
