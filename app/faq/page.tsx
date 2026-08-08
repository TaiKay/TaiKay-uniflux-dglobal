import type { Metadata } from "next"; import { FAQList } from "@/components/faq-list"; import { PageHero } from "@/components/page-hero";
export const metadata:Metadata={title:"Frequently Asked Questions",description:"Answers to common questions about UNIFLUX-D Global."};
export default function Page(){return <main><PageHero eyebrow="Frequently asked questions" title="A clearer place to begin." intro="Answers to common questions about UNIFLUX-D Global, our work and how to start a conversation."/><section className="container max-w-4xl py-20 md:py-28"><FAQList/></section></main>}
