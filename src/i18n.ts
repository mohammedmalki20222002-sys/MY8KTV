export type LangCode = 'fi' | 'en' | 'fr' | 'da' | 'ar';

export const LANGUAGES: { code: LangCode; label: string; flag: string; dir: 'ltr' | 'rtl' }[] = [
  { code: 'fi', label: 'Suomi',    flag: '🇫🇮', dir: 'ltr' },
  { code: 'en', label: 'English',  flag: '🇬🇧', dir: 'ltr' },
  { code: 'fr', label: 'Français', flag: '🇫🇷', dir: 'ltr' },
  { code: 'da', label: 'Dansk',    flag: '🇩🇰', dir: 'ltr' },
  { code: 'ar', label: 'عربي',     flag: '🇸🇦', dir: 'rtl' },
];

export interface T {
  hero: {
    subtitle: string;
    headline1: string;
    headline2: string;
    highlight: string;
    end: string;
    stat1v: string; stat1l: string;
    stat2v: string; stat2l: string;
    stat3v: string; stat3l: string;
    cta1: string;
    cta2: string;
  };
  nav: {
    liveSport: string;
    movies: string;
    pricing: string;
    reviews: string;
    faq: string;
    subscribe: string;
    mobileSubscribe: string;
  };
  platforms: {
    heading: string;
    headingItalic: string;
    subheading: string;
    cta: string;
  };
  pricing: {
    statChannels: string;
    statVod: string;
    statUpdate: string;
    subtitle: string;
    heading: string;
    highlight: string;
    desc: string;
    device1: string;
    device2: string;
    month1: string;
    monthMany: string;
    dev1: string;
    dev2: string;
    popular: string;
    cta: string;
    waMsg: (months: number, devices: number, price: string) => string;
    trust: [string, string, string, string, string, string];
  };
  testimonials: {
    subtitle: string;
    heading: string;
    italic: string;
    desc: string;
    rate: string;
  };
  devices: {
    heading: string;
    italic: string;
    cta: string;
  };
  payments: {
    subtitle: string;
    heading: string;
    italic: string;
    desc: string;
    direct: string;
    days12: string;
    methodDescs: [string, string, string, string, string, string];
    pci: string;
  };
  faq: {
    subtitle: string;
    heading: string;
    italic: string;
    supportNote: string;
    supportDesc: string;
    supportCta: string;
    items: { q: string; a: string }[];
  };
  footer: {
    tagline: string;
    copyright: string;
    sub1: string;
    sub2: string;
    sub3: string;
    link1: string;
    link2: string;
    link3: string;
    link4: string;
    link5: string;
    link6: string;
    serverStatus: string;
    allRelays: string;
    legal: string;
    cert: string;
    sla: string;
  };
}

export const translations: Record<LangCode, T> = {
  fi: {
    hero: {
      subtitle: 'Paras IPTV Suomessa',
      headline1: '4K-laatu,',
      headline2: 'Katso ',
      highlight: 'Jääkiekon MM-kisat',
      end: 'Ole mukana!',
      stat1v: '59K', stat1l: 'Kanavaa',
      stat2v: '200K', stat2l: 'VOD',
      stat3v: '4K', stat3l: 'Ultra HD',
      cta1: 'Valitse paketti',
      cta2: 'Hanki pääsy heti',
    },
    nav: {
      liveSport: 'Live-urheilu',
      movies: 'Elokuvat & Sarjat (VOD)',
      pricing: 'Hinnat',
      reviews: 'Arvostelut',
      faq: 'UKK',
      subscribe: 'Tilaa nyt',
      mobileSubscribe: 'Tilaa nyt — näytä hinnat',
    },
    platforms: {
      heading: 'Kaikki alustat.',
      headingItalic: 'Yksi tilaus.',
      subheading: 'Netflix · Prime · Disney+ · HBO · Sky · C More · Viaplay · Elisa Viihde — kaikki meiltä.',
      cta: 'Valitse paketti',
    },
    pricing: {
      statChannels: 'KANAVAA',
      statVod: 'SARJAT & ELOKUVAT',
      statUpdate: 'JATKUVA PÄIVITYS',
      subtitle: 'Premium-tilaukset',
      heading: 'Valitse sinulle sopiva',
      highlight: 'Premium-paketti.',
      desc: 'Ei automaattista uusimista. Sinun tilauksesi, sinun sääntösi — turvallinen, nopea ja saatavilla maailmanlaajuisesti.',
      device1: 'Laite',
      device2: 'Laitetta',
      month1: 'Kuukausi',
      monthMany: 'Kuukautta',
      dev1: 'Laite',
      dev2: 'Laitetta',
      popular: 'Suosituin',
      cta: 'Osta nyt',
      waMsg: (m, d, p) => `Hei, haluan tilata IPTV Suomi -paketin: ${m} kuukautta / ${d === 1 ? '1 Laite' : '2 Laitetta'} / ${p} EUR`,
      trust: [
        '100 % palautustakuu', 'Täysi hyvitys 24 tunnin sisällä.',
        'Välitön aktivointi', 'Käyttötunnukset muutamassa minuutissa WhatsApp-viestillä.',
        'WhatsApp-tuki', 'Suora tuki 24/7 WhatsApp-viestillä.',
      ],
    },
    testimonials: {
      subtitle: 'Asiakasarviot',
      heading: 'Rakkauskirjeitä',
      italic: 'IPTV Suomille.',
      desc: 'Katso, kuinka yli 45 000 aktiivista tilaajaa on korvannut vanhan kaapeliliittymänsä huippulaatuisella suoratoistoinfrastruktuurillamme.',
      rate: 'Keskimääräinen uusimisaste 94,2 %',
    },
    devices: {
      heading: 'Yhteensopiva',
      italic: 'kaikkien laitteiden kanssa.',
      cta: 'Aloita nyt',
    },
    payments: {
      subtitle: 'Hyväksytyt maksutavat',
      heading: 'Turvalliset käytettävissä olevat',
      italic: 'maksumenetelmät.',
      desc: 'Käytämme pankkitason salausmenetelmiä (SSL & AES-256) kaikkiin maksuihin. Pankkitietosi ovat aina optimaalisesti suojattu.',
      direct: 'Välitön',
      days12: '1–2 pv',
      methodDescs: [
        'Valtuutettu ostajan suoja',
        'SSL & 3D-Secure -suojattu',
        'SSL & 3D-Secure -suojattu',
        'Suoraveloitus IBAN:lla',
        'Maksu suoraan pankkisi kautta',
        'Lasku & osamaksu',
      ],
      pci: 'Kaikki maksutapahtumat on suojattu PCI-DSS-sertifikaateilla.',
    },
    faq: {
      subtitle: 'Usein kysytyt kysymykset',
      heading: 'Kysymykset & Vastaukset',
      italic: 'ratkaistu nopeasti.',
      supportNote: 'Käytätkö erityistä laitteistoa?',
      supportDesc: 'Tukiasiantuntijamme auttavat mielellään MAG-boksin, Smart-TV:n tai soittolistan konfiguroinnissa.',
      supportCta: 'Ota yhteyttä tukeen',
      items: [
        {
          q: 'Onko välitön käyttöönotto saatavilla oston jälkeen?',
          a: 'Kyllä, ehdottomasti! Kun olet suorittanut maksun, automaattinen käyttöönottojärjestelmämme luo aktiiviset tunnuksesi ja lähettää sinulle yksityiskohtaisen sähköpostin asennusohjeineen 2–5 minuutin sisällä.'
        },
        {
          q: 'Mitä laitteita ja sovelluksia tuetaan?',
          a: 'Järjestelmämme toimii lähes kaikilla laitteilla. Tuki on suoraan integroitu: Smart-TV:t (Samsung, LG, Sony, Philips), Android-boksit, Amazon Fire TV Stick, Apple TV, iPad, iPhone, MAG-boksit, Formuler ja sovellukset kuten IPTV Smarters, Tivimate, GSE sekä standardit M3U-soittolistat.'
        },
        {
          q: 'Kuinka nopea internet-yhteys tarvitaan?',
          a: 'SD-laadun katsomiseen tarvitset vähintään 8 Mbit/s. Full HD (1080p) -laadun katsomiseen vaaditaan vakaa 15 Mbit/s ja 4K UHD -suoratoistoon suosittelemme 25 Mbit/s tai enemmän, mieluiten LAN-kaapeliyhteydellä.'
        },
        {
          q: 'Voinko käyttää tilausta useilla laitteilla samanaikaisesti?',
          a: 'Oletusarvoisesti Classic- ja Standard-paketit tukevat 1 samanaikaista yhteyttä. Jos valitset 12 kuukauden paketin (Supervuosi), mukana tulee 2 samanaikaista yhteyttä (+1 ILMAISEKSI), joten voit suoratoistaa helposti eri näytöille.'
        },
        {
          q: 'Onko sopimuksia tai piilomaksuja?',
          a: 'Ei, ei ole jatkuvia sopimuksia, ei aloitusmaksuja eikä automaattista tilauksen uusimista. Maksat vain kerran valitsemastasi ajanjaksosta (3, 6 tai 12 kuukautta) ja uudistat manuaalisesti, kun haluat jatkaa.'
        },
      ],
    },
    footer: {
      tagline: 'Korkealaatuinen digitaalinen live-televisio. Ei sopimuksia, minimaalinen viive ja ensiluokkaiset palvelinyhteydet.',
      copyright: 'Copyright © 2026 IPTV Suomi. Kaikki oikeudet pidätetään.',
      sub1: 'Tilaukset',
      sub2: 'Sisältö & Tuki',
      sub3: 'Palvelimen tila',
      link1: 'Kvartaali-Classic (3 kuukautta)',
      link2: 'Standardiarvo (6 kuukautta)',
      link3: 'Supervuosi (12 kuukautta – 57 % säästö)',
      link4: 'Elokuvat & Sarjat VOD-kirjasto',
      link5: 'Live-TV-kanavalistaus',
      link6: 'Laiteasennus & Ohje-UKK',
      serverStatus: 'Palvelimen tila',
      allRelays: 'Kaikki releet live',
      legal: 'IPTV Suomi toimii täysin itsenäisesti. Kaikki mainitut tavaramerkit, tuotenimet ja kanavasymbolit ovat niiden omistajien omaisuutta. Kaikki maksut ovat SSL-salattuja.',
      cert: 'Turvallisuussertifikaatti',
      sla: 'SLA-sopimus',
    },
  },

  en: {
    hero: {
      subtitle: 'Best IPTV in Finland',
      headline1: '4K Quality,',
      headline2: 'Watch the ',
      highlight: 'Ice Hockey World Championship',
      end: 'Be there!',
      stat1v: '59K', stat1l: 'Channels',
      stat2v: '200K', stat2l: 'VOD',
      stat3v: '4K', stat3l: 'Ultra HD',
      cta1: 'Choose a plan',
      cta2: 'Get instant access',
    },
    nav: {
      liveSport: 'Live Sport',
      movies: 'Movies & Series (VOD)',
      pricing: 'Pricing',
      reviews: 'Reviews',
      faq: 'FAQ',
      subscribe: 'Subscribe now',
      mobileSubscribe: 'Subscribe now — view plans',
    },
    platforms: {
      heading: 'All platforms.',
      headingItalic: 'One subscription.',
      subheading: 'Netflix · Prime · Disney+ · HBO · Sky · C More · Viaplay · Elisa Viihde — all through us.',
      cta: 'Choose a plan',
    },
    pricing: {
      statChannels: 'CHANNELS',
      statVod: 'SERIES & FILMS',
      statUpdate: 'PERMANENT UPDATE',
      subtitle: 'Premium Subscriptions',
      heading: 'Choose your',
      highlight: 'Premium Plan.',
      desc: 'No auto-renewal. Your term, your rules — secure, fast and available worldwide.',
      device1: 'Device',
      device2: 'Devices',
      month1: 'Month',
      monthMany: 'Months',
      dev1: 'Device',
      dev2: 'Devices',
      popular: 'Most Popular',
      cta: 'Buy now',
      waMsg: (m, d, p) => `Hello, I would like to order the IPTV Suomi package: ${m} months / ${d === 1 ? '1 Device' : '2 Devices'} / ${p} EUR`,
      trust: [
        '100% Money-Back', 'Full refund within 24 hours.',
        'Instant Activation', 'Credentials in minutes via WhatsApp.',
        'WhatsApp Support', 'Direct 24/7 support via WhatsApp.',
      ],
    },
    testimonials: {
      subtitle: 'Customer Reviews',
      heading: 'Love letters',
      italic: 'to IPTV Suomi.',
      desc: 'See how over 45,000 active subscribers replaced their old cable connection with our high-fidelity streaming infrastructure.',
      rate: 'Average subscription renewal rate of 94.2%',
    },
    devices: {
      heading: 'Compatible with',
      italic: 'all devices.',
      cta: 'Start now',
    },
    payments: {
      subtitle: 'Verified Payment Methods',
      heading: 'Secure available',
      italic: 'payment methods.',
      desc: 'We use bank-level encryption (SSL & AES-256) for all payments. Your banking details are always optimally protected.',
      direct: 'Instant',
      days12: '1–2 days',
      methodDescs: [
        'Authorised buyer protection',
        'SSL & 3D-Secure protected',
        'SSL & 3D-Secure protected',
        'Direct debit with IBAN',
        'Payment directly via your bank',
        'Invoice & instalment payment',
      ],
      pci: 'All payment transactions are protected by PCI-DSS security certificates.',
    },
    faq: {
      subtitle: 'Common Questions',
      heading: 'Questions & Answers',
      italic: 'solved instantly.',
      supportNote: 'Using special hardware?',
      supportDesc: 'Our support technicians are happy to help you configure your MAG box, Smart TV or playlist.',
      supportCta: 'Contact support',
      items: [
        { q: 'Is there instant setup after purchase?', a: 'Yes, absolutely! Once your payment is complete, our automated onboarding system generates your active credentials and sends you a detailed setup email within 2–5 minutes.' },
        { q: 'What hardware and apps are supported?', a: 'Our system runs on almost any device. Support is directly integrated for Smart TVs (Samsung, LG, Sony, Philips), Android boxes, Amazon Fire TV Stick, Apple TV, iPads, iPhones, MAG boxes, Formuler and apps like IPTV Smarters, Tivimate, GSE and standard M3U playlists.' },
        { q: 'How fast does my internet need to be?', a: 'For standard definition (SD) you need at least 8 Mbit/s. For Full HD (1080p) a stable 15 Mbit/s is required, and for top-quality 4K UHD streams we recommend 25 Mbit/s or more, ideally via a wired LAN connection.' },
        { q: 'Can I use the subscription on multiple devices simultaneously?', a: 'By default, Classic and Standard plans support 1 simultaneous connection. If you choose our 12-month package (Super Year), 2 simultaneous connections (+1 FREE) are included, so you can stream easily on different screens.' },
        { q: 'Are there contracts or hidden fees?', a: 'No, there are no ongoing contracts, no setup fees and no automatic subscription renewal. You pay only once for the chosen period (3, 6 or 12 months) and renew manually when you wish to continue.' },
      ],
    },
    footer: {
      tagline: 'The high-fidelity store for digital live television. No contracts, absolutely minimised latency and first-class server connections.',
      copyright: 'Copyright © 2026 IPTV Suomi. All rights reserved.',
      sub1: 'Subscriptions',
      sub2: 'Content & Support',
      sub3: 'Server Status',
      link1: 'Quarterly Classic (3 months)',
      link2: 'Standard Value (6 months)',
      link3: 'Super Savings Year (12 months – 57% off)',
      link4: 'Movies & Series VOD Library',
      link5: 'Live TV Channel Overview',
      link6: 'Device Setup & Help FAQ',
      serverStatus: 'Server Status',
      allRelays: 'All Relays Live',
      legal: 'IPTV Suomi operates completely independently. All brand names, product names and channel logos mentioned are property of their respective owners. All payments are fully SSL-encrypted.',
      cert: 'Security Certificate',
      sla: 'SLA Agreement',
    },
  },

  fr: {
    hero: {
      subtitle: 'Meilleur IPTV en Finlande',
      headline1: 'Qualité 4K,',
      headline2: 'Regardez le ',
      highlight: 'Championnat Mondial de Hockey',
      end: 'Soyez-y !',
      stat1v: '59K', stat1l: 'Chaînes',
      stat2v: '200K', stat2l: 'VOD',
      stat3v: '4K', stat3l: 'Ultra HD',
      cta1: 'Choisir un forfait',
      cta2: 'Accès instantané',
    },
    nav: {
      liveSport: 'Sport en direct',
      movies: 'Films & Séries (VOD)',
      pricing: 'Tarifs',
      reviews: 'Avis',
      faq: 'FAQ',
      subscribe: "S'abonner",
      mobileSubscribe: "S'abonner — voir les tarifs",
    },
    platforms: {
      heading: 'Toutes les plateformes.',
      headingItalic: 'Un abonnement.',
      subheading: 'Netflix · Prime · Disney+ · HBO · Sky · C More · Viaplay — tout via nous.',
      cta: 'Choisir un forfait',
    },
    pricing: {
      statChannels: 'CHAÎNES',
      statVod: 'SÉRIES & FILMS',
      statUpdate: 'MISE À JOUR PERMANENTE',
      subtitle: 'Abonnements Premium',
      heading: 'Choisissez votre',
      highlight: 'Forfait Premium.',
      desc: 'Pas de renouvellement automatique. Votre durée, vos règles — sécurisé, rapide et disponible dans le monde entier.',
      device1: 'Appareil',
      device2: 'Appareils',
      month1: 'Mois',
      monthMany: 'Mois',
      dev1: 'Appareil',
      dev2: 'Appareils',
      popular: 'Le plus populaire',
      cta: 'Acheter maintenant',
      waMsg: (m, d, p) => `Bonjour, je souhaite commander le forfait IPTV Suomi : ${m} mois / ${d === 1 ? '1 appareil' : '2 appareils'} / ${p} EUR`,
      trust: [
        'Remboursement 100%', 'Remboursement complet sous 24h.',
        'Activation instantanée', 'Identifiants en quelques minutes via WhatsApp.',
        'Support WhatsApp', 'Support direct 24/7 via WhatsApp.',
      ],
    },
    testimonials: {
      subtitle: 'Avis clients',
      heading: 'Lettres d\'amour',
      italic: 'à IPTV Suomi.',
      desc: 'Découvrez comment plus de 45 000 abonnés actifs ont remplacé leur ancienne connexion câble par notre infrastructure de streaming haute fidélité.',
      rate: 'Taux de renouvellement moyen de 94,2%',
    },
    devices: {
      heading: 'Compatible avec',
      italic: 'tous les appareils.',
      cta: 'Commencer maintenant',
    },
    payments: {
      subtitle: 'Méthodes de paiement vérifiées',
      heading: 'Méthodes de paiement',
      italic: 'sécurisées et disponibles.',
      desc: 'Nous utilisons le chiffrement bancaire (SSL & AES-256) pour tous les paiements. Vos données bancaires sont toujours protégées de manière optimale.',
      direct: 'Immédiat',
      days12: '1–2 jours',
      methodDescs: [
        'Protection acheteur autorisée',
        'Protégé SSL & 3D-Secure',
        'Protégé SSL & 3D-Secure',
        'Prélèvement avec IBAN',
        'Paiement directement via votre banque',
        'Facture & paiement en plusieurs fois',
      ],
      pci: 'Toutes les transactions sont protégées par des certificats PCI-DSS.',
    },
    faq: {
      subtitle: 'Questions fréquentes',
      heading: 'Questions & Réponses',
      italic: 'résolues instantanément.',
      supportNote: 'Vous utilisez un matériel spécial ?',
      supportDesc: 'Nos techniciens sont heureux de vous aider à configurer votre MAG box, Smart TV ou liste de lecture.',
      supportCta: 'Contacter le support',
      items: [
        { q: 'Y a-t-il une configuration instantanée après l\'achat ?', a: 'Oui, absolument ! Une fois votre paiement effectué, notre système envoie vos identifiants d\'accès par e-mail en 2 à 5 minutes.' },
        { q: 'Quels appareils et applications sont pris en charge ?', a: 'Notre système fonctionne sur presque tous les appareils : Smart TV (Samsung, LG, Sony, Philips), boxes Android, Amazon Fire TV Stick, Apple TV, iPad, iPhone, MAG boxes, Formuler et applications comme IPTV Smarters, Tivimate, GSE.' },
        { q: 'Quelle vitesse internet est nécessaire ?', a: 'Pour la SD, 8 Mbit/s minimum. Pour le Full HD, 15 Mbit/s stables. Pour la 4K UHD, 25 Mbit/s ou plus, idéalement via câble LAN.' },
        { q: 'Puis-je utiliser l\'abonnement sur plusieurs appareils simultanément ?', a: 'Les plans Classic et Standard supportent 1 connexion simultanée. Le pack 12 mois inclut 2 connexions simultanées (+1 GRATUITE).' },
        { q: 'Y a-t-il des contrats ou frais cachés ?', a: 'Non, pas de contrat, pas de frais d\'activation et pas de renouvellement automatique. Vous payez une seule fois pour la période choisie.' },
      ],
    },
    footer: {
      tagline: 'La boutique haute-fidélité pour la télévision numérique en direct. Aucun contrat, latence minimisée et connexions serveur de première classe.',
      copyright: 'Copyright © 2026 IPTV Suomi. Tous droits réservés.',
      sub1: 'Abonnements',
      sub2: 'Contenu & Support',
      sub3: 'Statut du serveur',
      link1: 'Classic Trimestriel (3 mois)',
      link2: 'Valeur Standard (6 mois)',
      link3: 'Super Année Économie (12 mois – 57% d\'économie)',
      link4: 'Films & Séries Bibliothèque VOD',
      link5: 'Aperçu des chaînes Live TV',
      link6: 'Configuration appareil & FAQ aide',
      serverStatus: 'Statut du serveur',
      allRelays: 'Tous les relais en direct',
      legal: 'IPTV Suomi opère de manière totalement indépendante. Toutes les marques, noms de produits et logos mentionnés sont la propriété de leurs détenteurs respectifs. Tous les paiements sont entièrement chiffrés SSL.',
      cert: 'Certificat de sécurité',
      sla: 'Accord SLA',
    },
  },

  da: {
    hero: {
      subtitle: 'Bedste IPTV i Finland',
      headline1: '4K-kvalitet,',
      headline2: 'Se ',
      highlight: 'Ishockey VM',
      end: 'Vær med!',
      stat1v: '59K', stat1l: 'Kanaler',
      stat2v: '200K', stat2l: 'VOD',
      stat3v: '4K', stat3l: 'Ultra HD',
      cta1: 'Vælg en pakke',
      cta2: 'Få øjeblikkelig adgang',
    },
    nav: {
      liveSport: 'Live-sport',
      movies: 'Film & Serier (VOD)',
      pricing: 'Priser',
      reviews: 'Anmeldelser',
      faq: 'FAQ',
      subscribe: 'Abonner nu',
      mobileSubscribe: 'Abonner nu — vis priser',
    },
    platforms: {
      heading: 'Alle platforme.',
      headingItalic: 'Et abonnement.',
      subheading: 'Netflix · Prime · Disney+ · HBO · Sky · C More · Viaplay — alt via os.',
      cta: 'Vælg en pakke',
    },
    pricing: {
      statChannels: 'KANALER',
      statVod: 'SERIER & FILM',
      statUpdate: 'PERMANENT OPDATERING',
      subtitle: 'Premium-abonnementer',
      heading: 'Vælg din',
      highlight: 'Premium-pakke.',
      desc: 'Ingen automatisk fornyelse. Din løbetid, dine regler — sikkert, hurtigt og tilgængeligt verden over.',
      device1: 'Enhed',
      device2: 'Enheder',
      month1: 'Måned',
      monthMany: 'Måneder',
      dev1: 'Enhed',
      dev2: 'Enheder',
      popular: 'Mest populær',
      cta: 'Køb nu',
      waMsg: (m, d, p) => `Hej, jeg vil gerne bestille IPTV Suomi-pakken: ${m} måneder / ${d === 1 ? '1 enhed' : '2 enheder'} / ${p} EUR`,
      trust: [
        '100% tilbagebetaling', 'Fuld refusion inden for 24 timer.',
        'Øjeblikkelig aktivering', 'Adgangsoplysninger på få minutter via WhatsApp.',
        'WhatsApp-support', 'Direkte support 24/7 via WhatsApp.',
      ],
    },
    testimonials: {
      subtitle: 'Kundeanmeldelser',
      heading: 'Kærlighedsbreve',
      italic: 'til IPTV Suomi.',
      desc: 'Se hvordan over 45.000 aktive abonnenter har erstattet deres gamle kabelabonnement med vores streaming-infrastruktur.',
      rate: 'Gennemsnitlig fornyelsesrate på 94,2%',
    },
    devices: {
      heading: 'Kompatibel med',
      italic: 'alle enheder.',
      cta: 'Start nu',
    },
    payments: {
      subtitle: 'Verificerede betalingsmetoder',
      heading: 'Sikre tilgængelige',
      italic: 'betalingsmetoder.',
      desc: 'Vi bruger bankniveaukryptering (SSL & AES-256) til alle betalinger. Dine bankoplysninger er altid optimalt beskyttet.',
      direct: 'Øjeblikkelig',
      days12: '1–2 dage',
      methodDescs: [
        'Autoriseret køberbeskyttelse',
        'SSL & 3D-Secure beskyttet',
        'SSL & 3D-Secure beskyttet',
        'Direkte debitering med IBAN',
        'Betaling direkte via din bank',
        'Faktura & afdragsplan',
      ],
      pci: 'Alle betalingstransaktioner er beskyttet af PCI-DSS-sikkerhedscertifikater.',
    },
    faq: {
      subtitle: 'Hyppige spørgsmål',
      heading: 'Spørgsmål & Svar',
      italic: 'løst øjeblikkeligt.',
      supportNote: 'Bruger du speciel hardware?',
      supportDesc: 'Vores supportteknikere hjælper gerne med konfiguration af din MAG-boks, Smart TV eller afspilningsliste.',
      supportCta: 'Kontakt support',
      items: [
        { q: 'Er der øjeblikkelig opsætning efter køb?', a: 'Ja, absolut! Når din betaling er gennemført, genererer vores system dine adgangsoplysninger og sender dig en detaljeret e-mail inden for 2–5 minutter.' },
        { q: 'Hvilke enheder og apps understøttes?', a: 'Vores system kører på næsten alle enheder: Smart TV (Samsung, LG, Sony, Philips), Android-bokse, Amazon Fire TV Stick, Apple TV, iPad, iPhone, MAG-bokse, Formuler og apps som IPTV Smarters, Tivimate, GSE.' },
        { q: 'Hvor hurtig skal min internetforbindelse være?', a: 'Til SD skal du bruge mindst 8 Mbit/s. Til Full HD kræves 15 Mbit/s, og til 4K UHD anbefaler vi 25 Mbit/s eller mere via kabel.' },
        { q: 'Kan jeg bruge abonnementet på flere enheder samtidigt?', a: 'Classic og Standard-planerne understøtter 1 samtidige forbindelser. 12-månederspakken inkluderer 2 samtidige forbindelser (+1 GRATIS).' },
        { q: 'Er der kontrakter eller skjulte gebyrer?', a: 'Nej, ingen løbende kontrakter, ingen opsætningsgebyrer og ingen automatisk fornyelse. Du betaler kun én gang for den valgte periode.' },
      ],
    },
    footer: {
      tagline: 'High-fidelity butikken for digitalt live-TV. Ingen kontrakter, absolut minimeret latens og førsteklasses serverforbindelser.',
      copyright: 'Copyright © 2026 IPTV Suomi. Alle rettigheder forbeholdes.',
      sub1: 'Abonnementer',
      sub2: 'Indhold & Support',
      sub3: 'Serverstatus',
      link1: 'Kvartals-Classic (3 måneder)',
      link2: 'Standard-værdi (6 måneder)',
      link3: 'Super-sparår (12 måneder – 57% rabat)',
      link4: 'Film & Serier VOD-bibliotek',
      link5: 'Live TV-kanaloversigt',
      link6: 'Enhedsopsætning & Hjælp-FAQ',
      serverStatus: 'Serverstatus',
      allRelays: 'Alle relæer live',
      legal: 'IPTV Suomi drives fuldstændig uafhængigt. Alle nævnte varemærker, produktnavne og kanallogoer er ejendom af deres respektive ejere. Alle betalinger er fuldt SSL-krypterede.',
      cert: 'Sikkerhedscertifikat',
      sla: 'SLA-aftale',
    },
  },

  ar: {
    hero: {
      subtitle: 'أفضل IPTV في فنلندا',
      headline1: 'جودة 4K،',
      headline2: 'شاهد ',
      highlight: 'بطولة العالم للهوكي على الجليد',
      end: 'كن هناك!',
      stat1v: '59K', stat1l: 'قناة',
      stat2v: '200K', stat2l: 'VOD',
      stat3v: '4K', stat3l: 'دقة فائقة',
      cta1: 'اختر خطتك',
      cta2: 'احصل على وصول فوري',
    },
    nav: {
      liveSport: 'رياضة مباشرة',
      movies: 'أفلام ومسلسلات (VOD)',
      pricing: 'الأسعار',
      reviews: 'التقييمات',
      faq: 'الأسئلة الشائعة',
      subscribe: 'اشترك الآن',
      mobileSubscribe: 'اشترك الآن — عرض الخطط',
    },
    platforms: {
      heading: 'جميع المنصات.',
      headingItalic: 'اشتراك واحد.',
      subheading: 'Netflix · Prime · Disney+ · HBO · Sky · C More · Viaplay — كل شيء من خلالنا.',
      cta: 'اختر خطتك',
    },
    pricing: {
      statChannels: 'قناة',
      statVod: 'مسلسلات وأفلام',
      statUpdate: 'تحديث مستمر',
      subtitle: 'اشتراكات مميزة',
      heading: 'اختر',
      highlight: 'خطتك المميزة.',
      desc: 'لا تجديد تلقائي. مدتك، قواعدك — آمن وسريع ومتاح في جميع أنحاء العالم.',
      device1: 'جهاز',
      device2: 'أجهزة',
      month1: 'شهر',
      monthMany: 'أشهر',
      dev1: 'جهاز',
      dev2: 'أجهزة',
      popular: 'الأكثر شعبية',
      cta: 'اشترِ الآن',
      waMsg: (m, d, p) => `مرحباً، أريد طلب باقة IPTV Suomi: ${m} أشهر / ${d === 1 ? 'جهاز واحد' : 'جهازان'} / ${p} EUR`,
      trust: [
        'استرداد 100%', 'استرداد كامل خلال 24 ساعة.',
        'تفعيل فوري', 'بيانات الوصول في دقائق عبر WhatsApp.',
        'دعم WhatsApp', 'دعم مباشر 24/7 عبر WhatsApp.',
      ],
    },
    testimonials: {
      subtitle: 'آراء العملاء',
      heading: 'رسائل حب',
      italic: 'إلى IPTV Suomi.',
      desc: 'اطّلع على كيفية استبدال أكثر من 45,000 مشترك نشط لاشتراك الكابل القديم بالبنية التحتية للبث عالية الجودة لدينا.',
      rate: 'معدل تجديد الاشتراك 94.2% في المتوسط',
    },
    devices: {
      heading: 'متوافق مع',
      italic: 'جميع الأجهزة.',
      cta: 'ابدأ الآن',
    },
    payments: {
      subtitle: 'طرق دفع موثّقة',
      heading: 'طرق دفع آمنة',
      italic: 'ومتاحة.',
      desc: 'نستخدم تشفيراً بمستوى بنكي (SSL & AES-256) لجميع المدفوعات. بياناتك المصرفية محمية دائماً على النحو الأمثل.',
      direct: 'فوري',
      days12: '1–2 أيام',
      methodDescs: [
        'حماية المشتري المعتمدة',
        'محمي بـ SSL و 3D-Secure',
        'محمي بـ SSL و 3D-Secure',
        'خصم مباشر بـ IBAN',
        'الدفع مباشرةً عبر بنكك',
        'فاتورة ودفع بالتقسيط',
      ],
      pci: 'جميع معاملات الدفع محمية بشهادات PCI-DSS.',
    },
    faq: {
      subtitle: 'الأسئلة الشائعة',
      heading: 'أسئلة وأجوبة',
      italic: 'تُحلّ فوراً.',
      supportNote: 'تستخدم أجهزة خاصة؟',
      supportDesc: 'يسعد فنيو الدعم لدينا بمساعدتك في تكوين MAG box أو Smart TV أو قائمة التشغيل.',
      supportCta: 'التواصل مع الدعم',
      items: [
        { q: 'هل يوجد إعداد فوري بعد الشراء؟', a: 'نعم، بالتأكيد! بمجرد اكتمال دفعك، يولّد نظامنا بيانات الوصول ويرسل إليك بريداً إلكترونياً تفصيلياً خلال 2–5 دقائق.' },
        { q: 'ما الأجهزة والتطبيقات المدعومة؟', a: 'يعمل نظامنا على تقريباً جميع الأجهزة: Smart TV (Samsung, LG, Sony, Philips), صناديق Android, Amazon Fire TV Stick, Apple TV, iPad, iPhone, MAG boxes, Formuler وتطبيقات مثل IPTV Smarters وTivimate وGSE.' },
        { q: 'كم سرعة الإنترنت اللازمة؟', a: 'للدقة العادية SD: 8 Mbit/s كحد أدنى. لـ Full HD: 15 Mbit/s مستقرة. لـ 4K UHD: 25 Mbit/s أو أكثر، ويفضل عبر كابل LAN.' },
        { q: 'هل يمكنني استخدام الاشتراك على أجهزة متعددة في آنٍ واحد؟', a: 'تدعم الخطط الكلاسيكية والمعيارية اتصالاً متزامناً واحداً. تتضمن باقة 12 شهراً اتصالين متزامنين (+1 مجاناً).' },
        { q: 'هل هناك عقود أو رسوم خفية؟', a: 'لا، لا توجد عقود مستمرة ولا رسوم تسجيل ولا تجديد تلقائي. تدفع مرة واحدة فقط للمدة المختارة.' },
      ],
    },
    footer: {
      tagline: 'متجر عالي الدقة للتلفزيون الرقمي المباشر. بدون عقود، وكمون منخفض، واتصالات خوادم من الدرجة الأولى.',
      copyright: 'حقوق النشر © 2026 IPTV Suomi. جميع الحقوق محفوظة.',
      sub1: 'الاشتراكات',
      sub2: 'المحتوى والدعم',
      sub3: 'حالة الخادم',
      link1: 'ربع سنوي كلاسيك (3 أشهر)',
      link2: 'القيمة المعيارية (6 أشهر)',
      link3: 'السنة الفائقة (12 شهراً – وفورات 57%)',
      link4: 'مكتبة الأفلام والمسلسلات VOD',
      link5: 'قائمة قنوات Live TV',
      link6: 'إعداد الجهاز والأسئلة الشائعة',
      serverStatus: 'حالة الخادم',
      allRelays: 'جميع المحطات مباشرة',
      legal: 'تعمل IPTV Suomi باستقلالية تامة. جميع العلامات التجارية وأسماء المنتجات وشعارات القنوات المذكورة ملك لأصحابها. جميع المدفوعات مشفرة بالكامل بـ SSL.',
      cert: 'شهادة الأمان',
      sla: 'اتفاقية SLA',
    },
  },
};
