# Villa Timea — Sito Web Ufficiale di Presentazione

Sito web moderno, elegante e completamente responsive per la presentazione di **Villa Timea** (Marsala, Sicilia), progettato per:
- Presentazione ad alto impatto visivo della villa (piscina panoramica con trampolino e campo da tennis regolamentare entrambi ad uso esclusivo per gli ospiti, cantina storica nel tufo, spazi interni signorili e vista sulle Isole Egadi: Favignana, Levanzo e Marettimo).
- Galleria fotografica con zoom interattivo (fino a 3.5x con controlli dedicati, rotella mouse, doppio click, drag-to-pan e pinch-to-zoom multi-touch su smartphone).
- Canali di prenotazione diretti (WhatsApp, Telefono ed Email con modulo preventivo interattivo a tariffa diretta garantita senza commissioni).
- Supporto multilingue istantaneo (**Italiano**, **Inglese** e **Tedesco**).
- Mappa interattiva e navigazione GPS one-touch (Google Maps: https://maps.app.goo.gl/ddpPGVBYh4fJH2ks8, Waze).

---

## 🚀 Come Visualizzare il Sito in Locale

Non è richiesto alcun framework o build step complesso: il sito è realizzato in **HTML5 moderno, CSS3 e JavaScript vanilla**, con tutte le librerie (Leaflet per le mappe) salvate **localmente nella cartella `assets/`**.

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
   git commit -m "Aggiornamento Villa Timea: uso esclusivo piscina e tennis, Egadi complete, link Maps e focus prenotazione diretta"
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

## 📍 Posizione & Navigazione GPS

Il collegamento corretto a Google Maps per raggiungere Villa Timea in Contrada Fontanelle 231 (Marsala) è:
`https://maps.app.goo.gl/ddpPGVBYh4fJH2ks8`

---

## 🎨 Selettore Palette Stili (Provvisorio)

Nella barra superiore di navigazione è attivo il tasto (**🎨 Palette**) che consente al cliente e ai proprietari di testare in tempo reale 5 varianti cromatiche mediterranee studiate per la villa:
1. **Oceano & Terracotta (Predefinito)**: Blu navy profondo, azzurro mare e cotto siciliano.
2. **Ulivo & Tufo Nobile**: Verde oliva scuro, salvia e ambra calda (charme naturale ed eco-resort).
3. **Tramonto sulle Egadi**: Vinaccia, vino Marsala rubino e arancio tramonto.
4. **Blu Egeo & Riserva Marina**: Azzurro cristallino stile Cala Rossa, blu profondo e corallo.
5. **Oro Barocco & Sabbia Dorata**: Ebano nobile, ocra dorata e lino chiaro.

Layout ottimizzato per tutti i dispositivi:
- **Su mobile / smartphone**: Il pulsante palette è posizionato esclusivamente in alto nell'header accanto al cambio lingua e al menu, senza alcun tasto fluttuante invasivo in basso.
- **Su PC / desktop**: Spaziatura fluida e ordinata senza sovrapposizioni tra link di navigazione (`Contatti`) e controlli di azione (`Palette`, `IT/EN`, `Richiedi Disponibilità`).

La scelta viene memorizzata automaticamente nel browser (`localStorage`). Una volta individuata la combinazione preferita, basterà confermarla per renderla permanente.

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
    │   └── leaflet.js           # Libreria mappe locale
    └── images/                  # 20 immagini ottimizzate con nomi semantici italiani
        ├── piscina-panorama.jpg
        ├── piscina-terrazza.jpg
        ├── piscina-facciata-villa.jpg
        ├── tramonto-piscina-egadi.jpg
        ├── piscina-crepuscolo-egadi.jpg
        ├── piscina-notte-illuminata.jpg
        ├── terrazza-vista-egadi.jpg
        ├── scalinata-panoramica.jpg
        ├── panorama-notte-tennis-piscina.jpg
        ├── campo-tennis.jpg
        ├── veranda-tennis.jpg
        ├── forno-legna-esterno.jpg
        ├── salone-principale.jpg
        ├── salone-camino.jpg
        ├── sala-pranzo.jpg
        ├── camera-vista-egadi.jpg
        ├── camera-matrimoniale.jpg
        ├── bagno-epoca-vasca.jpg
        ├── bagno-moderno-doccia.jpg
        └── cantina-storica-tufo.jpg
```
