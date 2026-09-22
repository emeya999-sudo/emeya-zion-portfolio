"use client";

import React from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

type Category = {
  id: string;
  label: string;
  title: string;
  description: string;
  capabilities: string;
  ctaText: string;
  link: string;
  span: string;
  mt?: string;
  visualType: 'web' | 'graphic' | 'media';
};

const categories: Category[] = [
  {
    id: 'web-design',
    label: '01',
    title: 'WEB DESIGN',
    description: 'Websites and digital experiences designed to make businesses look credible, distinctive, and easy to engage with.',
    capabilities: 'UI/UX · DEVELOPMENT · DIGITAL EXPERIENCES',
    ctaText: 'EXPLORE WEB DESIGN',
    link: '/work/web-design',
    span: 'lg:col-span-12',
    visualType: 'web',
  },
  {
    id: 'graphic-design',
    label: '02',
    title: 'GRAPHIC DESIGN',
    description: 'Visual identities, marketing graphics, and digital assets designed to give brands a stronger visual presence.',
    capabilities: 'BRANDING · VISUAL DESIGN · MARKETING ASSETS',
    ctaText: 'EXPLORE GRAPHIC DESIGN',
    link: '/work/graphic-design',
    span: 'lg:col-span-7',
    visualType: 'graphic',
  },
  {
    id: 'media-buying',
    label: '03',
    title: 'MEDIA BUYING',
    description: 'Paid advertising campaigns built around reaching the right audience, generating attention, and driving measurable action.',
    capabilities: 'PAID ADS · CAMPAIGNS · PERFORMANCE',
    ctaText: 'EXPLORE MEDIA BUYING',
    link: '/work/media-buying',
    span: 'lg:col-span-5',
    mt: 'lg:mt-24',
    visualType: 'media',
  }
];

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

const GraphicVisual = () => {
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
        <source src="/videos/graphic-design.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

const MediaVisual = () => (
  <div className="w-full relative overflow-hidden bg-surface-secondary flex items-center justify-center">
    <img 
      src="/images/media-buying.webp" 
      alt="Media Buying" 
      width={1024}
      height={768}
      className="w-full h-auto object-contain block" 
    />
  </div>
);

const CategoryCard = ({ category, index }: { category: Category, index: number }) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  const delay = index * 100;

  return (
    <article 
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`group relative flex flex-col gap-8 lg:gap-10 ${category.span} ${category.mt || ''} 
        opacity-0 translate-y-12 transition-all duration-700 ease-out 
        ${isInView ? 'opacity-100 translate-y-0' : ''}`}
    >
      <div className="relative w-full overflow-hidden border border-border-subtle bg-surface-secondary/30 rounded-sm transition-colors duration-slow group-hover:border-text-tertiary/40">
        <div className="w-full transition-transform duration-slow ease-out motion-reduce:transform-none">
          {category.visualType === 'web' && <WebVisual />}
          {category.visualType === 'graphic' && <GraphicVisual />}
          {category.visualType === 'media' && <MediaVisual />}
        </div>
      </div>

      <div className={`flex flex-col flex-1 ${category.id === 'web-design' ? 'lg:flex-row lg:justify-between lg:items-start lg:gap-16' : ''}`}>
        
        <div className={`flex flex-col ${category.id === 'web-design' ? 'lg:w-5/12' : ''}`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-serif italic text-text-tertiary">{category.label}</span>
            <span className="w-6 h-px bg-border-strong group-hover:w-10 group-hover:bg-brand-accent transition-all duration-normal" aria-hidden="true" />
            <h3 className="text-2xl lg:text-3xl font-serif text-foreground tracking-tight group-hover:text-brand-accent group-hover:translate-x-1 transition-all duration-normal">
              {category.title}
            </h3>
          </div>
          
          <div className="text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-text-tertiary mb-6">
            {category.capabilities}
          </div>
        </div>

        <div className={`flex flex-col flex-1 h-full ${category.id === 'web-design' ? 'lg:w-7/12 lg:pl-12 lg:border-l lg:border-border-subtle' : ''}`}>
           <p className={`text-base text-text-secondary leading-relaxed mb-10 ${category.id === 'web-design' ? 'lg:text-lg lg:mb-12 max-w-lg' : ''}`}>
             {category.description}
           </p>

           <div className="mt-auto pt-2">
             <Link 
               href={category.link} 
               className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-primary transition-all duration-normal group-hover:text-brand-accent group-hover:gap-3 before:absolute before:inset-0 before:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
             >
               {category.ctaText} <span aria-hidden="true" className="transition-transform duration-normal">&rarr;</span>
             </Link>
           </div>
        </div>

      </div>
    </article>
  );
};

export function Work() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section id="work" className="relative w-full py-24 md:py-32 lg:py-48">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <div 
          ref={headerRef}
          className={`mb-20 md:mb-32 max-w-2xl flex flex-col items-start
            opacity-0 translate-y-8 transition-all duration-700 ease-out
            ${headerInView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <div className="flex items-center gap-6 mb-8">
            <div className="h-px w-10 sm:w-16 bg-brand-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
              Selected Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-[1.1] tracking-tight mb-6">
            Different disciplines. One approach: making brands impossible to ignore.
          </h2>
          <p className="text-base md:text-lg text-text-secondary leading-relaxed">
            Explore selected work across digital experiences, visual design, and paid media.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-24 gap-x-12">
          {categories.map((category, idx) => (
            <CategoryCard key={category.id} category={category} index={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
