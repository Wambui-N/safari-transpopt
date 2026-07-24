"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";
import { useState } from "react";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useLenis((lenis) => {
    setScrolled(lenis.scroll > 20);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "border-b border-[var(--color-border-dark)] bg-[var(--color-bg-dark)]/95 backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <div className="container-site flex h-16 items-center justify-between md:h-20">
        <Link
          href="/"
          className="text-[13px] font-semibold tracking-[0.15em] text-[var(--color-text-light)] uppercase"
        >
          {SITE_NAME.toUpperCase()}
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[12px] font-normal tracking-wider text-[var(--color-text-muted)] uppercase transition-colors hover:text-[var(--color-text-light)]"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-full origin-right scale-x-0 bg-[var(--color-text-light)] transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100" />
            </Link>
          ))}
          <Button asChild>
            <Link href="/contact">Get a quote</Link>
          </Button>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button
              type="button"
              aria-label="Open menu"
              className="flex min-h-11 min-w-11 items-center justify-center text-[var(--color-text-light)]"
            >
              <Menu className="size-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="pt-12">
            <SheetHeader>
              <SheetTitle>{SITE_NAME}</SheetTitle>
            </SheetHeader>
            <nav className="mt-8 flex flex-col">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-4 text-[18px] font-normal tracking-wider text-[var(--color-text-muted)] uppercase transition-colors hover:text-[var(--color-text-light)]"
                >
                  {link.label}
                </Link>
              ))}
              <Button asChild className="mt-4 w-full min-h-[52px]">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Get a quote
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
