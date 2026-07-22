import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section className="section-padding bg-[var(--color-bg-light)]">
      <div className="container-site">
        <p className="font-label mb-2 text-[var(--color-text-muted)]">
          How to book
        </p>
        <h2 className="font-h2 text-[var(--color-text-primary)]">
          Three steps to your transfer.
        </h2>

        <div className="relative mt-12 grid gap-8 md:grid-cols-3 md:gap-8">
          <div
            className="absolute top-10 right-[16.67%] left-[16.67%] hidden h-px bg-[var(--color-border-light)] md:block"
            aria-hidden="true"
          />

          {HOW_IT_WORKS.map((step) => (
            <div key={step.step} className="relative">
              <span
                className="font-display block text-[80px] leading-none text-[var(--color-accent)] opacity-25"
                aria-hidden="true"
              >
                {step.step}
              </span>
              <h3 className="font-h3 -mt-4 text-[var(--color-text-primary)]">
                {step.title}
              </h3>
              <p className="font-small mt-2 text-[var(--color-text-muted)]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
