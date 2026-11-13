# Villa Timea — Sito Web Ufficiale di Presentazione

Sito web moderno, elegante e completamente responsive per la presentazione di **Villa Timea** (Marsala, Sicilia), progettato per:
- Presentazione ad alto impatto visivo della villa (piscina panoramica con trampolino, campo da tennis privato, cantina storica nel tufo, spazi interni signorili e vista sulle Isole Egadi).
- Canali di prenotazione diretti (WhatsApp ed Email con form interattivo) e collegamenti ai portali OTA (Airbnb e Booking.com).
- Diffusione rapida e accoglienza ospiti tramite **QR Code** (generatore integrato e scaricabile).
- Supporto bilingue istantaneo (**Italiano** e **Inglese**).
- Mappa interattiva e navigazione GPS one-touch (Google Maps, Waze).

---

## 🚀 Come Visualizzare il Sito in Locale

Non è richiesto alcun framework o build step complesso: il sito è realizzato in **HTML5 moderno, CSS3 e JavaScript vanilla**, con tutte le librerie (Leaflet per le mappe, QRCode.js per i codici QR) salvate **localmente nella cartella `assets/`**.

### Opzione 1: Con Python (Consigliata)
Apri il terminale nella cartella del progetto ed esegui:
```bash
python3 -m http.server 8000
```
Poi apri il browser su: [http://localhost:8000](http://localhost:8000)

### Opzione 2: Con Node.js / npx
```bash
npx serve .
```

### Opzione 3: Apertura diretta
Puoi anche semplicemente fare doppio clic sul file `index.html` per aprirlo direttamente nel tuo browser preferito (Safari, Chrome, Firefox, Edge).

---

## 🌐 Come Pubblicare su GitHub Pages (Gratuito)

Quando sei pronto a pubblicarlo online su GitHub per farlo vedere al tuo amico o ai clienti:

1. **Inizializza Git e crea la repo**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Villa Timea website"
   ```

2. **Crea una nuova repository su GitHub** (es. `villa-timea`) e collega il remote:
   ```bash
   git branch -M main
   git remote add origin https://github.com/TUO_USERNAME/villa-timea.git
   git push -u origin main
   ```

3. **Attiva GitHub Pages**:
   - Vai nelle **Settings** della tua repository su GitHub.
   - Nella barra laterale sinistra, clicca su **Pages**.
   - Sotto **Build and deployment > Source**, seleziona `Deploy from a branch`.
   - Sotto **Branch**, seleziona `main` e cartella `/ (root)`, poi clicca **Save**.
   - In 1-2 minuti il tuo sito sarà online all'indirizzo:  
     `https://TUO_USERNAME.github.io/villa-timea/`

---

## 🔗 Come Collegare il Dominio Personalizzato in Seguito

Quando il proprietario acquisterà il dominio (es. `villatimea.it` o `villatimea-marsala.com`):

1. Nelle impostazioni di GitHub Pages (**Settings > Pages**), inserisci il dominio nella casella **Custom domain** (es. `villatimea.it`).
2. Sul pannello DNS del registrar (Aruba, Register, Cloudflare, Namecheap, ecc.):
   - Aggiungi i 4 record **A** che puntano agli IP di GitHub Pages:
     ```text
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Aggiungi un record **CNAME** per `www` che punta a:
     ```text
     TUO_USERNAME.github.io
     ```
3. Spunta l'opzione **Enforce HTTPS** su GitHub Pages.

---

## 🛠️ Personalizzazione Link Diretti (Airbnb & Booking.com)

Nel file `index.html` puoi inserire i link esatti dell'annuncio di Airbnb e Booking.com:
- Cerca `https://www.airbnb.com` e sostituiscilo con l'URL completo dell'annuncio (es. `https://www.airbnb.it/rooms/12345678`).
- Cerca `https://www.booking.com` e sostituiscilo con l'URL della struttura su Booking.

---

## 📁 Struttura della Cartella

```
Villa Tom/
├── index.html                   # Pagina principale, semantica e bilingue
├── README.md                    # Questa guida
├── info.txt                     # Contatti e indirizzo originale
├── testo.txt                    # Testo descrittivo originale della villa
├── img/                         # Foto originali
└── assets/
    ├── css/
    │   ├── style.css            # Stili moderni, palette mare/spiaggia, responsive
    │   └── leaflet.css          # Foglio di stile locale per la mappa
    ├── js/
    │   ├── main.js              # Logica interattiva (lightbox, i18n, form, mappa)
    │   ├── leaflet.js           # Libreria mappe locale
    │   └── qrcode.min.js        # Generatore QR code locale
    └── images/                  # Immagini ottimizzate con nomi semantici
        ├── pool-panorama.jpg
        ├── pool-terrace.jpg
        ├── terrace-view.jpg
        ├── panoramic-steps.jpg
        ├── tennis-court.jpg
        ├── tennis-veranda.jpg
        ├── living-room-main.jpg
        ├── living-room-fireplace.jpg
        ├── dining-room.jpg
        ├── bedroom-window-view.jpg
        ├── bedroom-master.jpg
        ├── bathroom-vintage.jpg
        ├── bathroom-modern.jpg
        ├── outdoor-pizza-oven.jpg
        └── wine-cellar.jpg
```
