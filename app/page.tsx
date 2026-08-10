import Link from "next/link";
import { CorporateTimeline } from "@/components/corporate-timeline";
import { CorporateVisualLayer } from "@/components/corporate-visual-layer";
import { Icon } from "@/components/icon";
import { IndustryExplorer } from "@/components/industry-explorer";
import { InnovationGrid } from "@/components/innovation-grid";
import { MethodologySignature } from "@/components/methodology-signature";
import { PracticeCards } from "@/components/practice-cards";
import { Reveal } from "@/components/reveal";
import { VisualIntelligence } from "@/components/visual-intelligence";

const sectors = [
  ["Financial Services", "Digital finance, risk and sustainable growth", "â—‰"],
  ["Telecommunications", "Connected markets and digital innovation", "âŒ"],
  ["Retail & Commerce", "Smarter commerce and supply-chain excellence", "â–£"],
  ["Public Sector", "Transparent governance and efficient service delivery", "â—†"],
  ["Infrastructure", "Building tomorrow's smart communities", "âŒ‚"],
  ["Education & Knowledge", "People, skills and future-ready institutions", "âœ¦"],
];

const markets = [["$", "USD"], ["Â£", "GBP"], ["â‚¬", "EUR"], ["â‚¦", "NGN"]];

export default function Home() { return <main>
  <section aria-labelledby="home-hero-heading" className="overflow-hidden bg-navy">
    <h1 id="home-hero-heading" className="sr-only">
      UNIFLUX-D Global Limited — Engineering intelligence. Empowering growth.
    </h1>
    <img src="/images/uniflux-d-hero-approved.png" alt="UNIFLUX-D Global executive team assembled around a connected global network." className="h-auto w-full" />
  </section>
  <section className="bg-navy pb-10 text-white"><div className="container grid grid-cols-2 gap-0 border-t border-white/10 md:grid-cols-5">
    {[["15+", "Years' Experience"], ["Africa", "Across Africa & Global Markets"], ["50+", "Projects & Advisory Engagements"], ["Excellence", "in Delivery"], ["Sustainable", "Impact"]].map(([n, t]) => <div key={t} className="border-b border-white/10 px-4 py-7 text-center md:border-b-0 md:border-r last:md:border-r-0"><div className="number text-xl md:text-2xl">{n}</div><p className="mt-1 text-xs leading-5 text-slate-300 md:text-sm">{t}</p></div>)}
  </div></section>

  <section className="bg-white py-10 md:py-14"><div className="container"><div className="flex items-center justify-center gap-4"><span className="h-px flex-1 bg-slate-200" /><p className="eyebrow text-center">Trusted by visionary organisations</p><span className="h-px flex-1 bg-slate-200" /></div><div className="mt-8 grid grid-cols-2 gap-5 text-center text-sm font-semibold text-navy md:grid-cols-5"><div>â–£ &nbsp; Banks & Financial Institutions</div><div>â—‰ &nbsp; Telecommunications</div><div>â—† &nbsp; Government & Public Sector</div><div>â–£ &nbsp; Retail & Consumer Brands</div><div>â—Ž &nbsp; International Partners</div></div></div></section>

  <section className="container grid gap-10 py-20 md:grid-cols-[.8fr_1.2fr] md:py-28"><div><p className="eyebrow">Who we are</p></div><Reveal><h2 className="display text-4xl font-semibold leading-tight md:text-5xl">A different kind of partner for complex work.</h2><p className="mt-6 max-w-2xl leading-8 text-slate">UNIFLUX-D is an innovation, enterprise advisory, AI and knowledge company. We connect sound thinking with practical delivery to help organisations build clarity, capability and confidence.</p><Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-navy">More about UNIFLUX-D <Icon name="arrow" className="h-4 w-4" /></Link></Reveal></section>

  <section className="bg-mist py-14 md:py-20"><div className="container"><p className="eyebrow">Enterprise sectors</p><div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{sectors.map(([title, body, icon]) => <Link key={title} href="/industries" className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue hover:shadow-xl"><div className="h-28 bg-gradient-to-br from-navy via-[#0b2f5f] to-blue p-5"><span className="text-3xl text-gold">{icon}</span><h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3></div><div className="p-5"><p className="text-sm leading-6 text-slate">{body}</p><span className="mt-4 inline-block text-xs font-bold text-blue">Explore sector â†’</span></div></Link>)}</div></div></section>

  <VisualIntelligence />
  <CorporateVisualLayer />
  <section className="bg-mist py-20 md:py-28"><div className="container"><p className="eyebrow">How we help</p><h2 className="display mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">Four practices. One integrated perspective.</h2><div className="mt-12"><PracticeCards /></div></div></section>
  <section className="container grid gap-10 py-20 md:grid-cols-2 md:py-28"><Reveal><p className="eyebrow">Why UNIFLUX-D</p><h2 className="display mt-4 text-4xl font-semibold leading-tight">Insight is only useful when it moves the organisation forward.</h2></Reveal><div className="space-y-7">{[["Context before solutions", "We start by understanding the system, the people and the decision at hand."], ["Rigor with relevance", "We combine disciplined frameworks with a practical view of what can be implemented."], ["Capability that endures", "Our work is designed to leave stronger teams and better ways of working behind."]].map(([t,d]) => <Reveal key={t} className="border-l-2 border-gold pl-6"><h3 className="font-display text-xl font-semibold">{t}</h3><p className="mt-2 leading-7 text-slate">{d}</p></Reveal>)}</div></section>
  <section className="bg-navy py-20 text-white md:py-28"><div className="container"><p className="eyebrow !text-gold">Innovation portfolio</p><div className="mt-5 flex flex-wrap items-end justify-between gap-5"><h2 className="display max-w-xl text-4xl font-semibold md:text-5xl">Building what tomorrow&apos;s organisations need.</h2><Link href="/innovation" className="text-sm font-bold text-white hover:text-gold">View innovation portfolio â†’</Link></div><InnovationGrid /></div></section>
  <section className="container py-20 md:py-28"><p className="eyebrow">Industries</p><h2 className="display mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">Experience across the systems that matter.</h2><IndustryExplorer /></section>
  <MethodologySignature />
  <CorporateTimeline />
  <section className="bg-blue py-20 text-white"><div className="container flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow !text-blue-100">Start with a conversation</p><h2 className="display mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">Let&apos;s make complex work clearer.</h2><p className="mt-5 max-w-xl leading-7 text-blue-100">Bring the question, the mandate or the opportunity. We will help you find a way forward.</p></div><Link href="/contact" className="inline-flex items-center gap-3 self-start bg-white px-5 py-3.5 text-sm font-bold text-navy transition hover:bg-gold md:self-auto">Contact UNIFLUX-D <Icon name="arrow" className="h-4 w-4" /></Link></div></section>
</main>; }

