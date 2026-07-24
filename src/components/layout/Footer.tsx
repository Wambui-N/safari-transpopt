import Link from "next/link";

import { Separator } from "@/components/ui/separator";
import {
  CONTACT_EMAIL,
  NAV_LINKS,
  SITE_NAME,
  SITE_TAGLINE,
  WHATSAPP_NUMBER,
} from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[var(--color-bg-footer)]">
      <div className="container-site py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-3 md:gap-8">
          <div>
            <p className="text-[13px] font-semibold tracking-[0.15em] text-[var(--color-text-light)] uppercase">
              {SITE_NAME.toUpperCase()}
            </p>
            <p className="mt-3 font-small text-[var(--color-text-muted)]">
              {SITE_TAGLINE}
            </p>
          </div>

          <nav className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="inline-block py-2 font-small text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-light)]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col font-small text-[var(--color-text-muted)]">
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`}
              className="inline-block py-2 transition-colors hover:text-[var(--color-text-light)]"
            >
              {WHATSAPP_NUMBER}
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-block py-2 transition-colors hover:text-[var(--color-text-light)]"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>

        <Separator className="my-8 bg-[var(--color-border-dark)]" />

        <div className="flex flex-col gap-2 font-small text-[var(--color-text-muted)] md:flex-row md:items-center md:justify-between">
          <p>© 2026 {SITE_NAME}</p>
          <p>Built by Made With Make</p>
        </div>
      </div>
    </footer>
  );
}
