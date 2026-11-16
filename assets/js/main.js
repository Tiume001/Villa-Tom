/**
 * VILLA TIMEA - Marsala (Sicilia)
 * Modern, accessible client-side interactive logic
 * Incorporating Modern Web Guidance standards
 */

document.addEventListener('DOMContentLoaded', () => {
  // Prevent iOS Safari page-level pinch/double-tap zoom outside the photo viewer
  ['gesturestart', 'gesturechange', 'gestureend'].forEach(evt => {
    document.addEventListener(evt, (e) => e.preventDefault(), { passive: false });
  });

  initI18n();
  initSpaceAlbums();
  initGallery();
  initLightbox();
  initDialogFallbacks();
  initQRCode();
  initBookingForm();
  initMap();
  initHeader();
  initMobileNav();
  initThemePicker();
});

/* ==========================================================================
   1. DICTIONARY & MULTILINGUAL SUPPORT (IT / EN)
   ========================================================================== */

const i18nData = {
  it: {
    metaTitle: "Villa Timea | Villa con Piscina e Tennis ad Uso Esclusivo, Vista Egadi a Marsala",
    topWelcome: "Benvenuti a Villa Timea • Marsala, Sicilia",
    topCall: "Chiamaci / WhatsApp",
    navAbout: "La Villa",
    navComfort: "Comfort & Spazi",
    navGallery: "Galleria",
    navTerritory: "Dintorni",
    navQr: "QR Ospiti",
    navContact: "Contatti",
    btnBookNow: "Richiedi Disponibilità",

    heroBadge: "Marsala • Vista Isole Egadi",
    heroTitle: "Il Tuo Rifugio Esclusivo nel Cuore della Sicilia",
    heroSubtitle: "Piscina panoramica con trampolino e campo da tennis regolamentare entrambi ad uso esclusivo per gli ospiti, pineta mediterranea e un'autentica cantina storica scavata nel tufo.",
    heroExplore: "Esplora la Villa",
    heroInquire: "Prenota o Richiedi Info",

    heroFeatPool: "Piscina Panoramica",
    heroFeatPoolDesc: "Uso esclusivo, trampolino e vista mare",
    heroFeatTennis: "Campo da Tennis",
    heroFeatTennisDesc: "Uso esclusivo ospiti, regolamentare",
    heroFeatSunset: "Vista Isole Egadi",
    heroFeatSunsetDesc: "Favignana, Levanzo e Marettimo",
    heroFeatCellar: "Cantina nel Tufo",
    heroFeatCellarDesc: "Storica cantina del Marsala",

    channelsTitle: "Prenotazione Diretta al Miglior Prezzo Garantito",
    channelsSubtitle: "Nessuna commissione di intermediazione: contatto diretto con la proprietà e assistenza dedicata",
    btnDirectContact: "Contatto Diretto (Miglior Tariffa)",

    storyTag: "L'Esperienza",
    storyTitle: "Un'oasi di pace tra il mare di Marsala e le Isole Egadi",
    storyLead: "Immersa nella quiete della campagna marsalese, Villa Timea è una proprietà unica dove gli ampi spazi, la bellezza del paesaggio e il piacere della vita all'aria aperta si fondono in un'esperienza straordinaria.",
    storyP1: "Il suo punto di forza è senza dubbio la posizione panoramica: dalle terrazze lo sguardo abbraccia il mare e le Isole Egadi (Favignana, Levanzo e Marettimo), regalando uno scenario spettacolare soprattutto nelle ore del tramonto, quando il sole scende lentamente all'orizzonte tingendo il paesaggio di colori caldi e suggestivi.",
    storyP2: "All'esterno, la grande piscina privata ad uso esclusivo per gli ospiti è il cuore pulsante della tenuta. Circondata da palme e aree relax, offre lo spazio ideale per trascorrere intere giornate al sole, rinfrescarsi nelle acque cristalline e godersi momenti di autentica tranquillità in totale privacy. La presenza del trampolino aggiunge un tocco di divertimento irresistibile per famiglie e amici.",
    storyP3: "Per gli amanti dello sport, il campo da tennis privato e regolamentare ad uso esclusivo per gli ospiti e le aree fitness consentono di alternare il riposo all'attività fisica in assoluta riservatezza senza mai dover condividere gli spazi con altri, immersi in una pineta verde con vialetti illuminati di sera.",
    storyBadge: "Vista Isole Egadi & Tramonti indimenticabili",

    amenitiesTag: "Spazi & Caratteristiche",
    amenitiesTitle: "Tutto ciò di cui hai bisogno per un soggiorno perfetto",
    amenitiesDesc: "Dalla piscina all'aria aperta agli interni signorili con parquet e camino, ogni ambiente è pensato per offrire il massimo comfort.",
    spaceOpenFolder: "Apri cartella foto",

    galleryTag: "Tour Fotografico",
    galleryTitle: "Scorci di Villa Timea",
    galleryDesc: "Sfoglia le immagini della proprietà: piscina e tennis ad uso esclusivo, salone, camere panoramiche e cantina storica.",
    filterAll: "Tutte le foto (20)",
    filterPool: "Piscina & Panorama",
    filterInteriors: "Salone & Interni",
    filterRooms: "Camere & Bagni",
    filterSports: "Tennis & Giardino",
    filterCellar: "Cantina Storica",

    qrTag: "QR Code & Guest Guide",
    qrTitle: "Condividi la Villa & Accogli i tuoi Ospiti",
    qrDesc: "Questo sito è pensato per essere facilmente fruibile tramite QR Code: esponilo all'interno della villa, sui biglietti da visita o sul materiale informativo per permettere agli ospiti di consultare mappa, contatti e servizi con una semplice scansione.",
    qrBtnDownload: "Scarica QR Code (PNG)",
    qrBtnPrint: "Stampa Scheda Villa",

    territoryTag: "Esplora Marsala & Trapani",
    territoryTitle: "I Tesori della Sicilia Occidentale",
    territoryDesc: "Villa Timea è la base perfetta per scoprire meraviglie storiche, riserve naturali e spiagge caraibiche.",

    bookingTag: "Prenotazione & Info",
    bookingTitle: "Richiedi Informazioni o Prenota Direttamente",
    bookingDesc: "Compila il modulo per inviarci una richiesta via WhatsApp o Email. Ti risponderemo in pochissimo tempo!",
    formName: "Nome e Cognome",
    formEmail: "Email",
    formPhone: "Telefono / WhatsApp",
    formDates: "Date Soggiorno (Check-in / Check-out)",
    formGuests: "Numero Ospiti",
    formMsg: "Messaggio o Richieste Speciali",
    btnSendWhatsApp: "Invia Richiesta su WhatsApp",
    btnSendEmail: "Invia via Email",

    mapTag: "Dove Siamo",
    mapTitle: "Posizione Panoramica a Marsala",
    mapDesc: "Situata in Contrada Fontanelle 231, in collina con vista mare ma a pochi minuti dal centro storico, dalle spiagge e dall'imbarco per le Egadi.",

    footerDesc: "Villa Timea: esclusiva villa con piscina panoramica e campo da tennis entrambi ad uso esclusivo per gli ospiti, cantina storica nel tufo e vista mozzafiato sulle Isole Egadi a Marsala (Trapani), Sicilia.",
    footerRights: "Tutti i diritti riservati. Villa Timea Marsala."
  },
  en: {
    metaTitle: "Villa Timea | Villa with Exclusive Pool & Tennis, Egadi Views in Marsala",
    topWelcome: "Welcome to Villa Timea • Marsala, Sicily",
    topCall: "Call us / WhatsApp",
    navAbout: "The Villa",
    navComfort: "Comfort & Spaces",
    navGallery: "Gallery",
    navTerritory: "Surroundings",
    navQr: "Guest QR",
    navContact: "Contacts",
    btnBookNow: "Check Availability",

    heroBadge: "Marsala • Egadi Islands View",
    heroTitle: "Your Exclusive Retreat in the Heart of Western Sicily",
    heroSubtitle: "Panoramic swimming pool with diving board and regulation tennis court reserved exclusively for guests, Mediterranean pine grove, and authentic historic wine cellar carved in tuff.",
    heroExplore: "Explore the Villa",
    heroInquire: "Book or Inquire",

    heroFeatPool: "Panoramic Pool",
    heroFeatPoolDesc: "Exclusive guest use, diving board & sea view",
    heroFeatTennis: "Tennis Court",
    heroFeatTennisDesc: "Exclusive guest use, private regulation court",
    heroFeatSunset: "Egadi Islands View",
    heroFeatSunsetDesc: "Favignana, Levanzo & Marettimo",
    heroFeatCellar: "Tuff Wine Cellar",
    heroFeatCellarDesc: "Historic Marsala wine cellar",

    channelsTitle: "Direct Booking with Guaranteed Best Rate",
    channelsSubtitle: "No intermediary commissions: direct contact with property owners and dedicated assistance",
    btnDirectContact: "Direct Contact (Best Rate)",

    storyTag: "The Experience",
    storyTitle: "An oasis of peace between Marsala's sea and the Egadi Islands",
    storyLead: "Nestled in the quiet Marsala countryside, Villa Timea is a unique property where generous spaces, scenic beauty, and open-air living blend into an unforgettable vacation experience.",
    storyP1: "Its greatest highlight is undoubtedly the panoramic vantage point: from the terraces, your gaze sweeps over the sparkling sea and the Egadi Islands (Favignana, Levanzo, and Marettimo), treating you to glorious sunset vistas each evening.",
    storyP2: "Outside, the large private pool reserved exclusively for guests is the vibrant heart of the estate. Framed by palm trees and sun terraces, it is the ideal place to soak up the Sicilian sun, dive into crystal clear water, and unwind in complete serenity and absolute privacy. The diving board adds fun for friends and family alike.",
    storyP3: "For sports lovers, the private regulation tennis court reserved exclusively for guests allows you to alternate deep relaxation with spirited matches without ever having to share spaces, surrounded by a peaceful pine forest with illuminated evening paths.",
    storyBadge: "Egadi Islands View & Memorable Sunsets",

    amenitiesTag: "Spaces & Highlights",
    amenitiesTitle: "Everything you need for an unforgettable stay",
    amenitiesDesc: "From the outdoor pool and private court to spacious living areas with fireplace and parquet floors, every detail is curated for maximum comfort.",
    spaceOpenFolder: "Open photo folder",

    galleryTag: "Photo Tour",
    galleryTitle: "Glimpses of Villa Timea",
    galleryDesc: "Browse high-resolution photographs: swimming pool, tennis court, living room, panoramic bedrooms, and historic cellar.",
    filterAll: "All Photos (20)",
    filterPool: "Pool & Panorama",
    filterInteriors: "Living & Interiors",
    filterRooms: "Bedrooms & Baths",
    filterSports: "Tennis & Gardens",
    filterCellar: "Historic Cellar",

    qrTag: "QR Code & Guest Guide",
    qrTitle: "Share the Villa & Welcome Your Guests",
    qrDesc: "This website is optimized for instant QR code access: place it inside the villa, on brochures, or welcome packs so guests can access maps, house info, and contacts with a quick smartphone scan.",
    qrBtnDownload: "Download QR Code (PNG)",
    qrBtnPrint: "Print Villa Sheet",

    territoryTag: "Explore Marsala & Trapani",
    territoryTitle: "Treasures of Western Sicily",
    territoryDesc: "Villa Timea is the perfect launching pad to discover ancient history, nature reserves, and pristine island beaches.",

    bookingTag: "Booking & Inquiries",
    bookingTitle: "Request Information or Book Directly",
    bookingDesc: "Fill out the form to send us an inquiry via WhatsApp or Email. We reply promptly with availability and best rates!",
    formName: "Full Name",
    formEmail: "Email",
    formPhone: "Phone / WhatsApp",
    formDates: "Stay Dates (Check-in / Check-out)",
    formGuests: "Number of Guests",
    formMsg: "Message or Special Inquiries",
    btnSendWhatsApp: "Send via WhatsApp",
    btnSendEmail: "Send via Email",

    mapTag: "Location",
    mapTitle: "Panoramic Setting in Marsala",
    mapDesc: "Located in Contrada Fontanelle 231, on a gentle hill with sea breezes, just minutes from the historic center, sandy beaches, and Egadi ferry port.",

    footerDesc: "Villa Timea: exclusive villa with panoramic swimming pool and regulation tennis court reserved exclusively for guests, historic wine cellar, and Egadi views in Marsala (Trapani), Sicily.",
    footerRights: "All rights reserved. Villa Timea Marsala."
  }
};

let currentLang = 'it';

function initI18n() {
  const savedLang = localStorage.getItem('villa_lang');
  if (savedLang && (savedLang === 'it' || savedLang === 'en')) {
    currentLang = savedLang;
  }

  applyLanguage(currentLang);

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.dataset.lang;
      if (lang && lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem('villa_lang', lang);
        applyLanguage(lang);
      }
    });
  });
}

function applyLanguage(lang) {
  document.documentElement.lang = lang;
  const dict = i18nData[lang];
  if (!dict) return;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll('[data-i18n-ph]').forEach(el => {
    const key = el.dataset.i18nPh;
    if (dict[key]) {
      el.placeholder = dict[key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  if (dict.metaTitle) {
    document.title = dict.metaTitle;
  }
}

/* ==========================================================================
   2. GALLERY DATA (20 PHOTOS), SPACE ALBUMS & FILTERING
   ========================================================================== */

const galleryItems = [
  {
    id: 1,
    src: "assets/images/piscina-panorama.jpg",
    category: "pool",
    titleIt: "Piscina Panoramica ad Uso Esclusivo & Trampolino",
    titleEn: "Exclusive Private Pool & Diving Board",
    descIt: "Ampia piscina ad uso esclusivo per gli ospiti immersa nel verde con solarium e vista aperta sul mare.",
    descEn: "Generous swimming pool for exclusive guest use surrounded by lush greenery with sea view sun deck."
  },
  {
    id: 2,
    src: "assets/images/piscina-terrazza.jpg",
    category: "pool",
    titleIt: "Scorcio Piscina e Palme",
    titleEn: "Pool & Palm Tree Haven",
    descIt: "Ombra rilassante della veranda con vista sull'acqua e sulle Isole Egadi.",
    descEn: "Refreshing covered veranda view of the pool and distant Egadi islands."
  },
  {
    id: 3,
    src: "assets/images/piscina-facciata-villa.jpg",
    category: "pool",
    titleIt: "Facciata della Villa & Piscina con Trampolino",
    titleEn: "Villa Facade & Pool with Diving Board",
    descIt: "Vista frontale della villa circondata da palme, pineta mediterranea e piscina privata.",
    descEn: "Front view of the villa framed by palm trees, Mediterranean pine forest and private pool."
  },
  {
    id: 4,
    src: "assets/images/tramonto-piscina-egadi.jpg",
    category: "pool",
    titleIt: "Tramonto sulle Isole Egadi dalla Piscina",
    titleEn: "Sunset over Egadi Islands from the Pool",
    descIt: "Spettacolare tramonto dorato sul mare e sulle isole con la piscina illuminata sullo sfondo.",
    descEn: "Spectacular golden sunset over the sea and islands with the illuminated pool below."
  },
  {
    id: 5,
    src: "assets/images/piscina-crepuscolo-egadi.jpg",
    category: "pool",
    titleIt: "Piscina al Crepuscolo & Vista Mare",
    titleEn: "Pool at Twilight & Sea Horizon",
    descIt: "Atmosfera serale a bordo piscina ammirando Favignana e Levanzo all'orizzonte.",
    descEn: "Evening poolside atmosphere overlooking Favignana and Levanzo on the horizon."
  },
  {
    id: 6,
    src: "assets/images/piscina-notte-illuminata.jpg",
    category: "pool",
    titleIt: "Piscina Illuminata di Notte",
    titleEn: "Illuminated Pool by Night",
    descIt: "Bagno notturno sotto le stelle con illuminazione subacquea turchese e luci soffuse in giardino.",
    descEn: "Nighttime swim under the stars with turquoise underwater lighting and warm garden lamps."
  },
  {
    id: 7,
    src: "assets/images/terrazza-vista-egadi.jpg",
    category: "pool",
    titleIt: "Loggia Panoramica sulle Egadi",
    titleEn: "Panoramic Veranda overlooking Egadi",
    descIt: "Terrazza coperta panoramica per cene e aperitivi con vista tramonto.",
    descEn: "Covered panoramic terrace perfect for sunset dining and Sicilian wine."
  },
  {
    id: 8,
    src: "assets/images/scalinata-panoramica.jpg",
    category: "pool",
    titleIt: "Scalinata Panoramica verso la Piscina",
    titleEn: "Scenic Steps to the Pool",
    descIt: "Scorcio architettonico della villa affacciata sulla piana di Marsala.",
    descEn: "Architectural view overlooking the terracotta patios and coastal plain."
  },
  {
    id: 9,
    src: "assets/images/panorama-notte-tennis-piscina.jpg",
    category: "sports",
    titleIt: "Panorama Notturno: Tennis, Veranda & Piscina",
    titleEn: "Night Panorama: Tennis Court, Veranda & Pool",
    descIt: "Vista d'insieme serale sul campo da tennis, sulla veranda illuminata, sulla piscina e sulle luci di Marsala.",
    descEn: "Evening overview of the tennis court, illuminated veranda, pool and Marsala city lights."
  },
  {
    id: 10,
    src: "assets/images/campo-tennis.jpg",
    category: "sports",
    titleIt: "Campo da Tennis ad Uso Esclusivo",
    titleEn: "Exclusive Regulation Tennis Court",
    descIt: "Campo da tennis regolamentare riservato ad uso esclusivo degli ospiti della villa.",
    descEn: "Full-size private tennis court exclusively reserved for villa guests."
  },
  {
    id: 11,
    src: "assets/images/veranda-tennis.jpg",
    category: "sports",
    titleIt: "Veranda Tennis & Relax",
    titleEn: "Tennis Veranda & Chillout",
    descIt: "Area relax coperta affacciata direttamente sul campo da tennis e sulla piscina.",
    descEn: "Shaded spectator veranda overlooking both tennis court and pool."
  },
  {
    id: 12,
    src: "assets/images/forno-legna-esterno.jpg",
    category: "sports",
    titleIt: "Forno a Legna & Giardino in Pietra",
    titleEn: "Wood-Fired Pizza Oven & Stone Garden",
    descIt: "Forno tradizionale in pietra lavica e tufo per pizze all'aperto e barbecue.",
    descEn: "Authentic Sicilian stone pizza oven and outdoor BBQ area amidst pines."
  },
  {
    id: 13,
    src: "assets/images/salone-principale.jpg",
    category: "interior",
    titleIt: "Grande Salone con Camino & Parquet",
    titleEn: "Grand Living Room with Fireplace",
    descIt: "Spazio giorno luminoso ed elegante con divani in lino e camino d'atmosfera.",
    descEn: "Spacious, sunlit lounge with cozy linen sofas and rustic brick fireplace."
  },
  {
    id: 14,
    src: "assets/images/salone-camino.jpg",
    category: "interior",
    titleIt: "Zona Relax & Ingresso Cantina",
    titleEn: "Living Lounge & Wine Cellar Entrance",
    descIt: "Pavimenti in parquet di legno massello e accesso scenografico alla cantina.",
    descEn: "Hardwood herringbone floors and wrought iron gate leading to the cellar."
  },
  {
    id: 15,
    src: "assets/images/sala-pranzo.jpg",
    category: "interior",
    titleIt: "Sala da Pranzo Conviviale",
    titleEn: "Convivial Dining Hall",
    descIt: "Tavolo da pranzo per oltre 10 ospiti, ideale per ritrovi con amici e famiglie.",
    descEn: "Large dining table seating 10+ guests for memorable group dinners."
  },
  {
    id: 16,
    src: "assets/images/camera-vista-egadi.jpg",
    category: "rooms",
    titleIt: "Camera 1 — Vista sulle Isole Egadi",
    titleEn: "Bedroom 1 — Egadi Islands View",
    descIt: "Risvegliarsi ogni mattina ammirando Favignana e il mare all'orizzonte.",
    descEn: "Wake up each morning gazing out to Favignana Island and the sea."
  },
  {
    id: 17,
    src: "assets/images/camera-matrimoniale.jpg",
    category: "rooms",
    titleIt: "Camera 2 — Matrimoniale di Charme",
    titleEn: "Bedroom 2 — Master with Antique Charm",
    descIt: "Letto in ferro battuto decorato, armadio d'epoca e climatizzazione autonoma.",
    descEn: "Ornate wrought iron bed, historic mirrored armoire and air conditioning."
  },
  {
    id: 18,
    src: "assets/images/bagno-epoca-vasca.jpg",
    category: "rooms",
    titleIt: "Bagno 1 — Stile d'Epoca con Vasca in Ghisa",
    titleEn: "Bathroom 1 — Vintage Freestanding Tub",
    descIt: "Vasca freestanding con piedini, maioliche e travi in legno a vista.",
    descEn: "Classic clawfoot soaking tub, handcrafted tiles, and rustic wood beams."
  },
  {
    id: 19,
    src: "assets/images/bagno-moderno-doccia.jpg",
    category: "rooms",
    titleIt: "Bagno 2 — Moderno con Doccia in Cristallo",
    titleEn: "Bathroom 2 — Modern Walk-in Shower",
    descIt: "Box doccia moderno, sanitari sospesi e finiture fresche.",
    descEn: "Glass-enclosed walk-in shower and contemporary fixtures."
  },
  {
    id: 20,
    src: "assets/images/cantina-storica-tufo.jpg",
    category: "cellar",
    titleIt: "Cantina Storica Scavata nel Tufo",
    titleEn: "Historic Cellar Carved in Tuff Stone",
    descIt: "Un autentico tesoro sotterraneo che celebra la tradizione del vino Marsala.",
    descEn: "An authentic subterranean tuff cellar honoring historic Marsala wines."
  }
];

const spaceAlbums = {
  pool: {
    icon: "🏊‍♂️",
    titleIt: "Piscina Panoramica & Terrazze (Uso Esclusivo)",
    titleEn: "Panoramic Pool & Terraces (Exclusive Use)",
    descIt: "Tutte le angolazioni della grande piscina privata ad uso esclusivo: vista diurna sulle palme e sulla facciata della villa, tramonti infuocati sulle Egadi e bagni serali sotto le luci.",
    descEn: "Every angle of the large private pool reserved exclusively for guests: daytime views, fiery Egadi sunsets, and illuminated evening swims.",
    photoIds: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  tennis: {
    icon: "🎾",
    titleIt: "Campo da Tennis & Veranda (Uso Esclusivo)",
    titleEn: "Regulation Tennis Court & Veranda (Exclusive Use)",
    descIt: "Campo da tennis regolamentare ad uso esclusivo con veranda coperta per gli spettatori e splendida vista serale sull'intera tenuta.",
    descEn: "Private regulation tennis court for exclusive guest use with shaded spectator veranda and evening views.",
    photoIds: [10, 11, 9]
  },
  cellar: {
    icon: "🍷",
    titleIt: "Cantina Storica nel Tufo",
    titleEn: "Historic Tuff Wine Cellar",
    descIt: "Suggestivo ipogeo scavato nel tufo marsalese con ingresso scenografico dal salone tramite cancello in ferro battuto.",
    descEn: "Subterranean cellar carved into Marsala tuff stone with wrought-iron entrance from the living lounge.",
    photoIds: [20, 14]
  },
  outdoor: {
    icon: "🌿",
    titleIt: "Spazi Aperti, Pineta & Terrazze",
    titleEn: "Outdoor Spaces, Pine Grove & Terraces",
    descIt: "Ampi spazi esterni tra pineta mediterranea, scalinate panoramiche in cotto, logge coperte vista Egadi e forno a legna in pietra per serate all'aperto.",
    descEn: "Generous outdoor areas across Mediterranean pine groves, scenic terracotta steps, covered Egadi-view terraces, and a stone wood-fired pizza oven.",
    photoIds: [12, 8, 3, 7]
  },
  interior: {
    icon: "🛋️",
    titleIt: "Salone Nobile, Camino & Sala da Pranzo",
    titleEn: "Grand Living Room, Fireplace & Dining Hall",
    descIt: "Gli ampi spazi interni con parquet a spina di pesce, camino a legna e tavolo conviviale per oltre 10 ospiti.",
    descEn: "Spacious interiors featuring herringbone hardwood floors, brick fireplace, and dining table for 10+ guests.",
    photoIds: [13, 14, 15]
  },
  rooms: {
    icon: "🛏️",
    titleIt: "Camere Panoramiche & Bagni di Charme",
    titleEn: "Panoramic Bedrooms & Bathrooms",
    descIt: "Le camere da letto affacciate sul mare e sulle Isole Egadi insieme ai due bagni (vasca freestanding d'epoca e doccia moderna in cristallo).",
    descEn: "Sea-view bedrooms overlooking the Egadi Islands paired with two bathrooms (vintage clawfoot tub and modern walk-in shower).",
    photoIds: [16, 17, 18, 19]
  }
};

let activeLightboxIndex = 0;
let filteredItems = [...galleryItems];
let activeLightboxItems = [...galleryItems];

function initSpaceAlbums() {
  const albumDialog = document.getElementById('space-album-dialog');
  const closeBtn = document.getElementById('space-album-close');

  if (closeBtn && albumDialog) {
    closeBtn.addEventListener('click', () => albumDialog.close());
  }

  document.querySelectorAll('.amenity-card[data-space]').forEach(card => {
    const spaceKey = card.dataset.space;
    const openAlbum = () => openSpaceAlbum(spaceKey);

    card.addEventListener('click', openAlbum);
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openAlbum();
      }
    });
  });
}

function openSpaceAlbum(spaceKey) {
  const album = spaceAlbums[spaceKey];
  const dialog = document.getElementById('space-album-dialog');
  const iconEl = document.getElementById('space-album-icon');
  const titleEl = document.getElementById('space-album-title');
  const countEl = document.getElementById('space-album-count');
  const descEl = document.getElementById('space-album-desc');
  const gridEl = document.getElementById('space-album-grid');

  if (!album || !dialog || !gridEl) return;

  const albumPhotos = album.photoIds
    .map(id => galleryItems.find(item => item.id === id))
    .filter(Boolean);

  if (iconEl) iconEl.textContent = album.icon;
  if (titleEl) titleEl.textContent = currentLang === 'it' ? album.titleIt : album.titleEn;
  if (descEl) descEl.textContent = currentLang === 'it' ? album.descIt : album.descEn;
  if (countEl) {
    countEl.textContent = currentLang === 'it'
      ? `${albumPhotos.length} foto nella cartella`
      : `${albumPhotos.length} photos in folder`;
  }

  gridEl.innerHTML = '';
  albumPhotos.forEach((item, idx) => {
    const title = currentLang === 'it' ? item.titleIt : item.titleEn;
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'space-album-card';
    card.setAttribute('aria-label', title);

    card.innerHTML = `
      <div class="space-album-thumb">
        <img src="${item.src}" alt="${title}" loading="lazy">
        <span class="space-album-zoom-badge" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
        </span>
      </div>
      <div class="space-album-caption">${title}</div>
    `;

    card.addEventListener('click', () => {
      openLightbox(idx, albumPhotos);
    });

    gridEl.appendChild(card);
  });

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  }
}

function initGallery() {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  renderGalleryGrid('all');

  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.currentTarget.classList.add('active');
      const cat = e.currentTarget.dataset.filter;
      renderGalleryGrid(cat);
    });
  });
}

function renderGalleryGrid(category) {
  const grid = document.getElementById('gallery-grid');
  if (!grid) return;

  filteredItems = category === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === category);

  grid.innerHTML = '';

  filteredItems.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'gallery-item';
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', currentLang === 'it' ? item.titleIt : item.titleEn);

    const title = currentLang === 'it' ? item.titleIt : item.titleEn;
    const desc = currentLang === 'it' ? item.descIt : item.descEn;

    card.innerHTML = `
      <img src="${item.src}" alt="${title}" loading="lazy">
      <div class="gallery-item-overlay">
        <div class="gallery-item-caption">${title}</div>
        <div class="gallery-item-category">${desc}</div>
      </div>
      <div class="gallery-item-zoom" aria-hidden="true" title="Clicca per ingrandire">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(index, filteredItems));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index, filteredItems);
      }
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   3. CINEMA LIGHTBOX WITH CLAMPED PAN, POINTER ZOOM, SWIPE & THUMBNAILS
   ========================================================================== */

let currentZoom = 1;
let panX = 0;
let panY = 0;
let swipeOffsetX = 0;
let isDragging = false;
let isSwiping = false;
let startDragX = 0;
let startDragY = 0;
let rafPending = false;

function clampPan() {
  const wrap = document.getElementById('lightbox-img-wrap');
  const img = document.getElementById('lightbox-img');
  if (!wrap || !img || currentZoom <= 1) {
    panX = 0;
    panY = 0;
    return;
  }

  const maxX = Math.max(0, (img.clientWidth * currentZoom - wrap.clientWidth) / 2);
  const maxY = Math.max(0, (img.clientHeight * currentZoom - wrap.clientHeight) / 2);

  panX = Math.min(Math.max(panX, -maxX), maxX);
  panY = Math.min(Math.max(panY, -maxY), maxY);
}

function scheduleTransformRender() {
  if (rafPending) return;
  rafPending = true;
  requestAnimationFrame(() => {
    rafPending = false;
    const img = document.getElementById('lightbox-img');
    if (img) {
      const tx = currentZoom <= 1 ? swipeOffsetX : panX;
      const ty = currentZoom <= 1 ? 0 : panY;
      img.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${currentZoom})`;
    }
  });
}

function applyZoom(newZoom, focusClientX = null, focusClientY = null) {
  const minZoom = 1;
  const maxZoom = 3.5;
  const prevZoom = currentZoom;
  currentZoom = Math.min(Math.max(newZoom, minZoom), maxZoom);
  currentZoom = Math.round(currentZoom * 100) / 100;

  const wrap = document.getElementById('lightbox-img-wrap');
  const zoomLevel = document.getElementById('lightbox-zoom-level');
  const zoomInBtn = document.getElementById('lightbox-zoom-in');
  const zoomOutBtn = document.getElementById('lightbox-zoom-out');

  if (currentZoom <= 1.02) {
    currentZoom = 1;
    panX = 0;
    panY = 0;
  } else if (wrap && focusClientX !== null && focusClientY !== null && prevZoom !== currentZoom) {
    const rect = wrap.getBoundingClientRect();
    const offsetX = focusClientX - rect.left - rect.width / 2;
    const offsetY = focusClientY - rect.top - rect.height / 2;
    const ratio = currentZoom / prevZoom;
    panX = panX * ratio - offsetX * (ratio - 1);
    panY = panY * ratio - offsetY * (ratio - 1);
  }

  swipeOffsetX = 0;
  clampPan();
  scheduleTransformRender();

  if (wrap) {
    wrap.classList.toggle('is-zoomed', currentZoom > 1);
  }
  if (zoomLevel) {
    zoomLevel.textContent = `${Math.round(currentZoom * 100)}%`;
  }
  if (zoomInBtn) {
    zoomInBtn.disabled = currentZoom >= maxZoom;
  }
  if (zoomOutBtn) {
    zoomOutBtn.disabled = currentZoom <= minZoom;
  }
}

function resetZoom() {
  panX = 0;
  panY = 0;
  swipeOffsetX = 0;
  isDragging = false;
  isSwiping = false;
  const wrap = document.getElementById('lightbox-img-wrap');
  if (wrap) {
    wrap.classList.remove('is-interacting', 'is-dragging');
  }
  applyZoom(1);
}

function initLightbox() {
  const dialog = document.getElementById('gallery-lightbox');
  if (!dialog) return;

  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');
  const zoomInBtn = document.getElementById('lightbox-zoom-in');
  const zoomOutBtn = document.getElementById('lightbox-zoom-out');
  const zoomResetBtn = document.getElementById('lightbox-zoom-reset');
  const wrap = document.getElementById('lightbox-img-wrap');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      dialog.close();
      resetZoom();
    });
  }

  dialog.addEventListener('close', () => resetZoom());

  if (prevBtn) prevBtn.addEventListener('click', () => navigateLightbox(-1));
  if (nextBtn) nextBtn.addEventListener('click', () => navigateLightbox(1));

  if (zoomInBtn) {
    zoomInBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyZoom(currentZoom + 0.6);
    });
  }

  if (zoomOutBtn) {
    zoomOutBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      applyZoom(currentZoom - 0.6);
    });
  }

  if (zoomResetBtn) {
    zoomResetBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      resetZoom();
    });
  }

  if (wrap) {
    // 1. Double Click to Zoom (desktop pointer only; touch uses classic pinch-to-zoom)
    wrap.addEventListener('dblclick', (e) => {
      if (window.matchMedia('(pointer: coarse)').matches) return;
      e.preventDefault();
      if (currentZoom > 1.05) {
        resetZoom();
      } else {
        applyZoom(2.25, e.clientX, e.clientY);
      }
    });

    // 2. Mouse Wheel to Zoom (pointer-centered)
    wrap.addEventListener('wheel', (e) => {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.3 : -0.3;
      applyZoom(currentZoom + delta, e.clientX, e.clientY);
    }, { passive: false });

    // 3. Mouse Drag to Pan when Zoomed
    wrap.addEventListener('mousedown', (e) => {
      if (currentZoom <= 1) return;
      e.preventDefault();
      isDragging = true;
      startDragX = e.clientX - panX;
      startDragY = e.clientY - panY;
      wrap.classList.add('is-dragging', 'is-interacting');
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDragging || currentZoom <= 1) return;
      panX = e.clientX - startDragX;
      panY = e.clientY - startDragY;
      clampPan();
      scheduleTransformRender();
    });

    window.addEventListener('mouseup', () => {
      if (isDragging) {
        isDragging = false;
        wrap.classList.remove('is-dragging', 'is-interacting');
      }
    });

    // 4. Touch Gestures: Classic Pinch-to-Zoom, Pan & Smooth Horizontal Swipe
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartPanX = 0;
    let touchStartPanY = 0;
    let touchDistance = 0;
    let initialTouchZoom = 1;
    let pinchCenterX = 0;
    let pinchCenterY = 0;

    wrap.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        const touch = e.touches[0];
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;

        if (currentZoom > 1) {
          isDragging = true;
          isSwiping = false;
          touchStartPanX = panX;
          touchStartPanY = panY;
          wrap.classList.add('is-dragging', 'is-interacting');
        } else {
          isSwiping = true;
          swipeOffsetX = 0;
          wrap.classList.add('is-interacting');
        }
      } else if (e.touches.length === 2) {
        e.preventDefault();
        isDragging = false;
        isSwiping = false;
        swipeOffsetX = 0;
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        touchDistance = Math.hypot(dx, dy);
        initialTouchZoom = currentZoom;
        pinchCenterX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
        pinchCenterY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
        wrap.classList.add('is-interacting');
      }
    }, { passive: false });

    wrap.addEventListener('touchmove', (e) => {
      if (e.touches.length === 1 && currentZoom > 1 && isDragging) {
        e.preventDefault();
        panX = touchStartPanX + (e.touches[0].clientX - touchStartX);
        panY = touchStartPanY + (e.touches[0].clientY - touchStartY);
        clampPan();
        scheduleTransformRender();
      } else if (e.touches.length === 1 && currentZoom <= 1 && isSwiping) {
        e.preventDefault();
        swipeOffsetX = e.touches[0].clientX - touchStartX;
        scheduleTransformRender();
      } else if (e.touches.length === 2 && touchDistance > 0) {
        e.preventDefault();
        const dx = e.touches[0].clientX - e.touches[1].clientX;
        const dy = e.touches[0].clientY - e.touches[1].clientY;
        const dist = Math.hypot(dx, dy);
        const scaleFactor = dist / touchDistance;
        applyZoom(initialTouchZoom * scaleFactor, pinchCenterX, pinchCenterY);
      }
    }, { passive: false });

    wrap.addEventListener('touchend', (e) => {
      if (e.touches.length === 1) {
        touchDistance = 0;
        if (currentZoom > 1) {
          isDragging = true;
          isSwiping = false;
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
          touchStartPanX = panX;
          touchStartPanY = panY;
          wrap.classList.add('is-dragging', 'is-interacting');
          return;
        }
      }

      wrap.classList.remove('is-dragging', 'is-interacting');
      if (isDragging) {
        isDragging = false;
      }
      if (e.touches.length === 0) {
        touchDistance = 0;
        if (isSwiping && currentZoom <= 1) {
          const threshold = 55;
          if (swipeOffsetX < -threshold) {
            swipeOffsetX = 0;
            navigateLightbox(1);
          } else if (swipeOffsetX > threshold) {
            swipeOffsetX = 0;
            navigateLightbox(-1);
          } else {
            swipeOffsetX = 0;
            scheduleTransformRender();
          }
        }
        isSwiping = false;
      }
    }, { passive: true });
  }

  // Keyboard navigation inside open lightbox
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    } else if (e.key === '+' || e.key === '=') {
      applyZoom(currentZoom + 0.6);
    } else if (e.key === '-' || e.key === '_') {
      applyZoom(currentZoom - 0.6);
    } else if (e.key === '0') {
      resetZoom();
    }
  });
}

function openLightbox(index, itemsList = filteredItems) {
  const dialog = document.getElementById('gallery-lightbox');
  if (!dialog || !itemsList || !itemsList.length) return;

  activeLightboxItems = itemsList;
  activeLightboxIndex = Math.max(0, Math.min(index, activeLightboxItems.length - 1));
  resetZoom();
  renderLightboxThumbs();
  updateLightboxContent();

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  }
}

function navigateLightbox(direction) {
  if (!activeLightboxItems.length) return;
  activeLightboxIndex = (activeLightboxIndex + direction + activeLightboxItems.length) % activeLightboxItems.length;
  resetZoom();
  updateLightboxContent();
}

function renderLightboxThumbs() {
  const thumbsEl = document.getElementById('lightbox-thumbs');
  if (!thumbsEl) return;

  thumbsEl.innerHTML = '';
  activeLightboxItems.forEach((item, idx) => {
    const title = currentLang === 'it' ? item.titleIt : item.titleEn;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'lightbox-thumb-btn';
    btn.setAttribute('aria-label', title);
    btn.innerHTML = `<img src="${item.src}" alt="${title}" loading="lazy">`;
    btn.addEventListener('click', () => {
      activeLightboxIndex = idx;
      resetZoom();
      updateLightboxContent();
    });
    thumbsEl.appendChild(btn);
  });
}

function preloadAdjacentLightboxImages() {
  if (activeLightboxItems.length < 2) return;
  const nextIdx = (activeLightboxIndex + 1) % activeLightboxItems.length;
  const prevIdx = (activeLightboxIndex - 1 + activeLightboxItems.length) % activeLightboxItems.length;
  [nextIdx, prevIdx].forEach(i => {
    const preloadImg = new Image();
    preloadImg.src = activeLightboxItems[i].src;
  });
}

function updateLightboxContent() {
  const item = activeLightboxItems[activeLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const counter = document.getElementById('lightbox-counter');
  const desc = document.getElementById('lightbox-desc');

  if (img) {
    img.src = item.src;
    img.alt = currentLang === 'it' ? item.titleIt : item.titleEn;
  }

  if (title) {
    title.textContent = currentLang === 'it' ? item.titleIt : item.titleEn;
  }

  if (desc) {
    desc.textContent = currentLang === 'it' ? item.descIt : item.descEn;
  }

  if (counter) {
    counter.textContent = `${activeLightboxIndex + 1} / ${activeLightboxItems.length}`;
  }

  const thumbs = document.querySelectorAll('.lightbox-thumb-btn');
  thumbs.forEach((btn, idx) => {
    const isActive = idx === activeLightboxIndex;
    btn.classList.toggle('active', isActive);
    if (isActive) {
      btn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
    }
  });

  preloadAdjacentLightboxImages();
}

/* ==========================================================================
   4. MODERN WEB GUIDANCE DIALOG FALLBACKS
   Light-dismiss check if closedby="any" is not natively available in browser
   ========================================================================== */

function initDialogFallbacks() {
  if (!('closedBy' in HTMLDialogElement.prototype)) {
    const isOutside = (e, dlg) => {
      const r = dlg.getBoundingClientRect();
      return e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom;
    };

    document.querySelectorAll('dialog[closedby="any"]').forEach(dialog => {
      let pressedOutside = false;
      dialog.addEventListener('pointerdown', (e) => {
        pressedOutside = isOutside(e, dialog);
      });
      dialog.addEventListener('pointerup', (e) => {
        if (pressedOutside && isOutside(e, dialog)) {
          dialog.close();
        }
      });
    });
  }
}

/* ==========================================================================
   5. QR CODE GENERATOR & EXPORT
   Zero external network calls; uses local qrcode.min.js
   ========================================================================== */

function initQRCode() {
  const holder = document.getElementById('qr-canvas-holder');
  if (!holder || typeof QRCode === 'undefined') return;

  // Generate for current site URL or fallback to standard presentation URL
  const targetUrl = window.location.href.startsWith('http')
    ? window.location.href
    : 'https://villatimea.it';

  holder.innerHTML = '';
  const qrcode = new QRCode(holder, {
    text: targetUrl,
    width: 180,
    height: 180,
    colorDark: "#0e3b56",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });

  const downloadBtn = document.getElementById('qr-download-btn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      const img = holder.querySelector('img');
      const canvas = holder.querySelector('canvas');
      let dataUrl = '';

      if (img && img.src && img.src.startsWith('data:')) {
        dataUrl = img.src;
      } else if (canvas) {
        dataUrl = canvas.toDataURL('image/png');
      }

      if (dataUrl) {
        const a = document.createElement('a');
        a.href = dataUrl;
        a.download = 'QR-Villa-Timea-Marsala.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      }
    });
  }

  const printBtn = document.getElementById('qr-print-btn');
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

/* ==========================================================================
   6. BOOKING & INQUIRY FORM (WhatsApp & Email One-Click Generators)
   ========================================================================== */

function initBookingForm() {
  const waBtn = document.getElementById('send-whatsapp-btn');
  const emailBtn = document.getElementById('send-email-btn');

  const getFormData = () => {
    const name = document.getElementById('inq-name')?.value.trim() || 'Ospite';
    const email = document.getElementById('inq-email')?.value.trim() || '';
    const phone = document.getElementById('inq-phone')?.value.trim() || '';
    const checkin = document.getElementById('inq-checkin')?.value || 'Da definire';
    const checkout = document.getElementById('inq-checkout')?.value || 'Da definire';
    const guests = document.getElementById('inq-guests')?.value || '2';
    const notes = document.getElementById('inq-notes')?.value.trim() || 'Nessuna nota aggiuntiva';

    return { name, email, phone, checkin, checkout, guests, notes };
  };

  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const d = getFormData();
      const msg = `*Richiesta Info / Soggiorno - Villa Timea (Marsala)*\n\n` +
        `👤 *Ospite:* ${d.name}\n` +
        `📅 *Date:* ${d.checkin} ➔ ${d.checkout}\n` +
        `👥 *Numero Ospiti:* ${d.guests}\n` +
        `📞 *Recapito:* ${d.phone || d.email}\n` +
        `💬 *Note:* ${d.notes}\n\n` +
        `_Inviato dal sito ufficiale Villa Timea_`;

      const encoded = encodeURIComponent(msg);
      window.open(`https://wa.me/393349241047?text=${encoded}`, '_blank');
    });
  }

  if (emailBtn) {
    emailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const d = getFormData();
      const subject = encodeURIComponent(`Richiesta Disponibilità Villa Timea: ${d.name} (${d.checkin} - ${d.checkout})`);
      const body = encodeURIComponent(
        `Gentile staff di Villa Timea,\n\n` +
        `Vorrei richiedere disponibilità e preventivo per un soggiorno presso Villa Timea:\n\n` +
        `- Nome: ${d.name}\n` +
        `- Date desiderate: dal ${d.checkin} al ${d.checkout}\n` +
        `- Numero di ospiti: ${d.guests}\n` +
        `- Telefono / WhatsApp: ${d.phone}\n` +
        `- Email: ${d.email}\n\n` +
        `Messaggio / Note:\n${d.notes}\n\n` +
        `In attesa di un vostro gentile riscontro,\n${d.name}`
      );

      window.location.href = `mailto:villatimea@gmail.com,Info@larosadeiventibb.com?subject=${subject}&body=${body}`;
    });
  }
}

/* ==========================================================================
   7. INTERACTIVE LEAFLET MAP (Contrada Fontanelle, Marsala)
   ========================================================================== */

function initMap() {
  const mapEl = document.getElementById('map');
  if (!mapEl || typeof L === 'undefined') return;

  // Coordinates: Contrada Fontanelle, Marsala (TP)
  const lat = 37.81835;
  const lng = 12.50655;

  const map = L.map('map', {
    scrollWheelZoom: false
  }).setView([lat, lng], 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  const customIcon = L.divIcon({
    className: 'custom-map-pin',
    html: `
      <div style="
        background: #d97036;
        color: #fff;
        width: 38px;
        height: 38px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 14px rgba(0,0,0,0.3);
        border: 2px solid #fff;
      ">
        <span style="transform: rotate(45deg); font-size: 18px;">🏰</span>
      </div>
    `,
    iconSize: [38, 38],
    iconAnchor: [19, 38]
  });

  const marker = L.marker([lat, lng], { icon: customIcon }).addTo(map);

  marker.bindPopup(`
    <div style="font-family: sans-serif; padding: 4px; min-width: 190px;">
      <strong style="color: #0e3b56; font-size: 1.1rem; display: block; margin-bottom: 4px;">Villa Timea</strong>
      <p style="font-size: 0.85rem; color: #53697a; margin-bottom: 8px;">Contrada Fontanelle 231, Marsala (TP)</p>
      <a href="https://maps.app.goo.gl/ddpPGVBYh4fJH2ks8" target="_blank" rel="noopener" style="display: inline-block; background: #0e3b56; color: #fff; padding: 4px 10px; border-radius: 20px; font-size: 0.78rem; font-weight: 600; text-decoration: none;">Apri in Google Maps ➔</a>
    </div>
  `).openPopup();
}

/* ==========================================================================
   8. HEADER SCROLL & MOBILE DRAWER
   ========================================================================== */

function initHeader() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

function initMobileNav() {
  const openBtn = document.getElementById('menu-open-btn');
  const dialog = document.getElementById('mobile-nav-dialog');
  const closeBtn = document.getElementById('menu-close-btn');

  if (openBtn && dialog) {
    openBtn.addEventListener('click', () => {
      if (typeof dialog.showModal === 'function') {
        dialog.showModal();
      }
    });
  }

  if (closeBtn && dialog) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  if (dialog) {
    dialog.querySelectorAll('.mob-nav-list a').forEach(link => {
      link.addEventListener('click', () => dialog.close());
    });
  }
}

/* ==========================================================================
   9. TEMPORARY THEME & STYLE PALETTE PICKER
   Provvisorio: permette al cliente di testare 5 varianti colore in tempo reale.
   ========================================================================== */

function initThemePicker() {
  const triggers = [
    document.getElementById('themePickerPill'),
    document.getElementById('navThemeBtn'),
    document.getElementById('topThemeBtn'),
    document.getElementById('mobNavThemeBtn')
  ].filter(Boolean);

  const panel = document.getElementById('themePickerPanel');
  const overlay = document.getElementById('themePickerOverlay');
  const closeBtn = document.getElementById('themePickerClose');
  const cards = document.querySelectorAll('.theme-card');

  if (!panel) return;

  const togglePanel = (open) => {
    const isOpen = open !== undefined ? open : !panel.classList.contains('open');
    panel.classList.toggle('open', isOpen);
    if (overlay) overlay.classList.toggle('open', isOpen);
  };

  // 1. Carica palette salvata o predefinita
  const savedTheme = localStorage.getItem('villa_theme') || 'default';
  applyTheme(savedTheme);

  // 2. Apri / Chiudi pannello con qualsiasi tasto dedicato
  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const mobNav = document.getElementById('mobile-nav-dialog');
      if (mobNav && typeof mobNav.close === 'function' && mobNav.open) {
        mobNav.close();
      }
      togglePanel();
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => togglePanel(false));
  }

  if (overlay) {
    overlay.addEventListener('click', () => togglePanel(false));
  }

  // Chiudi cliccando fuori dal pannello
  document.addEventListener('click', (e) => {
    const isTrigger = triggers.some(btn => btn.contains(e.target));
    if (!panel.contains(e.target) && !isTrigger) {
      togglePanel(false);
    }
  });

  // Chiudi con tasto Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      togglePanel(false);
    }
  });

  // 3. Selezione e cambio palette in tempo reale
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const theme = card.dataset.theme || 'default';
      applyTheme(theme);
      localStorage.setItem('villa_theme', theme);
    });
  });

  function applyTheme(theme) {
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }

    cards.forEach(c => {
      const isMatch = (c.dataset.theme || 'default') === theme;
      c.classList.toggle('active', isMatch);
      c.setAttribute('aria-checked', isMatch ? 'true' : 'false');
    });
  }
}
