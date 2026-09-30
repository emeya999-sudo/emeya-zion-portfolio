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

export default function ServicesClient() {
  const websiteTypes = [
    {
      num: "01",
      title: "Business Websites",
      desc: "Clean, professional websites tailored for corporate firms, schools, hospitality venues, and service professionals who need an established digital presence.",
      features: [
        "Company & Service Overviews",
        "Clear Information Structure",
        "Direct Contact Pathways",
        "Mobile-Responsive Design"
      ],
    },
    {
      num: "02",
      title: "Landing Pages",
      desc: "Focused single-page websites designed around a specific product, event, or campaign, structured to present the offer clearly and encourage inquiry.",
      features: [
        "Clear Value Proposition",
        "Simple Layout & Hierarchy",
        "Direct Call to Action",
        "Fast Mobile Loading"
      ],
    },
    {
      num: "03",
      title: "E-commerce Websites",
      desc: "Online shopping and ordering experiences that make it simple for customers to browse dishes, products, or collections and place orders smoothly.",
      features: [
        "Product & Menu Showcases",
        "Order & Cart Flows",
        "WhatsApp / Direct Ordering",
        "Mobile-First Layout"
      ],
    },
    {
      num: "04",
      title: "Website Maintenance",
      desc: "Ongoing support, technical updates, performance tune-ups, and content adjustments to keep your website looking sharp, secure, and functioning properly.",
      features: [
        "Content & Layout Adjustments",
        "Speed & Performance Checks",
        "Mobile Testing & Bug Fixes",
        "Domain & Hosting Assistance"
      ],
    },
  ];

  const standards = [
    {
      title: "Custom UI/UX Design",
      desc: "Each layout is custom-designed around your business goals, content, and branding, avoiding cookie-cutter templates.",
    },
    {
      title: "Mobile-First Responsiveness",
      desc: "The majority of web visitors browse on smartphones. Your website will feel natural, clean, and intuitive across all screen sizes.",
    },
    {
      title: "Direct Contact Integration",
      desc: "Quick one-tap links to WhatsApp, phone calls, and email so prospective clients can reach you with minimum friction.",
    },
    {
      title: "Fast Loading Performance",
      desc: "Built with clean, lightweight Next.js and React code for swift page loads and smooth browsing on any network.",
    },
    {
      title: "Clear Content Hierarchy",
      desc: "Structured typography and thoughtful spacing that guide readers naturally through what you offer and how to reach you.",
    },
    {
      title: "Clean Search Foundation",
      desc: "Semantic markup, sensible meta tags, and optimized asset loading that set your site up well for search engines.",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Scope",
      desc: "We discuss what your business does, who your customers are, the pages you need, and what you want the website to achieve.",
    },
    {
      step: "02",
      title: "Structure & Content",
      desc: "We define the site map, organize the sections, and establish the visual hierarchy so key information is effortless to find.",
    },
    {
      step: "03",
      title: "Design & Development",
      desc: "I build the website with clean, modern code and responsive layouts, sharing interactive progress along the way.",
    },
    {
      step: "04",
      title: "Testing & Launch",
      desc: "We test on real mobile devices, connect your domain name, verify contact forms, and launch your site smoothly.",
    },
  ];

  const faqs = [
    {
      q: "What is SYNDORA?",
      a: "SYNDORA is a marketing and digital solutions company founded by Emeya Zion. While our scope covers broader digital solutions, our active service focus is delivering custom website design and development.",
    },
    {
      q: "Who will I work with on my project?",
      a: "You work directly with founder Emeya Zion from start to finish — ensuring clear communication, focused design, and dependable development without middlemen.",
    },
    {
      q: "Do you work with independent and growing businesses?",
      a: "Yes. Most of our client work is with independent businesses, schools, restaurants, and founders looking for a clean, credible web presence.",
    },
    {
      q: "How long does a website project usually take?",
      a: "Most projects take between 2 to 4 weeks depending on the number of pages, content readiness, and review speed.",
    },
    {
      q: "Can you help update or redesign an existing website?",
      a: "Yes. If your current site is outdated, slow, or difficult to use on mobile phones, we can rebuild it with a clean, modern architecture.",
    },
    {
      q: "Will the website work properly on smartphones?",
      a: "Yes. Every website is built mobile-first to ensure it looks and performs reliably on phones, tablets, and desktop computers.",
    },
    {
      q: "How do we get started?",
      a: "Head to the Contact page, share brief details about your business and goals, and we can discuss the project scope and next steps.",
    },
  ];

  return (
    <main className="flex-1 flex flex-col bg-background overflow-hidden">
      {/* 1. HERO */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 lg:px-8 max-w-7xl mx-auto w-full">
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
            Websites designed to help businesses establish a credible presence.
          </h1>
        </FadeIn>
        <FadeIn delay={150}>
          <p className="text-lg sm:text-xl md:text-2xl text-text-secondary leading-relaxed max-w-3xl mb-12">
            SYNDORA is a marketing and digital solutions company founded by Emeya Zion. Currently, our core focus is delivering clean, responsive, and dependable websites that represent your business well and make it easy for customers to get in touch.
          </p>
        </FadeIn>
        <FadeIn delay={300} className="flex flex-col sm:flex-row gap-5">
          <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
            Start a Website Project
          </Link>
          <Link href="/#work" className="btn-secondary w-full sm:w-auto text-center">
            View Case Studies
          </Link>
        </FadeIn>
      </section>

      {/* 2. THE SERVICES I OFFER */}
      <section className="py-24 bg-surface-secondary/30 border-y border-border-subtle">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <FadeIn className="max-w-2xl mb-16">
            <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
              Core Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-foreground mb-4">
              What I design and build.
            </h2>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Whether you need a full business website, a campaign landing page, an online catalog, or ongoing support, each project is handled with direct communication and care.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {websiteTypes.map((item, i) => (
              <FadeIn key={i} delay={i * 80} className="bg-background border border-border-subtle p-8 rounded-sm flex flex-col justify-between hover:border-border-strong transition-colors">
                <div>
                  <span className="text-xs font-serif italic text-brand-accent mb-3 block">
                    {item.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-border-subtle/80">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-text-tertiary block mb-3">
                    Key Deliverables
                  </span>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2.5 text-xs text-text-secondary">
                        <span className="w-1 h-1 rounded-full bg-brand-accent flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>
      </section>

      {/* 3. QUALITY STANDARDS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn className="max-w-3xl mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
            Quality Standard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-foreground mb-6">
            What every website includes.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
            I don&apos;t cut corners with bloated page builders or slow templates. Every build is treated with careful attention to speed, readability, and user experience.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standards.map((std, i) => (
            <FadeIn key={i} delay={i * 80} className="p-8 border border-border-subtle rounded-sm bg-surface-secondary/20">
              <span className="w-2 h-2 rounded-full bg-brand-accent block mb-4" />
              <h3 className="text-lg font-bold text-foreground mb-3">
                {std.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {std.desc}
              </p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 4. THE DIFFERENCE (WHY CUSTOM MATTERS) */}
      <section className="py-24 bg-foreground text-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">
          <div className="lg:w-5/12">
            <FadeIn>
              <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
                The Approach
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-6 leading-tight">
                Why a custom website makes a difference.
              </h2>
              <p className="text-base sm:text-lg text-background/80 leading-relaxed mb-8">
                Your website is often the first place a potential client checks before deciding whether to trust your business. A clean, tailored build makes that decision easy.
              </p>
              <Link href="/contact" className="btn-primary inline-block text-center">
                Let&apos;s Build Yours
              </Link>
            </FadeIn>
          </div>

          <div className="lg:w-7/12 flex flex-col gap-8">
            <FadeIn delay={100} className="border-l-2 border-brand-accent pl-6">
              <h3 className="text-xl font-serif text-background mb-2">Authentic Credibility</h3>
              <p className="text-sm sm:text-base text-background/80 leading-relaxed">
                Visitors notice when a website is built with care. A custom layout signals that you take your business seriously, setting you apart from competitors using generic templates.
              </p>
            </FadeIn>
            <FadeIn delay={200} className="border-l-2 border-brand-accent pl-6">
              <h3 className="text-xl font-serif text-background mb-2">Built for Your Audience</h3>
              <p className="text-sm sm:text-base text-background/80 leading-relaxed">
                Every headline, section, and button is organized around how your actual customers browse and what they need to know before contacting you.
              </p>
            </FadeIn>
            <FadeIn delay={300} className="border-l-2 border-brand-accent pl-6">
              <h3 className="text-xl font-serif text-background mb-2">Clean, Reliable Code</h3>
              <p className="text-sm sm:text-base text-background/80 leading-relaxed">
                Built with modern React and Next.js standards without fragile plugin dependencies, ensuring dependable performance and fast load times.
              </p>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* 5. PROCESS */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <FadeIn>
          <div className="flex items-center gap-6 mb-16">
            <h2 className="text-2xl md:text-3xl font-serif text-foreground">How We Work Together</h2>
            <div className="h-px flex-1 bg-border-subtle" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {processSteps.map((item, i) => (
            <FadeIn key={i} delay={i * 100} className="flex flex-col border-t-2 border-foreground pt-6">
              <span className="text-sm font-bold tracking-widest text-brand-accent mb-4">{item.step}</span>
              <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="py-24 bg-surface-secondary/30 border-y border-border-subtle">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-serif text-foreground text-center mb-16">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="flex flex-col gap-10">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 50} className="border-b border-border-subtle pb-8 last:border-0">
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-text-secondary leading-relaxed text-base">{faq.a}</p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="py-32 px-6 lg:px-8 max-w-4xl mx-auto w-full text-center">
        <FadeIn>
          <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-4 block">
            Start With SYNDORA
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] tracking-tight mb-8">
            Ready to build a clean, effective website for your business?
          </h2>
          <p className="text-lg sm:text-xl text-text-secondary leading-relaxed mb-12 max-w-2xl mx-auto">
            Tell me about your business, what you want the website to achieve, and let&apos;s discuss how SYNDORA can bring your digital presence to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/contact" className="btn-primary w-full sm:w-auto text-center">
              Start a Project
            </Link>
            <Link href="/#work" className="btn-secondary w-full sm:w-auto text-center">
              View Case Studies
            </Link>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
