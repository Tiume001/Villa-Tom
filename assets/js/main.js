/**
 * VILLA TIMEA - Marsala (Sicilia)
 * Modern, accessible client-side interactive logic
 * Incorporating Modern Web Guidance standards
 */

document.addEventListener('DOMContentLoaded', () => {
  initI18n();
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

    galleryTag: "Tour Fotografico",
    galleryTitle: "Scorci di Villa Timea",
    galleryDesc: "Sfoglia le immagini della proprietà: piscina e tennis ad uso esclusivo, salone, camere panoramiche e cantina storica.",
    filterAll: "Tutte le foto",
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

    galleryTag: "Photo Tour",
    galleryTitle: "Glimpses of Villa Timea",
    galleryDesc: "Browse high-resolution photographs: swimming pool, tennis court, living room, panoramic bedrooms, and historic cellar.",
    filterAll: "All Photos",
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
   2. GALLERY DATA & FILTERING
   ========================================================================== */

const galleryItems = [
  {
    id: 1,
    src: "assets/images/pool-panorama.jpg",
    category: "pool",
    titleIt: "Piscina Panoramica ad Uso Esclusivo & Trampolino",
    titleEn: "Exclusive Private Pool & Diving Board",
    descIt: "Ampia piscina ad uso esclusivo per gli ospiti immersa nel verde con solarium e vista aperta sul mare.",
    descEn: "Generous swimming pool for exclusive guest use surrounded by lush greenery with sea view sun deck."
  },
  {
    id: 2,
    src: "assets/images/pool-terrace.jpg",
    category: "pool",
    titleIt: "Scorcio Piscina e Palme",
    titleEn: "Pool & Palm Tree Haven",
    descIt: "Ombra rilassante della veranda con vista sull'acqua e sulle isole.",
    descEn: "Refreshing covered veranda view of the pool and distant Egadi islands."
  },
  {
    id: 3,
    src: "assets/images/terrace-view.jpg",
    category: "pool",
    titleIt: "Loggia Panoramica sulle Egadi",
    titleEn: "Panoramic Veranda overlooking Egadi",
    descIt: "Terrazza coperta panoramica per cene e aperitivi con vista tramonto.",
    descEn: "Covered panoramic terrace perfect for sunset dining and Sicilian wine."
  },
  {
    id: 4,
    src: "assets/images/panoramic-steps.jpg",
    category: "pool",
    titleIt: "Scalinata Panoramica verso la Piscina",
    titleEn: "Scenic Spiral Steps to Pool",
    descIt: "Scorcio architettonico della villa affacciata sulla piana di Marsala.",
    descEn: "Architectural view overlooking the terracotta patios and coastal plain."
  },
  {
    id: 5,
    src: "assets/images/tennis-court.jpg",
    category: "sports",
    titleIt: "Campo da Tennis ad Uso Esclusivo",
    titleEn: "Exclusive Regulation Tennis Court",
    descIt: "Campo da tennis regolamentare riservato ad uso esclusivo degli ospiti della villa.",
    descEn: "Full-size private tennis court exclusively reserved for villa guests."
  },
  {
    id: 6,
    src: "assets/images/tennis-veranda.jpg",
    category: "sports",
    titleIt: "Veranda Tennis & Relax",
    titleEn: "Tennis Veranda & Chillout",
    descIt: "Area relax coperta affacciata direttamente sul campo da tennis e sulla piscina.",
    descEn: "Shaded spectator veranda overlooking both tennis court and pool."
  },
  {
    id: 7,
    src: "assets/images/outdoor-pizza-oven.jpg",
    category: "sports",
    titleIt: "Forno a Legna & Giardino in Pietra",
    titleEn: "Wood-Fired Pizza Oven & Stone Garden",
    descIt: "Forno tradizionale in pietra lavica e tufo per pizze all'aperto e barbecue.",
    descEn: "Authentic Sicilian stone pizza oven and outdoor BBQ area amidst pines."
  },
  {
    id: 8,
    src: "assets/images/living-room-main.jpg",
    category: "interior",
    titleIt: "Grande Salone con Camino & Parquet",
    titleEn: "Grand Living Room with Fireplace",
    descIt: "Spazio giorno luminoso ed elegante con divani in lino e camino d'atmosfera.",
    descEn: "Spacious, sunlit lounge with cozy linen sofas and rustic brick fireplace."
  },
  {
    id: 9,
    src: "assets/images/living-room-fireplace.jpg",
    category: "interior",
    titleIt: "Zona Relax & Salotto",
    titleEn: "Living Lounge & Wine Cellar Entrance",
    descIt: "Pavimenti in parquet di legno massello e accesso scenografico alla cantina.",
    descEn: "Hardwood herringbone floors and wrought iron gate leading to the cellar."
  },
  {
    id: 10,
    src: "assets/images/dining-room.jpg",
    category: "interior",
    titleIt: "Sala da Pranzo Conviviale",
    titleEn: "Convivial Dining Hall",
    descIt: "Tavolo da pranzo per oltre 10 ospiti, ideale per ritrovi con amici e famiglie.",
    descEn: "Large dining table seating 10+ guests for memorable group dinners."
  },
  {
    id: 11,
    src: "assets/images/bedroom-window-view.jpg",
    category: "rooms",
    titleIt: "Camera con Vista sulle Isole Egadi",
    titleEn: "Bedroom with Egadi Island Views",
    descIt: "Risvegliarsi ogni mattina ammirando Favignana e il mare all'orizzonte.",
    descEn: "Wake up each morning gazing out to Favignana Island and the sea."
  },
  {
    id: 12,
    src: "assets/images/bedroom-master.jpg",
    category: "rooms",
    titleIt: "Camera Matrimoniale di Charme",
    titleEn: "Master Bedroom with Antique Charm",
    descIt: "Letto in ferro battuto decorato, armadio d'epoca e climatizzazione autonoma.",
    descEn: "Ornate wrought iron bed, historic mirrored armoire and air conditioning."
  },
  {
    id: 13,
    src: "assets/images/bathroom-vintage.jpg",
    category: "rooms",
    titleIt: "Bagno d'Epoca con Vasca in Ghisa",
    titleEn: "Vintage Bath with Freestanding Tub",
    descIt: "Vasca freestanding con piedini, maioliche e travi in legno a vista.",
    descEn: "Classic clawfoot soaking tub, handcrafted tiles, and rustic wood beams."
  },
  {
    id: 14,
    src: "assets/images/bathroom-modern.jpg",
    category: "rooms",
    titleIt: "Bagno Moderno con Doccia in Cristallo",
    titleEn: "Modern En-Suite Shower Bathroom",
    descIt: "Box doccia moderno, sanitari sospesi e finiture fresche.",
    descEn: "Glass-enclosed walk-in shower and contemporary fixtures."
  },
  {
    id: 15,
    src: "assets/images/wine-cellar.jpg",
    category: "cellar",
    titleIt: "Cantina Storica Scavata nel Tufo",
    titleEn: "Historic Cellar Carved in Tuff Stone",
    descIt: "Un autentico tesoro sotterraneo che celebra la tradizione del vino Marsala.",
    descEn: "An authentic subterranean tuff cellar honoring historic Marsala wines."
  }
];

let activeLightboxIndex = 0;
let filteredItems = [...galleryItems];

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
      <div class="gallery-item-zoom" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line><line x1="11" y1="8" x2="11" y2="14"></line><line x1="8" y1="11" x2="14" y2="11"></line></svg>
      </div>
    `;

    card.addEventListener('click', () => openLightbox(index));
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(index);
      }
    });

    grid.appendChild(card);
  });
}

/* ==========================================================================
   3. ACCESSIBLE DIALOG LIGHTBOX
   Compliant with Modern Web Guidance (<dialog>, closedby="any", fallback)
   ========================================================================== */

function initLightbox() {
  const dialog = document.getElementById('gallery-lightbox');
  if (!dialog) return;

  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (closeBtn) {
    closeBtn.addEventListener('click', () => dialog.close());
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => navigateLightbox(-1));
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => navigateLightbox(1));
  }

  // Keyboard navigation inside open lightbox
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      navigateLightbox(-1);
    } else if (e.key === 'ArrowRight') {
      navigateLightbox(1);
    }
  });

  // Touch swipe support for mobile
  let touchStartX = 0;
  let touchEndX = 0;

  dialog.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  dialog.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      navigateLightbox(1); // Swipe left -> Next
    } else if (touchEndX - touchStartX > 50) {
      navigateLightbox(-1); // Swipe right -> Prev
    }
  }, { passive: true });
}

function openLightbox(index) {
  const dialog = document.getElementById('gallery-lightbox');
  if (!dialog) return;

  activeLightboxIndex = index;
  updateLightboxContent();

  if (typeof dialog.showModal === 'function') {
    dialog.showModal();
  }
}

function navigateLightbox(direction) {
  if (!filteredItems.length) return;
  activeLightboxIndex = (activeLightboxIndex + direction + filteredItems.length) % filteredItems.length;
  updateLightboxContent();
}

function updateLightboxContent() {
  const item = filteredItems[activeLightboxIndex];
  if (!item) return;

  const img = document.getElementById('lightbox-img');
  const title = document.getElementById('lightbox-title');
  const counter = document.getElementById('lightbox-counter');
  const desc = document.getElementById('lightbox-desc');

  if (img) {
    img.style.opacity = '0.3';
    setTimeout(() => {
      img.src = item.src;
      img.alt = currentLang === 'it' ? item.titleIt : item.titleEn;
      img.style.opacity = '1';
    }, 120);
  }

  if (title) {
    title.textContent = currentLang === 'it' ? item.titleIt : item.titleEn;
  }

  if (desc) {
    desc.textContent = currentLang === 'it' ? item.descIt : item.descEn;
  }

  if (counter) {
    counter.textContent = `${activeLightboxIndex + 1} / ${filteredItems.length}`;
  }
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
  const pill = document.getElementById('themePickerPill');
  const panel = document.getElementById('themePickerPanel');
  const closeBtn = document.getElementById('themePickerClose');
  const cards = document.querySelectorAll('.theme-card');

  if (!pill || !panel) return;

  // 1. Carica palette salvata o predefinita
  const savedTheme = localStorage.getItem('villa_theme') || 'default';
  applyTheme(savedTheme);

  // 2. Apri / Chiudi pannello con il tasto fluttuante
  pill.addEventListener('click', (e) => {
    e.stopPropagation();
    panel.classList.toggle('open');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      panel.classList.remove('open');
    });
  }

  // Chiudi cliccando fuori dal pannello
  document.addEventListener('click', (e) => {
    if (!panel.contains(e.target) && !pill.contains(e.target)) {
      panel.classList.remove('open');
    }
  });

  // Chiudi con tasto Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && panel.classList.contains('open')) {
      panel.classList.remove('open');
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
      c.classList.toggle('active', (c.dataset.theme || 'default') === theme);
    });
  }
}
