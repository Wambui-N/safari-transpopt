import { MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/sections/ContactForm";
import {
  RESPONSE_PROMISE,
  WHATSAPP_NUMBER,
} from "@/lib/constants";
import { getWhatsAppUrl } from "@/lib/utils";

type CtaBlockProps = {
  headline?: string;
  subline?: string;
  showForm?: boolean;
};

export function CtaBlock({
  headline = "Ready to plan your transfer?",
  subline = "Send us your details and we'll get back to you within a few hours.",
  showForm = true,
}: CtaBlockProps) {
  return (
    <section className="section-padding bg-[var(--color-bg-dark)]">
      <div className="container-site mx-auto max-w-[560px] text-center">
        <h2 className="font-h2 mb-4 text-[var(--color-text-light)]">
          {headline}
        </h2>
        <p className="font-body mb-10 text-[var(--color-text-muted)]">
          {subline}
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-2 font-small text-[var(--color-text-muted)]">
          <MessageCircle
            className="size-4 text-[var(--color-accent)]"
            aria-hidden="true"
          />
          <span>Prefer WhatsApp?</span>
          <a
            href={getWhatsAppUrl(WHATSAPP_NUMBER)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-2 font-medium text-[var(--color-accent)] transition-colors hover:text-[var(--color-accent-hover)]"
          >
            {WHATSAPP_NUMBER}
          </a>
        </div>

        {showForm && (
          <div className="text-left">
            <ContactForm />
          </div>
        )}

        {!showForm && (
          <p className="font-small text-[var(--color-text-muted)]">
            {RESPONSE_PROMISE}
          </p>
        )}
      </div>
    </section>
  );
}
