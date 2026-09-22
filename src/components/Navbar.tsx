"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border-subtle">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* Left: Brand */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 focus-visible transition-opacity hover:opacity-80">
              <span className="sr-only">{siteConfig.name}</span>
              <span className="font-serif text-xl tracking-wide uppercase text-foreground">
                {siteConfig.name}
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-sm p-2 bg-foreground text-background shadow-md hover:bg-foreground/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-normal"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-expanded={isMobileMenuOpen}
              aria-label="Open main menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          {/* Center: Links */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium tracking-wide uppercase link-editorial"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right: Contact CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="text-sm font-medium tracking-wide uppercase text-brand-accent hover:text-brand-accent-hover transition-colors focus-visible"
            >
              Contact Me <span aria-hidden="true" className="ml-1">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div className="fixed inset-0 z-[100] bg-background">
            <div className="flex items-center justify-between p-6">
              <Link
                href="/"
                className="-m-1.5 p-1.5 focus-visible"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="sr-only">{siteConfig.name}</span>
                <span className="font-serif text-xl tracking-wide uppercase text-foreground">
                  {siteConfig.name}
                </span>
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-sm p-2 bg-foreground text-background shadow-md hover:bg-foreground/90 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent transition-all duration-normal"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root px-6">
              <div className="-my-6 divide-y divide-border-subtle">
                <div className="space-y-2 py-6">
                  {navLinks.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="-mx-3 block rounded-sm px-3 py-4 text-lg font-serif tracking-wide uppercase text-foreground hover:bg-surface-secondary transition-colors focus-visible"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="-mx-3 block rounded-sm px-3 py-4 text-lg font-serif tracking-wide uppercase text-brand-accent hover:bg-surface-secondary transition-colors focus-visible"
                  >
                    Contact Me <span aria-hidden="true" className="ml-1">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
