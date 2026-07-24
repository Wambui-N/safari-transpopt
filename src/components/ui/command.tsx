"use client";

import { Command as CommandPrimitive } from "cmdk";
import * as React from "react";

import { cn } from "@/lib/utils";

function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        "flex h-full w-full flex-col overflow-hidden bg-transparent text-[var(--color-text-light)]",
        className
      )}
      {...props}
    />
  );
}

function CommandList({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.List>) {
  return (
    <CommandPrimitive.List
      data-slot="command-list"
      className={cn(
        "max-h-64 overflow-y-auto overflow-x-hidden p-1",
        className
      )}
      {...props}
    />
  );
}

function CommandGroup({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Group>) {
  return (
    <CommandPrimitive.Group
      data-slot="command-group"
      className={cn("overflow-hidden", className)}
      {...props}
    />
  );
}

function CommandItem({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive.Item>) {
  return (
    <CommandPrimitive.Item
      data-slot="command-item"
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-[var(--radius-sm)] px-3 py-2 font-small text-[var(--color-text-light)] outline-none transition-colors hover:bg-[var(--color-accent)]/8 data-[selected=true]:bg-[var(--color-accent)]/8",
        className
      )}
      {...props}
    />
  );
}

export { Command, CommandList, CommandGroup, CommandItem };
