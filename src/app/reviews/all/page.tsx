import { Metadata } from "next";
import Link from "next/link";
import { reviews } from "@/data/reviews";

export const metadata: Metadata = {
  title: "All Reviews — SYNDORA",
  description: "Read all genuine client reviews for SYNDORA's custom website design and development services.",
};

export default function AllReviewsPage() {
  return (
    <main className="flex-1 flex flex-col bg-background min-h-screen">
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 px-6 lg:px-8 max-w-3xl mx-auto w-full">
        <div className="mb-12">
          <Link
            href="/reviews"
            className="inline-flex items-center text-xs font-semibold tracking-widest uppercase text-text-secondary hover:text-foreground transition-colors mb-8"
          >
            <span aria-hidden="true" className="mr-2">&larr;</span> BACK TO REVIEWS
          </Link>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-foreground leading-[1.08] tracking-tight">
            All Reviews
          </h1>
        </div>

        <div className="flex flex-col gap-8">
          {reviews.length > 0 ? (
            reviews.map((rev) => (
              <article key={rev.id} className="pb-8 border-b border-border-subtle last:border-b-0">
                <div className="flex flex-col mb-3">
                  <h3 className="text-base sm:text-lg font-semibold text-foreground tracking-tight">
                    {rev.clientName}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex text-brand-accent text-sm sm:text-base tracking-widest" aria-label={`Rating: ${rev.rating || 5} out of 5 stars`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>
                          {i < (rev.rating || 5) ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    {rev.date && (
                      <>
                        <span className="text-text-tertiary text-xs">&middot;</span>
                        <span className="text-text-secondary text-sm">{rev.date}</span>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </article>
            ))
          ) : (
            <div className="py-12 bg-surface-secondary/40 border border-border-subtle rounded-sm text-center">
              <p className="text-text-secondary text-sm sm:text-base">
                Client feedback will appear here as reviews are shared.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
