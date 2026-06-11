import { Play, Star, ArrowRight } from "lucide-react";

interface MovieGridProps {
  onPricingClick: () => void;
}

const TMDB = "https://image.tmdb.org/t/p/w300";

interface MovieItem {
  id: string;
  title: string;
  year: string;
  rating: string;
  badge?: string;
  image: string;
  genre: string;
}

// ── Row 1: Hollywood Blockbusters (local posters) ─────────────────────────────
const BLOCKBUSTERS: MovieItem[] = [
  { id: "b1",  title: "Dune: Part Two",               year: "2024", rating: "8.5", badge: "4K",  image: "/movies/dune_part_two_ver2_xxlg.jpg",                          genre: "Sci-Fi"      },
  { id: "b2",  title: "Oppenheimer",                   year: "2023", rating: "8.8", badge: "4K",  image: "/movies/oppenheimer_xlg.jpg",                                  genre: "Drama"       },
  { id: "b3",  title: "John Wick 4",                   year: "2023", rating: "7.7", badge: "4K",  image: "/movies/john_wick_chapter_four_xxlg.jpg",                      genre: "Action"      },
  { id: "b4",  title: "Thunderbolts",                  year: "2025", rating: "7.6", badge: "NEU", image: "/movies/thunderbolts_xxlg.jpg",                                 genre: "Action"      },
  { id: "b5",  title: "Superman",                      year: "2025", rating: "8.0", badge: "NEU", image: "/movies/superman_ver27_xxlg.jpg",                               genre: "Action"      },
  { id: "b6",  title: "Mission: Impossible",           year: "2025", rating: "8.1", badge: "NEU", image: "/movies/mission_impossible__the_final_reckoning_xlg.jpg",       genre: "Thriller"    },
  { id: "b7",  title: "Sinners",                       year: "2025", rating: "7.9", badge: "NEU", image: "/movies/sinners_xxlg.jpg",                                      genre: "Horror"      },
  { id: "b8",  title: "Captain America",               year: "2025", rating: "7.3", badge: "4K",  image: "/movies/captain_america_brave_new_world_xxlg.jpg",              genre: "Action"      },
  { id: "b9",  title: "Jurassic World: Rebirth",       year: "2025", rating: "7.1", badge: "NEU", image: "/movies/jurassic_world_rebirth_xxlg.jpg",                       genre: "Adventure"   },
  { id: "b10", title: "How to Train Your Dragon",      year: "2025", rating: "7.8", badge: "NEU", image: "/movies/how_to_train_your_dragon_xxlg.jpg",                     genre: "Animation"   },
  { id: "b11", title: "Fantastic Four",                year: "2025", rating: "7.5", badge: "NEU", image: "/movies/fantastic_four_ver4.jpg",                               genre: "Action"      },
  { id: "b12", title: "Hunger Games: Sunrise",         year: "2025", rating: "7.6", badge: "NEU", image: "/movies/hunger_games_sunrise_on_the_reaping_xxlg.jpg",          genre: "Adventure"   },
  { id: "b13", title: "28 Years Later",                year: "2025", rating: "7.4", badge: "NEU", image: "/movies/twenty_eight_years_later_ver6_xxlg.jpg",                genre: "Horror"      },
  { id: "b14", title: "Killers of the Flower Moon",    year: "2023", rating: "7.6", badge: "4K",  image: "/movies/killers_of_the_flower_moon_xxlg.jpg",                   genre: "Drama"       },
  { id: "b15", title: "Masters of the Universe",       year: "2025", rating: "7.2", badge: "NEU", image: "/movies/masters_of_the_universe_xxlg.jpg",                      genre: "Action"      },
  { id: "b16", title: "Lilo & Stitch",                 year: "2025", rating: "7.0", badge: "NEU", image: "/movies/lilo_and_stitch_xlg.jpg",                               genre: "Familie"     },
  { id: "b17", title: "Project Hail Mary",             year: "2025", rating: "8.2", badge: "NEU", image: "/movies/project_hail_mary_xxlg.jpg",                            genre: "Sci-Fi"      },
  { id: "b18", title: "Running Man",                   year: "2025", rating: "7.1", badge: "NEU", image: "/movies/running_man_xxlg.jpg",                                  genre: "Action"      },
];

// ── Row 2: Top International Series (TMDB CDN) ────────────────────────────────
const INTL_SERIES: MovieItem[] = [
  { id: "s1",  title: "House of the Dragon",    year: "2024", rating: "8.4", badge: "4K",  image: `${TMDB}/z2yahl2uefxDCl0nogcRBstwruJ.jpg`,  genre: "Fantasy"     },
  { id: "s2",  title: "The Last of Us",         year: "2023", rating: "8.8", badge: "4K",  image: `${TMDB}/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg`,  genre: "Drama"       },
  { id: "s3",  title: "Stranger Things",        year: "2022", rating: "8.7", badge: "HD",  image: `${TMDB}/49WJfeN0moxb9IPfGn8AIqMGskD.jpg`,  genre: "Sci-Fi"      },
  { id: "s4",  title: "Wednesday",              year: "2022", rating: "8.1", badge: "HD",  image: `${TMDB}/9PFonBhy4cQy7Jz20NpMygczOkv.jpg`,  genre: "Comedy"      },
  { id: "s5",  title: "Breaking Bad",           year: "2013", rating: "9.5", badge: "4K",  image: `${TMDB}/ggFHVNu6YYI5L9pCfOacjizRGt.jpg`,   genre: "Thriller"    },
  { id: "s6",  title: "Squid Game",             year: "2021", rating: "8.0", badge: "4K",  image: `${TMDB}/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg`,  genre: "Thriller"    },
  { id: "s7",  title: "Game of Thrones",        year: "2019", rating: "9.2", badge: "4K",  image: `${TMDB}/u3bZgnGQ9T01sWNhyveQz0wH0Hl.jpg`,  genre: "Fantasy"     },
  { id: "s8",  title: "Succession",             year: "2023", rating: "8.9", badge: "4K",  image: `${TMDB}/e2X9ovgMRQFvMziqFqHHKmqFjOA.jpg`,  genre: "Drama"       },
  { id: "s9",  title: "The Bear",               year: "2024", rating: "8.6", badge: "HD",  image: `${TMDB}/sHFlbKS3WLqMnp9t2ghADIJFnuQ.jpg`,  genre: "Drama"       },
  { id: "s10", title: "Peaky Blinders",         year: "2022", rating: "8.8", badge: "4K",  image: `${TMDB}/vUUqzWa2LnHIVqkaKVn3nyfVnBs.jpg`,  genre: "Crime"       },
  { id: "s11", title: "Money Heist",            year: "2021", rating: "8.3", badge: "4K",  image: `${TMDB}/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg`,  genre: "Thriller"    },
  { id: "s12", title: "Ozark",                  year: "2022", rating: "8.4", badge: "4K",  image: `${TMDB}/pCIn9vvyBdmVW9sbFBFXODbTnKa.jpg`,  genre: "Drama"       },
  { id: "s13", title: "The Crown",              year: "2023", rating: "8.2", badge: "HD",  image: `${TMDB}/1M876KPjulVwppTplraINorfqCg.jpg`,  genre: "Drama"       },
  { id: "s14", title: "Ted Lasso",              year: "2023", rating: "8.8", badge: "HD",  image: `${TMDB}/5fhZdwP1DVJ0FyVH6vrFdHwpXIn.jpg`,  genre: "Komödie"     },
  { id: "s15", title: "Severance",              year: "2022", rating: "8.7", badge: "HD",  image: `${TMDB}/bLqMbvMgFrZUqpTkHCqSMRIlePM.jpg`,  genre: "Thriller"    },
  { id: "s16", title: "Andor",                  year: "2022", rating: "8.4", badge: "4K",  image: `${TMDB}/59SVNwLfoMnZPPB6ukW6dlPxAdI.jpg`,  genre: "Sci-Fi"      },
];

// ── Row 3: Deutsche & Europäische Inhalte (TMDB CDN) ─────────────────────────
const DE_CONTENT: MovieItem[] = [
  { id: "d1",  title: "Dark",                           year: "2020", rating: "8.8", badge: "4K",  image: `${TMDB}/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg`,  genre: "Sci-Fi"      },
  { id: "d2",  title: "Babylon Berlin",                 year: "2022", rating: "8.0", badge: "HD",  image: `${TMDB}/b2K38JgjHzHWI3lQdCIGWVbDsBG.jpg`,  genre: "Krimi"       },
  { id: "d3",  title: "How to Sell Drugs Online",       year: "2021", rating: "7.7", badge: "HD",  image: `${TMDB}/vZHMzr4HVlpFzNl6cEcLNfRXbNK.jpg`,  genre: "Komödie"     },
  { id: "d4",  title: "Biohackers",                     year: "2021", rating: "7.1", badge: "HD",  image: `${TMDB}/7gQ9RkMZ1rWLQPdxPLcMNJy1mGO.jpg`,  genre: "Sci-Fi"      },
  { id: "d5",  title: "Dogs of Berlin",                 year: "2018", rating: "7.3", badge: "HD",  image: `${TMDB}/rnaRYRyQgZ8l22jWFpKbsLvPjAh.jpg`,  genre: "Krimi"       },
  { id: "d6",  title: "Der Pass",                       year: "2022", rating: "7.8", badge: "HD",  image: `${TMDB}/2rMHBCFqLh3MqJGErqMHMjWsHPe.jpg`,  genre: "Krimi"       },
  { id: "d7",  title: "Das Boot",                       year: "2020", rating: "8.0", badge: "4K",  image: `${TMDB}/cX8TkPgLJnumaZH2WqGLwCBDpOL.jpg`,  genre: "Krieg"       },
  { id: "d8",  title: "Kitz",                           year: "2022", rating: "6.9", badge: "HD",  image: `${TMDB}/9A3HnZrLBUvfuJ7P7TxoBNzL0ER.jpg`,  genre: "Drama"       },
  { id: "d9",  title: "Tatort",                         year: "2024", rating: "7.2", badge: "HD",  image: `${TMDB}/aOCCmcoE1PIlOFbL6BpJd8F4VpD.jpg`,  genre: "Krimi"       },
  { id: "d10", title: "Units",                          year: "2024", rating: "7.0", badge: "NEU", image: `${TMDB}/nOXoFPBnbIJTfVhGdTLFKchOJH6.jpg`,  genre: "Drama"       },
  { id: "d11", title: "Fauda",                          year: "2022", rating: "8.2", badge: "HD",  image: `${TMDB}/qFHzECDLfBHkfNtMpHJPXqSLGFu.jpg`,  genre: "Thriller"    },
  { id: "d12", title: "La Casa de Papel",               year: "2021", rating: "8.3", badge: "4K",  image: `${TMDB}/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg`,  genre: "Thriller"    },
  { id: "d13", title: "1899",                           year: "2022", rating: "7.7", badge: "HD",  image: `${TMDB}/9dKzFjGhPJVFxeSnI3jjXQdJYSw.jpg`,  genre: "Mystery"     },
  { id: "d14", title: "The Empress",                    year: "2022", rating: "7.4", badge: "HD",  image: `${TMDB}/pDYNPW7jjPGfYNMIbBF0VyC1sRl.jpg`,  genre: "Drama"       },
  { id: "d15", title: "Sky Rojo",                       year: "2022", rating: "7.3", badge: "HD",  image: `${TMDB}/hIGg0jcSCdlLqXeVEA4RuXNhWAu.jpg`,  genre: "Action"      },
  { id: "d16", title: "Barbaren",                       year: "2022", rating: "7.2", badge: "HD",  image: `${TMDB}/tO0seHSaSmJcmUrSCGxsFsOXIno.jpg`,  genre: "Historie"    },
];

// ── Poster Card ───────────────────────────────────────────────────────────────
function PosterCard({ m, onClick }: { m: MovieItem; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="shrink-0 group relative rounded-xl overflow-hidden cursor-pointer"
      style={{ width: "110px" }}
    >
      <div className="aspect-[2/3] relative overflow-hidden rounded-xl bg-white/5">
        <img
          src={m.image}
          alt={m.title}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={e => {
            (e.currentTarget as HTMLImageElement).src =
              `https://via.placeholder.com/110x165/014E45/ffffff?text=${encodeURIComponent(m.title.slice(0, 8))}`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

        {/* Hover play */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="w-10 h-10 bg-white/25 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40">
            <Play className="w-4 h-4 fill-white text-white translate-x-px" />
          </div>
        </div>

        {/* Top badges */}
        <div className="absolute top-1.5 left-1.5 flex flex-col gap-0.5">
          {m.badge && (
            <span className="bg-white text-[#014E45] text-[6px] font-black px-1.5 py-0.5 rounded-full uppercase leading-none">
              {m.badge}
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-1.5 right-1.5 flex items-center gap-0.5 bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded-full">
          <Star className="w-2 h-2 fill-amber-400 text-amber-400" />
          <span className="text-[7px] font-bold text-white font-mono">{m.rating}</span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-2">
          <p className="text-white text-[9px] font-bold leading-tight line-clamp-2">{m.title}</p>
          <p className="text-white/45 text-[7px] font-mono mt-0.5">{m.year} · {m.genre}</p>
        </div>
      </div>
    </button>
  );
}

// ── Scroll Row ────────────────────────────────────────────────────────────────
function ScrollRow({ items, label, reverse, onClick }: {
  items: MovieItem[];
  label: string;
  reverse?: boolean;
  onClick: () => void;
}) {
  const tripled = [...items, ...items, ...items];
  return (
    <div className="mb-5">
      <p className="text-[9px] font-black font-mono uppercase tracking-[0.22em] text-white/35 mb-2.5 px-1">{label}</p>
      <div className="overflow-hidden -mx-4 md:-mx-6 select-none pointer-events-none">
        <div className={`${reverse ? "animate-scroll-reverse" : "animate-scroll"} flex gap-2.5 px-4`}>
          {tripled.map((m, i) => (
            <div key={`${m.id}-${i}`} className="pointer-events-auto">
              <PosterCard m={m} onClick={onClick} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────
export default function MovieGrid({ onPricingClick }: MovieGridProps) {
  return (
    <section id="movies-section" className="px-4 md:px-8 max-w-7xl mx-auto w-full py-4">
      <div
        className="rounded-2xl overflow-hidden relative text-white"
        style={{ background: "linear-gradient(145deg, #014E45 0%, #013d37 60%, #012e2a 100%)" }}
      >
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-48 h-48 bg-black/20 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 pt-6 pb-5">

          {/* Header */}
          <div className="flex items-center justify-between mb-6 px-4 md:px-6">
            <div>
              <span className="text-[9px] font-black font-mono uppercase tracking-[0.28em] text-white/40 block mb-1">200K+ VOD</span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Filme & Serien.{" "}
                <span className="serif-display italic font-light text-white/60">4K-Qualität.</span>
              </h2>
            </div>
            <button onClick={onPricingClick}
              className="hidden sm:flex items-center gap-1.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white text-[10px] font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap">
              Alles freischalten <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          {/* Row 1 — Blockbusters */}
          <ScrollRow items={BLOCKBUSTERS}  label="🎬 Hollywood Blockbusters" onClick={onPricingClick} />

          {/* Row 2 — International Series */}
          <ScrollRow items={INTL_SERIES}   label="📺 Top International Serien" reverse onClick={onPricingClick} />

          {/* Row 3 — German & European */}
          <ScrollRow items={DE_CONTENT}    label="🇩🇪 Deutsche & Europäische Inhalte" onClick={onPricingClick} />

          {/* Footer CTA */}
          <div className="mt-2 pt-4 border-t border-white/10 flex items-center justify-between px-4 md:px-6">
            <p className="text-[9px] font-mono text-white/25">Täglich aktualisiert · 200.000+ Titel verfügbar</p>
            <button onClick={onPricingClick}
              className="flex items-center gap-1.5 bg-white text-[#014E45] text-[10px] font-black px-3.5 py-1.5 rounded-full hover:bg-white/90 transition-all shadow-sm">
              <span>Jetzt anmelden</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
