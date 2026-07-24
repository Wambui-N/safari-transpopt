"use client";

import { usePathname } from "next/navigation";
import { type FocusEvent, type FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const scrollFieldIntoView = (e: FocusEvent<HTMLElement>) => {
  e.currentTarget.scrollIntoView({ block: "center", behavior: "smooth" });
};

type ContactFormProps = {
  className?: string;
  fullWidth?: boolean;
};

export function ContactForm({ className, fullWidth = true }: ContactFormProps) {
  const pathname = usePathname();
  const [route, setRoute] = useState("");
  const [dates, setDates] = useState("");
  const [groupSize, setGroupSize] = useState("");

  useEffect(() => {
    if (pathname !== "/contact") return;

    const stored = sessionStorage.getItem("savannaLeafBooking");
    if (!stored) return;

    try {
      const booking = JSON.parse(stored) as {
        destination?: string;
        travelDates?: string;
        groupSize?: string;
      };
      if (booking.destination) setRoute(booking.destination);
      if (booking.travelDates) setDates(booking.travelDates);
      if (booking.groupSize) setGroupSize(booking.groupSize);
    } catch {
      // Malformed sessionStorage value — leave the form empty.
    }
  }, [pathname]);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-4", className)}
    >
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-name" className="font-label text-[var(--color-text-muted)]">
          Name
        </label>
        <Input
          id="contact-name"
          name="name"
          placeholder="Your name"
          required
          onFocus={scrollFieldIntoView}
          className="input-dark min-h-12 border"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-contact" className="font-label text-[var(--color-text-muted)]">
          WhatsApp or email
        </label>
        <Input
          id="contact-contact"
          name="contact"
          placeholder="WhatsApp number or email"
          required
          onFocus={scrollFieldIntoView}
          className="input-dark min-h-12 border"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-dates" className="font-label text-[var(--color-text-muted)]">
          Travel dates
        </label>
        <Input
          id="contact-dates"
          name="dates"
          type="text"
          placeholder="e.g. 12–15 March 2025"
          value={dates}
          onChange={(e) => setDates(e.target.value)}
          onFocus={scrollFieldIntoView}
          className="input-dark min-h-12 border"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-route" className="font-label text-[var(--color-text-muted)]">
          Route
        </label>
        <Input
          id="contact-route"
          name="route"
          placeholder="e.g. Nairobi to Maasai Mara"
          value={route}
          onChange={(e) => setRoute(e.target.value)}
          onFocus={scrollFieldIntoView}
          className="input-dark min-h-12 border"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-group-size" className="font-label text-[var(--color-text-muted)]">
          Group size
        </label>
        <Input
          id="contact-group-size"
          name="groupSize"
          type="number"
          placeholder="Group size"
          min={1}
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
          onFocus={scrollFieldIntoView}
          className="input-dark min-h-12 border"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="contact-message" className="font-label text-[var(--color-text-muted)]">
          Message
        </label>
        <Textarea
          id="contact-message"
          name="message"
          placeholder="Message"
          rows={4}
          onFocus={scrollFieldIntoView}
          className="input-dark border"
        />
      </div>
      <Button type="submit" className={cn("min-h-[52px]", fullWidth && "w-full")}>
        Send inquiry
      </Button>
    </form>
  );
}
