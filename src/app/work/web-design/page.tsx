"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import { useInView } from "@/hooks/useInView";

type ProjectShowcaseProps = {
  project: Project;
  layoutVariant: 'featured' | 'left' | 'right' | 'experimental';
  images: {
    hero: string;
    section1: string;
    section2?: string;
  };
  priority?: boolean;
};

const ProjectInfo = ({ project }: { project: Project }) => (
  <div className="flex flex-col h-full">
    <div className="flex items-center gap-3 mb-5">
      <span className="w-1.5 h-1.5 rounded-full bg-border-strong" aria-hidden="true" />
      <span className="text-xs font-semibold tracking-widest uppercase text-text-secondary">
        {project.category}
      </span>
    </div>
    
    <h3 className="text-3xl lg:text-5xl font-serif text-foreground mb-6 tracking-tight">
      {project.title}
    </h3>
    
    <p className="text-base lg:text-lg text-text-secondary leading-relaxed mb-10 max-w-lg">
      {project.description}
    </p>

    <div className="mt-auto flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between border-t border-border-subtle pt-6">
      <div className="text-xs font-medium uppercase tracking-wider text-text-tertiary">
        Role: {project.role}
      </div>
      <a 
        href={project.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-primary hover:text-brand-accent transition-colors duration-normal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
      >
        View Live Project 
        <span aria-hidden="true" className="transition-transform duration-normal group-hover:translate-x-1 group-hover:-translate-y-1">
          &#8599;
        </span>
      </a>
    </div>
  </div>
);

const ProjectShowcase = ({ project, layoutVariant, images, priority = false }: ProjectShowcaseProps) => {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const ImageWrapper = ({ src, alt, priorityImg = false, className = "" }: { src: string, alt: string, priorityImg?: boolean, className?: string }) => (
    <div className={`relative w-full overflow-hidden border border-border-subtle/50 bg-surface-secondary ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={1440}
        height={900}
        priority={priorityImg}
        className="w-full h-auto object-cover transform transition-transform duration-[800ms] ease-out hover:scale-[1.02] motion-reduce:transform-none"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 60vw"
      />
    </div>
  );

  if (layoutVariant === 'featured') {
    return (
      <article ref={ref} className={`flex flex-col gap-8 lg:gap-16 opacity-0 translate-y-12 transition-all duration-[800ms] ease-out ${isInView ? 'opacity-100 translate-y-0' : ''}`}>
        <ImageWrapper src={images.hero} alt={`${project.title} homepage`} priorityImg={priority} />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center">
            <ProjectInfo project={project} />
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-8">
            <ImageWrapper src={images.section1} alt={`${project.title} detailed section`} />
            {images.section2 && (
              <ImageWrapper src={images.section2} alt={`${project.title} additional section`} />
            )}
          </div>
        </div>
      </article>
    );
  }

  if (layoutVariant === 'left') {
    return (
      <article ref={ref} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 opacity-0 translate-y-12 transition-all duration-[800ms] ease-out ${isInView ? 'opacity-100 translate-y-0' : ''}`}>
        <div className="lg:col-span-7 flex flex-col gap-8">
          <ImageWrapper src={images.hero} alt={`${project.title} homepage`} />
          <ImageWrapper src={images.section1} alt={`${project.title} detailed section`} />
        </div>
        <div className="lg:col-span-5 flex flex-col justify-center sticky top-32 self-start h-auto">
          <ProjectInfo project={project} />
        </div>
      </article>
    );
  }

  if (layoutVariant === 'right') {
    return (
      <article ref={ref} className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 opacity-0 translate-y-12 transition-all duration-[800ms] ease-out ${isInView ? 'opacity-100 translate-y-0' : ''}`}>
        <div className="lg:col-span-5 order-2 lg:order-1 flex flex-col justify-center sticky top-32 self-start h-auto">
          <ProjectInfo project={project} />
        </div>
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-8">
          <ImageWrapper src={images.hero} alt={`${project.title} homepage`} />
          <ImageWrapper src={images.section1} alt={`${project.title} detailed section`} />
        </div>
      </article>
    );
  }

  if (layoutVariant === 'experimental') {
    return (
      <article ref={ref} className={`flex flex-col gap-12 opacity-0 translate-y-12 transition-all duration-[800ms] ease-out ${isInView ? 'opacity-100 translate-y-0' : ''}`}>
        <div className="max-w-3xl">
          <ProjectInfo project={project} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ImageWrapper src={images.hero} alt={`${project.title} 3D motion hero`} className="md:col-span-2 lg:col-span-2 aspect-[4/3] object-cover" />
          <ImageWrapper src={images.section1} alt={`${project.title} motion details`} className="aspect-[4/5] object-cover" />
          {images.section2 && (
            <ImageWrapper src={images.section2} alt={`${project.title} additional motion details`} className="md:col-span-2 lg:col-span-3 aspect-[21/9] object-cover" />
          )}
        </div>
      </article>
    );
  }

  return null;
};

export default function WebDesignPage() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.1, triggerOnce: true });

  const marthasKitchen = projects.find(p => p.id === 'marthas-kitchen');
  const laTaverna = projects.find(p => p.id === 'la-taverna');
  const diamonds = projects.find(p => p.id === 'diamonds-international');
  const crownBlades = projects.find(p => p.id === 'crown-blades');
  const blessedBaidoo = projects.find(p => p.id === 'blessed-baidoo');

  return (
    <main className="flex-1 flex flex-col pb-32">
      
      {/* Header */}
      <header className="pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div 
          ref={headerRef}
          className={`opacity-0 translate-y-8 transition-all duration-[800ms] ease-out ${headerInView ? 'opacity-100 translate-y-0' : ''}`}
        >
          <Link href="/#work" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-secondary hover:text-brand-accent transition-colors mb-16">
            <span aria-hidden="true">&larr;</span> ALL WORK
          </Link>
          
          <div className="max-w-4xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="h-px w-10 sm:w-16 bg-brand-accent" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
                Web Design
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-foreground mb-8 tracking-tight leading-[1.1]">
              Digital experiences built to make businesses impossible to ignore.
            </h1>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
              A selection of websites and digital experiences I've designed and developed for businesses across hospitality, education, grooming, and creative industries.
            </p>
          </div>
        </div>
      </header>

      {/* Projects Showcase */}
      <section className="px-6 lg:px-8 max-w-7xl mx-auto w-full flex flex-col gap-32 md:gap-40 lg:gap-48">
        
        {marthasKitchen && (
          <ProjectShowcase 
            project={marthasKitchen} 
            layoutVariant="featured"
            priority={true}
            images={{
              hero: '/projects/marthas-kitchen/hero.webp',
              section1: '/projects/marthas-kitchen/section-01.webp',
              section2: '/projects/marthas-kitchen/section-02.webp'
            }}
          />
        )}

        {laTaverna && (
          <ProjectShowcase 
            project={laTaverna} 
            layoutVariant="left"
            images={{
              hero: '/projects/la-taverna/hero.webp',
              section1: '/projects/la-taverna/section-01.webp'
            }}
          />
        )}

        {diamonds && (
          <ProjectShowcase 
            project={diamonds} 
            layoutVariant="right"
            images={{
              hero: '/projects/diamonds-international-school/hero.webp',
              section1: '/projects/diamonds-international-school/section-01.webp'
            }}
          />
        )}

        {crownBlades && (
          <ProjectShowcase 
            project={crownBlades} 
            layoutVariant="left"
            images={{
              hero: '/projects/crown-and-blades/hero.webp',
              section1: '/projects/crown-and-blades/section-01.webp'
            }}
          />
        )}

        {blessedBaidoo && (
          <ProjectShowcase 
            project={blessedBaidoo} 
            layoutVariant="experimental"
            images={{
              hero: '/projects/blessed-baidoo/hero.webp',
              section1: '/projects/blessed-baidoo/section-01.webp',
              section2: '/projects/blessed-baidoo/section-02.webp'
            }}
          />
        )}

      </section>

      {/* Bottom Navigation */}
      <nav className="px-6 lg:px-8 max-w-7xl mx-auto w-full mt-32 md:mt-48 pt-24 border-t border-border-subtle">
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start md:items-center">
          <div>
            <h4 className="text-sm font-medium uppercase tracking-widest text-text-tertiary mb-6">Explore other disciplines</h4>
            <div className="flex flex-col sm:flex-row gap-8">
              <Link href="/work/graphic-design" className="group inline-flex items-center gap-3 text-lg font-serif text-foreground hover:text-brand-accent transition-colors">
                Graphic Design <span aria-hidden="true" className="transition-transform duration-normal group-hover:translate-x-2">&rarr;</span>
              </Link>
              <Link href="/work/media-buying" className="group inline-flex items-center gap-3 text-lg font-serif text-foreground hover:text-brand-accent transition-colors">
                Media Buying <span aria-hidden="true" className="transition-transform duration-normal group-hover:translate-x-2">&rarr;</span>
              </Link>
            </div>
          </div>
          <Link href="/#work" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-secondary hover:text-brand-accent transition-colors">
            <span aria-hidden="true">&uarr;</span> Back to home
          </Link>
        </div>
      </nav>

    </main>
  );
}
