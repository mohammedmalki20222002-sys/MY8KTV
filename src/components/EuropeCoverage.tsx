import { useLanguage } from "../LanguageContext";

const WA_URL = "https://wa.me/447449708976?text=Hello%2C%20I%27d%20like%20to%20know%20more%20about%20MY.8KTV.";

const coverageTexts: Record<string, { badge: string; title: string; subtitle: string; contact: string; packages: string }> = {
  nl: {
    badge: "Pan-Europese dekking",
    title: "De #1 IPTV-dienst in Europa",
    subtitle: "Beschikbaar in alle grote Europese landen met heldere streams. Ons supportteam spreekt jouw taal — 24/7 bereikbaar.",
    contact: "Contact opnemen",
    packages: "Bekijk pakketten",
  },
  de: {
    badge: "Europaweite Abdeckung",
    title: "Der #1 IPTV-Dienst in Europa",
    subtitle: "In allen großen europäischen Ländern mit kristallklaren Streams verfügbar. Unser Support spricht deine Sprache — 24/7 erreichbar.",
    contact: "Support kontaktieren",
    packages: "Pakete anzeigen",
  },
  fr: {
    badge: "Couverture pan-européenne",
    title: "Le service IPTV #1 en Europe",
    subtitle: "Disponible dans tous les grands pays européens avec des flux ultra-clairs. Notre équipe parle votre langue — disponible 24/7.",
    contact: "Contacter le support",
    packages: "Voir les forfaits",
  },
  es: {
    badge: "Cobertura paneuropea",
    title: "El servicio IPTV #1 de Europa",
    subtitle: "Disponible en todos los grandes países europeos con streams nítidos. Nuestro equipo habla tu idioma — disponible 24/7.",
    contact: "Contactar soporte",
    packages: "Ver paquetes",
  },
  it: {
    badge: "Copertura pan-europea",
    title: "Il servizio IPTV #1 in Europa",
    subtitle: "Disponibile in tutti i principali paesi europei con stream cristallini. Il nostro team parla la tua lingua — disponibile 24/7.",
    contact: "Contatta il supporto",
    packages: "Vedi i pacchetti",
  },
};

const defaultCoverageText = {
  badge: "Pan-European Coverage",
  title: "The #1 IPTV Service in Europe",
  subtitle: "Serving every major European country with crystal-clear streams. Our support team speaks your language — available 24/7.",
  contact: "Contact Support",
  packages: "View Packages",
};

const COUNTRIES = [
  { code: "gb", name: "United Kingdom" },
  { code: "fr", name: "France" },
  { code: "de", name: "Germany" },
  { code: "es", name: "Spain" },
  { code: "nl", name: "Netherlands" },
  { code: "be", name: "Belgium" },
  { code: "se", name: "Sweden" },
  { code: "no", name: "Norway" },
  { code: "dk", name: "Denmark" },
  { code: "fi", name: "Finland" },
  { code: "at", name: "Austria" },
  { code: "ch", name: "Switzerland" },
  { code: "pt", name: "Portugal" },
  { code: "it", name: "Italy" },
  { code: "ie", name: "Ireland" },
  { code: "is", name: "Iceland" },
  { code: "lu", name: "Luxembourg" },
  { code: "gr", name: "Greece" },
  { code: "mt", name: "Malta" },
  { code: "cy", name: "Cyprus" },
];

const tripled = [...COUNTRIES, ...COUNTRIES, ...COUNTRIES];

interface EuropeCoverageProps {
  onPricingClick: () => void;
}

export default function EuropeCoverage({ onPricingClick }: EuropeCoverageProps) {
  const { lang } = useLanguage();
  const ct = coverageTexts[lang] ?? defaultCoverageText;

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-3">
      <div
        className="rounded-2xl py-8 px-5 md:px-10 ring-1 ring-white/[0.08] relative overflow-hidden"
        style={{ background: "linear-gradient(145deg, #07090f 0%, #0c1422 55%, #07090f 100%)" }}
      >
        {/* 8K background image */}
        <img
          src="/hero-bg.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          style={{ opacity: 0.28, mixBlendMode: "luminosity" }}
        />

        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(145deg, rgba(7,9,15,0.62) 0%, rgba(12,20,34,0.52) 55%, rgba(7,9,15,0.62) 100%)" }} />

        {/* Subtle blue glow accents */}
        <div className="absolute top-0 left-1/4 w-80 h-32 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.1) 0%, transparent 70%)" }} />
        <div className="absolute bottom-0 right-1/4 w-64 h-24 rounded-full blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%)" }} />

        {/* Text */}
        <div className="relative z-10 text-center mb-6">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-400/60 mb-2">
            {ct.badge}
          </p>
          <h2 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
            {ct.title}
          </h2>
          <p className="text-white/40 text-[13px] mt-2 font-normal max-w-md mx-auto leading-relaxed">
            {ct.subtitle}
          </p>
        </div>

        {/* Flag strip with edge fade */}
        <div
          className="relative overflow-hidden -mx-5 md:-mx-10 select-none pointer-events-none mb-7"
          style={{
            paddingBlock: "14px",
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <div className="animate-scroll flex gap-6 px-8" style={{ willChange: "transform" }}>
            {tripled.map((c, i) => (
              <div
                key={`${c.code}-${i}`}
                className="shrink-0 rounded-lg overflow-hidden"
                style={{
                  width: 80,
                  height: 54,
                  transform: `rotate(${i % 2 === 0 ? "-6deg" : "-8deg"})`,
                  boxShadow: "0 6px 20px rgba(0,0,0,0.55), 0 1px 0 rgba(255,255,255,0.08) inset",
                  outline: "1px solid rgba(255,255,255,0.1)",
                }}
                title={c.name}
              >
                <img
                  src={`https://flagcdn.com/w160/${c.code}.png`}
                  alt={c.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="relative z-10 flex items-center justify-center gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full text-[13px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #25D366 0%, #1aab55 100%)",
              boxShadow: "0 2px 12px rgba(37,211,102,0.35), inset 0 1px 0 rgba(255,255,255,0.15)",
            }}
          >
            {ct.contact}
          </a>
          <button
            onClick={onPricingClick}
            className="px-6 py-2.5 rounded-full text-[13px] font-bold text-white transition-all hover:brightness-110 active:scale-95"
            style={{
              background: "linear-gradient(135deg, #1e4fd8 0%, #2563eb 100%)",
              boxShadow: "0 2px 12px rgba(30,79,216,0.35), inset 0 1px 0 rgba(255,255,255,0.12)",
            }}
          >
            {ct.packages}
          </button>
        </div>
      </div>
    </section>
  );
}
