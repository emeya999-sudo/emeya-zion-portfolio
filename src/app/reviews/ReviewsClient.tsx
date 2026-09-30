"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { reviews } from "@/data/reviews";
import { ReviewModal } from "@/components/ReviewModal";

function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, isInView } = useInView({ threshold: 0.1, triggerOnce: true });
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ReviewsClient() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);

  const expectations = [
    {
      num: "01",
      title: "Direct Founder Collaboration",
      desc: "You partner directly with founder Emeya Zion throughout the entire design and development cycle. Every idea, revision, and milestone is handled with focused accountability.",
    },
    {
      num: "02",
      title: "Transparent Milestones & Previews",
      desc: "No opaque black boxes. You receive clear timelines, responsive communication, and live staging previews so you always see exactly how your website is coming together.",
    },
    {
      num: "03",
      title: "Purpose-Built Craftsmanship",
      desc: "Websites engineered for fast loading times, clean mobile fluidity, distinctive editorial typography, and clear pathways for customers to contact your business.",
    },
  ];

  return (
    <main className="flex-1 flex flex-col bg-background overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-32 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="flex items-center gap-3 sm:gap-4 mb-6">
            <div className="h-px w-8 sm:w-16 bg-brand-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
              CLIENT REVIEWS
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-foreground leading-[1.08] tracking-tight max-w-4xl mb-8">
            What Clients Have to Say
          </h1>
        </FadeIn>

        <FadeIn delay={150}>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mb-10 sm:mb-12">
            Genuine feedback and reflections from businesses and founders who have
            partnered with SYNDORA on custom website design and development projects.
            If you have collaborated with us, tap below to share your experience.
          </p>
        </FadeIn>

        <FadeIn delay={300} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
          <button
            type="button"
            onClick={() => setIsReviewModalOpen(true)}
            className="btn-primary text-center"
          >
            LEAVE A REVIEW <span aria-hidden="true" className="ml-1">&rarr;</span>
          </button>
          <Link
            href="/work/web-development"
            className="btn-secondary text-center"
          >
            Explore Selected Work <span aria-hidden="true" className="ml-1">&rarr;</span>
          </Link>
        </FadeIn>
      </section>

      {/* 2. REVIEWS LIST OR TASTEFUL EMPTY STATE */}
      <section className="py-20 md:py-28 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border-subtle">
        {reviews.length > 0 ? (
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {reviews.slice(0, 4).map((rev) => (
                <article
                key={rev.id}
                className="flex flex-col justify-between bg-surface-secondary/40 border border-border-subtle p-8 sm:p-10 rounded-sm"
              >
                <div className="mb-8">
                  {rev.projectTitle && (
                    <span className="text-[11px] font-bold tracking-widest uppercase text-brand-accent mb-4 block">
                      {rev.projectTitle}
                    </span>
                  )}
                  <p className="text-lg sm:text-xl font-serif text-foreground leading-relaxed italic">
                    &ldquo;{rev.content}&rdquo;
                  </p>
                </div>
                <div className="pt-6 border-t border-border-subtle/80 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
                      {rev.clientName}
                    </h3>
                    {(rev.role || rev.company) && (
                      <p className="text-xs text-text-tertiary mt-0.5">
                        {[rev.role, rev.company].filter(Boolean).join(" · ")}
                      </p>
                    )}
                  </div>
                  {rev.date && (
                    <span className="text-xs text-text-tertiary font-mono">
                      {rev.date}
                    </span>
                  )}
                </div>
              </article>
            ))}
            </div>
            {reviews.length > 4 && (
              <div className="mt-12 flex justify-center">
                <Link href="/reviews/all" className="btn-secondary">
                  ALL REVIEWS <span aria-hidden="true" className="ml-1">&rarr;</span>
                </Link>
              </div>
            )}
          </div>
        ) : (
          /* Graceful, intentional empty state — no fabricated content */
          <FadeIn>
            <div className="bg-surface-secondary/40 border border-border-subtle rounded-sm p-8 sm:p-12 lg:p-16 max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-accent/80" aria-hidden="true" />
                <span className="text-xs font-semibold tracking-widest uppercase text-text-tertiary">
                  Authentic Client Reflections
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-foreground mb-4 leading-snug">
                Client feedback will appear here as reviews are shared.
              </h2>

              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-2xl">
                At SYNDORA, we prioritize honest collaboration and measurable craftsmanship.
                We do not publish fabricated ratings, synthetic testimonials, or placeholder quotes.
                As clients share direct feedback on their website design and development experience,
                their verified reviews will be documented here.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-border-subtle/80">
                <button
                  type="button"
                  onClick={() => setIsReviewModalOpen(true)}
                  className="btn-primary text-center"
                >
                  LEAVE A REVIEW <span aria-hidden="true" className="ml-1">&rarr;</span>
                </button>
                <Link
                  href="/work/web-development"
                  className="btn-secondary text-center"
                >
                  View Selected Work
                </Link>
              </div>
            </div>
          </FadeIn>
        )}
      </section>

      {/* 3. WHAT CLIENTS CAN EXPECT WORKING WITH SYNDORA */}
      <section className="py-20 md:py-28 lg:py-32 px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border-subtle">
        <FadeIn className="max-w-3xl mb-16 md:mb-20">
          <div className="flex items-center gap-3 sm:gap-4 mb-4">
            <div className="h-px w-8 sm:w-16 bg-brand-accent" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-text-secondary">
              OUR COMMITMENT
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground leading-[1.12] tracking-tight mb-6">
            What You Can Expect Partnering with SYNDORA
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            Our reputation is built project by project through clear expectations,
            technical rigor, and direct accountability.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {expectations.map((item, idx) => (
            <FadeIn
              key={item.num}
              delay={idx * 150}
              className="flex flex-col bg-surface-secondary/30 border border-border-subtle p-8 rounded-sm"
            >
              <span className="text-xs font-serif italic text-brand-accent mb-4">
                {item.num}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                {item.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. CONVERSION BANNER */}
      <section className="py-20 md:py-28 px-6 lg:px-8 max-w-7xl mx-auto w-full border-t border-border-subtle">
        <FadeIn className="p-8 sm:p-12 lg:p-16 bg-surface-secondary/50 border border-border-subtle rounded-sm text-center max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4">
            Start A Project
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-foreground mb-4">
            Looking for a clean, professional website for your business?
          </h2>
          <p className="text-base text-text-secondary max-w-xl mb-8 leading-relaxed">
            Whether launching a new brand or redesigning an existing website,
            SYNDORA works with you directly from concept to launch.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="btn-primary text-center">
              Work With SYNDORA
            </Link>
            <Link href="/services" className="btn-secondary text-center">
              Explore Services &amp; Process
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* INTERACTIVE REVIEW MODAL */}
      <ReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
      />
    </main>
  );
}
