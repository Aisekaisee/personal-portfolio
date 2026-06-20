"use client"

import { motion } from "framer-motion"
import React from "react"

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
}

export function ScrollReveal({ children, delay = 0, duration = 0.5 }: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealList({
  children,
  staggerDelay = 0.05,
}: {
  children: React.ReactNode;
  staggerDelay?: number;
}) {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealListItem({ children }: { children: React.ReactNode }) {
  const itemVariants = {
    hidden: { opacity: 0, y: 8, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return <motion.div variants={itemVariants}>{children}</motion.div>;
}
