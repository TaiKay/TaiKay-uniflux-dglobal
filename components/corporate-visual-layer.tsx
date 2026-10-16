const markets = [
  { code: "USD", name: "US Dollar", symbol: "$", note: "International market ambition" },
  { code: "GBP", name: "Pound Sterling", symbol: "£", note: "Potential UK opportunities" },
  { code: "NGN", name: "Nigerian Naira", symbol: "₦", note: "Home-market focus" },
  { code: "EUR", name: "Euro", symbol: "€", note: "Potential European opportunities" },
];

const sectors = [
  ["Financial Services", "Intelligent finance, risk and sustainable growth"],
  ["Telecommunications", "Connected markets and digital innovation"],
  ["Retail & Commerce", "Smarter commerce and customer experience"],
  ["Public Sector", "Transparent governance and service delivery"],
  ["Infrastructure", "Resilient systems and sustainable development"],
  ["Education & Knowledge", "People, skills and future-ready institutions"],
];

export function CorporateVisualLayer() {
  return (
    <section className="bg-navy py-20 text-white md:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className="eyebrow !text-gold">People • Markets • Intelligence</p>
            <h2 className="display mt-4 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">Built in Africa. Ambitious in outlook.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">Our visual language reflects the people, markets and organisations we hope to work with as UNIFLUX-D grows. The currencies and sectors below illustrate our intended outlook; they do not represent established operations or existing client relationships.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {markets.map((market) => (
                <div key={market.code} className="border border-white/15 bg-white/[.05] p-5 transition hover:border-gold/60 hover:bg-white/[.08]">
                  <div className="flex items-center justify-between"><span className="text-3xl font-semibold text-gold">{market.symbol}</span><span className="text-xs font-bold tracking-[.18em] text-blue-200">{market.code}</span></div>
                  <p className="mt-3 font-semibold">{market.name}</p>
                  <p className="mt-1 text-sm text-slate-400">{market.note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden border border-white/10 bg-white/5 shadow-2xl">
            <img src="/uniflux-d-corporate-visual.svg" alt="Illustrative corporate visual representing UNIFLUX-D's future-facing outlook" className="h-auto w-full" />
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-10">
          <p className="eyebrow !text-gold">Target sectors for future collaboration</p>
          <div className="mt-6 grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {sectors.map(([title, body]) => (
              <div key={title} className="bg-navy p-6 transition hover:bg-white/[.06]"><h3 className="font-display text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-400">{body}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
