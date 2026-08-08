import type { Metadata } from "next";
import { IndustryExplorer } from "@/components/industry-explorer";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
export const metadata: Metadata = { title: "Industries", description: "A systems perspective for organisations across essential and evolving sectors." };
export default function Industries(){return <main><PageHero eyebrow="Industries" title="Sector knowledge, systems thinking." intro="We bring an integrated perspective to organisations working in essential and evolving sectors."/><section className="container py-20 md:py-28"><div className="grid gap-8 md:grid-cols-[.8fr_1.2fr]"><p className="eyebrow">Explore sectors</p><Reveal><h2 className="display text-4xl font-semibold leading-tight">The context changes. The need for clear, capable systems does not.</h2><p className="mt-5 max-w-2xl leading-8 text-slate">Select an industry to see the perspective that shapes how we think about its evolving operating environment.</p></Reveal></div><IndustryExplorer /></section></main>}
