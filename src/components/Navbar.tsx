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
    { name: "Home", href: "/" },
    { name: "Work", href: "/#work" },
    { name: "Services", href: "/services" },
    { name: "Reviews", href: "/reviews" },
    { name: "About", href: "/about" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 relative w-full bg-background/95 backdrop-blur-sm border-b border-border-subtle">
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          {/* Left: Brand */}
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 focus-visible transition-opacity hover:opacity-80"
              onClick={() => setIsMobileMenuOpen(false)}
            >
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
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open main menu"}
            >
              {/* Animated Hamburger / X Icon */}
              <div
                className="relative w-6 h-6 flex flex-col justify-center items-center pointer-events-none"
                aria-hidden="true"
              >
                <span
                  className={`block h-[1.5px] w-5 bg-background rounded-full transition-all duration-300 ease-out origin-center motion-reduce:transition-none ${
                    isMobileMenuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-background rounded-full my-[5px] transition-all duration-200 ease-out motion-reduce:transition-none ${
                    isMobileMenuOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-5 bg-background rounded-full transition-all duration-300 ease-out origin-center motion-reduce:transition-none ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                  }`}
                />
              </div>
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

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          aria-hidden={!isMobileMenuOpen}
          className={`absolute top-full left-0 right-0 h-[calc(100dvh-100%)] bg-background border-b border-border-subtle lg:hidden overflow-y-auto transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto visible"
              : "opacity-0 -translate-y-2 pointer-events-none invisible"
          }`}
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsMobileMenuOpen(false);
          }}
        >
          <div className="mt-4 flow-root px-6 pb-12">
            <div className="-my-6 divide-y divide-border-subtle">
              <div className="space-y-2 py-6">
                {navLinks.map((item, index) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    style={{
                      transitionDelay: isMobileMenuOpen ? `${index * 35 + 40}ms` : "0ms",
                    }}
                    className={`-mx-3 block rounded-sm px-3 py-4 text-lg font-serif tracking-wide uppercase text-foreground hover:bg-surface-secondary transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                      isMobileMenuOpen
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-2"
                    } focus-visible`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${navLinks.length * 35 + 40}ms` : "0ms",
                  }}
                  className={`-mx-3 block rounded-sm px-3 py-4 text-lg font-serif tracking-wide uppercase text-brand-accent hover:bg-surface-secondary transition-all duration-300 ease-out motion-reduce:transition-none motion-reduce:transform-none ${
                    isMobileMenuOpen
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  } focus-visible`}
                >
                  Contact Me <span aria-hidden="true" className="ml-1">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
