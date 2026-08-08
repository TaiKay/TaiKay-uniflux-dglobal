import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { PublicationSearch } from "@/components/publication-search";
import { publications } from "@/lib/publications";
export const metadata: Metadata = {title:"Executive Publications",description:"The UNIFLUX-D Global executive publications library."};
export default function Publications(){return <main><PageHero eyebrow="Executive publications" title="A library for leaders shaping what comes next." intro="Read executive briefs, research perspectives and thought leadership from UNIFLUX-D Global."/><section className="container py-20 md:py-28"><p className="eyebrow">Publications library</p><h2 className="display mt-4 text-4xl font-semibold">Browse by question, not by noise.</h2><PublicationSearch publications={publications}/></section></main>}
