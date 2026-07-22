import { Separator } from "@/components/ui/separator";
import { TESTIMONIALS } from "@/lib/constants";

export function TrustStrip() {
  return (
    <section className="section-padding bg-[var(--color-bg-dark-2)]">
      <div className="container-site">
        <div className="grid gap-10 md:grid-cols-3 md:gap-0">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="flex gap-8 md:px-8 md:first:pl-0 md:last:pr-0"
            >
              {index > 0 && (
                <Separator
                  orientation="vertical"
                  className="hidden bg-[var(--color-border-dark)] md:block"
                />
              )}
              <div>
                <p className="font-body mb-3 text-[var(--color-text-light)] italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-small text-[var(--color-text-muted)]">
                  — {testimonial.name}, {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
