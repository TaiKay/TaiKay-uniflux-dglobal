import Link from "next/link";
import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";
const methods: [string, string, IconName][] = [
  ["Enterprise Financial Integrity", "A disciplined lens for controls, accountabilities and financial operating practice.", "governance"],
  ["Ownership Leadership", "A leadership model for clearer responsibility and initiative across teams.", "leadership"],
  ["Operational Excellence", "A practical framework for better workflow, decision quality and performance.", "transform"],
  ["Knowledge-to-Capability", "A framework for converting organisational knowledge into repeatable action.", "knowledge"],
  ["AI Readiness", "A structured approach to responsible AI adoption and capability building.", "ai"]
];
export function MethodologySignature() { return <section className="bg-mist py-20 md:py-28"><div className="container"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Signature methodologies</p><h2 className="display mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">Rigor that helps teams move.</h2></div><Link className="text-sm font-bold text-blue hover:text-navy" href="/methodologies">All methodologies →</Link></div><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{methods.map(([title, description, icon], index) => <Reveal key={title} className="bg-white p-6"><span className="number">0{index + 1}</span><Icon name={icon} className="mt-8 h-6 w-6 text-blue" /><h3 className="font-display mt-8 text-lg font-semibold leading-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-slate">{description}</p></Reveal>)}</div></div></section>; }
