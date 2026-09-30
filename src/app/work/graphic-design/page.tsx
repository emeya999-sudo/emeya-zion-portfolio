"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

type ImageItemProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  span: string;
  delay: number;
  isVisible: boolean;
};

const ImageItem = ({ src, alt, width, height, span, delay, isVisible }: ImageItemProps) => (
  <div    className={`${span} relative group overflow-hidden bg-surface-secondary border border-border-subtle/50 rounded-sm
      opacity-0 translate-y-12 transition-all duration-[800ms] ease-out`}
    style={{      opacity: isVisible ? 1 : 0,      transform: isVisible ? 'translateY(0)' : 'translateY(48px)',
      transitionDelay: `${delay}ms`    }}
  >
    <div className="w-full h-auto transition-transform duration-slow ease-out group-hover:scale-[1.02] motion-reduce:transform-none">
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-contain block"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 60vw"
      />
    </div>
  </div>
);

export default function GraphicDesignPage() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const { ref: galleryRef, isInView: galleryInView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <main className="flex-1 flex flex-col pb-32">
      {/* Header */}
      <header className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div          ref={headerRef}
          className={`opacity-0 translate-y-8 transition-all duration-[800ms] ease-out ${headerInView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <Link href="/#work" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-secondary hover:text-brand-accent transition-colors mb-16">
            <span aria-hidden="true">&larr;</span> ALL WORK
          </Link>
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-10 sm:w-16 bg-brand-accent" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
                Graphic Design
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground mb-8 tracking-tight leading-[1.1]">
              Visual identities and assets designed to demand attention.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              A curated selection of marketing graphics, promotional assets, and visual identities crafted to give brands a commanding digital presence.
            </p>
          </div>
        </div>
      </header>

      {/* Gallery Showcase */}
      <section        ref={galleryRef}
        className="px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-12 lg:gap-24"
      >
        {/* Row 1 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-start">
          <ImageItem            src="/images/graphic-design/day-1.webp"
            alt="YouTube thumbnail comparing Noob SEO vs Pro SEO"
            width={1280}
            height={720}
            span="lg:w-7/12"
            delay={0}
            isVisible={galleryInView}
          />
          <ImageItem            src="/images/graphic-design/untitled-design.webp"
            alt="Greens Lemon Lime beverage product mockup"
            width={1080}
            height={1080}
            span="lg:w-5/12"
            delay={150}
            isVisible={galleryInView}
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center lg:items-end">
          <ImageItem            src="/images/graphic-design/200-plus.webp"
            alt="Promotional graphic for Elementor Kits"
            width={1080}
            height={1080}
            span="lg:w-5/12"
            delay={300}
            isVisible={galleryInView}
          />
          <ImageItem            src="/images/graphic-design/eye-catchy.webp"
            alt="Fiverr gig thumbnail design"
            width={1280}
            height={720}
            span="lg:w-7/12"
            delay={450}
            isVisible={galleryInView}
          />
        </div>

      </section>

      {/* Bottom Navigation */}
      <nav className="px-6 lg:px-8 max-w-7xl mx-auto w-full mt-32 md:mt-48 pt-24 border-t border-border-subtle">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start md:items-center">
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-text-tertiary mb-6">Explore other work</h4>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link href="/work/web-development" className="group inline-flex items-center gap-3 text-lg font-serif text-foreground hover:text-brand-accent transition-colors">
                Website Projects <span aria-hidden="true" className="transition-transform duration-normal group-hover:translate-x-2">&rarr;</span>
              </Link>
            </div>
          </div>
          <Link href="/contact" className="btn-primary text-center">
            Start a Project
          </Link>
        </div>
      </nav>

    </main>
  );
}
