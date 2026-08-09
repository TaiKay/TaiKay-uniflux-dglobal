type VisualKind = "innovation" | "industry" | "case";

type CorporateVisualProps = {
  kind: VisualKind;
  label: string;
  title: string;
  description: string;
};

function InnovationVisual() {
  return (
    <svg viewBox="0 0 760 520" role="img" aria-label="Abstract intelligent systems visual" className="h-full w-full">
      <defs>
        <linearGradient id="innovationGlow" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#1558d6" stopOpacity=".9" />
          <stop offset="1" stopColor="#8ec5ff" stopOpacity=".35" />
        </linearGradient>
        <radialGradient id="innovationCore">
          <stop offset="0" stopColor="#c99a39" />
          <stop offset=".32" stopColor="#8ec5ff" stopOpacity=".8" />
          <stop offset="1" stopColor="#8ec5ff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="760" height="520" fill="#061b36" />
      <g opacity=".14" stroke="#fff">
        {Array.from({ length: 12 }, (_, i) => <line key={`v-${i}`} x1={40 + i * 62} y1="0" x2={40 + i * 62} y2="520" />)}
        {Array.from({ length: 9 }, (_, i) => <line key={`h-${i}`} x1="0" y1={40 + i * 62} x2="760" y2={40 + i * 62} />)}
      </g>
      <circle cx="380" cy="260" r="170" fill="url(#innovationCore)" />
      <g fill="none" stroke="url(#innovationGlow)" strokeWidth="2">
        <circle cx="380" cy="260" r="112" />
        <circle cx="380" cy="260" r="170" />
        <ellipse cx="380" cy="260" rx="260" ry="112" transform="rotate(-25 380 260)" />
        <ellipse cx="380" cy="260" rx="260" ry="112" transform="rotate(25 380 260)" />
      </g>
      <g fill="#fff">
        <circle cx="380" cy="260" r="12" />
        <circle cx="178" cy="178" r="7" />
        <circle cx="586" cy="166" r="7" />
        <circle cx="604" cy="356" r="7" />
        <circle cx="170" cy="362" r="7" />
      </g>
      <text x="42" y="468" fill="#c99a39" fontSize="14" fontWeight="700" letterSpacing="3">APPLIED INTELLIGENCE / SYSTEMS / PEOPLE</text>
    </svg>
  );
}

function IndustryVisual() {
  return (
    <svg viewBox="0 0 760 520" role="img" aria-label="Abstract interconnected industry systems visual" className="h-full w-full">
      <defs>
        <linearGradient id="industrySky" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stopColor="#061b36" />
          <stop offset="1" stopColor="#173a67" />
        </linearGradient>
      </defs>
      <rect width="760" height="520" fill="url(#industrySky)" />
      <path d="M0 420 C140 350 190 450 315 380 S520 300 760 365 V520 H0Z" fill="#0c294b" />
      <g fill="none" stroke="#8ec5ff" strokeOpacity=".55" strokeWidth="2">
        <path d="M90 120 L260 215 L420 112 L650 220 L510 355 L260 315 L90 120Z" />
        <path d="M260 215 L260 315 M420 112 L510 355 M650 220 L510 355 M90 120 L260 315" />
      </g>
      <g fill="#fff">
        <circle cx="90" cy="120" r="9" /><circle cx="260" cy="215" r="9" /><circle cx="420" cy="112" r="9" /><circle cx="650" cy="220" r="9" /><circle cx="510" cy="355" r="9" /><circle cx="260" cy="315" r="9" />
      </g>
      <g fontFamily="Arial, sans-serif" fontSize="13" fontWeight="700" fill="#c99a39">
        <text x="54" y="96">ENERGY</text><text x="232" y="190">FINANCE</text><text x="390" y="88">PUBLIC</text><text x="617" y="196">DIGITAL</text><text x="475" y="390">HEALTH</text><text x="216" y="345">INDUSTRY</text>
      </g>
      <text x="42" y="468" fill="#fff" fontSize="14" fontWeight="700" letterSpacing="3" opacity=".85">SECTOR CONTEXT / OPERATING SYSTEMS / CHANGE</text>
    </svg>
  );
}

function CaseVisual() {
  return (
    <svg viewBox="0 0 760 520" role="img" aria-label="Abstract enterprise transformation visual" className="h-full w-full">
      <defs>
        <linearGradient id="caseBg" x1="0" x2="1" y1="0" y2="1"><stop offset="0" stopColor="#f3f6fa" /><stop offset="1" stopColor="#dce7f5" /></linearGradient>
      </defs>
      <rect width="760" height="520" fill="url(#caseBg)" />
      <rect x="72" y="82" width="616" height="330" rx="4" fill="#fff" stroke="#b8c7d9" />
      <rect x="106" y="116" width="188" height="238" fill="#061b36" />
      <rect x="322" y="116" width="332" height="52" fill="#e9eff7" />
      <rect x="322" y="190" width="145" height="164" fill="#1558d6" opacity=".92" />
      <rect x="487" y="190" width="167" height="74" fill="#061b36" />
      <rect x="487" y="280" width="167" height="74" fill="#c99a39" opacity=".9" />
      <path d="M130 310 L165 265 L198 286 L245 208" fill="none" stroke="#8ec5ff" strokeWidth="7" />
      <circle cx="245" cy="208" r="8" fill="#fff" />
      <text x="130" y="145" fill="#c99a39" fontSize="13" fontWeight="700" letterSpacing="2">OUTCOME</text>
      <text x="106" y="468" fill="#061b36" fontSize="14" fontWeight="700" letterSpacing="3">CONTEXT / APPROACH / LEARNING</text>
    </svg>
  );
}

export function CorporateVisual({ kind, label, title, description }: CorporateVisualProps) {
  const Visual = kind === "innovation" ? InnovationVisual : kind === "industry" ? IndustryVisual : CaseVisual;
  return (
    <article className="group overflow-hidden border border-slate-200 bg-white shadow-[0_18px_50px_rgba(6,27,54,.08)]">
      <div className="aspect-[1.46] overflow-hidden">
        <Visual />
      </div>
      <div className="p-7 md:p-9">
        <p className="eyebrow">{label}</p>
        <h3 className="display mt-3 text-2xl font-semibold leading-tight md:text-3xl">{title}</h3>
        <p className="mt-4 leading-7 text-slate">{description}</p>
      </div>
    </article>
  );
}
