"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { WHATSAPP_NUMBER } from "@/lib/constants";
import { cn, getWhatsAppUrl } from "@/lib/utils";

interface QuoteModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  destination: string;
  departureDate: string;
  returnDate?: string;
  groupSize: number;
}

const fieldClass = (hasError: boolean) =>
  cn(
    "text-[var(--color-text-light)] outline-none focus-visible:border-[var(--color-accent)]",
    hasError ? "border-[var(--color-accent)]" : "border-[var(--color-border-dark)]"
  );

export function QuoteModal({
  open,
  onOpenChange,
  destination,
  departureDate,
  returnDate,
  groupSize,
}: QuoteModalProps) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [nameError, setNameError] = useState(false);
  const [contactError, setContactError] = useState(false);

  const handleSubmit = () => {
    if (!name) {
      setNameError(true);
      return;
    }
    if (!contact) {
      setContactError(true);
      return;
    }

    const message = `Hi, I'd like to request a transfer quote.

Name: ${name}
Contact: ${contact}

Destination: ${destination}
Departure: ${departureDate}
Return: ${returnDate || "Single trip"}
Group size: ${groupSize} traveller(s)

Please let me know availability and pricing.`;

    window.open(getWhatsAppUrl(WHATSAPP_NUMBER, message), "_blank");
    onOpenChange(false);
    setName("");
    setContact("");
  };

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              />
            </DialogPrimitive.Overlay>

            <DialogPrimitive.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 8 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="fixed left-1/2 top-1/2 z-50 w-[calc(100%-2rem)] max-w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-[var(--radius-lg)] border border-[var(--color-border-dark)] bg-[var(--color-bg-dark)]/97 p-6 backdrop-blur-md outline-none"
              >
                <DialogPrimitive.Close className="absolute right-4 top-4 text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-light)]">
                  <X className="size-5" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>

                <div className="flex flex-col gap-1 pr-6">
                  <span className="font-label uppercase text-[var(--color-text-muted)]">
                    Almost done
                  </span>
                  <DialogPrimitive.Title asChild>
                    <h3 className="font-h3 text-[var(--color-text-light)]">
                      Who should we quote?
                    </h3>
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description asChild>
                    <p className="font-small text-[var(--color-text-muted)]">
                      We&apos;ll send your request straight to WhatsApp.
                    </p>
                  </DialogPrimitive.Description>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {[destination, departureDate, `${groupSize} traveller(s)`].map(
                    (item, index) => (
                      <span
                        key={index}
                        className="rounded-[var(--radius-sm)] border border-[var(--color-border-dark)] bg-[var(--color-accent)]/8 px-3 py-1 font-label text-[var(--color-text-muted)]"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>

                <div className="mt-6 flex flex-col gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.3, ease: "easeOut" }}
                  >
                    <Input
                      placeholder="Your name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        if (nameError) setNameError(false);
                      }}
                      className={fieldClass(nameError)}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                  >
                    <Input
                      placeholder="+254 or email address"
                      value={contact}
                      onChange={(e) => {
                        setContact(e.target.value);
                        if (contactError) setContactError(false);
                      }}
                      className={fieldClass(contactError)}
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.3, ease: "easeOut" }}
                  >
                    <Button type="button" onClick={handleSubmit} className="w-full">
                      Send via WhatsApp →
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
}
