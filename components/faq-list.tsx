"use client";
import { useState } from "react";
const questions = [
  ["What does UNIFLUX-D Global do?", "We are an innovation, enterprise advisory, AI and knowledge company helping organisations address complex challenges through intelligent technology, operational excellence, governance and leadership development."],
  ["What services does UNIFLUX-D offer?", "Our services include Enterprise Advisory, AI & Intelligent Systems, Digital Transformation, Knowledge & Leadership, and Product Innovation."],
  ["How can an organisation begin a conversation?", "Use the contact page to share the challenge, opportunity or area of interest. We will respond through the appropriate UNIFLUX-D channel."],
  ["Can you share examples of projects or client work?", "Case studies are published only with appropriate authorisation. We do not disclose client work, confidential information or unverified outcomes."],
  ["Does UNIFLUX-D work internationally?", "We welcome conversations with organisations and institutions across markets. Each opportunity is considered in its context and according to the practical requirements for responsible delivery."],
  ["How are publishing and research materials prepared?", "Materials are prepared for release through an editorial process that prioritises clarity, context and appropriate review."],
  ["Can we discuss a partnership or speaking engagement?", "Yes. The partnership and speaking pages describe the information that helps us understand a potential collaboration or event invitation."],
  ["Where can I get support?", "For support or a general enquiry, please use the contact page and provide enough context for the relevant team to respond."],
  ["How does UNIFLUX-D approach trust and responsible technology?", "We approach trust through clear purpose, appropriate governance, responsible handling of information and meaningful human oversight."]
];
export function FAQList(){const [open,setOpen]=useState<number | null>(0);return <div className="mt-10 divide-y divide-slate-200 border-y border-slate-200">{questions.map(([question,answer],index)=>{const answerId=`faq-answer-${index}`;return <div key={question}><h2><button type="button" aria-expanded={open===index} aria-controls={answerId} onClick={()=>setOpen(open===index?null:index)} className="flex w-full items-center justify-between gap-6 py-5 text-left font-display text-lg font-semibold text-navy hover:text-blue"><span>{question}</span><span aria-hidden className="text-xl text-blue">{open===index?"-":"+"}</span></button></h2>{open===index&&<p id={answerId} className="max-w-3xl pb-6 leading-8 text-slate">{answer}</p>}</div>})}</div>}
