import type { Metadata } from "next";
import Link from "next/link";

import { ContactForm } from "@/components/sections/ContactForm";
import { Separator } from "@/components/ui/separator";
import {
  CONTACT_EMAIL,
  RESPONSE_PROMISE,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact — Savanna Leaf",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-[var(--color-bg-dark)] pt-40 pb-16">
        <div className="container-site">
          <p className="font-label mb-4 text-[var(--color-text-muted)]">
            Get in touch
          </p>
          <h1 className="font-h2 text-[var(--color-text-light)]">
            Let&apos;s get you moving.
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-dark)]">
        <div className="container-site grid gap-16 md:grid-cols-2">
          <div>
            <ContactForm fullWidth />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <p className="font-label mb-2 text-[var(--color-text-muted)]">
                WhatsApp
              </p>
              <p className="font-h3 text-[var(--color-accent)]">
                {WHATSAPP_NUMBER}
              </p>
              <Link
                href={getWhatsAppUrl(WHATSAPP_NUMBER)}
                target="_blank"
                rel="noopener noreferrer"
                className="font-small mt-2 inline-block text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-light)]"
              >
                Message us →
              </Link>
            </div>

            <Separator className="bg-[var(--color-border-dark)]" />

            <div>
              <p className="font-label mb-2 text-[var(--color-text-muted)]">
                Email
              </p>
              <p className="font-h3 text-[var(--color-text-light)]">
                {CONTACT_EMAIL}
              </p>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="font-small mt-2 inline-block text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-light)]"
              >
                Send email →
              </a>
            </div>

            <Separator className="bg-[var(--color-border-dark)]" />

            <p className="font-small text-[var(--color-text-muted)]">
              {RESPONSE_PROMISE}
            </p>

            <p className="font-small text-[var(--color-text-muted)]">
              We cover Nairobi, Maasai Mara, Amboseli, and custom routes across
              East Africa.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
