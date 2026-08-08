import { Icon, type IconName } from "@/components/icon";
import { Reveal } from "@/components/reveal";

export type InformationItem = { title: string; description: string; icon?: IconName };

export function InformationGrid({ items, variant = "cards" }: { items: InformationItem[]; variant?: "cards" | "timeline" }) {
  if (variant === "timeline") return <div className="mt-10 grid border-l border-slate-200 md:grid-cols-4 md:border-l-0">{items.map((item, index) => <Reveal className="border-t border-slate-200 p-6 md:border-l md:border-t-0" key={item.title}><span className="number">0{index + 1}</span><h2 className="display mt-8 text-2xl font-semibold">{item.title}</h2><p className="mt-3 leading-7 text-slate">{item.description}</p></Reveal>)}</div>;
  return <div className="grid gap-4 md:grid-cols-3">{items.map((item, index) => <Reveal key={item.title}><article className="h-full bg-mist p-7"><span className="number">0{index + 1}</span>{item.icon && <Icon name={item.icon} className="mt-7 h-6 w-6 text-blue"/>}<h2 className="display mt-8 text-2xl font-semibold">{item.title}</h2><p className="mt-3 leading-7 text-slate">{item.description}</p></article></Reveal>)}</div>;
}
