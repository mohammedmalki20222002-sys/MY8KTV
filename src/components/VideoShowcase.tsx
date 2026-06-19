import { useState } from "react";
import { useLanguage } from "../LanguageContext";

const videoSections: Record<string, { heading: string; headingItalic: string; subtitle: string }> = {
  fi: {
    heading: "Kaikki mitÃ¤ tarvitset,",
    headingItalic: "yhdessÃ¤ paikassa.",
    subtitle: "Yli 89 000 live-kanavaa ja 200 000+ VOD â€” heti kaikilla laitteilla, ilman sopimusta.",
  },
  en: {
    heading: "Everything you need,",
    headingItalic: "in one place.",
    subtitle: "Over 89,000 live channels and 200,000+ VOD â€” instantly on any device, no contract.",
  },
  fr: {
    heading: "Tout ce dont vous avez besoin,",
    headingItalic: "en un seul endroit.",
    subtitle: "Plus de 89 000 chaÃ®nes en direct et 200 000+ VOD â€” instantanÃ©ment sur tous vos appareils, sans contrat.",
  },
  da: {
    heading: "Alt hvad du har brug for,",
    headingItalic: "pÃ¥ Ã©t sted.",
    subtitle: "Over 89.000 live-kanaler og 200.000+ VOD â€” Ã¸jeblikkeligt pÃ¥ alle enheder, ingen kontrakt.",
  },
  ar: {
    heading: "ÙƒÙ„ Ù…Ø§ ØªØ­ØªØ§Ø¬Ù‡ØŒ",
    headingItalic: "ÙÙŠ Ù…ÙƒØ§Ù† ÙˆØ§Ø­Ø¯.",
    subtitle: "Ø£ÙƒØ«Ø± Ù…Ù† 89,000 Ù‚Ù†Ø§Ø© Ù…Ø¨Ø§Ø´Ø±Ø© ÙˆØ£ÙƒØ«Ø± Ù…Ù† 200,000 VOD â€” ÙÙˆØ±Ø§Ù‹ Ø¹Ù„Ù‰ Ø£ÙŠ Ø¬Ù‡Ø§Ø²ØŒ Ø¨Ø¯ÙˆÙ† Ø¹Ù‚Ø¯.",
  },
};

export default function VideoShowcase() {
  const { lang } = useLanguage();
  const [videoFailed, setVideoFailed] = useState(false);
  const tx = videoSections[lang] ?? videoSections.fi;

  return (
    <>
      {/* Same container as Hero/other sections â€” constrained, padded, rounded */}
      <section className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
        <div
          className="relative w-full rounded-2xl overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          {!videoFailed ? (
            <video
              src="/serien-und-filme.mp4"
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

          {/* Text overlay â€” top-left */}
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
