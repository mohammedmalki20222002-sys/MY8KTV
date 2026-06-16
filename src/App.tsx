import { useState } from "react";
import { PricingPlan } from "./types";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import Header from "./components/Header";
import LiveSports from "./components/LiveSports";
import MovieGrid from "./components/MovieGrid";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import DeviceCompatibility from "./components/DeviceCompatibility";
import ChannelStripe from "./components/ChannelStripe";
import PaymentsAndFaq from "./components/PaymentsAndFaq";
import Hero from "./components/Hero";
import VideoShowcase from "./components/VideoShowcase";
import CheckoutModal from "./components/CheckoutModal";

function AppInner() {
  const { t, dir } = useLanguage();
  const [selectedPlanForCheckout, setSelectedPlanForCheckout] = useState<PricingPlan | null>(null);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      dir={dir}
      className="min-h-screen bg-[#FDFDF7] text-neutral-900 flex flex-col font-sans selection:bg-[#003580] selection:text-white overflow-x-hidden w-full"
    >
      <Header
        onSportsClick={() => scrollToSection("live-sports-section")}
        onMoviesClick={() => scrollToSection("movies-section")}
        onPricingClick={() => scrollToSection("pricing-section")}
        onReviewsClick={() => scrollToSection("reviews-section")}
        onFaqClick={() => scrollToSection("faq-section")}
      />

      <main className="flex-grow">
        <div className="pt-6 md:pt-10" />
        <Hero onPricingClick={() => scrollToSection("pricing-section")} />
        <VideoShowcase />
        <LiveSports onPricingClick={() => scrollToSection("pricing-section")} />
        <MovieGrid onPricingClick={() => scrollToSection("pricing-section")} />
        <Pricing onSelectPlan={setSelectedPlanForCheckout} />

        {/* Payment methods banner */}
        <div className="px-4 md:px-8 max-w-4xl mx-auto w-full py-4">
          <img
            src="/PAY1-1-1.svg"
            alt="Accepted payment methods"
            className="w-full h-auto"
          />
        </div>

        <ChannelStripe />
        <Testimonials />
        <DeviceCompatibility onPricingClick={() => scrollToSection("pricing-section")} />
        <PaymentsAndFaq />
      </main>

      <footer className="mt-16 bg-[#111211] text-[#FDFDF7] py-16 px-6 md:px-12 border-t border-neutral-850">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Logo & tagline */}
          <div className="md:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <svg width="40" height="24" viewBox="0 0 18 11" xmlns="http://www.w3.org/2000/svg" className="rounded-[3px] shadow-sm ring-1 ring-white/15 shrink-0">
                <rect width="18" height="11" fill="white"/>
                <rect x="0" y="4" width="18" height="3" fill="#003580"/>
                <rect x="5" y="0" width="3" height="11" fill="#003580"/>
              </svg>
              <span className="text-2xl font-bold tracking-tight text-white font-sans">
                IPTV<span className="serif-display italic font-normal text-neutral-400 pl-0.5"> Suomi</span>
              </span>
            </div>
            <p className="serif-display italic font-light text-lg text-neutral-200 leading-relaxed max-w-sm">
              {t.footer.tagline}
            </p>
            <p className="serif-display italic font-light text-base text-neutral-500 pt-3">
              {t.footer.copyright}
            </p>
          </div>

          {/* Subscriptions links */}
          <div className="md:col-span-3 text-left">
            <h5 className="serif-display italic font-light text-2xl text-neutral-100 mb-4">{t.footer.sub1}</h5>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => scrollToSection("pricing-section")} className="text-neutral-300 hover:text-white transition-colors">{t.footer.link1}</button></li>
              <li><button onClick={() => scrollToSection("pricing-section")} className="text-neutral-300 hover:text-white transition-colors">{t.footer.link2}</button></li>
              <li><button onClick={() => scrollToSection("pricing-section")} className="text-white hover:underline font-semibold transition-colors">{t.footer.link3}</button></li>
            </ul>
          </div>

          {/* Content & Support links */}
          <div className="md:col-span-3 text-left">
            <h5 className="serif-display italic font-light text-2xl text-neutral-100 mb-4">{t.footer.sub2}</h5>
            <ul className="space-y-2.5 text-sm">
              <li><button onClick={() => scrollToSection("movies-section")} className="text-neutral-300 hover:text-white transition-colors">{t.footer.link4}</button></li>
              <li><button onClick={() => scrollToSection("channels-section")} className="text-neutral-300 hover:text-white transition-colors">{t.footer.link5}</button></li>
              <li><button onClick={() => scrollToSection("faq-section")} className="text-neutral-300 hover:text-white transition-colors">{t.footer.link6}</button></li>
            </ul>
          </div>

          {/* Server status */}
          <div className="md:col-span-2 text-left">
            <h5 className="serif-display italic font-light text-2xl text-neutral-100 mb-4">{t.footer.sub3}</h5>
            <div className="inline-flex items-center gap-1.5 bg-[#003580]/40 border border-[#003580] px-3.5 py-1.5 rounded-full text-[10px] font-mono text-[#FDFDF7] font-bold uppercase tracking-wider animate-pulse">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              <span>{t.footer.allRelays}</span>
            </div>
          </div>

        </div>

        <div className="max-w-7xl mx-auto w-full mt-10 pt-8 border-t border-neutral-800/[65] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-neutral-500">
          <p>{t.footer.legal}</p>
          <div className="flex gap-4">
            <span className="hover:text-neutral-300 cursor-pointer">{t.footer.cert}</span>
            <span className="hover:text-neutral-300 cursor-pointer">{t.footer.sla}</span>
          </div>
        </div>
      </footer>

      {selectedPlanForCheckout && (
        <CheckoutModal
          plan={selectedPlanForCheckout}
          onClose={() => setSelectedPlanForCheckout(null)}
        />
      )}
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppInner />
    </LanguageProvider>
  );
}
