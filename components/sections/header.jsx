"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ui/molecules/ThemeToggle";

import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "Strength",
    href: "/strength",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Workflow",
    href: "/workflow",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#020617]/80 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#020617]/60"
      role="banner"
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* LOGO */}
        <Link
          href="/"
          aria-label="OMR.in"
          className="flex items-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="OMR.in - Mark Reader"
            width={340}
            height={116}
            priority
            className="
      h-10 w-auto
      sm:h-12
      md:h-14
      lg:h-16
    "
          />

          {/* Brand */}
          {/* <div>
            <span className="block text-xl font-bold tracking-wide text-white">
              Mark Reader
            </span>

            <span className="mt-1 block text-[10px] uppercase tracking-[0.32em] text-slate-500">
              Enterprise OMR Solutions
            </span>
          </div> */}
        </Link>
        <ThemeToggle />
        {/* DESKTOP NAV */}
        <nav
          aria-label="Primary Navigation"
          className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2 backdrop-blur-xl lg:flex"
        >
          {navItems.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/20"
                    : "text-slate-400 hover:bg-white/[0.06] hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Link
            href="/get-quote"
            className="rounded-full border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]"
          >
            Get Quote
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:scale-[1.03] hover:bg-orange-600"
          >
            Book Consultation
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          aria-label="Toggle Navigation Menu"
          aria-expanded={mobileMenu}
          onClick={() => setMobileMenu(!mobileMenu)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-white transition hover:bg-white/[0.06] lg:hidden"
        >
          {mobileMenu ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="border-t border-white/10 bg-[#020617]/95 backdrop-blur-2xl lg:hidden">
          <nav
            aria-label="Mobile Navigation"
            className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6"
          >
            {navItems.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setMobileMenu(false)}
                  className={`rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-300 ${
                    active
                      ? "bg-orange-500 text-white"
                      : "text-slate-300 hover:bg-white/[0.05] hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* MOBILE CTA */}
            <div className="mt-4 flex flex-col gap-3 border-t border-white/10 pt-5">
              <Link
                href="/get-quote"
                onClick={() => setMobileMenu(false)}
                className="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4 text-center text-sm font-medium text-white transition hover:bg-white/[0.05]"
              >
                Get Enterprise Quote
              </Link>

              <Link
                href="/contact"
                onClick={() => setMobileMenu(false)}
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-orange-500 px-5 py-4 text-sm font-semibold text-white transition hover:bg-orange-600"
              >
                Book Consultation
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
