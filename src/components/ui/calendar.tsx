"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import * as React from "react";
import { DayPicker } from "react-day-picker";

import { cn } from "@/lib/utils";

function Calendar({
  className,
  classNames,
  ...props
}: React.ComponentProps<typeof DayPicker>) {
  return (
    <DayPicker
      className={cn("p-3", className)}
      classNames={{
        months: "flex flex-col gap-4",
        month: "flex flex-col gap-3",
        month_caption: "relative flex h-9 items-center justify-center",
        caption_label:
          "font-small font-medium text-[var(--color-text-light)]",
        nav: "absolute inset-x-0 top-0 flex h-9 items-center justify-between",
        button_previous:
          "flex size-7 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-40",
        button_next:
          "flex size-7 items-center justify-center rounded-[var(--radius-sm)] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-accent)] disabled:pointer-events-none disabled:opacity-40",
        month_grid: "w-full border-collapse",
        weekdays: "flex",
        weekday: "w-9 font-label text-[var(--color-text-muted)]",
        week: "mt-1 flex w-full",
        day: "p-0 text-center",
        day_button:
          "flex size-9 items-center justify-center rounded-full font-small text-[var(--color-text-light)] outline-none transition-colors hover:bg-[var(--color-accent)]/12",
        selected:
          "[&>button]:bg-[var(--color-accent)] [&>button]:font-medium [&>button]:text-[var(--color-bg-dark)] [&>button]:hover:bg-[var(--color-accent)]",
        today:
          "[&>button]:relative [&>button]:after:absolute [&>button]:after:bottom-1 [&>button]:after:left-1/2 [&>button]:after:size-1 [&>button]:after:-translate-x-1/2 [&>button]:after:rounded-full [&>button]:after:bg-[var(--color-text-muted)]",
        disabled:
          "[&>button]:cursor-not-allowed [&>button]:opacity-30 [&>button]:hover:bg-transparent",
        hidden: "invisible",
        ...classNames,
      }}
      components={{
        Chevron: ({ orientation }) =>
          orientation === "left" ? (
            <ChevronLeft className="size-4" />
          ) : (
            <ChevronRight className="size-4" />
          ),
      }}
      {...props}
    />
  );
}

export { Calendar };
