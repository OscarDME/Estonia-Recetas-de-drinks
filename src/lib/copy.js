// ─────────────────────────────────────────────────────────────────────────────
// COPY.JS — KOGU maandumislehe nähtava teksti allikas.
// Doc §7: Komponentidesse ei tohi koodi sisse kirjutada (hardcode). Kõik, mis on ekraanil, asub siin.
// ─────────────────────────────────────────────────────────────────────────────

export const copy = {
  // ── SEO / METADATA (Loetakse Layout.astro poolt) ───────────────────────────
  metadata: {
    lang: 'et',
    title: '150 esmaklassilist kokteiliretsepti koduseks nautimiseks',
    description:
      'Peoks valmis kokteiliretseptid — lihtsad koostisosad, kiire valmistamine. Avalda sõpradele muljet, säästa raha kallite baaride arvelt ja saa õhtu staariks. Sisaldab eksklusiivseid boonuseid.',
    canonical: 'https://150receitascopao.netlify.app',
    ogImage: '/og-cover.jpg',
    ogType: 'website',
    siteName: 'KOKTEILIMAAILM',
  },

  // ── 1. TIMER STICKY PÄIS ───────────────────────────────────────────────────
  timerBar: {
    icon: '⏰',
    label: 'Pakkumine aegub:',
    initialMinutes: 9,
    initialSeconds: 57,
  },

  // ── 2. HERO SEKTSIOON ──────────────────────────────────────────────────────
  hero: {
    tag: '🍋 Eksklusiivne pakkumine',
    titleHighlight: '150 suurepärast kokteiliretsepti',
    titleConnector: 'sinu',
    titleHighlightGreen: 'naudinguks',
    titleEnd: 'isegi kui oled täielik algaja',
    deliveryLabel: 'Saad kohese ligipääsu siit:',
    deliveryChannels: [
      { label: 'WhatsApp', kind: 'whatsapp' },
      { label: 'E-post', kind: 'email' },
    ],
    videoAlt: '150 koduse kokteiliretsepti komplekti tutvustus',
    ctaLabel: '✅ TAHAN OMA RETSEPTE KOHE KÄTTE SAADA',
    ctaSub: '🔒 100% turvaline ost • Kohene ligipääs',
  },

  // ── 3. EELISED (BENEFITS) ──────────────────────────────────────────────────
  benefits: {
    intro:
      'Retseptid, mis on loodud maksimaalseks naudinguks — lihtsad koostisosad, kiire valmistamine,',
    introStrong: 'uskumatu maitse ja välimus, mis jätab iga külalise sõnatuks!',
    items: [
      'Valmistada iga kokteili ilma igasuguse varasema kogemuseta',
      'Teha maagiat ilma profiseadmete või kalli köögita',
      'Nautida järeleproovitud retsepte taskukohaste koostisosadega',
      'Olla iga koduse peo, saunaõhtu või koosviibimise vaieldamatu staar',
    ],
    ctaLabel: '🍹 TAHAN OMA RETSEPTE KOHE KÄTTE SAADA',
  },

  // ── 4. RETSEPTIDE KARUSSELL ────────────────────────────────────────────────
  carousel: {
    title: '🍹 Mõned retseptid, mida saad',
    titleHighlight: 'sõpradega nautida!',
    slides: [
      { caption: 'Magus suudlus', alt: 'Kokteil Magus suudlus' },
      {
        caption: 'Hispaania vein granadilliga',
        alt: 'Kokteil Hispaania vein granadilliga',
      },
      { caption: 'Kreemine Granadilli-Beats', alt: 'Kokteil Kreemine Granadilli-Beats' },
      { caption: 'Halls kommi kokteil', alt: 'Halls kommi kokteil' },
      { caption: 'Suvebriis', alt: 'Kokteil Suvebriis' },
      {
        caption: 'Caipirinha granadilli ja kohviga',
        alt: 'Kokteil Caipirinha granadilli ja kohviga',
      },
    ],
    prevLabel: 'Eelmine slaid',
    nextLabel: 'Järgmine slaid',
    dotLabel: 'Slaidile',
  },

  // ── 5. BOONUSED ────────────────────────────────────────────────────────────
  bonuses: {
    title: '🎁 Ja loomulikult on meil sulle',
    titleHighlight: 'BOONUSED!',
    items: [
      {
        tag: 'Boonus 1',
        title: '50 alkohoolsete šottide ja punšide retsepti',
        description: 'Ideaalne peojookide valik, mida kiirelt valmistada ja seltskonnaga jagada.',
        alt: '50 alkohoolsete šottide ja punšide retsepti',
      },
      {
        tag: 'Boonus 2',
        title: 'Nutikas ostunimekiri — kuidas säästa raha',
        description:
          'Uuri välja, milliseid koostisosi täpselt osta, et teha tipptasemel kokteile, ilma et tühjendaksid rahakotti kallites baarides.',
        alt: 'Ostunimekiri ja kalkulaator',
      },
      {
        tag: 'Boonus 3',
        title: '✅ Käsiraamat: Kuidas korraldada ideaalset kokteiliõhtut',
        description: 'Valmis ideed ja sammud, kuidas luua unustamatu elamus ja oma külalisi pahviks lüüa.',
        alt: 'Koduse peo käsiraamat',
      },
      {
        tag: 'Boonus 4',
        title: 'Videoõpetus: Kuidas kaunistada ja serveerida nagu professionaal',
        description:
          'Õpi ilusa esitluse saladusi, mis muudavad tavalise joogi viietärniliseks meistriteoseks.',
        alt: 'Videoõpetus kokteilide kaunistamiseks',
      },
    ],
  },

  // ── 6. HINNAD (PRICING) ────────────────────────────────────────────────────
  pricing: {
    sectionId: 'precos',
    title: 'Vali, kuidas soovid täna alustada:',
    complete: {
      badge: '⭐ Kõige populaarsem',
      title: 'Täispakett: 150+ kokteiliretsepti',
      descriptionLead: '150+ retsepti uskumatute koduste kokteilide jaoks + kõik',
      descriptionStrong: 'eksklusiivsed boonused,',
      descriptionTail: 'et saaksid parimaks kodubaarmeniks.',
      mockupAlt: 'Täispaketi 150 retseptiga makett',
      includesLabel: '🎁 Sisaldab kõiki boonuseid:',
      items: [
        '150+ esmaklassilist kokteiliretsepti',
        'Nimekiri soodsatest alternatiividest kallile alkoholile',
        'Nutika ostlemise juhend',
        'Ideaalsete kodupidude käsiraamat',
        'Videoõpetus professionaalseks kaunistamiseks',
      ],
      strikePrice: 'Tavahind 29.90 €',
      price: '9.90 €',
      priceNote: 'kohene ligipääs',
      ctaLabel: '🛒 TAHAN TÄISPAKETTI',
      footer: '✅ Kohene ligipääs · E-post + WhatsApp · 14-päevane garantii',
    },
  },

  // ── 7. GARANTII ────────────────────────────────────────────────────────────
  guarantee: {
    icon: '🛡️',
    title: '14-päevane täielik garantii',
    description:
      'Kui sa mingil põhjusel ei ole vaimustuses, maksame sulle iga viimase kui sendi tagasi. Küsimusi esitamata ja ilma liigse närvikuluta.',
  },

  // ── 8. KKK (Korduma kippuvad küsimused) ────────────────────────────────────
  faq: {
    title: 'Korduma kippuvad',
    titleHighlight: 'küsimused:',
    items: [
      {
        q: 'Kas mul peab olema kogemusi, et neid teha?',
        a: 'Kindlasti mitte! Retseptid on lihtsalt lahti seletatud ja igaüks saab neid valmistada, isegi kui sa pole kunagi varem ühtegi kokteili seganud.',
      },
      {
        q: 'Kas ma vajan kalleid šeikereid ja profiseadmeid?',
        a: 'Pole vaja. Kõike saab teha kodus tavaliste riistadega, mis sul juba köögis olemas on.',
      },
      {
        q: 'Millisteks puhkudeks need kokteilid sobivad?',
        a: 'Absoluutselt kõigeks! Alates lõõgastumisest pärast rasket tööpäeva või romantilisest õhtusöögist kuni pöörase koduse peo või saunaõhtuni sõpradega.',
      },
      {
        q: 'Kas koostisosad on kallid?',
        a: 'Ei. Meie nutika ostunimekirjaga õpid, kuidas saavutada esmaklassiline maitse taskukohaste toodetega kohalikust supermarketist.',
      },
      {
        q: 'Kuidas ma pärast ostmist ligipääsu saan?',
        a: 'Ligipääs on kohene! Niipea kui makse on läbi läinud, saad kõik otse e-mailile ja WhatsAppi.',
      },
      {
        q: 'Kas kehtib garantii, kui mulle ei meeldi?',
        a: 'Muidugi! Sul on lausa 14-päevane täielik garantii. Kui sa pole rahul, tagastame sulle raha 100%.',
      },
    ],
  },

  // ── 9. KIIRELOOMULISUS (URGENCY) ───────────────────────────────────────────
  urgency: {
    text: '⏰ Ära lükka edasi — nädalavahetus läheneb ja koos sellega järjekordne igav õhtu. Muuda seda juba praegu!',
  },

  // ── 10. LÕPLIK CTA ─────────────────────────────────────────────────────────
  finalCta: {
    ctaLabel: '🍹 TAHAN LIGIPÄÄSU 150 RETSEPTILE KOHE',
    subText: '🔒 Kohene ligipääs • 14-päevane garantii • Turvaline makse',
  },

  // ── 11. TURVALISUS (badges) ────────────────────────────────────────────────
  security: {
    items: [
      { icon: '🔒', label: 'SSL kaitse' },
      { icon: '💳', label: 'Turvaline makse' },
      { icon: '📲', label: 'Kohene ligipääs' },
    ],
  },

  // ── 12. JALUS (FOOTER) ─────────────────────────────────────────────────────
  footer: {
    text: '© 2026 · KOKTEILIMAAILM · Kõik õigused kaitstud',
  },

  // ── A11Y / abitekst ──
  a11y: {
    skipToContent: 'Liigu põhisisu juurde',
  },
};