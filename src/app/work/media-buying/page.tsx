import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Media Buying | Emeya Zion",
  description: "Paid advertising campaigns built around reaching the right audience, generating attention, and driving measurable action.",
};

export default function MediaBuyingPage() {
  return (
    <main className="flex-1 flex flex-col pt-32 pb-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <Link href="/#work" className="text-sm font-semibold uppercase tracking-widest text-text-secondary hover:text-brand-accent transition-colors mb-12 inline-flex items-center gap-2">
        <span aria-hidden="true">&larr;</span> Back to selected work
      </Link>
      
      <div className="mb-20">
        <h1 className="text-4xl md:text-6xl font-serif text-foreground mb-6 tracking-tight">Media Buying</h1>
        <p className="text-xl text-text-secondary max-w-2xl leading-relaxed">
          Paid advertising campaigns built around reaching the right audience, generating attention, and driving measurable action.
        </p>
      </div>

      <div className="border-t border-border-subtle pt-12 text-center text-text-secondary py-32 bg-surface-secondary/30 rounded-[2px]">
        <p className="text-lg">Detailed campaign insights and performance approaches are currently being assembled.</p>
        <p className="text-sm mt-2 uppercase tracking-widest">Check back shortly.</p>
      </div>
    </main>
  );
}
