/**
 * Sprint 2 content contract. An MDX loader or CMS adapter can map its records
 * to this stable interface without requiring page-component changes.
 */
export type Insight = {
  slug: string;
  title: string;
  excerpt: string;
  category: "AI & Intelligent Systems" | "Enterprise Advisory" | "Leadership" | "Operational Excellence";
  publishedAt: string;
  readingTimeMinutes: number;
};

export const insightCategories = ["AI & Intelligent Systems", "Enterprise Advisory", "Leadership", "Operational Excellence"] as const;
