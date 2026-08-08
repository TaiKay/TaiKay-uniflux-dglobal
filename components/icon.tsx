import type { ReactNode } from "react";
export type IconName = "advisory" | "ai" | "transform" | "leadership" | "product" | "arrow" | "spark" | "governance" | "knowledge";

const paths: Record<IconName, ReactNode> = {
  advisory: <><path d="M4 19.5V8.75M10 19.5V4.5M16 19.5v-7M22 19.5V2.5"/><path d="M2 22h22"/></>,
  ai: <><rect x="4" y="4" width="16" height="16" rx="3"/><path d="M9 12h6M12 9v6M2 9h2m16 0h2M2 15h2m16 0h2M9 2v2m0 16v2m6-20v2m0 16v2"/></>,
  transform: <><path d="M5 7h11l-3-3m3 3-3 3M19 17H8l3 3m-3-3 3-3"/><path d="M19 7a7 7 0 0 1 0 10M5 17a7 7 0 0 1 0-10"/></>,
  leadership: <><circle cx="12" cy="8" r="3"/><path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7M4 4l2 2m14-2-2 2"/></>,
  product: <><path d="M12 3 4 7.5v9l8 4.5 8-4.5v-9L12 3Z"/><path d="m4 7.5 8 4.5 8-4.5M12 12v9"/></>,
  arrow: <path d="M5 12h14m-6-6 6 6-6 6"/>,
  spark: <path d="m12 2 1.9 7.1L21 11l-7.1 1.9L12 20l-1.9-7.1L3 11l7.1-1.9L12 2Z"/>,
  governance: <><path d="M12 3 3 7l9 4 9-4-9-4ZM5 11v6l7 4 7-4v-6"/><path d="M12 11v10"/></>,
  knowledge: <><path d="M4 5.5A3.5 3.5 0 0 1 7.5 2H12v18H7.5A3.5 3.5 0 0 0 4 23V5.5ZM20 5.5A3.5 3.5 0 0 0 16.5 2H12v18h4.5A3.5 3.5 0 0 1 20 23V5.5Z"/></>
};

export function Icon({ name, className = "" }: { name: IconName; className?: string }) { return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" className={className}>{paths[name]}</svg>; }
