import { ArrowRight } from "lucide-react";

interface AnnouncementProps {
  onPricingClick: () => void;
}

export default function Announcement({ onPricingClick }: AnnouncementProps) {
  return (
    <div className="flex flex-col gap-3 h-full">

      {/* ── Designed announcement title ─────────────────────────── */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#014E45] text-white pl-3 pr-4 py-1.5 rounded-full shadow-sm">
          <span className="text-base leading-none">⚽</span>
          <span className="font-black text-[10px] sm:text-[11px] uppercase tracking-[0.2em]">WM 2026 — Live</span>
        </div>
        <div className="h-px flex-1 bg-neutral-200" />
        <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 whitespace-nowrap">Jetzt dabei sein</span>
      </div>

      {/* ── Card ────────────────────────────────────────────────── */}
      <div
        className="relative w-full rounded-2xl overflow-hidden cursor-pointer group flex-1"
        style={{ minHeight: "260px" }}
        onClick={onPricingClick}
      >
        {/* Photo — respects portrait 4:5 ratio on mobile, fills card on larger */}
        <div className="w-full h-full aspect-[4/5] sm:aspect-auto sm:absolute sm:inset-0">
          <img
            src="/wm-banner.png"
            alt="WM 2026"
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />
        </div>

        {/* Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(170deg, rgba(1,78,69,0.75) 0%, rgba(1,50,44,0.50) 35%, rgba(0,0,0,0.15) 65%, rgba(0,0,0,0.55) 100%)",
          }}
        />

        {/* Decorative ring */}
        <div className="absolute -top-12 -right-12 w-44 h-44 rounded-full border border-white/10 pointer-events-none" />
        <div className="absolute -top-6 -right-6 w-28 h-28 rounded-full border border-white/8 pointer-events-none" />

        {/* Content */}
        <div className="absolute inset-0 z-10 p-4 sm:p-5 flex flex-col justify-between">

          {/* Top */}
          <span className="self-start text-[8px] sm:text-[9px] font-mono font-black uppercase tracking-[0.22em] text-white/50 border border-white/20 bg-white/10 backdrop-blur-sm px-2.5 py-1 rounded-full">
            FIFA World Cup 2026
          </span>

          {/* Bottom */}
          <div className="flex flex-col gap-3">
            <div>
              <h3 className="text-white font-black leading-[1.06] tracking-[-0.02em] text-[1.15rem] sm:text-xl md:text-2xl drop-shadow-sm">
                Verfolgen Sie die{" "}
                <span className="serif-display italic font-light text-white/90">
                  Weltmeisterschaft
                </span>{" "}
                live.
              </h3>
              <p className="text-white/60 text-[11px] sm:text-xs mt-1.5 leading-snug font-medium">
                Überall in Deutschland mit uns –{" "}
                <span className="serif-display italic text-white/80">seien Sie dabei!</span>
              </p>
            </div>

            <button
              onClick={e => { e.stopPropagation(); onPricingClick(); }}
              className="self-start flex items-center gap-2 bg-white text-[#014E45] font-extrabold text-[11px] px-4 py-2 rounded-full
                         shadow-[0_3px_0_rgba(0,0,0,0.18)] active:translate-y-0.5 active:shadow-none
                         hover:bg-white/90 transition-all"
            >
              <span>Jetzt Tarif wählen</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
