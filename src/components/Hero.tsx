import { ArrowRight, Sparkles } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const FI_CHANNELS = [
  { id: "yle1",     name: "Yle TV1",    sub: "Yle TV1 HD",      logo: "/logos/yle1.svg",      bg: "#003580" },
  { id: "yle2",     name: "Yle TV2",    sub: "Yle TV2 HD",      logo: "/logos/yle2.svg",      bg: "#005B9C" },
  { id: "mtv3",     name: "MTV3",       sub: "MTV3 HD",         logo: "/logos/mtv3.svg",      bg: "#E4001B" },
  { id: "nelonen",  name: "Nelonen",    sub: "Nelonen HD",      logo: "/logos/nelonen.svg",   bg: "#FF6600" },
  { id: "tv5",      name: "TV5",        sub: "TV5 HD",          logo: "/logos/tv5.svg",       bg: "#005B96" },
  { id: "sub",      name: "Sub",        sub: "Sub HD",          logo: "/logos/sub.svg",       bg: "#CC0000" },
  { id: "cmore",    name: "C More",     sub: "C More Sport",    logo: "/logos/cmore.svg",     bg: "#001A50" },
  { id: "viaplay",  name: "Viaplay",    sub: "Viaplay FI",      logo: "/logos/viaplay.svg",   bg: "#3700B3" },
  { id: "elisa",    name: "Elisa",      sub: "Elisa Viihde",    logo: "/logos/elisa.svg",     bg: "#0070C0" },
  { id: "ruutu",    name: "Ruutu+",     sub: "Ruutu Plus",      logo: "/logos/ruutu.svg",     bg: "#E4001B" },
  { id: "disco",    name: "Discovery+", sub: "Discovery+",      logo: "/logos/disco.svg",     bg: "#0070C0" },
  { id: "mtvsport", name: "MTV Sport",  sub: "SM-liiga Live",   logo: "/logos/mtvsport.svg",  bg: "#E4001B" },
  { id: "euro1",    name: "Eurosport",  sub: "Eurosport 1",     logo: "/logos/eurosport.svg", bg: "#FF6600" },
  { id: "dazn",     name: "DAZN",       sub: "DAZN FI",         logo: "/logos/dazn.svg",      bg: "#111111" },
  { id: "ylefen",   name: "Yle Fem",    sub: "Yle Fem HD",      logo: "/logos/ylefen.svg",    bg: "#003580" },
  { id: "jim",      name: "Jim",        sub: "Jim HD",          logo: "/logos/jim.svg",       bg: "#1A3A8F" },
  { id: "nhl",      name: "NHL",        sub: "NHL Live",        logo: "/logos/nhl.svg",       bg: "#000000" },
  { id: "ava",      name: "AVA",        sub: "AVA HD",          logo: "/logos/ava.svg",       bg: "#CC0000" },
  { id: "kutv",     name: "Kutonen",    sub: "Kutonen HD",      logo: "/logos/kutv.svg",      bg: "#E4001B" },
  { id: "areena",   name: "Yle Areena", sub: "Yle Areena",      logo: "/logos/areena.svg",    bg: "#003580" },
];

interface HeroProps {
  onPricingClick: () => void;
}

export default function Hero({ onPricingClick }: HeroProps) {
  const { t } = useLanguage();
  const doubled = [...FI_CHANNELS, ...FI_CHANNELS, ...FI_CHANNELS];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div className="relative w-full rounded-2xl overflow-hidden min-h-[520px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px] flex flex-col">

        {/* Background: suo.jpg */}
        <div className="absolute inset-0">
          <img
            src="/suo.jpg"
            alt="Finland"
            className="absolute right-0 top-0 h-full w-full sm:w-[62%] md:w-[58%] lg:w-[55%] object-cover object-center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(0,26,80,0.97) 0%, rgba(0,26,80,0.92) 30%, rgba(0,26,80,0.72) 44%, rgba(0,26,80,0.32) 60%, rgba(0,26,80,0.08) 74%, transparent 100%)",
            }}
          />
          <div
            className="absolute inset-0 sm:hidden"
            style={{ background: "linear-gradient(to top, rgba(0,26,80,0.94) 35%, rgba(0,26,80,0.30) 65%, transparent 100%)" }}
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-40 w-48 h-48 rounded-full bg-black/10 blur-3xl pointer-events-none" />

        {/* Content */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full flex-1 gap-6 max-w-[600px]">

          {/* Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
              <Sparkles className="w-3 h-3 text-white/70" />
              <span className="text-[10px] font-bold text-white/70">TrustScore 4.9 ★★★★★</span>
            </div>
          </div>

          {/* Headline */}
          <div className="flex flex-col gap-3">
            <p className="serif-display italic font-light text-xl sm:text-2xl text-white/80">
              {t.hero.subtitle}
            </p>
            <h1 className="text-[2.4rem] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.0] tracking-[-0.04em] font-black text-white">
              <span className="serif-display italic font-light text-white/80" style={{ fontSize: "1.06em" }}>
                {t.hero.headline1}
              </span>
              <br />
              <span className="text-[1.6rem] sm:text-3xl md:text-4xl lg:text-5xl leading-[1.08] font-black text-white">
                {t.hero.headline2}
                <span
                  className="serif-display italic font-light block sm:inline text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl"
                  style={{ color: "#F5C842", textShadow: "0 0 40px rgba(245,200,66,0.35)" }}
                >
                  {t.hero.highlight}
                </span>{" "}
                <span className="serif-display italic text-white/90">{t.hero.end}</span>
              </span>
            </h1>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 sm:gap-8">
            {[
              { v: t.hero.stat1v, l: t.hero.stat1l },
              { v: t.hero.stat2v, l: t.hero.stat2l },
              { v: t.hero.stat3v, l: t.hero.stat3l },
            ].map(({ v, l }, i) => (
              <div key={l} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && <div className="w-px h-6 bg-white/15" />}
                <div>
                  <p className="text-xl sm:text-2xl font-black leading-none text-white">{v}</p>
                  <p className="serif-display italic font-light text-xl text-white/75 mt-0.5">{l}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTAs + channel strip */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onPricingClick}
                className="flex items-center gap-2 bg-white text-[#003580] font-extrabold text-sm px-6 py-2.5 rounded-full shadow-[0_4px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-none hover:bg-white/90 transition-all"
              >
                <span>{t.hero.cta1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onPricingClick}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all"
              >
                {t.hero.cta2}
              </button>
            </div>

            {/* Finnish channel auto-scroll strip */}
            <div className="overflow-hidden -mx-6 sm:-mx-8 md:-mx-10 lg:-mx-12">
              <div className="animate-scroll flex gap-2.5 px-2">
                {doubled.map((ch, i) => (
                  <div
                    key={`${ch.id}-${i}`}
                    className="shrink-0 flex items-center gap-3 bg-white hover:bg-white/95 border border-black/8 rounded-2xl px-3.5 py-2.5 transition-all duration-200 cursor-default shadow-sm"
                  >
                    <div
                      className="w-9 h-9 rounded-xl flex items-center justify-center overflow-hidden shrink-0 p-1"
                      style={{ backgroundColor: ch.bg }}
                    >
                      <img
                        src={ch.logo}
                        alt={ch.name}
                        className="w-full h-full object-contain"
                        style={{ filter: "brightness(0) invert(1)" }}
                        onError={e => {
                          const el = e.currentTarget;
                          el.style.display = "none";
                          const parent = el.parentElement;
                          if (parent) {
                            parent.innerHTML = `<span style="color:white;font-size:8px;font-weight:900;text-align:center;line-height:1.1;word-break:break-all">${ch.name}</span>`;
                          }
                        }}
                      />
                    </div>
                    <span className="text-[#111211] text-[13px] font-bold whitespace-nowrap">{ch.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
