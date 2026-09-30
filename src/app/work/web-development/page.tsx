import { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/data/projects";
import { CaseStudyCard } from "@/components/Work";

export const metadata: Metadata = {
  title: "Web Development Case Studies — SYNDORA",
  description:
    "Custom websites designed and developed by SYNDORA, founded by Emeya Zion. Case studies across hospitality, education, and service businesses.",
};

export default function WebDevelopmentPage() {
  return (
    <main className="flex-1 flex flex-col pt-16 md:pt-24 pb-24 md:pb-32 bg-background min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full">
        {/* Navigation Breadcrumb */}
        <div className="pt-6 pb-12">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-text-secondary hover:text-brand-accent transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent"
          >
            <span
              aria-hidden="true"
              className="transition-transform duration-normal group-hover:-translate-x-1"
            >
              &larr;
            </span>
            Back to Overview
          </Link>
        </div>

        {/* Page Header */}
        <div className="mb-20 md:mb-28 max-w-3xl flex flex-col items-start">
          <div className="flex items-center gap-4 sm:gap-6 mb-6">
            <div className="h-px w-8 sm:w-16 bg-brand-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
              SYNDORA &middot; Web Development
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground leading-[1.12] tracking-tight mb-6">
            Selected Websites &amp; Case Studies
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            A collection of bespoke websites and web applications designed and
            developed by founder Emeya Zion for clients across hospitality,
            education, premium grooming, and creative industries. Each project is
            crafted with high-performance code, intentional typography, clear
            communication, and customer-focused conversion pathways.
          </p>
        </div>

        {/* Individual Project Case Studies List */}
        <div className="flex flex-col gap-24 lg:gap-32">
          {projects.map((project, idx) => (
            <CaseStudyCard key={project.id} project={project} index={idx} />
          ))}
        </div>

        {/* Bottom Work Conversion Banner */}
        <div className="mt-28 md:mt-36 p-8 sm:p-12 lg:p-16 bg-surface-secondary/50 border border-border-subtle rounded-sm text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4">
            SYNDORA Digital Solutions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-foreground mb-4">
            Looking for a clean, professional website for your business?
          </h2>
          <p className="text-base text-text-secondary max-w-xl mb-8 leading-relaxed">
            Whether launching a new business or redesigning an existing site,
            SYNDORA builds custom web experiences tailored directly to your
            goals.
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
    </main>
  );
}
