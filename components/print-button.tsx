"use client";
import { Icon } from "@/components/icon";
export function PrintButton(){return <button className="print:hidden inline-flex items-center gap-2 font-bold text-white hover:text-gold" onClick={() => window.print()}><Icon name="knowledge" className="h-4 w-4"/> Print / Save PDF</button>;}
