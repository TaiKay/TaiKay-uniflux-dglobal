import Link from "next/link";
import { Icon } from "@/components/icon";
import { Reveal } from "@/components/reveal";

const portfolio = [
  { name: "NewLand AI Labs", kind: "Applied AI exploration", lead: true, description: "A dedicated space for investigating responsible, useful artificial intelligence." },
  { name: "MTN DataPay", kind: "Data-enabled initiative", description: "Exploring data-led commercial and operational possibilities." },
  { name: "Banking Operations AI", kind: "Intelligent operations", description: "Approaches to improving clarity, consistency and effectiveness in banking operations." },
  { name: "Estate Governance Platform", kind: "Governance platform", description: "A concept for more transparent, effective estate-community governance." },
  { name: "HomeCare Platform", kind: "Service platform", description: "A concept supporting more connected home-care experiences." },
  { name: "NewLand Publishing", kind: "Knowledge products", description: "Learning and knowledge products for leadership and organisational capability." }
];
export function InnovationGrid() { return <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{portfolio.map((item) => <Reveal key={item.name} className={item.lead ? "md:col-span-2" : ""}><Link href="/innovation" className={`group flex min-h-64 h-full flex-col justify-between p-7 transition duration-300 hover:-translate-y-1 ${item.lead ? "bg-blue text-white" : "bg-white text-navy hover:bg-navy hover:text-white"}`}><div className="flex items-start justify-between"><span className={`grid h-11 w-11 place-items-center border ${item.lead ? "border-white/40 text-gold" : "border-blue/20 text-blue group-hover:border-gold/50 group-hover:text-gold"}`}><Icon name={item.lead ? "ai" : "product"} className="h-5 w-5" /></span><Icon name="arrow" className={`h-5 w-5 ${item.lead ? "text-white" : "text-blue group-hover:text-gold"}`} /></div><div><p className={`text-xs font-bold tracking-[.13em] uppercase ${item.lead ? "text-blue-100" : "text-slate group-hover:text-slate-300"}`}>{item.kind}</p><h3 className="display mt-3 text-2xl font-semibold">{item.name}</h3><p className={`mt-3 text-sm leading-6 ${item.lead ? "text-blue-100" : "text-slate group-hover:text-slate-300"}`}>{item.description}</p></div></Link></Reveal>)}</div>; }
