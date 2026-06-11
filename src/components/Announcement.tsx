import { ArrowRight, X } from "lucide-react";
import { useState } from "react";

interface AnnouncementProps {
  onPricingClick: () => void;
}

export default function Announcement({ onPricingClick }: AnnouncementProps) {
  const [dismissed, setDismissed] = useState(false);
  if (dismissed) return null;

  return (
    <div className="relative w-full overflow-hidden" style={{ minHeight: "220px" }}>

      {/* Background image (drop wm-banner.jpg into /public) */}
      <img
        src="/wm-banner.png"
        alt="WM 2026"
        className="absolute inset-0 w-full h-full object-cover object-center"
        onError={e => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
      />

      {/* Green overlay gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(100deg, rgba(1,78,69,0.97) 0%, rgba(1,78,69,0.82) 45%, rgba(1,46,42,0.55) 75%, rgba(0,0,0,0.25) 100%)",
        }}
      />

      {/* Decorative circle accents */}
      <div className="absolute -top-10 -left-10 w-52 h-52 rounded-full bg-white/[0.04] pointer-events-none" />
      <div className="absolute -bottom-16 left-32 w-72 h-72 rounded-full bg-white/[0.03] pointer-events-none" />

      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 z-20 text-white/40 hover:text-white transition-colors"
        aria-label="Schließen"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Content */}
      <div className="relative z-10 px-5 py-8 md:px-14 md:py-10 flex flex-col gap-4 max-w-2xl">

        {/* Badge */}
        <div className="flex items-center gap-2 self-start">
          <span className="text-2xl leading-none select-none">⚽</span>
          <span
            className="text-[9px] font-mono font-black uppercase tracking-[0.25em] text-white/60 border border-white/20 bg-white/10 px-2.5 py-0.5 rounded-full"
          >
            WM 2026 · Live auf allen Geräten
          </span>
        </div>

        {/* Headline */}
        <h2 className="text-white font-black leading-[1.08] tracking-[-0.025em] text-[1.45rem] sm:text-3xl md:text-4xl">
          Verfolgen Sie die{" "}
          <span className="serif-display italic font-light text-white/90">
            Weltmeisterschaft WM
          </span>{" "}
          live.
          <br className="hidden sm:block" />
          <span className="text-white/80 font-extrabold">
            {" "}Überall in Deutschland mit uns –{" "}
          </span>
          <span className="serif-display italic font-light text-white/70">seien Sie dabei!</span>
        </h2>

        {/* CTA */}
        <button
          onClick={onPricingClick}
          className="self-start flex items-center gap-2 bg-white text-[#014E45] font-extrabold text-sm px-6 py-2.5 rounded-full
                     shadow-[0_4px_0_rgba(0,0,0,0.25)] active:translate-y-0.5 active:shadow-none
                     hover:bg-white/90 transition-all"
        >
          <span>Jetzt Tarif wählen</span>
          <ArrowRight className="w-4 h-4" />
        </button>

      </div>
    </div>
  );
}
