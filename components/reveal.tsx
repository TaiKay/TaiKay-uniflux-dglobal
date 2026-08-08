"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) { const shouldReduceMotion = useReducedMotion(); return <motion.div className={className} initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: .55, ease: "easeOut" }}>{children}</motion.div>; }
