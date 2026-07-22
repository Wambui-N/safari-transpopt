"use client";

import type { FormEvent } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type ContactFormProps = {
  className?: string;
  fullWidth?: boolean;
};

export function ContactForm({ className, fullWidth = true }: ContactFormProps) {
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
        className="input-dark border"
      />
      <Input
        name="route"
        placeholder="e.g. Nairobi to Maasai Mara"
        className="input-dark border"
      />
      <Input
        name="groupSize"
        type="number"
        placeholder="Group size"
        min={1}
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
