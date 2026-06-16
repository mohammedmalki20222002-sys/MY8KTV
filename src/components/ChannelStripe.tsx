import React from "react";
import { ALL_CHANNELS } from "../types";
import { Radio } from "lucide-react";

const FI_CHANNELS_ROW1 = [
  { id: "yle1",     name: "Yle TV1",      logo: "/logos/yle1.svg",      bg: "#003580" },
  { id: "yle2",     name: "Yle TV2",      logo: "/logos/yle2.svg",      bg: "#005B9C" },
  { id: "mtv3",     name: "MTV3",         logo: "/logos/mtv3.svg",      bg: "#E4001B" },
  { id: "nelonen",  name: "Nelonen",      logo: "/logos/nelonen.svg",   bg: "#FF6600" },
  { id: "sub",      name: "Sub",          logo: "/logos/sub.svg",       bg: "#CC0000" },
  { id: "tv5",      name: "TV5",          logo: "/logos/tv5.svg",       bg: "#005B96" },
  { id: "cmore",    name: "C More",       logo: "/logos/cmore.svg",     bg: "#001A50" },
  { id: "viaplay",  name: "Viaplay",      logo: "/logos/viaplay.svg",   bg: "#3700B3" },
  { id: "disco",    name: "Discovery+",   logo: "/logos/disco.svg",     bg: "#0070C0" },
  { id: "elisa",    name: "Elisa Viihde", logo: "/logos/elisa.svg",     bg: "#0070C0" },
  { id: "ruutu",    name: "Ruutu+",       logo: "/logos/ruutu.svg",     bg: "#E4001B" },
  { id: "mtvsport", name: "MTV Sport",    logo: "/logos/mtvsport.svg",  bg: "#E4001B" },
  { id: "euro1",    name: "Eurosport",    logo: "/logos/eurosport.svg", bg: "#FF6600" },
  { id: "dazn",     name: "DAZN",         logo: "/logos/dazn.svg",      bg: "#111111" },
];

const FI_CHANNELS_ROW2 = [
  { id: "jim",      name: "Jim",          logo: "/logos/jim.svg",       bg: "#1A3A8F" },
  { id: "ava",      name: "AVA",          logo: "/logos/ava.svg",       bg: "#CC0000" },
  { id: "ylefen",   name: "Yle Fem",      logo: "/logos/ylefen.svg",    bg: "#003580" },
  { id: "kutv",     name: "Kutonen",      logo: "/logos/kutv.svg",      bg: "#E4001B" },
  { id: "areena",   name: "Yle Areena",   logo: "/logos/areena.svg",    bg: "#003580" },
  { id: "nhl",      name: "NHL Network",  logo: "/logos/nhl.svg",       bg: "#000000" },
  { id: "hbo",      name: "HBO Max",       logo: "/logos/hbomax.svg",    bg: "#000000" },
  { id: "disney",   name: "Disney+",      logo: "/logos/disneyplus.png",bg: "#000B8C" },
  { id: "prime",    name: "Prime Video",  logo: "/logos/prime.svg",     bg: "#00A8E1" },
  { id: "netflix",  name: "Netflix",      logo: "/logos/netflix.svg",   bg: "#E50914" },
  { id: "peacock",  name: "Peacock",      logo: "/logos/peacock.png",   bg: "#000000" },
  { id: "paramount",name: "Paramount+",   logo: "/logos/paramount.png", bg: "#0064FF" },
  { id: "crunch",   name: "Crunchyroll",  logo: "/logos/crunchyroll.svg",bg: "#F47521" },
  { id: "appletv",  name: "Apple TV+",    logo: "/logos/appletv.svg",   bg: "#000000" },
];

const EU_CHANNELS = [
  { id: "bbc",      name: "BBC One",      logo: "/logos/bbc.png",       bg: "#BB1919" },
  { id: "itv",      name: "ITV",          logo: "/logos/itv.png",       bg: "#006540" },
  { id: "skynews",  name: "Sky News",     logo: "/logos/skynews.png",   bg: "#DA0000" },
  { id: "tf1",      name: "TF1",          logo: "/logos/tf1.png",       bg: "#003F87" },
  { id: "france24", name: "France 24",    logo: "/logos/france24.png",  bg: "#F50000" },
  { id: "arte",     name: "ARTE",         logo: "/logos/arte.png",      bg: "#006699" },
  { id: "cnn",      name: "CNN Int'l",    logo: "/logos/cnn.png",       bg: "#CC0000" },
  { id: "bloomberg",name: "Bloomberg",    logo: "/logos/bloomberg.png", bg: "#1D1D1D" },
  { id: "cnbc",     name: "CNBC",         logo: "/logos/cnbc.png",      bg: "#003087" },
  { id: "bein",     name: "beIN Sports",  logo: "/logos/bein.png",      bg: "#8B0000" },
  { id: "espn",     name: "ESPN",         logo: "/logos/espn.png",      bg: "#CC0000" },
  { id: "natgeo",   name: "Nat Geo",      logo: "/logos/natgeo.png",    bg: "#222222" },
  { id: "history",  name: "History",      logo: "/logos/history.png",   bg: "#1A1A1A" },
  { id: "cartoon",  name: "Cartoon Network",logo: "/logos/cartoon.png", bg: "#000000" },
  { id: "fox",      name: "FOX",          logo: "/logos/fox.png",       bg: "#003087" },
];

const ROW1 = FI_CHANNELS_ROW1;
const ROW2 = FI_CHANNELS_ROW2;
const ROW3 = EU_CHANNELS;

type Ch = { id: string; name: string; logo: string; bg: string };

const ChannelCard: React.FC<{ ch: Ch }> = ({ ch }) => {
  const isSvg = ch.logo.endsWith(".svg");
  return (
    <div className="shrink-0 flex items-center gap-3 bg-white border border-black/8 rounded-2xl px-3.5 py-2.5 shadow-sm min-w-[130px]">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center overflow-hidden shrink-0 p-1"
        style={{ backgroundColor: isSvg ? ch.bg : "#ffffff" }}
      >
        <img
          src={ch.logo}
          alt={ch.name}
          className="w-full h-full object-contain"
          style={isSvg ? { filter: "brightness(0) invert(1)" } : {}}
          onError={e => {
            const el = e.currentTarget;
            el.style.display = "none";
            const p = el.parentElement;
            if (p) p.innerHTML = `<span style="color:${isSvg ? "white" : "#333"};font-size:8px;font-weight:900;text-align:center;line-height:1.1">${ch.name}</span>`;
          }}
        />
      </div>
      <span className="text-[#111211] text-[13px] font-bold whitespace-nowrap">{ch.name}</span>
    </div>
  );
}

export default function ChannelStripe() {
  const tripled1 = [...ROW1, ...ROW1, ...ROW1];
  const tripled2 = [...ROW2, ...ROW2, ...ROW2];
  const tripled3 = [...ROW3, ...ROW3, ...ROW3];

  return (
    <section id="channels-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div className="bg-[#003580] text-white rounded-2xl py-8 px-4 md:px-6 relative overflow-hidden shadow-lg">

        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
        <div className="absolute -bottom-16 -right-16 w-64 h-64 rounded-full bg-white/[0.03] blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="flex items-center justify-between mb-6 relative z-10">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 bg-black/20 px-2.5 py-1 rounded-full border border-white/10">
              <Radio className="w-3 h-3 text-white/60 animate-pulse" />
              <span className="text-[9px] font-black font-mono uppercase tracking-widest text-white/70">59K+ kanavaa</span>
            </div>
            <h2 className="text-lg font-extrabold tracking-tight text-white">Kanavakatalogi</h2>
          </div>
          <span className="hidden sm:block text-[9px] font-mono text-white/40 border border-white/10 bg-black/10 px-2.5 py-1 rounded-full">
            {ALL_CHANNELS.length} listattu
          </span>
        </div>

        {/* Finnish channels label */}
        <div className="relative z-10 mb-3 px-1">
          <div className="flex items-end gap-3 flex-wrap">
            <span className="text-[9px] font-black font-mono uppercase tracking-[0.28em] text-white/40">🇫🇮</span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-none">
              Suomalaiset{" "}
              <span className="serif-display italic font-light text-white/85">kanavat.</span>
            </h3>
          </div>
        </div>

        {/* Row 1 — Finnish main channels, scrolls left */}
        <div className="overflow-hidden -mx-4 md:-mx-6 mb-3 select-none pointer-events-none">
          <div className="animate-scroll flex gap-3 px-4">
            {tripled1.map((ch, i) => (
              <ChannelCard key={`r1-${ch.id}-${i}`} ch={ch} />
            ))}
          </div>
        </div>

        {/* Row 2 — Finnish streaming & sport, scrolls right */}
        <div className="overflow-hidden -mx-4 md:-mx-6 mb-6 select-none pointer-events-none">
          <div className="animate-scroll-reverse flex gap-3 px-4">
            {tripled2.map((ch, i) => (
              <ChannelCard key={`r2-${ch.id}-${i}`} ch={ch} />
            ))}
          </div>
        </div>

        {/* Divider + European label */}
        <div className="relative z-10 my-7 px-1">
          <div className="h-px bg-white/10 mb-6" />
          <div className="flex items-end gap-3 flex-wrap">
            <span className="text-[9px] font-black font-mono uppercase tracking-[0.28em] text-white/40">🌍</span>
            <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-none">
              Eurooppalaiset kanavat{" "}
              <span className="serif-display italic font-light text-white/85">ja muuta.</span>
            </h3>
          </div>
        </div>

        {/* Row 3 — European & international, scrolls left */}
        <div className="overflow-hidden -mx-4 md:-mx-6 select-none pointer-events-none">
          <div className="animate-scroll flex gap-3 px-4">
            {tripled3.map((ch, i) => (
              <ChannelCard key={`r3-${ch.id}-${i}`} ch={ch} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
