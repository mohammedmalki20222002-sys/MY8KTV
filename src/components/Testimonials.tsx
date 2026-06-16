import { Star, ShieldCheck, BadgeCheck } from "lucide-react";
import { useLanguage } from "../LanguageContext";

const FI_REVIEWS = [
  {
    id: "r1",
    name: "Pekka Hämäläinen",
    role: "Jääkiekkofani",
    location: "Helsinki",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=120&q=80",
    highlight: "SM-liiga ja NHL kristallinkirkkaana — ei yhtään puskuria!",
    text: "Katsoin koko SM-liigan finaalisarjan sekä NHL:n playoff-ottelut ilman ainoatakaan puskuria. 4K-kuvanlaatu on aivan huippuluokkaa. En koskaan palaa vanhaan kaapelioperaattoriin.",
    ratingValue: 5,
    date: "Toukokuu 2025",
    verified: true,
  },
  {
    id: "r2",
    name: "Tuulikki Mäkinen",
    role: "Elokuvaharrastaja",
    location: "Tampere",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=120&q=80",
    highlight: "Valtava elokuvakirjasto — löydän aina jotain uutta!",
    text: "Elokuvavalikoima on käsittämätön. Löysin tuoreimmat ensi-illat, eurooppalaisia indie-elokuvia ja klassikkoja aidossa 4K UHD -laadussa. Suomenkieliset tekstitykset toimivat täydellisesti.",
    ratingValue: 5,
    date: "Huhtikuu 2025",
    verified: true,
  },
  {
    id: "r3",
    name: "Sari Korhonen",
    role: "Perheenäiti",
    location: "Turku",
    avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=120&q=80",
    highlight: "Koko perhe tyytyväinen — aktivointi kesti 2 minuuttia!",
    text: "Lapset katsovat lastenohjelmia suomeksi ja minä rakastan englantilaisia sarjoja. Käytämme kahta laitetta samanaikaisesti ilman ongelmia. Asiakastuki vastasi WhatsAppissa alle 5 minuutissa.",
    ratingValue: 5,
    date: "Maaliskuu 2025",
    verified: true,
  },
  {
    id: "r4",
    name: "Juhani Virtanen",
    role: "IT-asiantuntija",
    location: "Espoo",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&q=80",
    highlight: "Teknisesti ylivoimainen — testasin itse bitraten ja viiveen",
    text: "Ohjelmistokehittäjänä mittasin bitraten ja palvelinviiveen. Erittäin alhainen ping, erinomaiset pakkausasteet ja lähes häviötön kuva. Toimii saumattomasti Fire TV:llä, Smart TV:llä ja tabletilla.",
    ratingValue: 5,
    date: "Helmikuu 2025",
    verified: true,
  },
  {
    id: "r5",
    name: "Matti Peltonen",
    role: "Urheilufani",
    location: "Oulu",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80",
    highlight: "MM-jääkiekko, F1 ja jalkapallo — kaikki yhdestä paikasta!",
    text: "Suomalaisena urheilufanina haluan katsoa kaiken: MM-jääkiekon, Formula 1:n ja Mestarien liigan. IPTV Suomi toimittaa kaikki streamit ensiluokkaisessa laadussa ilman aluerajoituksia tai VPN:ää.",
    ratingValue: 5,
    date: "Tammikuu 2025",
    verified: true,
  },
  {
    id: "r6",
    name: "Antti Leinonen",
    role: "Opiskelija",
    location: "Jyväskylä",
    avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&fit=crop&w=120&q=80",
    highlight: "Paras hinta-laatu-suhde — säästän joka kuukausi satoja euroja",
    text: "Aiemmin maksoin useista suoratoistopalveluista yhteensä yli 60 € kuussa. Nyt saan kaiken yhdellä tilauksella murto-osalla hinnasta. Yle Areena, Netflix, HBO — kaikki toimii.",
    ratingValue: 5,
    date: "Joulukuu 2024",
    verified: true,
  },
  {
    id: "r7",
    name: "Tiina Räsänen",
    role: "Sairaanhoitaja",
    location: "Vantaa",
    avatar: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=120&q=80",
    highlight: "Toimii myös ulkomailla — katsoin Yle TV1:tä Espanjasta!",
    text: "Olin lomalla Espanjassa ja halusin katsoa suomalaisia uutisia. Avasin sovelluksen ja Yle TV1 toimi välittömästi — ei IP-rajoituksia, ei VPN:ää. Aivan loistava palvelu myös matkoilla.",
    ratingValue: 5,
    date: "Marraskuu 2024",
    verified: true,
  },
  {
    id: "r8",
    name: "Mikko Salonen",
    role: "Yrittäjä",
    location: "Lahti",
    avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=120&q=80",
    highlight: "12 kuukauden paketti oli selvästi paras valinta",
    text: "Otin ensin 3 kuukauden testipaketin ja olin niin tyytyväinen, että tilasin heti 12 kuukauden paketin. Hinta on järkevä ja palvelu luotettava. Suosittelen kaikille tutulleni.",
    ratingValue: 5,
    date: "Lokakuu 2024",
    verified: true,
  },
  {
    id: "r9",
    name: "Kaisa Nieminen",
    role: "Opettaja",
    location: "Rovaniemi",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=120&q=80",
    highlight: "Lapsilukkotoiminto on juuri mitä tarvitsin!",
    text: "Lapseni voivat katsoa turvallisesti omia ohjelmiaan ja minä tiedän ettei pääsy sopimattomaan sisältöön onnistu. Lastenohjelmavalikoima on valtava. Erittäin tyytyväinen asiakas.",
    ratingValue: 4,
    date: "Syyskuu 2024",
    verified: false,
  },
];

export default function Testimonials() {
  const { t } = useLanguage();
  const avgRating = (FI_REVIEWS.reduce((s, r) => s + r.ratingValue, 0) / FI_REVIEWS.length).toFixed(1);

  return (
    <section id="reviews-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-10">
      <div className="bg-[#111211] text-[#FDFDF7] rounded-[2.5rem] py-16 px-6 md:px-12 relative overflow-hidden">

        {/* Background accents */}
        <div className="absolute top-12 left-10 opacity-60 hidden lg:block pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#003580" />
          </svg>
        </div>
        <div className="absolute bottom-16 right-16 opacity-30 hidden lg:block pointer-events-none">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M20 0C20 11.0457 11.0457 20 0 20C11.0457 20 20 28.9543 20 40C20 28.9543 28.9543 20 40 20C28.9543 20 20 11.0457 20 0Z" fill="#003580" />
          </svg>
        </div>

        {/* Headline */}
        <div className="max-w-xl mx-auto mb-10 text-center">
          <span className="serif-display italic font-light text-2xl text-white/85 mb-3 block">
            {t.testimonials.subtitle}
          </span>
          <h2 className="text-[1.85rem] sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-3">
            {t.testimonials.heading}
            <br />
            <span className="serif-display italic font-light text-white/90 pr-1.5">{t.testimonials.italic}</span>
          </h2>
          <p className="serif-display italic font-light text-base md:text-xl text-neutral-100 mt-4">
            {t.testimonials.desc}
          </p>
        </div>

        {/* Aggregate rating bar */}
        <div className="flex items-center justify-center gap-6 mb-12">
          <div className="flex flex-col items-center">
            <span className="text-5xl font-black text-white leading-none">{avgRating}</span>
            <div className="flex items-center gap-0.5 mt-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#003580] text-[#003580]" />
              ))}
            </div>
            <span className="text-xs text-white/40 mt-1 font-mono">{FI_REVIEWS.length} arvostelua</span>
          </div>
          <div className="h-14 w-px bg-white/10" />
          <div className="flex flex-col gap-1.5">
            {[5, 4, 3].map(star => {
              const count = FI_REVIEWS.filter(r => r.ratingValue === star).length;
              const pct = Math.round((count / FI_REVIEWS.length) * 100);
              return (
                <div key={star} className="flex items-center gap-2">
                  <span className="text-[11px] font-mono text-white/40 w-4">{star}</span>
                  <Star className="w-3 h-3 fill-[#003580] text-[#003580]" />
                  <div className="w-24 h-1.5 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-[#003580]" style={{ width: `${pct}%` }} />
                  </div>
                  <span className="text-[11px] font-mono text-white/30">{pct}%</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Review cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {FI_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FCFBF4] text-neutral-900 rounded-2xl p-5 flex flex-col justify-between border border-neutral-900/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                {/* Stars + date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < review.ratingValue ? "fill-[#003580] text-[#003580]" : "fill-neutral-200 text-neutral-200"}`} />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-neutral-400">{review.date}</span>
                </div>

                <p className="text-[15px] font-bold text-neutral-900 leading-snug mb-2">"{review.highlight}"</p>
                <p className="serif-display italic font-light text-[14px] text-neutral-500 leading-relaxed">{review.text}</p>
              </div>

              {/* Profile */}
              <div className="flex items-center justify-between mt-5 pt-4 border-t border-neutral-900/8">
                <div className="flex items-center gap-3">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border-2 border-[#003580]/20"
                    onError={e => {
                      const el = e.currentTarget;
                      el.style.display = "none";
                      const p = el.parentElement;
                      if (p) p.innerHTML = `<div style="width:40px;height:40px;border-radius:50%;background:#003580;display:flex;align-items:center;justify-content:center;color:white;font-weight:900;font-size:14px;flex-shrink:0">${review.name[0]}</div>` + p.innerHTML;
                    }}
                  />
                  <div>
                    <p className="text-sm font-bold text-neutral-900 leading-none">{review.name}</p>
                    <p className="text-[12px] text-neutral-400 mt-0.5">{review.role} · {review.location}</p>
                  </div>
                </div>
                {review.verified && (
                  <div className="flex items-center gap-1 bg-[#003580]/8 px-2 py-1 rounded-full shrink-0">
                    <BadgeCheck className="w-3.5 h-3.5 text-[#003580]" />
                    <span className="text-[10px] font-black text-[#003580] uppercase tracking-wide">Vahvistettu</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="mt-14 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 bg-neutral-900 px-4 sm:px-6 py-3 sm:py-3.5 rounded-2xl sm:rounded-full border border-neutral-800 max-w-[280px] sm:max-w-none">
            <ShieldCheck className="w-5 h-5 text-white shrink-0" />
            <span className="serif-display italic font-light text-base sm:text-xl text-[#FCFBF4]">{t.testimonials.rate}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
