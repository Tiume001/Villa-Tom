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
  initBookingForm();
  initMap();
  initHeader();
  initMobileNav();
});

/* ==========================================================================
   1. DICTIONARY & MULTILINGUAL SUPPORT (IT / EN)
   ========================================================================== */

const i18nData = {
  it: {
    metaTitle: "Villa Timea Piscina e Tennis Vista Isole Egadi | Marsala (Sicilia)",
    topWelcome: "Benvenuti a Villa Timea • Marsala, Sicilia",
    topCall: "Chiamaci / WhatsApp",
    navAbout: "La Villa",
    navComfort: "Comfort & Spazi",
    navGallery: "Galleria",
    navTerritory: "Dintorni",
    navContact: "Contatti",
    btnBookNow: "Richiedi Disponibilità",

    heroBadge: "Marsala • Vista Isole Egadi",
    heroTitle: "Villa Timea Piscina e Tennis Vista Isole Egadi",
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
    storyLead: "Immersa nella quiete della campagna marsalese, Villa Timea è una proprietà unica con 5 camere da letto (di cui una in dependance privata) e 4 bagni, dove gli ampi spazi, la bellezza del paesaggio e il piacere della vita all'aria aperta si fondono in un'esperienza straordinaria.",
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
    footerRights: "Tutti i diritti riservati. Villa Timea Marsala.",

    mobWaDirect: "💬 Chat WhatsApp Diretta",
    btnWaDirect: "💬 WhatsApp Diretto",
    btnCallNow: "📞 Chiama Ora",
    statPrivacyLabel: "Privacy & Relax Esclusivo",
    statGuestsLabel: "Ospiti & Grandi Spazi",
    statRoomsNum: "5 Camere",
    statRoomsLabel: "Da letto (incl. Dependance)",
    statBathsNum: "4 Bagni",
    statBathsLabel: "Completi di charme",

    amPoolTag: "Outdoor",
    amPoolCount: "📷 9 foto",
    amPoolTitle: "Piscina Panoramica (Uso Esclusivo)",
    amPoolDesc: "Grande vasca ad uso totalmente esclusivo per gli ospiti della villa, immersa tra palme e vegetazione mediterranea, completa di trampolino per i tuffi, lettini prendisole e solarium con vista aperta sulle Isole Egadi.",
    amPoolChip1: "Uso Esclusivo Ospiti",
    amPoolChip2: "Trampolino tuffi",
    amPoolChip3: "Solarium con lettini",
    amPoolChip4: "Vista aperta sulle Egadi",
    amPoolChip5: "Privacy assoluta",

    amTennisTag: "Sport & Fitness",
    amTennisCount: "📷 3 foto",
    amTennisTitle: "Campo da Tennis (Uso Esclusivo)",
    amTennisDesc: "Campo da tennis regolamentare privato, riservato ad uso esclusivo degli ospiti della villa per partite, tornei amichevoli o sessioni di allenamento con la fresca brezza collinare e senza condivisione di spazi.",
    amTennisChip1: "Uso Esclusivo Ospiti",
    amTennisChip2: "Misure Regolamentari",
    amTennisChip3: "Veranda spettatori",
    amTennisChip4: "Massima Privacy",

    amCellarTag: "Tradizione Siciliana",
    amCellarCount: "📷 2 foto",
    amCellarTitle: "Cantina Storica nel Tufo",
    amCellarDesc: "Un suggestivo ipogeo scavato nella roccia di tufo marsalese con cancello in ferro battuto, custode delle migliori annate di vino siciliano.",
    amCellarChip1: "Scavata nella roccia",
    amCellarChip2: "Bottiglie storiche Marsala",
    amCellarChip3: "Atmosfera autentica",
    amCellarChip4: "Clima fresco naturale",

    amOutdoorTag: "Giardino & Terrazze",
    amOutdoorCount: "📷 4 foto",
    amOutdoorTitle: "Spazi Aperti, Pineta & Terrazze",
    amOutdoorDesc: "Ampi spazi esterni tra pineta mediterranea, scalinate panoramiche e logge coperte con vista sulle Isole Egadi, completi di forno a legna in pietra per cene all'aperto.",
    amOutdoorChip1: "Pineta & Giardino",
    amOutdoorChip2: "Terrazze Panoramiche",
    amOutdoorChip3: "Forno a Legna",
    amOutdoorChip4: "Cene all'aperto",

    amInteriorTag: "Spazi Interni",
    amInteriorCount: "📷 3 foto",
    amInteriorTitle: "Salone Nobile con Camino",
    amInteriorDesc: "Grande salone con pavimenti in parquet a spina di pesce, divani confortevoli, camino in mattoni a vista e tavolo da pranzo per oltre 10 persone.",
    amInteriorChip1: "Parquet pregiato",
    amInteriorChip2: "Camino a legna",
    amInteriorChip3: "Tavolo 10+ coperti",
    amInteriorChip4: "Luminosità naturale",

    amRoomsTag: "Notte & Benessere",
    amRoomsCount: "📷 4 foto",
    amRoomsTitle: "Camere Panoramiche & Bagni di Charme",
    amRoomsDesc: "5 camere da letto (di cui una in dependance privata) e 4 bagni con vista sul mare e sulle isole, arredi d'epoca, aria condizionata e vasca in ghisa vintage o doccia moderna.",
    amRoomsChip1: "5 Camere da Letto",
    amRoomsChip2: "4 Bagni",
    amRoomsChip3: "Dependance Inclusa",
    amRoomsChip4: "Vista Isole Egadi",
    amRoomsChip5: "Aria Condizionata",

    lightboxHint: "🔍 Doppio click o rotella per zoom • Trascina per muoverti",

    terr1Title: "Isole Egadi (Favignana, Levanzo e Marettimo)",
    terr1Desc: "Visibili direttamente dalle terrazze della villa! L'arcipelago delle Egadi — Favignana con le sue celebri cale turchesi (Cala Rossa, Cala Azzurra), la caratteristica Levanzo e la selvaggia ed incontaminata Marettimo con le sue grotte marine — è comodamente raggiungibile: l'imbarco degli aliscafi dal porto di Marsala dista solo 10 minuti di auto.",
    terr1Dist: "⏱️ 10 min al porto di Marsala",
    terr2Title: "Riserva dello Stagnone & Saline",
    terr2Desc: "Mulini a vento storici, cumuli di sale e fenicotteri rosa. Famosa a livello mondiale per il kitesurf e per uno dei tramonti più fotografati d'Europa, con l'antica isola fenicia di Mozia.",
    terr2Dist: "⏱️ 12 min di auto",
    terr3Title: "Cantine Storiche del Vino Marsala",
    terr3Desc: "Patria del celebre vino liquoroso DOC. Visita le storiche botti monumentali delle Cantine Florio, Donnafugata e Pellegrino con tour di degustazione e cucina tipica siciliana.",
    terr3Dist: "⏱️ 8-12 min dalle principali cantine",
    terr4Title: "Spiagge Dorate del Litorale Sud",
    terr4Desc: "Chilometri di lidi attrezzati e spiagge libere di sabbia dorata con fondali bassi e acqua cristallina (Lido Signorino, Torrazza, Tiburon Beach).",
    terr4Dist: "⏱️ 15 min dal litorale",
    terr5Title: "Centro Storico di Marsala",
    terr5Desc: "Passeggia per l'elegante isola pedonale, scopri Porta Garibaldi, la Cattedrale barocca, il Museo Archeologico con la Nave Punica e i vivaci wine-bar serali.",
    terr5Dist: "⏱️ 8 min dal centro",
    terr6Title: "Aeroporti Vicini",
    terr6Desc: "Facilmente e rapidamente raggiungibile: Aeroporto di Trapani-Birgi (Vincenzo Florio) con numerosi voli Ryanair e nazionali a soli 10 minuti di auto; Aeroporto Internazionale Falcone-Borsellino di Palermo a circa 1 ora.",
    terr6Dist: "⏱️ 10 min (Trapani-Birgi) • 60 min (Palermo)",

    formNamePh: "Es. Marco Rossi",
    formMsgPh: "Desidero conoscere la disponibilità e le tariffe per il periodo...",
    optGuests1: "1 Ospite",
    optGuests2: "2 Ospiti",
    optGuests3: "3 Ospiti",
    optGuests4: "4 Ospiti",
    optGuests5: "5 Ospiti",
    optGuests6: "6 Ospiti",
    optGuests7: "7 Ospiti",
    optGuests8: "8 Ospiti",
    optGuests9: "9 Ospiti",
    optGuests10: "10 Ospiti",
    optGuests11: "11 Ospiti",
    optGuests12: "12 Ospiti",
    mobLangLabel: "Lingua",

    infoDirectTitle: "Contatti Diretti",
    infoDirectSub: "Siamo a tua disposizione",
    infoPhoneLabel: "Telefono / WhatsApp:",
    infoEmailLabel: "Email Direzione:",
    infoAddressLabel: "Indirizzo:",
    infoPerksTitle: "Vantaggi Prenotazione Diretta",
    infoPerksSub: "Miglior tariffa garantita & zero commissioni",
    infoPerk1: "Nessun costo di agenzia: miglior prezzo garantito senza intermediari",
    infoPerk2: "Uso esclusivo garantito: piscina e campo da tennis riservati solo a voi",
    infoPerk3: "Contatto diretto e trasparente: assistenza immediata con i proprietari",
    infoPerk4: "Flessibilità: accordi personalizzati su check-in e check-out",
    infoWaBtn: "💬 Scrivici subito su WhatsApp",
    infoCallBtn: "📞 Chiama +39 334 924 1047",

    footerColNav: "Navigazione",
    footerColBook: "Prenotazioni & Info",
    footerQuote: "Richiesta Preventivo",
    footerCall: "Chiama Direttamente",
    footerEmail: "Scrivici via Email",
    footerColContacts: "Contatti & Info",
    mobCall: "Chiama",
    mobMap: "Mappa",
    mobBook: "Prenota"
  },
  en: {
    metaTitle: "Villa Timea | Exclusive Pool & Tennis, Egadi Islands View in Marsala",
    topWelcome: "Welcome to Villa Timea • Marsala, Sicily",
    topCall: "Call us / WhatsApp",
    navAbout: "The Villa",
    navComfort: "Comfort & Spaces",
    navGallery: "Gallery",
    navTerritory: "Surroundings",
    navContact: "Contacts",
    btnBookNow: "Check Availability",

    heroBadge: "Marsala • Egadi Islands View",
    heroTitle: "Villa Timea — Pool & Tennis with Egadi Islands View",
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
    storyLead: "Nestled in the quiet Marsala countryside, Villa Timea is a unique estate with 5 bedrooms (including one in a private dependance) and 4 bathrooms, where generous spaces, scenic beauty, and open-air living blend into an unforgettable vacation experience.",
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
    footerRights: "All rights reserved. Villa Timea Marsala.",

    mobWaDirect: "💬 Direct WhatsApp Chat",
    btnWaDirect: "💬 Direct WhatsApp",
    btnCallNow: "📞 Call Now",
    statPrivacyLabel: "Exclusive Privacy & Relax",
    statGuestsLabel: "Guests & Spacious Grounds",
    statRoomsNum: "5 Bedrooms",
    statRoomsLabel: "Incl. Private Dependance",
    statBathsNum: "4 Bathrooms",
    statBathsLabel: "Charming & well-appointed",

    amPoolTag: "Outdoor",
    amPoolCount: "📷 9 photos",
    amPoolTitle: "Panoramic Pool (Exclusive Use)",
    amPoolDesc: "Large private swimming pool reserved exclusively for villa guests, surrounded by palm trees and Mediterranean greenery, featuring a diving board, sun loungers, and solarium overlooking the Egadi Islands.",
    amPoolChip1: "Exclusive Guest Use",
    amPoolChip2: "Diving board",
    amPoolChip3: "Sun loungers & solarium",
    amPoolChip4: "Open Egadi views",
    amPoolChip5: "Complete privacy",

    amTennisTag: "Sport & Fitness",
    amTennisCount: "📷 3 photos",
    amTennisTitle: "Tennis Court (Exclusive Use)",
    amTennisDesc: "Private regulation-size tennis court reserved exclusively for villa guests for friendly matches, tournaments, or training sessions in the fresh hillside breeze with zero shared spaces.",
    amTennisChip1: "Exclusive Guest Use",
    amTennisChip2: "Regulation Size",
    amTennisChip3: "Spectator veranda",
    amTennisChip4: "Total Privacy",

    amCellarTag: "Sicilian Tradition",
    amCellarCount: "📷 2 photos",
    amCellarTitle: "Historic Tuff Wine Cellar",
    amCellarDesc: "An evocative subterranean cellar carved into Marsala tuff stone with a wrought-iron gate, housing fine vintages of Sicilian wine.",
    amCellarChip1: "Carved in tuff rock",
    amCellarChip2: "Historic Marsala bottles",
    amCellarChip3: "Authentic atmosphere",
    amCellarChip4: "Naturally cool",

    amOutdoorTag: "Garden & Terraces",
    amOutdoorCount: "📷 4 photos",
    amOutdoorTitle: "Outdoor Spaces, Pine Grove & Terraces",
    amOutdoorDesc: "Expansive outdoor areas across a Mediterranean pine grove, scenic steps, and covered loggias overlooking the Egadi Islands, complete with a stone wood-fired pizza oven for al-fresco dining.",
    amOutdoorChip1: "Pine Grove & Garden",
    amOutdoorChip2: "Panoramic Terraces",
    amOutdoorChip3: "Wood-Fired Oven",
    amOutdoorChip4: "Al-fresco dining",

    amInteriorTag: "Interiors",
    amInteriorCount: "📷 3 photos",
    amInteriorTitle: "Grand Living Room with Fireplace",
    amInteriorDesc: "Spacious lounge with herringbone hardwood floors, comfortable sofas, exposed brick fireplace, and dining table seating over 10 guests.",
    amInteriorChip1: "Fine parquet floors",
    amInteriorChip2: "Wood fireplace",
    amInteriorChip3: "10+ seat dining table",
    amInteriorChip4: "Natural sunlight",

    amRoomsTag: "Sleep & Wellness",
    amRoomsCount: "📷 4 photos",
    amRoomsTitle: "Panoramic Bedrooms & Charming Baths",
    amRoomsDesc: "5 bedrooms (including one in a private dependance) and 4 bathrooms with sea and island views, antique furnishings, air conditioning, and a vintage clawfoot tub or modern walk-in shower.",
    amRoomsChip1: "5 Bedrooms",
    amRoomsChip2: "4 Bathrooms",
    amRoomsChip3: "Dependance Included",
    amRoomsChip4: "Egadi Islands View",
    amRoomsChip5: "Air Conditioning",

    lightboxHint: "🔍 Double-click or scroll to zoom • Drag to pan",

    terr1Title: "Egadi Islands (Favignana, Levanzo & Marettimo)",
    terr1Desc: "Visible right from the villa's terraces! The Egadi archipelago — Favignana with its turquoise coves (Cala Rossa, Cala Azzurra), picturesque Levanzo, and unspoiled Marettimo with its sea caves — is easily reached: hydrofoils depart from Marsala port just 10 minutes away by car.",
    terr1Dist: "⏱️ 10 min to Marsala port",
    terr2Title: "Stagnone Nature Reserve & Salt Pans",
    terr2Desc: "Historic windmills, white salt mounds, and pink flamingos. World-famous for kitesurfing and one of Europe's most photographed sunsets, alongside the ancient Phoenician island of Mozia.",
    terr2Dist: "⏱️ 12 min by car",
    terr3Title: "Historic Marsala Wineries",
    terr3Desc: "Home of the world-renowned DOC fortified wine. Tour the monumental oak barrels of Cantine Florio, Donnafugata, and Pellegrino with guided tastings and Sicilian cuisine.",
    terr3Dist: "⏱️ 8-12 min to top wineries",
    terr4Title: "Golden Beaches of the South Coast",
    terr4Desc: "Miles of equipped beach clubs and free golden sand beaches with shallow, crystal-clear water (Lido Signorino, Torrazza, Tiburon Beach).",
    terr4Dist: "⏱️ 15 min to the coast",
    terr5Title: "Marsala Historic Center",
    terr5Desc: "Stroll through the elegant pedestrian old town, discover Porta Garibaldi, the Baroque Cathedral, the Punic Ship Archaeological Museum, and lively evening wine bars.",
    terr5Dist: "⏱️ 8 min to town center",
    terr6Title: "Nearby Airports",
    terr6Desc: "Quick and easy to reach: Trapani-Birgi Airport (Vincenzo Florio) with domestic and Ryanair flights is just 10 minutes away; Palermo International Airport (Falcone-Borsellino) is about 1 hour away.",
    terr6Dist: "⏱️ 10 min (Trapani-Birgi) • 60 min (Palermo)",

    formNamePh: "e.g. John Smith",
    formMsgPh: "I would like to check availability and rates for the dates...",
    optGuests1: "1 Guest",
    optGuests2: "2 Guests",
    optGuests3: "3 Guests",
    optGuests4: "4 Guests",
    optGuests5: "5 Guests",
    optGuests6: "6 Guests",
    optGuests7: "7 Guests",
    optGuests8: "8 Guests",
    optGuests9: "9 Guests",
    optGuests10: "10 Guests",
    optGuests11: "11 Guests",
    optGuests12: "12 Guests",
    mobLangLabel: "Language",

    infoDirectTitle: "Direct Contacts",
    infoDirectSub: "We are at your disposal",
    infoPhoneLabel: "Phone / WhatsApp:",
    infoEmailLabel: "Management Email:",
    infoAddressLabel: "Address:",
    infoPerksTitle: "Direct Booking Benefits",
    infoPerksSub: "Best rate guaranteed & zero commissions",
    infoPerk1: "No agency fees: guaranteed best price without intermediaries",
    infoPerk2: "Exclusive use guaranteed: pool and tennis court reserved solely for you",
    infoPerk3: "Direct & transparent contact: immediate assistance from the owners",
    infoPerk4: "Flexibility: tailored arrangements for check-in and check-out",
    infoWaBtn: "💬 Message us on WhatsApp",
    infoCallBtn: "📞 Call +39 334 924 1047",

    footerColNav: "Navigation",
    footerColBook: "Booking & Info",
    footerQuote: "Request a Quote",
    footerCall: "Call Directly",
    footerEmail: "Email Us",
    footerColContacts: "Contacts & Info",
    mobCall: "Call",
    mobMap: "Map",
    mobBook: "Book"
  },
  de: {
    metaTitle: "Villa Timea | Pool & Tennis zur Alleinnutzung, Ägadische Inseln Blick in Marsala",
    topWelcome: "Willkommen in der Villa Timea • Marsala, Sizilien",
    topCall: "Rufen Sie uns an / WhatsApp",
    navAbout: "Die Villa",
    navComfort: "Komfort & Räume",
    navGallery: "Galerie",
    navTerritory: "Umgebung",
    navContact: "Kontakt",
    btnBookNow: "Verfügbarkeit anfragen",

    heroBadge: "✨ Marsala • Blick auf die Ägadischen Inseln",
    heroTitle: "Villa Timea — Pool & Tennis mit Blick auf die Ägadischen Inseln",
    heroSubtitle: "Panoramapool mit Sprungbrett und Tennisplatz nach offiziellen Maßen zur exklusiven Nutzung für Gäste, mediterraner Pinienhain und historischer Weinkeller im Tuffstein.",
    heroExplore: "Villa entdecken",
    heroInquire: "Buchen oder Anfragen",

    heroFeatPool: "Panoramapool",
    heroFeatPoolDesc: "Exklusive Nutzung, Sprungbrett & Meerblick",
    heroFeatTennis: "Tennisplatz",
    heroFeatTennisDesc: "Exklusive Gästenutzung, offizielles Maß",
    heroFeatSunset: "Blick auf die Ägadischen Inseln",
    heroFeatSunsetDesc: "Favignana, Levanzo & Marettimo",
    heroFeatCellar: "Weinkeller im Tuffstein",
    heroFeatCellarDesc: "Historischer Marsala-Weinkeller",

    channelsTitle: "Direktbuchung mit Bestpreisgarantie",
    channelsSubtitle: "Keine Vermittlungsgebühren: direkter Kontakt mit den Eigentümern und persönliche Betreuung",
    btnDirectContact: "Direktkontakt (Bester Preis)",

    storyTag: "Das Erlebnis",
    storyTitle: "Eine Oase der Ruhe zwischen dem Meer von Marsala und den Ägadischen Inseln",
    storyLead: "Eingebettet in die Ruhe der sizilianischen Landschaft von Marsala ist die Villa Timea ein einzigartiges Anwesen mit 5 Schlafzimmern (eines davon in einer privaten Dependance) und 4 Bädern, in dem großzügige Räume, landschaftliche Schönheit und das Leben im Freien zu einem unvergesslichen Urlaubserlebnis verschmelzen.",
    storyP1: "Das absolute Highlight ist die Panoramalage: Von den Terrassen aus schweift der Blick über das glitzernde Meer und die Ägadischen Inseln (Favignana, Levanzo und Marettimo) – ein spektakuläres Panorama, insbesondere bei Sonnenuntergang, wenn der Himmel in warme, magische Farben getaucht wird.",
    storyP2: "Im Außenbereich ist der große private Pool zur exklusiven Nutzung für die Gäste das Herzstück der Villa. Umgeben von Palmen und Ruheoasen bietet er den perfekten Ort, um sonnige Tage zu verbringen, sich im kristallklaren Wasser zu erfrischen und absolute Privatsphäre zu genießen. Das Sprungbrett sorgt für zusätzlichen Spaß bei Familien und Freunden.",
    storyP3: "Für Sportbegeisterte bietet die Villa Timea einen privaten Tennisplatz nach offiziellen Maßen zur exklusiven Nutzung der Gäste sowie weitere Bereiche für Fitness und Freizeit. Ein seltenes Privileg, das Entspannung mit sportlichen Matches verbindet, ohne jemals das Anwesen verlassen oder Bereiche mit Fremden teilen zu müssen.",
    storyBadge: "Blick auf die Ägadischen Inseln & Traumhafte Sonnenuntergänge",

    amenitiesTag: "Räume & Ausstattung",
    amenitiesTitle: "Alles, was Sie für einen perfekten Aufenthalt benötigen",
    amenitiesDesc: "Vom privaten Außenpool und Tennisplatz bis hin zu den herrschaftlichen Innenräumen mit Fischgrät-Parkett und Kamin ist jedes Detail für maximalen Komfort gestaltet.",
    spaceOpenFolder: "Fotoalbum öffnen",

    galleryTag: "Fototour",
    galleryTitle: "Einblicke in die Villa Timea",
    galleryDesc: "Entdecken Sie die Bilder des Anwesens: Pool und Tennis zur Alleinnutzung, Salon, Panoramaschlafzimmer und historischer Weinkeller.",
    filterAll: "Alle Fotos (20)",
    filterPool: "Pool & Panorama",
    filterInteriors: "Salon & Innenräume",
    filterRooms: "Zimmer & Bäder",
    filterSports: "Tennis & Garten",
    filterCellar: "Historischer Keller",

    territoryTag: "Marsala & Trapani entdecken",
    territoryTitle: "Die Schätze Westsiziliens",
    territoryDesc: "Villa Timea ist der perfekte Ausgangspunkt für historische Sehenswürdigkeiten, Naturschutzgebiete und traumhafte Strände.",

    bookingTag: "Buchung & Kontakt",
    bookingTitle: "Informationen anfordern oder direkt buchen",
    bookingDesc: "Füllen Sie das Formular aus, um uns eine Anfrage per WhatsApp oder E-Mail zu senden. Wir antworten umgehend!",
    formName: "Vor- und Nachname *",
    formEmail: "E-Mail",
    formPhone: "Telefon / WhatsApp *",
    formDates: "Reisedaten (Check-in / Check-out)",
    formGuests: "Anzahl der Gäste",
    formMsg: "Nachricht oder besondere Wünsche",
    btnSendWhatsApp: "Anfrage per WhatsApp senden",
    btnSendEmail: "Per E-Mail senden",

    mapTag: "Standort",
    mapTitle: "Panoramalage in Marsala",
    mapDesc: "In Contrada Fontanelle 231 gelegen, auf einem Hügel mit Meeresbrise, nur wenige Minuten vom historischen Zentrum, den Stränden und dem Fährhafen zu den Ägadischen Inseln entfernt.",

    footerDesc: "Villa Timea: Exklusive Villa mit Panoramapool und Tennisplatz zur Alleinnutzung, historischem Weinkeller im Tuffstein und atemberaubendem Blick auf die Ägadischen Inseln in Marsala (Trapani), Sizilien.",
    footerRights: "Alle Rechte vorbehalten. Villa Timea Marsala.",

    mobWaDirect: "💬 WhatsApp Direktchat",
    btnWaDirect: "💬 WhatsApp Direkt",
    btnCallNow: "📞 Jetzt anrufen",
    statPrivacyLabel: "100% Privatsphäre & Exklusive Erholung",
    statGuestsLabel: "Gäste & Großzügige Weite",
    statRoomsNum: "5 Schlafzimmer",
    statRoomsLabel: "Inklusive privater Dependance",
    statBathsNum: "4 Badezimmer",
    statBathsLabel: "Stilvoll & komfortabel",

    amPoolTag: "Außenbereich",
    amPoolCount: "📷 9 Fotos",
    amPoolTitle: "Panoramapool (Exklusive Nutzung)",
    amPoolDesc: "Großzügiges Schwimmbecken zur vollkommen exklusiven Nutzung der Gäste, umrahmt von Palmen und mediterraner Vegetation, mit Sprungbrett, Sonnenliegen und Sonnendeck mit weitem Blick auf die Ägadischen Inseln.",
    amPoolChip1: "Exklusive Gästenutzung",
    amPoolChip2: "Sprungbrett",
    amPoolChip3: "Sonnendeck mit Liegen",
    amPoolChip4: "Freier Inselblick",
    amPoolChip5: "Absolute Privatsphäre",

    amTennisTag: "Sport & Fitness",
    amTennisCount: "📷 3 Fotos",
    amTennisTitle: "Tennisplatz (Exklusive Nutzung)",
    amTennisDesc: "Privater Tennisplatz nach offiziellen Maßen, exklusiv für Gäste der Villa reserviert für Matches, Training oder Freizeit in frischer Hügelbrise ohne jegliche Gemeinschaftsnutzung.",
    amTennisChip1: "Exklusive Gästenutzung",
    amTennisChip2: "Offizielle Maße",
    amTennisChip3: "Zuschauer-Veranda",
    amTennisChip4: "Maximale Privatsphäre",

    amCellarTag: "Sizilianische Tradition",
    amCellarCount: "📷 2 Fotos",
    amCellarTitle: "Historischer Tuffstein-Weinkeller",
    amCellarDesc: "Ein stimmungsvoller, in den Marsala-Tuffstein gehauener Felsenkeller mit schmiedeeisernem Tor, in dem edle Jahrgänge sizilianischer Weine lagern.",
    amCellarChip1: "In den Fels gehauen",
    amCellarChip2: "Historische Marsala-Weine",
    amCellarChip3: "Authentische Atmosphäre",
    amCellarChip4: "Natürlich kühles Klima",

    amOutdoorTag: "Garten & Terrassen",
    amOutdoorCount: "📷 4 Fotos",
    amOutdoorTitle: "Freiflächen, Pinienhain & Terrassen",
    amOutdoorDesc: "Weitläufige Außenbereiche mit Pinienhain, Panoramatreppen und überdachten Terrassen mit Meerblick sowie traditionellem Holzofen aus Stein für gesellige Abende im Freien.",
    amOutdoorChip1: "Pinienhain & Garten",
    amOutdoorChip2: "Panoramaterrassen",
    amOutdoorChip3: "Holzbackofen",
    amOutdoorChip4: "Essen im Freien",

    amInteriorTag: "Innenräume",
    amInteriorCount: "📷 3 Fotos",
    amInteriorTitle: "Herrschaftlicher Salon mit Kamin",
    amInteriorDesc: "Großer Wohnsalon mit edlem Fischgrät-Parkett, bequemen Sofas, gemauertem Kamin und großem Esstisch für über 10 Personen.",
    amInteriorChip1: "Edles Parkett",
    amInteriorChip2: "Holzkamin",
    amInteriorChip3: "Tisch für 10+ Personen",
    amInteriorChip4: "Viel Tageslicht",

    amRoomsTag: "Schlafbereich & Wellness",
    amRoomsCount: "📷 4 Fotos",
    amRoomsTitle: "Panoramazimmer & Stilvolle Bäder",
    amRoomsDesc: "5 Schlafzimmer (darunter eine private Dependance) und 4 Bäder mit Blick auf das Meer und die Inseln, antiken Möbeln, Klimaanlage und freistehender Vintage-Gussbadewanne oder moderner Dusche.",
    amRoomsChip1: "5 Schlafzimmer",
    amRoomsChip2: "4 Badezimmer",
    amRoomsChip3: "Inklusive Dependance",
    amRoomsChip4: "Blick auf Ägadische Inseln",
    amRoomsChip5: "Klimaanlage",

    lightboxHint: "🔍 Doppelklick oder Scrollen zum Zoomen • Ziehen zum Bewegen",

    terr1Title: "Ägadische Inseln (Favignana, Levanzo & Marettimo)",
    terr1Desc: "Direkt von den Terrassen der Villa aus sichtbar! Der Ägadische Archipel — Favignana mit seinen türkisfarbenen Buchten (Cala Rossa, Cala Azzurra), das malerische Levanzo und das unberührte Marettimo mit seinen Meeresgrotten — ist bequem erreichbar: Die Tragflächenboote legen im nur 10 Autominuten entfernten Hafen von Marsala ab.",
    terr1Dist: "⏱️ 10 Min. zum Hafen von Marsala",
    terr2Title: "Naturreservat Stagnone & Salinen",
    terr2Desc: "Historische Windmühlen, weiße Salzberge und rosa Flamingos. Weltbekannt für Kitesurfen und einen der spektakulärsten Sonnenuntergänge Europas, neben der antiken phönizischen Insel Mozia.",
    terr2Dist: "⏱️ 12 Min. mit dem Auto",
    terr3Title: "Historische Marsala-Weingüter",
    terr3Desc: "Heimat des berühmten DOC-Weines. Besuchen Sie die monumentalen Eichenfässer von Cantine Florio, Donnafugata und Pellegrino mit Weinproben und typisch sizilianischer Küche.",
    terr3Dist: "⏱️ 8–12 Min. zu den bekanntesten Kellereien",
    terr4Title: "Goldene Sandstrände der Südküste",
    terr4Desc: "Kilometerlange ausgestattete Strandbäder und freie Sandstrände mit flachem, glasklarem Wasser (Lido Signorino, Torrazza, Tiburon Beach).",
    terr4Dist: "⏱️ 15 Min. zur Küste",
    terr5Title: "Historisches Zentrum von Marsala",
    terr5Desc: "Flanieren Sie durch die Fußgängerzone, entdecken Sie Porta Garibaldi, die barocke Kathedrale, das Archäologische Museum mit dem punischen Kriegsschiff und lebendige Weinbars.",
    terr5Dist: "⏱️ 8 Min. ins Zentrum",
    terr6Title: "Flughäfen in der Nähe",
    terr6Desc: "Bequem und schnell erreichbar: Flughafen Trapani-Birgi (Vincenzo Florio) mit vielen Flügen ist nur 10 Autominuten entfernt; der internationale Flughafen Palermo (Falcone-Borsellino) liegt etwa 1 Stunde entfernt.",
    terr6Dist: "⏱️ 10 Min. (Trapani-Birgi) • 60 Min. (Palermo)",

    formNamePh: "z.B. Anna Schmidt",
    formMsgPh: "Ich möchte die Verfügbarkeit und Preise für den folgenden Zeitraum anfragen...",
    optGuests1: "1 Gast",
    optGuests2: "2 Gäste",
    optGuests3: "3 Gäste",
    optGuests4: "4 Gäste",
    optGuests5: "5 Gäste",
    optGuests6: "6 Gäste",
    optGuests7: "7 Gäste",
    optGuests8: "8 Gäste",
    optGuests9: "9 Gäste",
    optGuests10: "10 Gäste",
    optGuests11: "11 Gäste",
    optGuests12: "12 Gäste",
    mobLangLabel: "Sprache",

    infoDirectTitle: "Direktkontakt",
    infoDirectSub: "Wir stehen Ihnen gerne zur Verfügung",
    infoPhoneLabel: "Telefon / WhatsApp:",
    infoEmailLabel: "E-Mail der Direktion:",
    infoAddressLabel: "Adresse:",
    infoPerksTitle: "Vorteile der Direktbuchung",
    infoPerksSub: "Bestpreisgarantie & ohne Vermittlungsgebühren",
    infoPerk1: "Keine Agenturgebühren: garantierter Bestpreis direkt beim Eigentümer",
    infoPerk2: "Garantierte Exklusivität: Pool und Tennisplatz stehen ausschließlich Ihnen zur Verfügung",
    infoPerk3: "Direkter Kontakt: persönliche Betreuung und schnelle Antworten",
    infoPerk4: "Flexibilität: individuelle Absprachen für Check-in und Check-out",
    infoWaBtn: "💬 Jetzt auf WhatsApp schreiben",
    infoCallBtn: "📞 Anrufen: +39 334 924 1047",

    footerColNav: "Navigation",
    footerColBook: "Buchung & Info",
    footerQuote: "Angebot anfordern",
    footerCall: "Direkt anrufen",
    footerEmail: "E-Mail schreiben",
    footerColContacts: "Kontakt & Info",
    mobCall: "Anrufen",
    mobMap: "Karte",
    mobBook: "Buchen"
  }
};

let currentLang = 'it';

const langFlagsSvg = {
  it: '<svg viewBox="0 0 640 480" width="18" height="13" aria-hidden="true"><g fill-rule="evenodd" stroke-width="1pt"><path fill="#fff" d="M0 0h640v480H0z"/><path fill="#009246" d="M0 0h213.3v480H0z"/><path fill="#ce2b37" d="M426.7 0H640v480H426.7z"/></g></svg>',
  en: '<svg viewBox="0 0 60 30" width="18" height="13" aria-hidden="true"><clipPath id="uk-clip-dyn"><path d="M0,0 v30 h60 v-30 z"/></clipPath><clipPath id="uk-diag-dyn"><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/></clipPath><g clip-path="url(#uk-clip-dyn)"><path d="M0,0 v30 h60 v-30 z" fill="#012169"/><path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" stroke-width="6"/><path d="M0,0 L60,30 M60,0 L0,30" clip-path="url(#uk-diag-dyn)" stroke="#C8102E" stroke-width="4"/><path d="M30,0 v30 M0,15 h60" stroke="#fff" stroke-width="10"/><path d="M30,0 v30 M0,15 h60" stroke="#C8102E" stroke-width="6"/></g></svg>',
  de: '<svg viewBox="0 0 640 480" width="18" height="13" aria-hidden="true"><path fill="#000" d="M0 0h640v160H0z"/><path fill="#d00" d="M0 160h640v160H0z"/><path fill="#ffce00" d="M0 320h640v160H0z"/></svg>'
};

function initI18n() {
  const savedLang = localStorage.getItem('villa_lang');
  if (savedLang && (savedLang === 'it' || savedLang === 'en' || savedLang === 'de')) {
    currentLang = savedLang;
  }

  applyLanguage(currentLang);

  // Modern Language Dropdown (Desktop)
  const dropdown = document.getElementById('langDropdown');
  const dropdownBtn = document.getElementById('langDropdownBtn');

  if (dropdown && dropdownBtn) {
    dropdownBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle('open');
      dropdownBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove('open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && dropdown.classList.contains('open')) {
        dropdown.classList.remove('open');
        dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Handle dropdown menu selection
  document.querySelectorAll('.lang-menu-item').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.dataset.lang;
      if (lang && lang !== currentLang) {
        currentLang = lang;
        localStorage.setItem('villa_lang', lang);
        applyLanguage(lang);
      }
      if (dropdown) {
        dropdown.classList.remove('open');
        if (dropdownBtn) dropdownBtn.setAttribute('aria-expanded', 'false');
      }
    });
  });

  // Handle mobile dialog and any other .lang-btn
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

  // Update active states on both dropdown menu and mobile buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('.lang-menu-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Update header dropdown flag and code
  const currentFlagEl = document.getElementById('currentLangFlag');
  const currentCodeEl = document.getElementById('currentLangCode');
  if (currentFlagEl && langFlagsSvg[lang]) {
    currentFlagEl.innerHTML = langFlagsSvg[lang];
  }
  if (currentCodeEl) {
    currentCodeEl.textContent = lang.toUpperCase();
  }

  if (dict.metaTitle) {
    document.title = dict.metaTitle;
  }

  if (typeof currentGalleryCategory !== 'undefined') {
    renderGalleryGrid(currentGalleryCategory);
  }
}

/* Helper for localized gallery & album fields */
function getLocalizedItem(item, prop) {
  if (!item) return '';
  if (currentLang === 'de') {
    return item[prop + 'De'] || item[prop + 'En'] || item[prop + 'It'] || '';
  }
  if (currentLang === 'en') {
    return item[prop + 'En'] || item[prop + 'It'] || '';
  }
  return item[prop + 'It'] || item[prop + 'En'] || '';
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
    titleDe: "Panoramapool zur Alleinnutzung & Sprungbrett",
    descIt: "Ampia piscina ad uso esclusivo per gli ospiti immersa nel verde con solarium e vista aperta sul mare.",
    descEn: "Generous swimming pool for exclusive guest use surrounded by lush greenery with sea view sun deck.",
    descDe: "Großzügiger privater Pool für Gäste im Grünen mit Sonnendeck und weitem Meerblick."
  },
  {
    id: 2,
    src: "assets/images/piscina-terrazza.jpg",
    category: "pool",
    titleIt: "Scorcio Piscina e Palme",
    titleEn: "Pool & Palm Tree Haven",
    titleDe: "Blick auf Pool und Palmen",
    descIt: "Ombra rilassante della veranda con vista sull'acqua e sulle Isole Egadi.",
    descEn: "Refreshing covered veranda view of the pool and distant Egadi islands.",
    descDe: "Erholsamer Schatten der Veranda mit Blick auf das Wasser und die Ägadischen Inseln."
  },
  {
    id: 3,
    src: "assets/images/piscina-facciata-villa.jpg",
    category: "pool",
    titleIt: "Facciata della Villa & Piscina con Trampolino",
    titleEn: "Villa Facade & Pool with Diving Board",
    titleDe: "Villafassade & Pool mit Sprungbrett",
    descIt: "Vista frontale della villa circondata da palme, pineta mediterranea e piscina privata.",
    descEn: "Front view of the villa framed by palm trees, Mediterranean pine forest and private pool.",
    descDe: "Frontansicht der Villa umgeben von Palmen, Pinienhain und privatem Pool."
  },
  {
    id: 4,
    src: "assets/images/tramonto-piscina-egadi.jpg",
    category: "pool",
    titleIt: "Tramonto sulle Isole Egadi dalla Piscina",
    titleEn: "Sunset over Egadi Islands from the Pool",
    titleDe: "Sonnenuntergang über den Ägadischen Inseln vom Pool",
    descIt: "Spettacolare tramonto dorato sul mare e sulle isole con la piscina illuminata sullo sfondo.",
    descEn: "Spectacular golden sunset over the sea and islands with the illuminated pool below.",
    descDe: "Spektakulärer goldener Sonnenuntergang über dem Meer und den Inseln mit beleuchtetem Pool im Vordergrund."
  },
  {
    id: 5,
    src: "assets/images/piscina-crepuscolo-egadi.jpg",
    category: "pool",
    titleIt: "Piscina al Crepuscolo & Vista Mare",
    titleEn: "Pool at Twilight & Sea Horizon",
    titleDe: "Pool in der Abenddämmerung & Meerblick",
    descIt: "Atmosfera serale a bordo piscina ammirando Favignana e Levanzo all'orizzonte.",
    descEn: "Evening poolside atmosphere overlooking Favignana and Levanzo on the horizon.",
    descDe: "Abendliche Atmosphäre am Pool mit Blick auf Favignana und Levanzo am Horizont."
  },
  {
    id: 6,
    src: "assets/images/piscina-notte-illuminata.jpg",
    category: "pool",
    titleIt: "Piscina Illuminata di Notte",
    titleEn: "Illuminated Pool by Night",
    titleDe: "Nachts beleuchteter Pool",
    descIt: "Bagno notturno sotto le stelle con illuminazione subacquea turchese e luci soffuse in giardino.",
    descEn: "Nighttime swim under the stars with turquoise underwater lighting and warm garden lamps.",
    descDe: "Nächtliches Schwimmen unter dem Sternenhimmel mit türkiser Unterwasserbeleuchtung und warmen Gartenlichtern."
  },
  {
    id: 7,
    src: "assets/images/terrazza-vista-egadi.jpg",
    category: "pool",
    titleIt: "Loggia Panoramica sulle Egadi",
    titleEn: "Panoramic Veranda overlooking Egadi",
    titleDe: "Panoramaloggia mit Blick auf die Ägadischen Inseln",
    descIt: "Terrazza coperta panoramica per cene e aperitivi con vista tramonto.",
    descEn: "Covered panoramic terrace perfect for sunset dining and Sicilian wine.",
    descDe: "Überdachte Panoramaterrasse für Abendessen und Aperitifs mit Blick auf den Sonnenuntergang."
  },
  {
    id: 8,
    src: "assets/images/scalinata-panoramica.jpg",
    category: "pool",
    titleIt: "Scalinata Panoramica verso la Piscina",
    titleEn: "Scenic Steps to the Pool",
    titleDe: "Panoramatreppe zum Pool",
    descIt: "Scorcio architettonico della villa affacciata sulla piana di Marsala.",
    descEn: "Architectural view overlooking the terracotta patios and coastal plain.",
    descDe: "Architektonischer Blick auf die Cotto-Terrassen der Villa und die Küstenebene von Marsala."
  },
  {
    id: 9,
    src: "assets/images/panorama-notte-tennis-piscina.jpg",
    category: "sports",
    titleIt: "Panorama Notturno: Tennis, Veranda & Piscina",
    titleEn: "Night Panorama: Tennis Court, Veranda & Pool",
    titleDe: "Nachtpanorama: Tennisplatz, Veranda & Pool",
    descIt: "Vista d'insieme serale sul campo da tennis, sulla veranda illuminata, sulla piscina e sulle luci di Marsala.",
    descEn: "Evening overview of the tennis court, illuminated veranda, pool and Marsala city lights.",
    descDe: "Abendlicher Überblick über Tennisplatz, beleuchtete Veranda, Pool und die Lichter von Marsala."
  },
  {
    id: 10,
    src: "assets/images/campo-tennis.jpg",
    category: "sports",
    titleIt: "Campo da Tennis ad Uso Esclusivo",
    titleEn: "Exclusive Regulation Tennis Court",
    titleDe: "Tennisplatz zur Alleinnutzung",
    descIt: "Campo da tennis regolamentare riservato ad uso esclusivo degli ospiti della villa.",
    descEn: "Full-size private tennis court exclusively reserved for villa guests.",
    descDe: "Tennisplatz nach offiziellen Maßen, exklusiv für Gäste der Villa reserviert."
  },
  {
    id: 11,
    src: "assets/images/veranda-tennis.jpg",
    category: "sports",
    titleIt: "Veranda Tennis & Relax",
    titleEn: "Tennis Veranda & Chillout",
    titleDe: "Tennis-Veranda & Entspannung",
    descIt: "Area relax coperta affacciata direttamente sul campo da tennis e sulla piscina.",
    descEn: "Shaded spectator veranda overlooking both tennis court and pool.",
    descDe: "Überdachter Loungebereich mit direktem Blick auf Tennisplatz und Pool."
  },
  {
    id: 12,
    src: "assets/images/forno-legna-esterno.jpg",
    category: "sports",
    titleIt: "Forno a Legna & Giardino in Pietra",
    titleEn: "Wood-Fired Pizza Oven & Stone Garden",
    titleDe: "Holzbackofen & Steingarten",
    descIt: "Forno tradizionale in pietra lavica e tufo per pizze all'aperto e barbecue.",
    descEn: "Authentic Sicilian stone pizza oven and outdoor BBQ area amidst pines.",
    descDe: "Traditioneller sizilianischer Steinofen und Grillbereich unter Pinien für Pizzaabende im Freien."
  },
  {
    id: 13,
    src: "assets/images/salone-principale.jpg",
    category: "interior",
    titleIt: "Grande Salone con Camino & Parquet",
    titleEn: "Grand Living Room with Fireplace",
    titleDe: "Großer Salon mit Kamin & Parkett",
    descIt: "Spazio giorno luminoso ed elegante con divani in lino e camino d'atmosfera.",
    descEn: "Spacious, sunlit lounge with cozy linen sofas and rustic brick fireplace.",
    descDe: "Heller, eleganter Wohnbereich mit bequemen Leinencouches und stimmungsvollem Kamin."
  },
  {
    id: 14,
    src: "assets/images/salone-camino.jpg",
    category: "interior",
    titleIt: "Zona Relax & Ingresso Cantina",
    titleEn: "Living Lounge & Wine Cellar Entrance",
    titleDe: "Loungebereich & Weinkeller-Eingang",
    descIt: "Pavimenti in parquet di legno massello e accesso scenografico alla cantina.",
    descEn: "Hardwood herringbone floors and wrought iron gate leading to the cellar.",
    descDe: "Massivholz-Fischgrätparkett und schmiedeeisernes Tor zum historischen Weinkeller."
  },
  {
    id: 15,
    src: "assets/images/sala-pranzo.jpg",
    category: "interior",
    titleIt: "Sala da Pranzo Conviviale",
    titleEn: "Convivial Dining Hall",
    titleDe: "Geselliger Speisesaal",
    descIt: "Tavolo da pranzo per oltre 10 ospiti, ideale per ritrovi con amici e famiglie.",
    descEn: "Large dining table seating 10+ guests for memorable group dinners.",
    descDe: "Großer Esstisch für über 10 Gäste, ideal für gesellige Runden mit Familie und Freunden."
  },
  {
    id: 16,
    src: "assets/images/camera-vista-egadi.jpg",
    category: "rooms",
    titleIt: "Camera 1 — Vista sulle Isole Egadi",
    titleEn: "Bedroom 1 — Egadi Islands View",
    titleDe: "Zimmer 1 — Blick auf die Ägadischen Inseln",
    descIt: "Risvegliarsi ogni mattina ammirando Favignana e il mare all'orizzonte.",
    descEn: "Wake up each morning gazing out to Favignana Island and the sea.",
    descDe: "Jeden Morgen mit Blick auf die Insel Favignana und das offene Meer erwachen."
  },
  {
    id: 17,
    src: "assets/images/camera-matrimoniale.jpg",
    category: "rooms",
    titleIt: "Camera 2 — Matrimoniale di Charme",
    titleEn: "Bedroom 2 — Master with Antique Charm",
    titleDe: "Zimmer 2 — Herrschaftliches Doppelzimmer",
    descIt: "Letto in ferro battuto decorato, armadio d'epoca e climatizzazione autonoma.",
    descEn: "Ornate wrought iron bed, historic mirrored armoire and air conditioning.",
    descDe: "Verziertes Schmiedeeisenbett, antiker Spiegelschrank und eigene Klimaanlage."
  },
  {
    id: 18,
    src: "assets/images/bagno-epoca-vasca.jpg",
    category: "rooms",
    titleIt: "Bagno 1 — Stile d'Epoca con Vasca in Ghisa",
    titleEn: "Bathroom 1 — Vintage Freestanding Tub",
    titleDe: "Badezimmer 1 — Historischer Stil mit Gussbadewanne",
    descIt: "Vasca freestanding con piedini, maioliche e travi in legno a vista.",
    descEn: "Classic clawfoot soaking tub, handcrafted tiles, and rustic wood beams.",
    descDe: "Freistehende Badewanne auf Füßen, handgefertigte Fliesen und sichtbare Holzbalken."
  },
  {
    id: 19,
    src: "assets/images/bagno-moderno-doccia.jpg",
    category: "rooms",
    titleIt: "Bagno 2 — Moderno con Doccia in Cristallo",
    titleEn: "Bathroom 2 — Modern Walk-in Shower",
    titleDe: "Badezimmer 2 — Modern mit Glasdusche",
    descIt: "Box doccia moderno, sanitari sospesi e finiture fresche.",
    descEn: "Glass-enclosed walk-in shower and contemporary fixtures.",
    descDe: "Moderne begehbare Glasdusche und zeitgemäße Sanitärausstattung."
  },
  {
    id: 20,
    src: "assets/images/cantina-storica-tufo.jpg",
    category: "cellar",
    titleIt: "Cantina Storica Scavata nel Tufo",
    titleEn: "Historic Cellar Carved in Tuff Stone",
    titleDe: "Historischer Weinkeller im Tuffstein",
    descIt: "Un autentico tesoro sotterraneo che celebra la tradizione del vino Marsala.",
    descEn: "An authentic subterranean tuff cellar honoring historic Marsala wines.",
    descDe: "Ein authentischer unterirdischer Schatz, der die berühmte Weintradition von Marsala ehrt."
  }
];

const spaceAlbums = {
  pool: {
    icon: "🏊‍♂️",
    titleIt: "Piscina Panoramica & Terrazze (Uso Esclusivo)",
    titleEn: "Panoramic Pool & Terraces (Exclusive Use)",
    titleDe: "Panoramapool & Terrassen (Alleinnutzung)",
    descIt: "Tutte le angolazioni della grande piscina privata ad uso esclusivo: vista diurna sulle palme e sulla facciata della villa, tramonti infuocati sulle Egadi e bagni serali sotto le luci.",
    descEn: "Every angle of the large private pool reserved exclusively for guests: daytime views, fiery Egadi sunsets, and illuminated evening swims.",
    descDe: "Alle Perspektiven des großen privaten Pools zur exklusiven Nutzung: Blick auf Palmen und Villafassade, goldene Sonnenuntergänge über den Ägadischen Inseln und abendliches Schwimmen.",
    photoIds: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  },
  tennis: {
    icon: "🎾",
    titleIt: "Campo da Tennis & Veranda (Uso Esclusivo)",
    titleEn: "Regulation Tennis Court & Veranda (Exclusive Use)",
    titleDe: "Tennisplatz & Veranda (Alleinnutzung)",
    descIt: "Campo da tennis regolamentare ad uso esclusivo con veranda coperta per gli spettatori e splendida vista serale sull'intera tenuta.",
    descEn: "Private regulation tennis court for exclusive guest use with shaded spectator veranda and evening views.",
    descDe: "Tennisplatz nach offiziellen Maßen zur Alleinnutzung mit überdachter Zuschauer-Veranda und herrlichem Abendblick.",
    photoIds: [10, 11, 9]
  },
  cellar: {
    icon: "🍷",
    titleIt: "Cantina Storica nel Tufo",
    titleEn: "Historic Tuff Wine Cellar",
    titleDe: "Historischer Tuffstein-Weinkeller",
    descIt: "Suggestivo ipogeo scavato nel tufo marsalese con ingresso scenografico dal salone tramite cancello in ferro battuto.",
    descEn: "Subterranean cellar carved into Marsala tuff stone with wrought-iron entrance from the living lounge.",
    descDe: "Faszinierender Felsenkeller im Marsala-Tuffstein mit stilvollem Eingang vom Salon durch ein schmiedeeisernes Tor.",
    photoIds: [20, 14]
  },
  outdoor: {
    icon: "🌿",
    titleIt: "Spazi Aperti, Pineta & Terrazze",
    titleEn: "Outdoor Spaces, Pine Grove & Terraces",
    titleDe: "Freiflächen, Pinienhain & Terrassen",
    descIt: "Ampi spazi esterni tra pineta mediterranea, scalinate panoramiche in cotto, logge coperte vista Egadi e forno a legna in pietra per serate all'aperto.",
    descEn: "Generous outdoor areas across Mediterranean pine groves, scenic terracotta steps, covered Egadi-view terraces, and a stone wood-fired pizza oven.",
    descDe: "Weitläufige Außenbereiche im Pinienhain, Panoramatreppen, überdachte Loggien mit Inselblick und Holzofen für Abende im Freien.",
    photoIds: [12, 8, 3, 7]
  },
  interior: {
    icon: "🛋️",
    titleIt: "Salone Nobile, Camino & Sala da Pranzo",
    titleEn: "Grand Living Room, Fireplace & Dining Hall",
    titleDe: "Herrschaftlicher Salon, Kamin & Speisesaal",
    descIt: "Gli ampi spazi interni con parquet a spina di pesce, camino a legna e tavolo conviviale per oltre 10 ospiti.",
    descEn: "Spacious interiors featuring herringbone hardwood floors, brick fireplace, and dining table for 10+ guests.",
    descDe: "Großzügige Innenräume mit Fischgrätparkett, gemauertem Holzkamin und Esstisch für über 10 Gäste.",
    photoIds: [13, 14, 15]
  },
  rooms: {
    icon: "🛏️",
    titleIt: "Camere Panoramiche & Bagni di Charme",
    titleEn: "Panoramic Bedrooms & Bathrooms",
    titleDe: "Panoramazimmer & Stilvolle Bäder",
    descIt: "La proprietà offre 5 camere da letto (di cui una in dependance privata) e 4 bagni (con vasca freestanding d'epoca e doccia moderna in cristallo).",
    descEn: "The estate features 5 bedrooms (including one in a private dependance) and 4 bathrooms (with a vintage clawfoot tub and modern walk-in shower).",
    descDe: "Das Anwesen bietet 5 Schlafzimmer (darunter eine private Dependance) und 4 Bäder mit Vintage-Gussbadewanne und moderner Dusche.",
    photoIds: [16, 17, 18, 19]
  }
};

let activeLightboxIndex = 0;
let currentGalleryCategory = 'all';
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
  if (titleEl) titleEl.textContent = getLocalizedItem(album, 'title');
  if (descEl) descEl.textContent = getLocalizedItem(album, 'desc');
  if (countEl) {
    countEl.textContent = currentLang === 'it'
      ? `${albumPhotos.length} foto nella cartella`
      : (currentLang === 'de'
        ? `${albumPhotos.length} Fotos im Album`
        : `${albumPhotos.length} photos in folder`);
  }

  gridEl.innerHTML = '';
  albumPhotos.forEach((item, idx) => {
    const title = getLocalizedItem(item, 'title');
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
  currentGalleryCategory = category;
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
    card.setAttribute('aria-label', getLocalizedItem(item, 'title'));

    const title = getLocalizedItem(item, 'title');
    const desc = getLocalizedItem(item, 'desc');

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
    const title = getLocalizedItem(item, 'title');
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

  const itemTitle = getLocalizedItem(item, 'title');
  const itemDesc = getLocalizedItem(item, 'desc');

  if (img) {
    img.src = item.src;
    img.alt = itemTitle;
  }

  if (title) {
    title.textContent = itemTitle;
  }

  if (desc) {
    desc.textContent = itemDesc;
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
   5. BOOKING & INQUIRY FORM (WhatsApp & Email One-Click Generators)
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
    const guestsEl = document.getElementById('inq-guests');
    const guests = guestsEl ? (guestsEl.options[guestsEl.selectedIndex]?.text || guestsEl.value) : '2';
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
