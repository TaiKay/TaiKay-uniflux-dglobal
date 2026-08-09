import { Icon } from "@/components/icon";

function SystemsVisual() {
  return (
    <svg viewBox="0 0 720 420" className="h-full w-full" role="img" aria-label="Abstract intelligent systems network">
      <defs>
        <linearGradient id="systemsGlow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#1558d6" stopOpacity=".9" />
          <stop offset="1" stopColor="#8bbcff" stopOpacity=".2" />
        </linearGradient>
      </defs>
      <rect width="720" height="420" fill="#061b36" />
      <g opacity=".12" stroke="#fff">
        {Array.from({ length: 13 }).map((_, i) => <line key={`v-${i}`} x1={40 + i * 54} y1="0" x2={40 + i * 54} y2="420" />)}
        {Array.from({ length: 8 }).map((_, i) => <line key={`h-${i}`} x1="0" y1={30 + i * 54} x2="720" y2={30 + i * 54} />)}
      </g>
      <g stroke="#8bbcff" strokeOpacity=".55" fill="none">
        <path d="M110 300 245 190 355 260 475 105 620 185" />
        <path d="M110 300 185 105 355 260 570 320" />
      </g>
      <g fill="url(#systemsGlow)" stroke="#fff" strokeOpacity=".55">
        <circle cx="110" cy="300" r="17" /><circle cx="185" cy="105" r="13" /><circle cx="245" cy="190" r="21" />
        <circle cx="355" cy="260" r="18" /><circle cx="475" cy="105" r="24" /><circle cx="570" cy="320" r="14" /><circle cx="620" cy="185" r="19" />
      </g>
      <circle cx="475" cy="105" r="46" fill="none" stroke="#c99a39" strokeOpacity=".65" />
      <circle cx="475" cy="105" r="64" fill="none" stroke="#c99a39" strokeOpacity=".18" />
    </svg>
  );
}

function OperatingVisual() {
  return (
    <svg viewBox="0 0 720 420" className="h-full w-full" role="img" aria-label="Abstract operating model and governance architecture">
      <rect width="720" height="420" fill="#f3f6fa" />
      <g fill="none" stroke="#061b36" strokeWidth="2">
        <rect x="70" y="70" width="180" height="90" rx="8" /><rect x="270" y="70" width="180" height="90" rx="8" /><rect x="470" y="70" width="180" height="90" rx="8" />
        <rect x="170" y="255" width="180" height="90" rx="8" /><rect x="370" y="255" width="180" height="90" rx="8" />
        <path d="M160 160v45h200v50M360 160v95M560 160v45H460v50" />
      </g>
      <g fill="#1558d6">
        <circle cx="160" cy="115" r="11" /><circle cx="360" cy="115" r="11" /><circle cx="560" cy="115" r="11" /><circle cx="260" cy="300" r="11" /><circle cx="460" cy="300" r="11" />
      </g>
      <g fill="#617087" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="700" textAnchor="middle">
        <text x="160" y="145">STRATEGY</text><text x="360" y="145">GOVERNANCE</text><text x="560" y="145">DATA</text><text x="260" y="330">CAPABILITY</text><text x="460" y="330">DELIVERY</text>
      </g>
      <path d="M80 382H640" stroke="#c99a39" strokeWidth="4" />
    </svg>
  );
}

function GrowthVisual() {
  return (
    <svg viewBox="0 0 720 420" className="h-full w-full" role="img" aria-label="Abstract global growth pathways">
      <defs>
        <linearGradient id="growthFill" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0" stopColor="#1558d6" />
          <stop offset="1" stopColor="#8bbcff" />
        </linearGradient>
      </defs>
      <rect width="720" height="420" fill="#061b36" />
      <g opacity=".16" stroke="#fff">
        <ellipse cx="360" cy="210" rx="260" ry="125" /><ellipse cx="360" cy="210" rx="170" ry="125" /><path d="M100 210h520M360 85v250" />
      </g>
      <path d="M115 315 C210 285 215 220 290 235 S385 295 445 220 S530 120 615 105" fill="none" stroke="url(#growthFill)" strokeWidth="7" />
      <path d="M115 315 C210 285 215 220 290 235 S385 295 445 220 S530 120 615 105 L615 345 L115 345Z" fill="url(#growthFill)" opacity=".12" />
      <g fill="#fff">
        <circle cx="115" cy="315" r="8" /><circle cx="290" cy="235" r="8" /><circle cx="445" cy="220" r="8" /><circle cx="615" cy="105" r="10" />
      </g>
      <circle cx="615" cy="105" r="28" fill="none" stroke="#c99a39" strokeWidth="2" opacity=".8" />
    </svg>
  );
}

export function VisualIntelligence() {
  const panels = [
    { eyebrow: "01 / Intelligent systems", title: "Connect the signals.", body: "Technology, data and decisions brought into one clearer operating picture.", visual: <SystemsVisual /> },
    { eyebrow: "02 / Enterprise architecture", title: "Make complexity legible.", body: "Governance, capability and delivery aligned around what the organisation needs next.", visual: <OperatingVisual /> },
    { eyebrow: "03 / Growth pathways", title: "Turn insight into movement.", body: "Practical pathways from strategic intent to measurable organisational progress.", visual: <GrowthVisual /> },
  ];

  return (
    <section className="border-y border-slate-200 bg-white py-20 md:py-28">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-[.65fr_1.35fr] md:items-end">
          <div>
            <p className="eyebrow">Visual intelligence</p>
            <h2 className="display mt-4 text-4xl font-semibold leading-tight md:text-5xl">See the system. Shape what comes next.</h2>
          </div>
          <p className="max-w-2xl leading-8 text-slate">UNIFLUX-D combines intelligent technology, enterprise thinking and practical delivery. These visual models express how we turn complexity into clearer choices, stronger systems and sustainable growth.</p>
        </div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {panels.map((panel) => (
            <article key={panel.eyebrow} className="group overflow-hidden border border-slate-200 bg-mist transition hover:-translate-y-1 hover:shadow-xl">
              <div className="aspect-[1.7] overflow-hidden">{panel.visual}</div>
              <div className="p-7">
                <p className="number">{panel.eyebrow}</p>
                <h3 className="display mt-3 text-2xl font-semibold">{panel.title}</h3>
                <p className="mt-3 leading-7 text-slate">{panel.body}</p>
                <div className="mt-6 flex items-center gap-2 text-sm font-bold text-blue"><Icon name="spark" className="h-4 w-4" /> Applied perspective</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
