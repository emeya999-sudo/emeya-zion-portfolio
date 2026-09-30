"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { useInView } from "@/hooks/useInView";

const WebVisual = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches && videoRef.current) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <div className="w-full relative overflow-hidden bg-surface-secondary flex items-center justify-center">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        className="w-full h-auto object-contain block"
      >
        <source src="/videos/web-design.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export const WebDevelopmentCard = () => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <article      ref={ref}
      className={`group relative flex flex-col gap-8 lg:gap-10 w-full mb-16 lg:mb-24
        opacity-0 translate-y-12 transition-all duration-700 ease-out        ${isInView ? 'opacity-100 translate-y-0' : ''}`}
    >
      <Link        href="/work/web-development"
        className="block relative w-full overflow-hidden border border-border-subtle bg-surface-secondary/30 rounded-sm transition-colors duration-slow group-hover:border-text-tertiary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent cursor-pointer"
        aria-label="Explore Web Development case studies"
      >
        <div className="w-full transition-transform duration-slow ease-out motion-reduce:transform-none">
          <WebVisual />
        </div>
      </Link>

      <div className="flex flex-col flex-1 lg:flex-row lg:justify-between lg:items-start lg:gap-16">
        <div className="flex flex-col lg:w-5/12">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-serif italic text-text-tertiary">01</span>
            <span className="w-6 h-px bg-border-strong group-hover:w-10 group-hover:bg-brand-accent transition-all duration-normal" aria-hidden="true" />
            <Link              href="/work/web-development"
              className="text-2xl lg:text-3xl font-serif text-foreground tracking-tight group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-normal focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-brand-accent"
            >
              WEB DEVELOPMENT
            </Link>
          </div>
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-text-tertiary mb-6">
            WEBSITE DESIGN &middot; DEVELOPMENT &middot; DIGITAL EXPERIENCES
          </div>
        </div>

        <div className="flex flex-col flex-1 h-full lg:w-7/12 lg:pl-12 lg:border-l lg:border-border-subtle">
           <p className="text-base text-text-secondary leading-relaxed mb-10 lg:text-lg lg:mb-12 max-w-lg">
             Websites and digital experiences designed to make businesses look credible, distinctive, and easy to engage with.
           </p>

           <div className="mt-auto pt-2">
             <Link               href="/work/web-development"               className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-primary transition-all duration-normal group-hover:text-brand-accent group-hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
             >
               EXPLORE WEB DEVELOPMENT <span aria-hidden="true" className="transition-transform duration-normal">&rarr;</span>
             </Link>
           </div>
        </div>

      </div>
    </article>
  );
};

export function CaseStudyCard({ project, index }: { project: Project; index: number }) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`flex flex-col gap-10 lg:gap-14 pt-16 lg:pt-24 border-t border-border-subtle
        opacity-0 translate-y-12 transition-all duration-700 ease-out
        ${isInView ? "opacity-100 translate-y-0" : ""}`}
    >
      {/* Header Info */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Title & Core Value */}
        <div className="lg:col-span-6 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-serif italic text-brand-accent">0{index + 1}</span>
            <span className="w-8 h-px bg-border-strong" aria-hidden="true" />
            <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
              {project.category}
            </span>
          </div>

          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground tracking-tight mb-4">
            {project.title}
          </h3>

          <p className="text-lg sm:text-xl font-medium text-foreground/90 leading-snug mb-6">
            &ldquo;{project.tagline}&rdquo;
          </p>

          <p className="text-base text-text-secondary leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 mt-auto pt-2">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground hover:text-brand-accent transition-colors duration-normal py-2.5 px-4 bg-surface-secondary border border-border-subtle hover:border-brand-accent rounded-sm group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
            >
              <span>View Live Website</span>
              <span aria-hidden="true" className="transition-transform duration-normal group-hover:translate-x-1 group-hover:-translate-y-0.5">
                &#8599;
              </span>
            </a>
            <Link
              href="/contact"
              className="text-xs font-semibold uppercase tracking-widest text-text-secondary hover:text-foreground transition-colors py-2.5 px-2"
            >
              Inquire About Similar Build &rarr;
            </Link>
          </div>
        </div>

        {/* Business Problem & Solution Overview */}
        <div className="lg:col-span-6 flex flex-col gap-6 bg-surface-secondary/40 border border-border-subtle p-6 sm:p-8 rounded-sm">
          <div>
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-brand-accent mb-2">
              The Business Problem
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="pt-4 border-t border-border-subtle/80">
            <h4 className="text-[11px] font-bold tracking-widest uppercase text-foreground mb-2">
              What I Designed &amp; Built
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed mb-4">
              {project.solution}
            </p>

            {/* Deliverables / Features */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.deliverables.map((feat, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium tracking-wide uppercase px-2.5 py-1 bg-background border border-border-subtle text-text-primary rounded-xs"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          <div className="text-[11px] font-medium text-text-tertiary pt-2 border-t border-border-subtle/60">
            Role: <span className="text-text-secondary">{project.role}</span>
          </div>

        </div>

      </div>

      {/* Visual Presentation */}
      <div className="flex flex-col gap-6">
        {/* Main Hero Shot */}
        <div className="relative w-full overflow-hidden border border-border-subtle bg-surface-secondary rounded-sm group">
          <Image
            src={project.images.hero}
            alt={`${project.title} - Website Design`}
            width={1440}
            height={900}
            priority={index === 0}
            className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
            sizes="(max-width: 768px) 100vw, 1280px"
          />
        </div>

        {/* Secondary Detail Shots */}
        {project.images.section1 && (
          <div className={`grid grid-cols-1 ${project.images.section2 ? "md:grid-cols-2" : ""} gap-6`}>
            <div className="relative w-full overflow-hidden border border-border-subtle bg-surface-secondary rounded-sm group">
              <Image
                src={project.images.section1}
                alt={`${project.title} - Detail Section`}
                width={1200}
                height={800}
                className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                sizes="(max-width: 768px) 100vw, 600px"
              />
            </div>
            {project.images.section2 && (
              <div className="relative w-full overflow-hidden border border-border-subtle bg-surface-secondary rounded-sm group">
                <Image
                  src={project.images.section2}
                  alt={`${project.title} - Responsive Views`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover transform transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  sizes="(max-width: 768px) 100vw, 600px"
                />
              </div>
            )}
          </div>
        )}

      </div>
    </article>
  );
}

export function Work() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section id="work" className="relative w-full py-24 md:py-32 lg:py-40 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div          ref={headerRef}
          className={`mb-16 md:mb-24 max-w-3xl flex flex-col items-start
            opacity-0 translate-y-8 transition-all duration-700 ease-out
            ${headerInView ? "opacity-100 translate-y-0" : ""}`}
        >
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="h-px w-8 sm:w-16 bg-brand-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
              SYNDORA &middot; Selected Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground leading-[1.12] tracking-tight mb-6">
            Websites designed and built for real business impact.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Here are selected websites designed and built by founder Emeya Zion for clients across hospitality, education, premium grooming, and creative industries. Each project is built around user clarity, fast performance, and customer trust.
          </p>
        </div>

        {/* Prominent Web Development Category Card */}
        <WebDevelopmentCard />

        {/* Bottom Work Conversion Banner */}
        <div className="mt-8 md:mt-16 p-8 sm:p-12 lg:p-16 bg-surface-secondary/50 border border-border-subtle rounded-sm text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4">
            SYNDORA Digital Solutions
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-foreground mb-4">
            Looking for a clean, professional website for your business?
          </h3>
          <p className="text-base text-text-secondary max-w-xl mb-8 leading-relaxed">
            Whether launching a new business or redesigning an existing site, SYNDORA builds custom web experiences tailored directly to your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-center">
              Work With SYNDORA
            </Link>
            <Link href="/services" className="btn-secondary text-center">
              Explore Services &amp; Process
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
