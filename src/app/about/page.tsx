import type { Metadata } from "next";

import { CtaBlock } from "@/components/sections/CtaBlock";
import { VALUES } from "@/lib/constants";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About — Savanna Leaf",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-[var(--color-bg-dark)] pt-40 pb-24">
        <div className="container-site">
          <p className="font-label mb-4 text-[var(--color-text-muted)]">
            About us
          </p>
          <h1 className="font-h2 max-w-2xl text-[var(--color-text-light)]">
            The people behind every transfer.
          </h1>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-white)]">
        <div className="container-site grid gap-12 md:grid-cols-2 md:items-center">
          <div
            className="relative aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden bg-[var(--color-bg-light)]"
            aria-hidden="true"
          >
            <Image
              src="/images/truck3.jpg"
              alt="truck image"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-label mb-2 text-[var(--color-text-muted)]">
              Our story
            </p>
            <h2 className="font-h2 mb-6 text-[var(--color-text-primary)]">
              Built on reliability.
            </h2>
            <div className="flex flex-col gap-4 font-body text-[var(--color-text-muted)]">
              <p>
                Savanna Leaf started with a simple idea: safari ground transport
                should be as dependable as the lodges and parks your clients
                travel to see. Based in Kenya, we specialise in Land Cruiser
                transfers for tour operators, lodges, and independent
                travellers.
              </p>
              <p>
                For years we&apos;ve been moving people between Nairobi, Maasai
                Mara, Amboseli, and routes across East Africa — always on time,
                always in the right vehicle, always easy to reach.
              </p>
              <p>
                When you book with us, you get a direct line to someone who
                knows the roads, the parks, and what your clients need when they
                step off a long flight or finish a game drive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[var(--color-bg-light)]">
        <div className="container-site">
          <p className="font-label mb-2 text-[var(--color-text-muted)]">
            Why us
          </p>
          <h2 className="font-h2 mb-12 text-[var(--color-text-primary)]">
            What you can count on.
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title}>
                <h3 className="font-h3 mb-2 text-[var(--color-text-primary)]">
                  {value.title}
                </h3>
                <p className="font-small text-[var(--color-text-muted)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBlock headline="Ready to book your transfer?" />
    </>
  );
}
