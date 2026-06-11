import { ArrowRight } from "lucide-react";

interface AnnouncementProps {
  onPricingClick: () => void;
}

export default function Announcement({ onPricingClick }: AnnouncementProps) {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden cursor-pointer group min-h-[260px] sm:min-h-0"
      onClick={onPricingClick}
      style={{ minHeight: "260px" }}
    >
      {/* Background photo */}
      <img
        src="/wm-banner.png"
        alt="WM 2026"
        className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(1,78,69,0.88) 0%, rgba(1,60,53,0.70) 40%, rgba(0,0,0,0.45) 100%)",
        }}
      />

      {/* Decorative blobs */}
      <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/[0.06] pointer-events-none" />
      <div className="absolute bottom-0 left-6 w-32 h-32 rounded-full bg-black/10 blur-2xl pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 p-5 md:p-6 flex flex-col justify-between h-full gap-4">

        {/* Top badge */}
        <div className="flex items-center gap-2 self-start">
          <span className="text-xl leading-none select-none">⚽</span>
          <span className="text-[9px] font-mono font-black uppercase tracking-[0.22em] text-white/60 border border-white/20 bg-white/10 px-2.5 py-0.5 rounded-full">
            WM 2026 · Live
          </span>
        </div>

        {/* Headline */}
        <div className="flex flex-col gap-2">
          <h3 className="text-white font-black leading-[1.08] tracking-[-0.02em] text-[1.2rem] sm:text-xl md:text-2xl">
            Verfolgen Sie die{" "}
            <span className="serif-display italic font-light text-white/85">
              Weltmeisterschaft WM
            </span>{" "}
            live.
          </h3>
          <p className="text-white/65 text-xs sm:text-sm leading-relaxed font-medium">
            Überall in Deutschland mit uns –{" "}
            <span className="serif-display italic text-white/80">seien Sie dabei!</span>
          </p>
        </div>

        {/* CTA button */}
        <button
          onClick={e => { e.stopPropagation(); onPricingClick(); }}
          className="self-start flex items-center gap-2 bg-white text-[#014E45] font-extrabold text-[11px] sm:text-xs px-4 py-2 rounded-full
                     shadow-[0_3px_0_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-none
                     hover:bg-white/90 transition-all"
        >
          <span>Jetzt Tarif wählen</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

      </div>
    </div>
  );
}
