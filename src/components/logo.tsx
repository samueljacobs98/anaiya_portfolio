"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ElementType } from "react";

export function Logo({ as: Component = "h1" }: { as?: ElementType }) {
  return (
    <Link href="/">
      <Component className="lowercase font-bold text-4xl font-playful text-anaiya animate-in fade-in slide-in-from-top-8 duration-500 delay-800">
        <motion.span
          initial={{ opacity: 0, y: -32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          style={{ display: "inline-block" }}
        >
          Anaiya
        </motion.span>
      </Component>
    </Link>
  );
}
