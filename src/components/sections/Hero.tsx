import Link from "next/link";

import { HeroBookingBar } from "@/components/sections/HeroBookingBar";
import { HeroParallaxBackground } from "@/components/sections/HeroParallaxBackground";
import { Button } from "@/components/ui/button";
import { HERO_TRUST_STATS, SITE_TAGLINE } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-[var(--color-bg-dark)] pb-24 sm:pb-16">
      <HeroParallaxBackground />

      <div className="container-site relative flex min-h-screen flex-col justify-center pt-20 pb-8">
        <p className="font-label mb-4 text-[var(--color-text-muted)]">
          {SITE_TAGLINE}
        </p>

        <h1 className="font-display mb-5 max-w-[700px] text-[var(--color-text-light)]">
          Built for the terrain. There for every transfer.
        </h1>

        <p className="font-body mb-10 max-w-[480px] text-[var(--color-text-light)]">
          Land Cruiser transfers across Nairobi, Maasai Mara, Amboseli, and
          beyond.
        </p>

        {/* <div className="flex flex-wrap gap-3">
          <Button asChild>
            <Link href="/contact">Request a quote</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="#fleet">View fleet</Link>
          </Button>
        </div> */}

        {/* <div className="mt-20 border-t border-[var(--color-border-dark)] pt-8">
          <p className="font-small text-[var(--color-text-light)]">
            {HERO_TRUST_STATS.join(" · ")}
          </p>
        </div> */}
        <div className="relative z-10 mt-10 sm:absolute sm:inset-x-0 sm:bottom-12 sm:mt-0">
          <HeroBookingBar />
        </div>
      </div>

    </section>
  );
}
