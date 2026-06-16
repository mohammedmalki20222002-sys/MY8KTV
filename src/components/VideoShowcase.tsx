import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const videoSections: Record<string, { heading: string; headingItalic: string; subtitle: string }> = {
  fi: {
    heading: "Kaikki mitä tarvitset,",
    headingItalic: "yhdessä paikassa.",
    subtitle: "Yli 59 000 live-kanavaa ja 200 000+ VOD — heti kaikilla laitteilla, ilman sopimusta.",
  },
  en: {
    heading: "Everything you need,",
    headingItalic: "in one place.",
    subtitle: "Over 59,000 live channels and 200,000+ VOD — instantly on any device, no contract.",
  },
  fr: {
    heading: "Tout ce dont vous avez besoin,",
    headingItalic: "en un seul endroit.",
    subtitle: "Plus de 59 000 chaînes en direct et 200 000+ VOD — instantanément sur tous vos appareils, sans contrat.",
  },
  da: {
    heading: "Alt hvad du har brug for,",
    headingItalic: "på ét sted.",
    subtitle: "Over 59.000 live-kanaler og 200.000+ VOD — øjeblikkeligt på alle enheder, ingen kontrakt.",
  },
  ar: {
    heading: "كل ما تحتاجه،",
    headingItalic: "في مكان واحد.",
    subtitle: "أكثر من 59,000 قناة مباشرة وأكثر من 200,000 VOD — فوراً على أي جهاز، بدون عقد.",
  },
};

export default function VideoShowcase() {
  const { lang } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);
  const tx = videoSections[lang] ?? videoSections.fi;

  return (
    <>
      {/* Same container as Hero/other sections — constrained, padded, rounded */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          {!videoFailed ? (
            <video
              src="/finland-promo.mp4"
              autoPlay
              loop
              muted
              playsInline
              onError={() => setVideoFailed(true)}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-neutral-900 rounded-2xl" />
          )}

          {/* Top gradient for text legibility */}
          <div
            className="absolute inset-0 pointer-events-none rounded-2xl"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.15) 45%, transparent 80%)",
            }}
          />

          {/* Text overlay — top-left */}
          <div className="absolute top-0 left-0 px-5 pt-5 sm:px-8 sm:pt-7 md:px-10 md:pt-9">
            <h2 className="text-white font-extrabold tracking-tight leading-[1.05] text-lg sm:text-2xl md:text-4xl lg:text-5xl drop-shadow-lg">
              {tx.heading}
              <br />
              <span className="serif-display font-light italic text-white/75">
                {tx.headingItalic}
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Subtitle below */}
      <div className="px-4 md:px-8 max-w-7xl mx-auto w-full pb-4 text-center">
        <p className="serif-display italic font-light text-base sm:text-lg md:text-xl text-neutral-500 leading-relaxed">
          {tx.subtitle}
        </p>
      </div>
    </>
  );
}
