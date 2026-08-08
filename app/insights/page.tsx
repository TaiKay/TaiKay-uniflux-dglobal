import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { PublicationCard } from "@/components/publication-card";
import { PublicationSearch } from "@/components/publication-search";
import { publications } from "@/lib/publications";
export const metadata: Metadata = { title: "Insights", description: "Executive perspectives on AI, enterprise capability, leadership and operational excellence." };
export default function Insights(){return <main><PageHero eyebrow="UNIFLUX-D Insights" title="Thinking for people doing consequential work." intro="Executive perspectives on intelligent systems, operational excellence, governance and leadership."/><section className="container py-20 md:py-28"><div className="flex flex-wrap items-end justify-between gap-5"><div><p className="eyebrow">Featured publication</p><h2 className="display mt-4 text-4xl font-semibold">Executive perspectives</h2></div><div className="flex gap-4 text-sm font-bold text-blue"><Link href="/publications" className="hover:text-navy">Publications library →</Link><Link href="/resources" className="hover:text-navy">Resource centre →</Link></div></div><div className="mt-10 grid gap-4 md:grid-cols-2"><PublicationCard publication={publications[0]} featured/><PublicationCard publication={publications[1]}/></div><div className="mt-20"><p className="eyebrow">Explore the library</p><h2 className="display mt-4 text-3xl font-semibold">Find a perspective</h2><PublicationSearch publications={publications}/></div></section></main>}
