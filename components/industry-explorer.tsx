"use client";
import { useRef, useState, type KeyboardEvent } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Icon } from "@/components/icon";

const industries = [
  { name: "Financial Services", focus: "Decision systems, operational integrity and intelligent customer experiences." },
  { name: "Government", focus: "Public value, capable institutions and systems designed for accountable delivery." },
  { name: "Telecommunications", focus: "Data-led operations and service systems built for scale and resilience." },
  { name: "Healthcare", focus: "Connected services and knowledge-enabled operations that support better care." },
  { name: "Education", focus: "Learning ecosystems that transform knowledge into practical capability." },
  { name: "Manufacturing", focus: "Operational visibility and intelligent workflows for dependable performance." },
  { name: "SMEs", focus: "Focused systems and advisory that help growing businesses build a stronger foundation." },
  { name: "Real Estate", focus: "Governance, service and digital tools for more effective property ecosystems." },
  { name: "NGOs", focus: "Mission-aligned operational clarity and capability for organisations serving communities." }
];

export function IndustryExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = industries[activeIndex];
  const selectTab = (index: number, focus = false) => { setActiveIndex(index); if (focus) tabRefs.current[index]?.focus(); };
  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const lastIndex = industries.length - 1;
    const next = event.key === "ArrowRight" || event.key === "ArrowDown" ? index === lastIndex ? 0 : index + 1 : event.key === "ArrowLeft" || event.key === "ArrowUp" ? index === 0 ? lastIndex : index - 1 : event.key === "Home" ? 0 : event.key === "End" ? lastIndex : null;
    if (next !== null) { event.preventDefault(); selectTab(next, true); }
  };
  return <div className="mt-10 grid overflow-hidden border border-slate-200 lg:grid-cols-[.9fr_1.1fr]"><div role="tablist" aria-label="Industries" aria-orientation="vertical" className="grid sm:grid-cols-2 lg:block">{industries.map((industry, index) => <button ref={(element) => { tabRefs.current[index] = element; }} id={`industry-tab-${index}`} role="tab" type="button" aria-selected={activeIndex === index} aria-controls="industry-panel" tabIndex={activeIndex === index ? 0 : -1} onClick={() => selectTab(index)} onKeyDown={(event) => onKeyDown(event, index)} className={`w-full border-b border-r border-slate-200 px-5 py-4 text-left text-sm font-semibold transition lg:border-r-0 ${activeIndex === index ? "bg-navy text-white" : "bg-white text-slate hover:bg-mist hover:text-navy"}`} key={industry.name}>{industry.name}</button>)}</div><div id="industry-panel" role="tabpanel" aria-labelledby={`industry-tab-${activeIndex}`} className="flex min-h-72 flex-col justify-between bg-mist p-8 md:p-12"><AnimatePresence mode="wait"><motion.div key={active.name} initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={shouldReduceMotion ? undefined : { opacity: 0, y: -10 }} transition={shouldReduceMotion ? { duration: 0 } : { duration: .24 }}><span className="grid h-12 w-12 place-items-center bg-navy text-gold"><Icon name="spark" className="h-5 w-5" /></span><p className="eyebrow mt-10">{active.name}</p><h3 className="display mt-4 max-w-md text-3xl font-semibold leading-tight">A systems perspective for a changing sector.</h3><p className="mt-5 max-w-lg leading-8 text-slate">{active.focus}</p></motion.div></AnimatePresence><p className="mt-8 text-sm font-semibold text-blue">Explore our industry approach <span aria-hidden>→</span></p></div></div>;
}
