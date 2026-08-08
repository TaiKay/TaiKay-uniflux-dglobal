export type PublicationType = "Insight" | "Research" | "White paper" | "Executive brief";

export type Publication = {
  slug: string;
  title: string;
  summary: string;
  type: PublicationType;
  category: "AI & Intelligent Systems" | "Enterprise Advisory" | "Leadership" | "Operational Excellence";
  readingTimeMinutes: number;
  publishedAt: string;
  tags: string[];
  body: { heading: string; paragraphs: string[] }[];
};

/**
 * Editorial records are deliberately organisation-focused. Add authors, client
 * references, quantitative claims or downloadable files only after approval.
 */
export const publications: Publication[] = [
  {
    slug: "responsible-ai-readiness",
    title: "Preparing the organisation for responsible AI",
    summary: "Why readiness is a capability question—not simply a technology decision.",
    type: "Insight", category: "AI & Intelligent Systems", readingTimeMinutes: 5, publishedAt: "2026-08-07", tags: ["AI readiness", "Governance", "Capability"],
    body: [
      { heading: "Readiness begins with the work", paragraphs: ["Artificial intelligence is often introduced as a technology initiative. Its usefulness, however, depends on the decisions, workflows and people it is intended to support.", "A responsible starting point is to identify where greater clarity, consistency or capacity would make a meaningful difference—and to consider the conditions required for a system to be trusted in that setting."] },
      { heading: "A capability lens", paragraphs: ["Readiness brings several dimensions into view: the quality and stewardship of information, the clarity of decision rights, the practical skills of teams and the governance that guides adoption.", "Considering these dimensions together allows leaders to distinguish an interesting application from an approach that can be responsibly embedded in the organisation."] },
      { heading: "The question for leaders", paragraphs: ["The important question is not only what an intelligent system can do. It is whether the organisation is prepared to use it with purpose, oversight and a clear understanding of the work it is changing."] }
    ]
  },
  {
    slug: "operational-excellence-is-a-system",
    title: "Operational excellence is a system, not a programme",
    summary: "A practical perspective on connecting process, decisions and ownership.",
    type: "Insight", category: "Operational Excellence", readingTimeMinutes: 4, publishedAt: "2026-08-07", tags: ["Operations", "Decision quality", "Ownership"],
    body: [
      { heading: "Beyond isolated improvement", paragraphs: ["Improvement efforts can create momentum, but their value is often limited when they are disconnected from the decisions, accountabilities and ways of working that shape everyday performance.", "Operational excellence becomes more durable when it is treated as a system: a relationship between workflow, information, leadership attention and the ability of people to act."] },
      { heading: "Make the work visible", paragraphs: ["A useful first step is to make the flow of work visible. Where do decisions wait? Where does information lose context? Where is responsibility unclear? These questions create a more practical basis for change than a generic list of efficiency measures."] }
    ]
  },
  {
    slug: "ownership-leadership-in-practice",
    title: "Creating the conditions for ownership leadership",
    summary: "Leadership systems that make responsibility easier to take and sustain.",
    type: "Executive brief", category: "Leadership", readingTimeMinutes: 4, publishedAt: "2026-08-07", tags: ["Leadership", "Accountability", "Culture"],
    body: [
      { heading: "Ownership is designed", paragraphs: ["Ownership is often described as an individual quality. In practice, it is also a property of the environment leaders create: clarity about outcomes, authority close to the work, useful feedback and meaningful follow-through.", "When these conditions are missing, calls for accountability can place pressure on people without changing the system in which they operate."] },
      { heading: "A shared leadership practice", paragraphs: ["Leadership that enables ownership makes priorities understandable and decision boundaries explicit. It treats learning as part of delivery, allowing teams to act with more confidence while remaining connected to organisational purpose."] }
    ]
  }
];

export const publicationBySlug = (slug: string) => publications.find((publication) => publication.slug === slug);
export const relatedPublications = (publication: Publication) => publications.filter((item) => item.slug !== publication.slug && (item.category === publication.category || item.tags.some((tag) => publication.tags.includes(tag)))).slice(0, 3);
