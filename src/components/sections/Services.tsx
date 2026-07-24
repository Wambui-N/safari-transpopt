import { MapPin, Plane, Route, Users, type LucideIcon } from "lucide-react";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Card } from "@/components/ui/card";
import { SERVICES } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = {
  Plane,
  MapPin,
  Users,
  Route,
};

export function Services() {
  return (
    <section id="routes" className="section-padding bg-[var(--color-bg-white)]">
      <div className="container-site">
        <p className="font-label mb-2 text-[var(--color-text-muted)]">
          What we offer
        </p>
        <h2 className="font-h2 text-[var(--color-text-primary)]">
          Every transfer, covered.
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <RevealOnScroll key={service.title} index={i}>
                <Card className="p-[var(--space-card)] transition-colors hover:border-[var(--color-accent)]">
                  {Icon && (
                    <Icon
                      className="mb-4 size-6 text-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                  )}
                  <h3 className="font-h3 mb-2 text-[var(--color-text-primary)]">
                    {service.title}
                  </h3>
                  <p className="font-small text-[var(--color-text-muted)]">
                    {service.description}
                  </p>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
