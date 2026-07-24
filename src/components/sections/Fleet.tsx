import Image from "next/image";

import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Badge } from "@/components/ui/badge";
import { FLEET } from "@/lib/constants";

export function Fleet() {
  return (
    <section id="fleet" className="section-padding bg-[var(--color-bg-dark)]">
      <div className="container-site">
        <p className="font-label mb-2 text-[var(--color-text-muted)]">
          The fleet
        </p>
        <h2 className="font-h2 text-[var(--color-text-light)]">
          Land Cruisers. No exceptions.
        </h2>
        <p className="font-body mt-4 mb-12 max-w-xl text-[var(--color-text-muted)]">
          Every transfer runs in a Land Cruiser. Built for the terrain,
          comfortable for your clients.
        </p>

        <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-pl-6 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:grid md:grid-cols-2 md:overflow-visible md:pb-0">
          {FLEET.map((vehicle, i) => (
            <RevealOnScroll
              key={vehicle.name}
              index={i}
              className="w-[85vw] shrink-0 snap-start md:w-auto"
            >
              <article>
                <div className="relative mb-4 aspect-video overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-bg-dark-2)]">
                  <Image
                    src={vehicle.imageSrc}
                    alt={vehicle.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-h3 text-[var(--color-text-light)]">
                  {vehicle.name}
                </h3>
                <p className="font-small mt-1 mb-3 text-[var(--color-text-muted)]">
                  {vehicle.capacity}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {vehicle.features.map((feature) => (
                    <Badge key={feature}>{feature}</Badge>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <p className="mt-3 font-label text-[var(--color-text-muted)] md:hidden">
          Swipe to explore →
        </p>
      </div>
    </section>
  );
}
