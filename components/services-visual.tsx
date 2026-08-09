function Person({ x, skin, hair, shirt, label, accent = "#1558d6" }: { x: number; skin: string; hair: string; shirt: string; label: string; accent?: string }) {
  return (
    <g transform={`translate(${x} 0)`}>
      <circle cx="70" cy="92" r="34" fill={skin} />
      <path d="M36 91c2-42 66-47 69 2-14-15-24-22-38-22-13 0-22 7-31 20Z" fill={hair} />
      <circle cx="57" cy="94" r="3" fill="#061b36" /><circle cx="83" cy="94" r="3" fill="#061b36" />
      <path d="M59 111c7 6 15 6 22 0" fill="none" stroke="#8b4b35" strokeWidth="3" strokeLinecap="round" />
      <path d="M25 210c4-51 20-79 45-79s41 28 45 79Z" fill={shirt} />
      <path d="M56 137 70 158 84 137" fill="none" stroke="#fff" strokeOpacity=".8" strokeWidth="5" />
      <rect x="59" y="161" width="22" height="34" rx="3" fill={accent} opacity=".9" />
      <text x="70" y="235" textAnchor="middle" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="700" fill="#061b36">{label}</text>
    </g>
  );
}

export function ServicesVisual() {
  return (
    <section className="border-y border-slate-200 bg-mist py-20 md:py-28">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div>
            <p className="eyebrow">People • markets • intelligence</p>
            <h2 className="display mt-4 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">Technology is powerful. People make it matter.</h2>
            <p className="mt-6 max-w-xl leading-8 text-slate">Our services are designed for real organisations, real decision-makers and markets connected across Africa and the world.</p>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
              {[['$', 'USD'], ['£', 'GBP'], ['₦', 'NGN'], ['€', 'EUR']].map(([symbol, code]) => (
                <div key={code} className="border border-slate-200 bg-white p-4">
                  <div className="text-2xl font-semibold text-blue">{symbol}</div>
                  <div className="mt-1 text-xs font-bold tracking-[.18em] text-slate">{code}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden border border-slate-200 bg-white shadow-sm">
            <svg viewBox="0 0 620 330" className="h-auto w-full" role="img" aria-label="Diverse African and international corporate team connected to global markets">
              <defs>
                <linearGradient id="serviceNavy" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#061b36"/><stop offset="1" stopColor="#123f73"/></linearGradient>
                <linearGradient id="serviceBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1558d6"/><stop offset="1" stopColor="#8bbcff"/></linearGradient>
              </defs>
              <rect width="620" height="330" fill="url(#serviceNavy)" />
              <g opacity=".12" stroke="#fff">{Array.from({ length: 12 }).map((_,i)=><line key={`v${i}`} x1={30+i*52} y1="0" x2={30+i*52} y2="330"/>)}{Array.from({ length: 7 }).map((_,i)=><line key={`h${i}`} x1="0" y1={30+i*50} x2="620" y2={30+i*50}/>)}</g>
              <path d="M70 250C160 165 220 180 300 125S430 80 545 155" fill="none" stroke="#8bbcff" strokeWidth="3" strokeDasharray="7 7" opacity=".65" />
              <circle cx="70" cy="250" r="12" fill="#c99a39"/><circle cx="300" cy="125" r="12" fill="#1558d6"/><circle cx="545" cy="155" r="12" fill="#c99a39"/>
              <g transform="translate(20 40)"><Person x={0} skin="#6b3f2a" hair="#24140f" shirt="#1558d6" label="LEADERSHIP" /><Person x={105} skin="#9a6042" hair="#2d1b16" shirt="#f0b83f" label="CLIENT" accent="#c99a39" /></g>
              <g transform="translate(315 55)"><Person x={0} skin="#c98968" hair="#3a241d" shirt="#e7edf5" label="ADVISORY" /><Person x={105} skin="#74442f" hair="#1f1512" shirt="#1558d6" label="PARTNER" /></g>
              <g fill="#fff" fontFamily="Arial, sans-serif" fontSize="11" fontWeight="700"><text x="48" y="25">AFRICA</text><text x="472" y="25">GLOBAL MARKETS</text></g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
