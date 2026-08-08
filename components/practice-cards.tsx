import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";

const practices = [
  { title: "Enterprise Advisory", description: "Strategy, governance and operational clarity for decisive leadership.", icon: "advisory" as const },
  { title: "AI & Intelligent Systems", description: "Intelligent systems designed around real organisational needs.", icon: "ai" as const },
  { title: "Digital Transformation", description: "Capability-led change that turns ambition into operating reality.", icon: "transform" as const },
  { title: "Knowledge & Leadership", description: "Learning systems and leadership models that sustain performance.", icon: "leadership" as const }
];

export function PracticeCards() { return <div className="grid gap-4 md:grid-cols-2">{practices.map((practice, i) => <Reveal className="group" key={practice.title}><Link href="/services" className="block h-full bg-white p-7 transition duration-300 hover:-translate-y-1 hover:bg-navy hover:text-white"><div className="flex items-start justify-between"><span className="grid h-11 w-11 place-items-center border border-blue/20 text-blue transition group-hover:border-gold/50 group-hover:text-gold"><Icon name={practice.icon} className="h-5 w-5" /></span><span className="number">0{i + 1}</span></div><h3 className="display mt-12 text-2xl font-semibold">{practice.title}</h3><p className="mt-3 leading-7 text-slate transition group-hover:text-slate-300">{practice.description}</p><span className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue group-hover:text-gold">Explore <Icon name="arrow" className="h-4 w-4" /></span></Link></Reveal>)}</div>; }
