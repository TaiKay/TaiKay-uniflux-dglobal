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
  ["Financial Services", "Digital finance, risk and sustainable growth", "◉"],
  ["Telecommunications", "Connected markets and digital innovation", "⌁"],
  ["Retail & Commerce", "Smarter commerce and supply-chain excellence", "▣"],
  ["Public Sector", "Transparent governance and efficient service delivery", "◆"],
  ["Infrastructure", "Building tomorrow's smart communities", "⌂"],
  ["Education & Knowledge", "People, skills and future-ready institutions", "✦"],
];

export default function Home() {
  return (
    <main>
      <section aria-labelledby="home-hero-heading" className="relative overflow-hidden bg-navy text-white">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-30">
          <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border border-blue-300/40" />
          <div className="absolute -right-8 -top-12 h-64 w-64 rounded-full border border-gold/40" />
          <div className="absolute bottom-0 right-1/4 h-px w-2/3 bg-gradient-to-r from-transparent via-blue-300/50 to-transparent" />
        </div>
        <div className="container relative grid min-h-[560px] items-center gap-12 py-20 md:py-28 lg:grid-cols-[1.1fr_.9fr]">
          <div className="relative z-10 max-w-3xl">
            <p className="eyebrow !text-gold">UNIFLUX-D GLOBAL LIMITED</p>
            <h1 id="home-hero-heading" className="display mt-5 text-5xl font-semibold leading-[1.02] md:text-7xl">
              Engineering intelligence.<br />
              <span className="text-blue-300">Empowering growth.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              An emerging innovation and enterprise advisory company exploring practical ways to help organisations improve operations, apply digital technologies and turn promising ideas into implementable solutions.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link className="bg-gradient-to-r from-[#f7cf6a] to-[#dcae43] px-6 py-3.5 text-sm font-bold text-navy shadow-lg transition hover:-translate-y-0.5" href="/services">
                Explore Our Services <span aria-hidden>↗</span>
              </Link>
              <Link className="border border-white/35 px-6 py-3.5 text-sm font-semibold transition hover:border-gold hover:text-gold" href="/about">
                About UNIFLUX-D <span aria-hidden>▷</span>
              </Link>
            </div>
            <p className="mt-7 max-w-xl text-sm leading-6 text-slate-400">
              Our ambition is to build trusted, practical solutions with clients and partners. The sectors shown on this website represent areas of intended focus—not a list of claimed clients or completed engagements.
            </p>
          </div>
          <div className="relative z-10">
            <div className="rounded-2xl border border-white/15 bg-white/[.04] p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <p className="eyebrow !text-gold">Our direction</p>
              <div className="mt-6 space-y-5">
                {[
                  ["01", "Understand the challenge", "Start with the organisation, its people and its priorities."],
                  ["02", "Identify practical opportunities", "Explore advisory, governance, AI and digital innovation options."],
                  ["03", "Validate before scaling", "Test assumptions, define a feasible pilot and learn from evidence."],
                ].map(([number, title, body]) => (
                  <div key={number} className="flex gap-4 border-b border-white/10 pb-5 last:border-0 last:pb-0">
                    <span className="font-display text-sm font-bold text-gold">{number}</span>
                    <div>
                      <h2 className="font-display text-lg font-semibold">{title}</h2>
                      <p className="mt-1 text-sm leading-6 text-slate-300">{body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-4 text-right text-xs tracking-[.16em] text-blue-200">INTELLIGENCE • INNOVATION • IMPACT</p>
          </div>
        </div>
      </section>

      <section className="container grid gap-10 py-20 md:grid-cols-[.8fr_1.2fr] md:py-28">
        <div><p className="eyebrow">Who we are</p></div>
        <Reveal>
          <h2 className="display text-4xl font-semibold leading-tight md:text-5xl">A different kind of partner for complex work.</h2>
          <p className="mt-6 max-w-2xl leading-8 text-slate">UNIFLUX-D is an innovation, enterprise advisory, AI and knowledge company. We connect sound thinking with practical delivery to help organisations build clarity, capability and confidence.</p>
          <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue hover:text-navy">More about UNIFLUX-D <Icon name="arrow" className="h-4 w-4" /></Link>
        </Reveal>
      </section>

      <section className="bg-mist py-14 md:py-20">
        <div className="container">
          <p className="eyebrow">Sectors we aim to serve</p>
          <p className="mt-3 max-w-2xl leading-7 text-slate">These are target sectors for future collaboration and service development, not representations of an existing client roster.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map(([title, body, icon]) => (
              <Link key={title} href="/industries" className="group overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-blue hover:shadow-xl">
                <div className="h-28 bg-gradient-to-br from-navy via-[#0b2f5f] to-blue p-5">
                  <span className="text-3xl text-gold">{icon}</span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-white">{title}</h3>
                </div>
                <div className="p-5"><p className="text-sm leading-6 text-slate">{body}</p><span className="mt-4 inline-block text-xs font-bold text-blue">Explore sector →</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <VisualIntelligence />
      <CorporateVisualLayer />
      <section className="bg-mist py-20 md:py-28"><div className="container"><p className="eyebrow">How we help</p><h2 className="display mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">Four practices. One integrated perspective.</h2><div className="mt-12"><PracticeCards /></div></div></section>
      <section className="container grid gap-10 py-20 md:grid-cols-2 md:py-28"><Reveal><p className="eyebrow">Why UNIFLUX-D</p><h2 className="display mt-4 text-4xl font-semibold leading-tight">Insight is only useful when it moves the organisation forward.</h2></Reveal><div className="space-y-7">{[["Context before solutions", "We start by understanding the system, the people and the decision at hand."], ["Rigor with relevance", "We combine disciplined frameworks with a practical view of what can be implemented."], ["Capability that endures", "Our work is designed to leave stronger teams and better ways of working behind."]].map(([t,d]) => <Reveal key={t} className="border-l-2 border-gold pl-6"><h3 className="font-display text-xl font-semibold">{t}</h3><p className="mt-2 leading-7 text-slate">{d}</p></Reveal>)}</div></section>
      <section className="bg-navy py-20 text-white md:py-28"><div className="container"><p className="eyebrow !text-gold">Innovation concepts</p><div className="mt-5 flex flex-wrap items-end justify-between gap-5"><h2 className="display max-w-xl text-4xl font-semibold md:text-5xl">Exploring ideas for tomorrow's organisations.</h2><Link href="/innovation" className="text-sm font-bold text-white hover:text-gold">View innovation concepts →</Link></div><p className="mt-4 max-w-2xl leading-7 text-slate-300">These are concepts and areas of exploration at different stages of development. Their inclusion does not imply deployment, commercial adoption or an existing partnership.</p><InnovationGrid /></div></section>
      <section className="container py-20 md:py-28"><p className="eyebrow">Areas of interest</p><h2 className="display mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">Working towards solutions for the systems that matter.</h2><IndustryExplorer /></section>
      <MethodologySignature />
      <CorporateTimeline />
      <section className="bg-blue py-20 text-white"><div className="container flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow !text-blue-100">Start with a conversation</p><h2 className="display mt-4 max-w-2xl text-4xl font-semibold md:text-5xl">Let's make complex work clearer.</h2><p className="mt-5 max-w-xl leading-7 text-blue-100">Bring the question, the mandate or the opportunity. We will work with you to explore a practical way forward.</p></div><Link href="/contact" className="inline-flex items-center gap-3 self-start bg-white px-5 py-3.5 text-sm font-bold text-navy transition hover:bg-gold md:self-auto">Contact UNIFLUX-D <Icon name="arrow" className="h-4 w-4" /></Link></div></section>
    </main>
  );
}
