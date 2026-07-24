"use client";

import { format } from "date-fns";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Check,
  ChevronDown,
  CircleMinus,
  CirclePlus,
} from "lucide-react";
import { useState } from "react";
import type { Matcher } from "react-day-picker";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

import { QuoteModal } from "./QuoteModal";

const DESTINATIONS = [
  "Maasai Mara",
  "Amboseli",
  "Nairobi CBD",
  "JKIA Airport",
  "Tsavo",
  "Custom route",
] as const;

const fieldTriggerClass = (hasError?: boolean) =>
  cn(
    "flex h-10 w-full items-center justify-between gap-2 rounded-[var(--radius-sm)] border bg-transparent px-3 text-left font-small text-[var(--color-text-light)] outline-none transition-colors focus-visible:border-[var(--color-accent)]",
    hasError ? "border-[var(--color-accent)]" : "border-[var(--color-border-dark)]"
  );

const formatDate = (date?: Date) => (date ? format(date, "dd MMM yyyy") : undefined);

function DestinationField({
  value,
  onChange,
  hasError,
}: {
  value: string;
  onChange: (value: string) => void;
  hasError: boolean;
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className={fieldTriggerClass(hasError)}>
          <span className={value ? "" : "text-[var(--color-text-muted)]"}>
            {value || "Where to?"}
          </span>
          <ChevronDown className="size-4 shrink-0 text-[var(--color-text-muted)]" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-64 p-0">
        <Command shouldFilter={false}>
          <CommandList>
            <CommandGroup>
              {DESTINATIONS.map((option) => (
                <CommandItem
                  key={option}
                  value={option}
                  onSelect={() => {
                    onChange(option);
                    setOpen(false);
                  }}
                >
                  {option}
                  {value === option && (
                    <Check className="size-4 shrink-0 text-[var(--color-accent)]" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

function DateField({
  placeholder,
  value,
  onChange,
  hasError,
  disabled,
}: {
  placeholder: string;
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  hasError?: boolean;
  disabled?: Matcher | Matcher[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button type="button" className={fieldTriggerClass(hasError)}>
          <span className={value ? "" : "text-[var(--color-text-muted)]"}>
            {value ? formatDate(value) : placeholder}
          </span>
          <CalendarIcon className="size-4 shrink-0 text-[var(--color-text-muted)]" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={(date) => {
            onChange(date);
            setOpen(false);
          }}
          disabled={disabled}
        />
      </PopoverContent>
    </Popover>
  );
}

function GroupSizeStepper({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className={cn(fieldTriggerClass(), "justify-between")}>
      <button
        type="button"
        aria-label="Decrease group size"
        onClick={() => onChange(Math.max(1, value - 1))}
        className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
      >
        <CircleMinus className="size-5" />
      </button>
      <span className="min-w-8 text-center font-body text-[var(--color-text-light)]">
        {value}
      </span>
      <button
        type="button"
        aria-label="Increase group size"
        onClick={() => onChange(Math.min(20, value + 1))}
        className="text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)]"
      >
        <CirclePlus className="size-5" />
      </button>
    </div>
  );
}

export function HeroBookingBar() {
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | undefined>();
  const [returnDate, setReturnDate] = useState<Date | undefined>();
  const [groupSize, setGroupSize] = useState(1);
  const [destinationError, setDestinationError] = useState(false);
  const [departureError, setDepartureError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (!destination) {
      setDestinationError(true);
      return;
    }
    if (!departureDate) {
      setDepartureError(true);
      return;
    }

    setShowModal(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        style={{
          background:
            "linear-gradient(135deg, rgba(15, 32, 24, 0.13) 0%, rgba(27, 74, 42, 0.23) 100%)",
          boxShadow: "inset 0 1px 0 rgba(193, 232, 64, 0)",
        }}
        className="grid grid-cols-1 items-end gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-dark)] bg-transparent px-6 py-4 backdrop-blur-md sm:grid-cols-[1fr_1fr_1fr_1fr_auto]"
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
          className="flex flex-col gap-1.5"
        >
          <label className="font-label text-[var(--color-text-muted)]">
            Destination
          </label>
          <DestinationField
            value={destination}
            onChange={(value) => {
              setDestination(value);
              if (destinationError) setDestinationError(false);
            }}
            hasError={destinationError}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
          className="flex flex-col gap-1.5"
        >
          <label className="font-label text-[var(--color-text-muted)]">
            Departure date
          </label>
          <DateField
            placeholder="DD / MM / YYYY"
            value={departureDate}
            onChange={(date) => {
              setDepartureDate(date);
              if (departureError) setDepartureError(false);
            }}
            hasError={departureError}
            disabled={{ before: new Date() }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.65 }}
          className="flex flex-col gap-1.5"
        >
          <label className="font-label text-[var(--color-text-muted)]">
            Return date
          </label>
          <DateField
            placeholder="DD / MM / YYYY"
            value={returnDate}
            onChange={setReturnDate}
            disabled={{ before: departureDate ?? new Date() }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
          className="flex flex-col gap-1.5"
        >
          <label className="font-label text-[var(--color-text-muted)]">
            Group size
          </label>
          <GroupSizeStepper value={groupSize} onChange={setGroupSize} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button type="button" onClick={handleSubmit} className="w-full sm:w-auto">
            Request a quote
          </Button>
        </motion.div>
      </motion.div>

      <QuoteModal
        open={showModal}
        onOpenChange={setShowModal}
        destination={destination}
        departureDate={formatDate(departureDate) ?? ""}
        returnDate={formatDate(returnDate)}
        groupSize={groupSize}
      />
    </>
  );
}
