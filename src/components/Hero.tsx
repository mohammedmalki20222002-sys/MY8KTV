import { ArrowRight, Sparkles } from "lucide-react";

interface HeroProps {
  onPricingClick: () => void;
}

export default function Hero({ onPricingClick }: HeroProps) {
  const devices = ["🖥️ Smart TV", "🔥 Fire Stick", "🍏 Apple TV", "🤖 Android", "💻 PC"];

  return (
    <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">

      {/* ── Unified card ─────────────────────────────────────────── */}
      <div className="relative w-full rounded-2xl overflow-hidden min-h-[520px] sm:min-h-[460px] md:min-h-[500px] lg:min-h-[540px] flex flex-col">

        {/* Background: WM photo on the right */}
        <div className="absolute inset-0">
          <img
            src="/wm-banner.png"
            alt="WM 2026"
            className="absolute right-0 top-0 h-full w-full sm:w-[62%] md:w-[58%] lg:w-[55%] object-cover object-top"
          />
          {/* Left green gradient — lighter so photo shows through more */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to right, rgba(1,46,42,0.96) 0%, rgba(1,46,42,0.90) 28%, rgba(1,46,42,0.70) 42%, rgba(1,46,42,0.30) 58%, rgba(1,46,42,0.08) 72%, transparent 100%)",
            }}
          />
          {/* Bottom gradient for mobile readability */}
          <div
            className="absolute inset-0 sm:hidden"
            style={{ background: "linear-gradient(to top, rgba(1,46,42,0.92) 35%, rgba(1,46,42,0.30) 65%, transparent 100%)" }}
          />
        </div>

        {/* Decorative circles */}
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/[0.03] pointer-events-none" />
        <div className="absolute bottom-0 left-40 w-48 h-48 rounded-full bg-black/10 blur-3xl pointer-events-none" />

        {/* ── Content ──────────────────────────────────────────────── */}
        <div className="relative z-10 p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-between h-full flex-1 gap-6 max-w-[600px]">

          {/* Top: WM badge + trust */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 pl-3 pr-4 py-1.5 rounded-full">
              <span className="text-base leading-none">⚽</span>
              <span className="font-black text-[10px] uppercase tracking-[0.2em] text-white">WM 2026 — Live</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/10 border border-white/15 rounded-full px-3 py-1.5">
              <Sparkles className="w-3 h-3 text-white/70" />
              <span className="text-[10px] font-bold text-white/70">TrustScore 4.9 ★★★★★</span>
            </div>
          </div>

          {/* Middle: headline + description */}
          <div className="flex flex-col gap-3">
            {/* Announcement subtitle */}
            <p className="text-[9px] sm:text-[10px] font-mono font-black uppercase tracking-[0.25em] text-white/40">
              Das beste IPTV in Deutschland
            </p>

            {/* Main headline */}
            <h1 className="text-[2.4rem] sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.0] tracking-[-0.04em] font-black text-white">
              <span className="serif-display italic font-light text-white/80" style={{ fontSize: "1.06em" }}>
                4K-Qualität,
              </span>
              <br />
              auf all deinen Geräten.
            </h1>

            {/* WM line */}
            <p className="text-white/55 text-xs sm:text-sm font-medium leading-snug max-w-sm">
              Verfolgen Sie die{" "}
              <span className="serif-display italic text-white/75">Weltmeisterschaft WM</span> live —
              überall in Deutschland mit uns.{" "}
              <span className="serif-display italic text-white/60">Seien Sie dabei!</span>
            </p>

            {/* Description */}
            <p className="text-white/45 text-[11px] sm:text-xs leading-relaxed max-w-sm">
              Über <span className="font-semibold text-white/75">59.000 Live-Sender</span> und{" "}
              <span className="font-semibold text-white/75">200.000+ VOD</span> — sofort auf jedem Gerät, ohne Vertrag.
            </p>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 sm:gap-8">
            {[
              { v: "59K",  l: "Sender"   },
              { v: "200K", l: "VOD"      },
              { v: "4K",   l: "Ultra HD" },
            ].map(({ v, l }, i) => (
              <div key={l} className="flex items-center gap-6 sm:gap-8">
                {i > 0 && <div className="w-px h-6 bg-white/15" />}
                <div>
                  <p className="text-xl sm:text-2xl font-black leading-none text-white">{v}</p>
                  <p className="text-[9px] font-mono uppercase tracking-widest text-white/40 mt-0.5">{l}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA + device pills */}
          <div className="flex flex-col gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onPricingClick}
                className="flex items-center gap-2 bg-white text-[#014E45] font-extrabold text-sm px-6 py-2.5 rounded-full
                           shadow-[0_4px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-none hover:bg-white/90 transition-all"
              >
                <span>Jetzt Tarif wählen</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onPricingClick}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all"
              >
                Sofortigen Zugang sichern
              </button>
            </div>
            <p className="text-[9px] font-mono text-white/30 tracking-wider uppercase">
              Kein Vertrag · Sofortiger Zugang
            </p>

            {/* Device pills */}
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-0.5 -ml-0.5">
              {devices.map(d => (
                <span key={d}
                  className="shrink-0 px-3 py-1.5 bg-white/10 hover:bg-white/15 text-white/60 text-[10px] font-semibold rounded-full border border-white/10 transition-colors whitespace-nowrap">
                  {d}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
