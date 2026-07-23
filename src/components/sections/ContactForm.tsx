"use client";

import { usePathname } from "next/navigation";
import { type FormEvent, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

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
      <Input
        name="name"
        placeholder="Name"
        required
        className="input-dark border"
      />
      <Input
        name="contact"
        placeholder="WhatsApp number or email"
        required
        className="input-dark border"
      />
      <Input
        name="dates"
        type="text"
        placeholder="e.g. 12–15 March 2025"
        value={dates}
        onChange={(e) => setDates(e.target.value)}
        className="input-dark border"
      />
      <Input
        name="route"
        placeholder="e.g. Nairobi to Maasai Mara"
        value={route}
        onChange={(e) => setRoute(e.target.value)}
        className="input-dark border"
      />
      <Input
        name="groupSize"
        type="number"
        placeholder="Group size"
        min={1}
        value={groupSize}
        onChange={(e) => setGroupSize(e.target.value)}
        className="input-dark border"
      />
      <Textarea
        name="message"
        placeholder="Message"
        rows={4}
        className="input-dark border"
      />
      <Button type="submit" className={cn(fullWidth && "w-full")}>
        Send inquiry
      </Button>
    </form>
  );
}
