"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

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

export default function AboutClient() {
  return (
    <main className="flex-1 flex flex-col bg-background overflow-hidden">
      
      {/* 1. HERO */}
      <section className="pt-32 pb-24 md:pt-40 md:pb-32 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest uppercase text-text-tertiary mb-6 block">
            About Me
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground leading-[1.1] tracking-tight max-w-4xl mb-8">
            I build digital experiences that help businesses move forward.
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mb-12">
            I'm Emeya Zion — a digital creative focused on Web Design, Graphic Design, and Media Buying. I combine design, technology, and marketing to help businesses present themselves better online and reach the people they want to serve.
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

      {/* 2. WHO I AM */}
      <section className="py-24 bg-surface-secondary/30 border-y border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">More than just making things look good.</h2>
            <div className="flex flex-col gap-6 text-lg md:text-xl text-text-secondary leading-relaxed">
              <p>I care about what the design is supposed to achieve.</p>
              <p>A website should help a business communicate clearly and build trust.</p>
              <p>A graphic should help an audience understand and remember an offer.</p>
              <p>An advertisement should put the right offer in front of the right people.</p>
              <p className="pt-6 font-medium text-foreground">
                That is why my work sits at the intersection of:<br />
                <span className="font-serif text-2xl md:text-3xl mt-4 block">Design + Technology + Marketing</span>
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 3. WHAT I DO */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          <FadeIn delay={0}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent block mb-6" />
            <h3 className="text-2xl font-serif text-foreground mb-4">Web Design</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              I design and build modern websites that help businesses establish credibility and communicate their value online.
            </p>
            <Link href="/services" className="text-sm font-bold tracking-widest uppercase text-brand-accent hover:text-foreground transition-colors">
              Learn More &rarr;
            </Link>
          </FadeIn>
          <FadeIn delay={150}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent block mb-6" />
            <h3 className="text-2xl font-serif text-foreground mb-4">Graphic Design</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              I create visual assets designed to help businesses compete for attention and communicate their offers clearly.
            </p>
            <Link href="/services" className="text-sm font-bold tracking-widest uppercase text-brand-accent hover:text-foreground transition-colors">
              Learn More &rarr;
            </Link>
          </FadeIn>
          <FadeIn delay={300}>
            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent block mb-6" />
            <h3 className="text-2xl font-serif text-foreground mb-4">Media Buying</h3>
            <p className="text-text-secondary leading-relaxed mb-6">
              I work with paid digital advertising to help businesses reach targeted audiences and put their offers in front of potential customers.
            </p>
            <Link href="/services" className="text-sm font-bold tracking-widest uppercase text-brand-accent hover:text-foreground transition-colors">
              Learn More &rarr;
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* 4. HOW I THINK & 5. MY APPROACH */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Good design starts with the business problem.</h2>
              <p className="text-lg text-background/80 leading-relaxed mb-8">
                Before choosing colors, animations, layouts, or technology, I think about:
              </p>
              <ul className="flex flex-col gap-4 text-lg font-medium text-background/90">
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> Who is this for?
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> What does the business want the visitor to do?
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> What needs to be communicated?
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> What would make someone trust this business?
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-accent">&rarr;</span> What should happen after someone sees the design?
                </li>
              </ul>
            </FadeIn>
          </div>

          <div className="flex-1 flex flex-col justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <FadeIn delay={100}>
                <h3 className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-3">01 — Clarity</h3>
                <p className="text-background/80 leading-relaxed">Make the message easy to understand.</p>
              </FadeIn>
              <FadeIn delay={200}>
                <h3 className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-3">02 — Credibility</h3>
                <p className="text-background/80 leading-relaxed">Make the business look trustworthy and professional.</p>
              </FadeIn>
              <FadeIn delay={300}>
                <h3 className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-3">03 — Creativity</h3>
                <p className="text-background/80 leading-relaxed">Use strong visual ideas without sacrificing usability.</p>
              </FadeIn>
              <FadeIn delay={400}>
                <h3 className="text-sm font-bold tracking-widest uppercase text-brand-accent mb-3">04 — Purpose</h3>
                <p className="text-background/80 leading-relaxed">Every design decision should serve a reason.</p>
              </FadeIn>
            </div>
          </div>

        </div>
      </section>

      {/* 6. TECHNOLOGY + CREATIVITY & 7. EXPERIENCE */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <div className="flex-1">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Design that actually gets built.</h2>
              <p className="text-lg text-text-secondary leading-relaxed mb-8">
                I combine technical implementation with visual design, ensuring that what looks good also functions perfectly. I work across:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 mb-8 text-text-secondary font-medium">
                <li>Web development</li>
                <li>Responsive interfaces</li>
                <li>UI/UX</li>
                <li>Graphic design</li>
                <li>Digital advertising</li>
                <li>AI-assisted development</li>
              </ul>
            </FadeIn>
          </div>

          <div className="flex-1">
            <FadeIn delay={150}>
              <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6">Some things I've built.</h2>
              <div className="flex flex-col gap-4">
                <Link href="/work/web-design" className="group p-6 bg-surface-secondary/50 border border-border-subtle rounded-sm hover:border-foreground transition-colors flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Martha's Kitchen</h3>
                    <p className="text-sm text-text-tertiary uppercase tracking-widest">Web Design</p>
                  </div>
                  <span className="text-brand-accent group-hover:translate-x-2 transition-transform">&rarr;</span>
                </Link>
                <Link href="/work/web-design" className="group p-6 bg-surface-secondary/50 border border-border-subtle rounded-sm hover:border-foreground transition-colors flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Crown & Blades</h3>
                    <p className="text-sm text-text-tertiary uppercase tracking-widest">Web Design</p>
                  </div>
                  <span className="text-brand-accent group-hover:translate-x-2 transition-transform">&rarr;</span>
                </Link>
                <Link href="/work/web-design" className="group p-6 bg-surface-secondary/50 border border-border-subtle rounded-sm hover:border-foreground transition-colors flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Diamonds International School</h3>
                    <p className="text-sm text-text-tertiary uppercase tracking-widest">Web Design</p>
                  </div>
                  <span className="text-brand-accent group-hover:translate-x-2 transition-transform">&rarr;</span>
                </Link>
                <Link href="/work/graphic-design" className="group p-6 bg-surface-secondary/50 border border-border-subtle rounded-sm hover:border-foreground transition-colors flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">Marketing & Brand Visuals</h3>
                    <p className="text-sm text-text-tertiary uppercase tracking-widest">Graphic Design</p>
                  </div>
                  <span className="text-brand-accent group-hover:translate-x-2 transition-transform">&rarr;</span>
                </Link>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 8. CURRENT FOCUS */}
      <section className="py-24 bg-surface-secondary/30 border-y border-border-subtle text-center">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-sm font-bold tracking-widest uppercase text-text-tertiary mb-6">What I'm focused on now</h2>
            <p className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed">
              I'm focused on building better digital experiences, working with businesses that want to improve their online presence, and continuing to grow at the intersection of design, technology, and marketing.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 9. WORKING WITH ME */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">Working with me</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          <FadeIn delay={0} className="border-l-2 border-brand-accent pl-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Clear Communication</h3>
            <p className="text-text-secondary leading-relaxed">We discuss what you need before work begins.</p>
          </FadeIn>
          <FadeIn delay={100} className="border-l-2 border-brand-accent pl-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Purposeful Design</h3>
            <p className="text-text-secondary leading-relaxed">The design is based on the business and its audience.</p>
          </FadeIn>
          <FadeIn delay={200} className="border-l-2 border-brand-accent pl-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Responsive Build</h3>
            <p className="text-text-secondary leading-relaxed">The final experience should work across modern devices.</p>
          </FadeIn>
          <FadeIn delay={300} className="border-l-2 border-brand-accent pl-6">
            <h3 className="text-lg font-bold text-foreground mb-3">Collaborative Process</h3>
            <p className="text-text-secondary leading-relaxed">Feedback is part of the process.</p>
          </FadeIn>
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight mb-8">
            Have a business that needs to move forward?
          </h2>
          <p className="text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
            Let's talk about what you're building and figure out how I can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
              Start a Project
            </Link>
            <Link href="/services" className="btn-secondary w-full sm:w-auto text-center">
              View Services
            </Link>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
