import Link from "next/link";
import { siteConfig } from "@/config/site";

const footerLinks = [
  { label: "Selected Work", href: "/#work" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-[#695448] bg-[#35251E]">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 md:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-5">
            <Link
              href="/"
              className="inline-block font-serif text-2xl tracking-wide text-[#F5EDE2] transition-colors hover:text-[#D7B98B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B98B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#35251E]"
            >
              {siteConfig.name}
            </Link>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#C8B7A8]">
              {siteConfig.currentFocus}, with a focus on clear, considered digital experiences.
            </p>
          </div>

          <nav className="lg:col-span-3" aria-label="Footer">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#D7B98B]">
              Explore
            </h2>
            <ul className="flex flex-col items-start gap-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="border-b border-[#695448] text-sm text-[#F5EDE2] transition-colors hover:border-[#D7B98B] hover:text-[#D7B98B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B98B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#35251E]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-4">
            <h2 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#D7B98B]">
              Get in touch
            </h2>
            <p className="mb-5 max-w-sm text-sm leading-relaxed text-[#C8B7A8]">
              Have a website project in mind? Let&apos;s talk about it.
            </p>
            <div className="flex flex-col items-start gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[2px] border border-[#D7B98B] bg-[#D7B98B] px-8 py-3.5 text-center text-sm font-medium uppercase tracking-[0.04em] text-[#35251E] transition-colors hover:border-[#F5EDE2] hover:bg-[#F5EDE2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F5EDE2] focus-visible:ring-offset-2 focus-visible:ring-offset-[#35251E]"
              >
                Contact Emeya Zion <span aria-hidden="true" className="ml-2">&rarr;</span>
              </Link>
              <a
                href={`mailto:${siteConfig.email}`}
                className="border-b border-[#695448] text-sm text-[#F5EDE2] transition-colors hover:border-[#D7B98B] hover:text-[#D7B98B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B98B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#35251E]"
              >
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[#695448] text-sm text-[#F5EDE2] transition-colors hover:border-[#D7B98B] hover:text-[#D7B98B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D7B98B] focus-visible:ring-offset-2 focus-visible:ring-offset-[#35251E]"
              >
                Message on WhatsApp
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#695448] pt-6">
          <p className="text-xs text-[#C8B7A8]">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
