"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const DESTINATIONS = [
  "Maasai Mara",
  "Amboseli",
  "Nairobi CBD",
  "JKIA Airport",
  "Tsavo",
  "Custom route",
] as const;

export function HeroBookingBar() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [travelDates, setTravelDates] = useState("");
  const [groupSize, setGroupSize] = useState("");

  const handleSubmit = () => {
    sessionStorage.setItem(
      "savannaLeafBooking",
      JSON.stringify({ destination, travelDates, groupSize })
    );
    router.push("/contact");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
      style={{
        background:
          "linear-gradient(135deg, rgba(15, 32, 24, 0.13) 0%, rgba(27, 74, 42, 0.23) 100%)",
        boxShadow: "inset 0 1px 0 rgba(193, 232, 64, 0)",
      }}
      className="grid grid-cols-1 items-end gap-4 rounded-[var(--radius-lg)] border border-[var(--color-border-dark)] bg-transparent px-6 py-4 backdrop-blur-md sm:grid-cols-[1fr_1fr_1fr_auto]"
    >
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.5 }}
        className="flex flex-col gap-1.5"
      >
        <label
          htmlFor="hero-destination"
          className="font-label text-[var(--color-text-muted)]"
        >
          Destination
        </label>
        <select
          id="hero-destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="font-small h-10 w-full rounded-[var(--radius-sm)] border border-[var(--color-border-dark)] bg-transparent px-3 py-2 text-[var(--color-text-light)] outline-none focus-visible:border-[var(--color-accent)]"
        >
          <option value="" className="text-[var(--color-text-primary)]">
            Where are you going?
          </option>
          {DESTINATIONS.map((option) => (
            <option
              key={option}
              value={option}
              className="text-[var(--color-text-primary)]"
            >
              {option}
            </option>
          ))}
        </select>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
        className="flex flex-col gap-1.5"
      >
        <label
          htmlFor="hero-travel-dates"
          className="font-label text-[var(--color-text-muted)]"
        >
          Travel dates
        </label>
        <Input
          id="hero-travel-dates"
          type="date"
          value={travelDates}
          onChange={(e) => setTravelDates(e.target.value)}
          className="border-[var(--color-border-dark)] text-[var(--color-text-light)] [color-scheme:dark]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.7 }}
        className="flex flex-col gap-1.5"
      >
        <label
          htmlFor="hero-group-size"
          className="font-label text-[var(--color-text-muted)]"
        >
          Group size
        </label>
        <Input
          id="hero-group-size"
          type="number"
          min={1}
          max={20}
          placeholder="No. of travellers"
          value={groupSize}
          onChange={(e) => setGroupSize(e.target.value)}
          className="border-[var(--color-border-dark)] text-[var(--color-text-light)] placeholder:text-[var(--color-text-muted)]"
        />
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
  );
}
