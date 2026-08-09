import Link from "next/link";

export function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="hero-grid relative overflow-hidden bg-navy py-20 text-white md:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full border border-blue-300/20 bg-blue-500/10 blur-[1px] md:h-96 md:w-96" />
      <div aria-hidden="true" className="pointer-events-none absolute bottom-[-7rem] right-[14%] h-56 w-56 rounded-full border border-gold/20" />
      <div className="container relative z-10">
        <p className="eyebrow !text-gold">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl text-5xl font-semibold leading-[.98] md:text-7xl">{title}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">{intro}</p>
        <Link href="/contact" className="mt-9 inline-block border border-white/30 px-5 py-3 text-sm font-semibold transition hover:border-gold hover:text-gold">Start a conversation →</Link>
      </div>
    </section>
  );
}
