import { useState, useRef, useEffect } from "react";
import { ArrowRight, Menu, X, Globe } from "lucide-react";
import { useLanguage } from "../LanguageContext";
import { LANGUAGES, LangCode } from "../i18n";

interface HeaderProps {
  onPricingClick: () => void;
  onReviewsClick: () => void;
  onFaqClick: () => void;
  onMoviesClick: () => void;
  onSportsClick: () => void;
}

export default function Header({ onPricingClick, onReviewsClick, onFaqClick, onMoviesClick, onSportsClick }: HeaderProps) {
  const { t, lang, setLang } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langDropOpen, setLangDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setLangDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const currentLang = LANGUAGES.find(l => l.code === lang)!;

  return (
    <header className="sticky top-4 z-50 px-4 md:px-8 max-w-7xl mx-auto w-full transition-all">
      <div
        id="navigation-bar"
        className="backdrop-blur-md rounded-full border border-white/15 shadow-[0_4px_30px_rgba(0,53,128,0.45)] px-4 py-2 flex items-center justify-between"
        style={{ background: "linear-gradient(135deg, #001a50 0%, #003580 45%, #002468 100%)" }}
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 pl-3">
          <svg width="34" height="21" viewBox="0 0 18 11" xmlns="http://www.w3.org/2000/svg" className="rounded-[3px] shadow-sm ring-1 ring-white/20 shrink-0">
            <rect width="18" height="11" fill="white"/>
            <rect x="0" y="4" width="18" height="3" fill="#003580"/>
            <rect x="5" y="0" width="3" height="11" fill="#003580"/>
          </svg>
          <span className="text-[19px] font-bold tracking-tight text-white font-sans">
            IPTV<span className="serif-display italic font-normal text-white/80 pl-0.5"> Suomi</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1.5 bg-white/10 py-1 px-1.5 rounded-full">
          <button onClick={onSportsClick} className="px-4 py-1.5 text-[13px] font-bold text-white bg-white/15 hover:bg-white/25 transition-colors rounded-full flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
            <span>{t.nav.liveSport}</span>
          </button>
          <button onClick={onMoviesClick} className="px-4 py-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors rounded-full">{t.nav.movies}</button>
          <button onClick={onPricingClick} className="px-4 py-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors rounded-full">{t.nav.pricing}</button>
          <button onClick={onReviewsClick} className="px-4 py-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors rounded-full">{t.nav.reviews}</button>
          <button onClick={onFaqClick} className="px-4 py-1.5 text-[13px] font-medium text-white/85 hover:text-white transition-colors rounded-full">{t.nav.faq}</button>
        </nav>

        {/* Right side: subscribe + language switcher */}
        <div className="flex items-center gap-2 pr-1">
          <button
            onClick={onPricingClick}
            className="hidden sm:flex items-center gap-1.5 bg-white hover:bg-white/90 text-[#003580] px-4 py-2 rounded-full text-xs font-bold transition-all shadow-[0_2px_0_rgba(0,0,0,0.15)] active:translate-y-0.5 active:shadow-none"
          >
            <span>{t.nav.subscribe}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          {/* Language switcher */}
          <div ref={dropRef} className="relative">
            <button
              onClick={() => setLangDropOpen(!langDropOpen)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all text-xs font-semibold"
              aria-label="Change language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{currentLang.flag} {currentLang.label}</span>
              <span className="sm:hidden">{currentLang.flag}</span>
            </button>

            {langDropOpen && (
              <div className="absolute right-0 top-11 w-44 rounded-2xl overflow-hidden border border-white/15 shadow-2xl z-50"
                style={{ background: "linear-gradient(160deg, #001a50 0%, #003580 100%)" }}>
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => { setLang(l.code as LangCode); setLangDropOpen(false); }}
                    className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors ${lang === l.code ? 'bg-white/20 text-white font-bold' : 'text-white/80 hover:bg-white/10'}`}
                  >
                    <span className="text-base">{l.flag}</span>
                    <span>{l.label}</span>
                    {lang === l.code && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-white"></span>}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-white hover:bg-white/15 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-4 right-4 border border-white/15 rounded-2xl p-5 shadow-xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-3 duration-200"
          style={{ background: "linear-gradient(160deg, #001a50 0%, #003580 50%, #002468 100%)" }}>
          <button onClick={() => { onSportsClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-white/10 text-sm font-semibold text-white flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
            <span>{t.nav.liveSport}</span>
          </button>
          <button onClick={() => { onMoviesClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-white/10 text-sm font-semibold text-white/85">{t.nav.movies}</button>
          <button onClick={() => { onPricingClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-white/10 text-sm font-semibold text-white/85">{t.nav.pricing}</button>
          <button onClick={() => { onReviewsClick(); setMobileMenuOpen(false); }} className="text-left py-2 border-b border-white/10 text-sm font-semibold text-white/85">{t.nav.reviews}</button>
          <button onClick={() => { onFaqClick(); setMobileMenuOpen(false); }} className="text-left py-2 text-sm font-semibold text-white/85">{t.nav.faq}</button>

          {/* Mobile language picker */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
            {LANGUAGES.map(l => (
              <button key={l.code} onClick={() => setLang(l.code as LangCode)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${lang === l.code ? 'bg-white text-[#003580]' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                {l.flag} {l.label}
              </button>
            ))}
          </div>

          <button onClick={() => { onPricingClick(); setMobileMenuOpen(false); }} className="w-full text-center bg-white text-[#003580] py-3 rounded-xl text-sm font-bold">
            {t.nav.mobileSubscribe}
          </button>
        </div>
      )}
    </header>
  );
}
