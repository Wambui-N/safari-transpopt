"use client";

import { motion, useInView, type Variants } from "framer-motion";
import { useRef, type ReactNode } from "react";

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

type RevealOnScrollProps = {
  children: ReactNode;
  index?: number;
  className?: string;
};

export function RevealOnScroll({
  children,
  index = 0,
  className,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px 0px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={defaultVariants}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
