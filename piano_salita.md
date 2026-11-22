# Piano di Salita su Google — Cosa Manca da Fare (`www.villatimea.it`)

> **Stato attuale:** la parte tecnica e Search Console è **completata** (`sitemap.xml` elaborata, tutti e 3 gli URL `/`, `/en/`, `/de/` richiesti in indicizzazione, dati strutturati `VacationRental` + `Review` validi con **0 errori e 0 warning**, codice CIN inserito).
>
> Qui sotto trovi **esclusivamente le azioni ancora da fare** fuori dal sito per portare **`www.villatimea.it`** davanti ad Airbnb/Booking su **`"Villa Timea"`** e salire su **`"villa marsala"`** / **`"villa con piscina marsala"`**.

---

## 1. Google Business Profile / Google Maps (Priorità #1)

Quando qualcuno cerca **`"Villa Timea"`** o **`"villa con piscina marsala"`**, Google mostra la scheda Maps **sopra** o **a fianco** di Airbnb e Booking. Collegandola al sito ufficiale porti traffico diretto a costo zero.

1. Vai su [Google Business Profile](https://www.google.com/business/) e rivendica/apri la scheda collegata alla posizione già usata sul sito (`https://maps.app.goo.gl/ddpPGVBYh4fJH2ks8`).
2. Imposta i dati **NAP** identici al sito:
   - **Nome attività:** `Villa Timea` *(senza parole extra nel nome, per evitare sospensioni)*
   - **Categoria principale:** `Casa vacanze` *(o `Villa` / `Alloggio per vacanze`)*
   - **Indirizzo:** `Contrada Fontanelle 231, 91025 Marsala TP`
   - **Telefono:** `+39 334 924 1047`
   - **Sito web:** `https://www.villatimea.it/`
3. **Carica almeno 15–20 foto reali ad alta qualità** (piscina con trampolino, campo da tennis, tramonto sulle Egadi, cantina nel tufo, camere, salone).
4. **Inserisci nella descrizione** le parole chiave naturali: *"piscina panoramica ad uso esclusivo"*, *"campo da tennis regolamentare ad uso esclusivo"*, *"5 camere fino a 12 ospiti"*, *"vista Isole Egadi"*, *"prenotazione diretta senza commissioni"*.
5. **Raccogli recensioni su Google con foto:**
   - Copia il **link diretto alle recensioni** dalla dashboard di Google Business Profile e invialo su WhatsApp agli ospiti soddisfatti.
   - Chiedi di citare cosa hanno apprezzato (es. *"piscina privata ad uso esclusivo, campo da tennis, vista Egadi, Marsala"*) e allegare 1–2 foto.
   - **Rispondi sempre entro 48 ore** a ogni recensione.

---

## 2. Verifica Dominio, `www` e HTTPS su GitHub Pages

Evita che `http://villatimea.it` e `https://www.villatimea.it` vengano visti come due siti separati:

1. Sul pannello DNS del registrar di `villatimea.it`, verifica:
   - I **4 record A** sul dominio radice (`@`) verso gli IP di GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - Il record **CNAME** per `www` verso `tiume001.github.io` (o il tuo username GitHub).
2. Su GitHub (**Settings > Pages**): verifica **Custom domain** = `www.villatimea.it` e **Enforce HTTPS** attivo.
3. Prova ad aprire `http://villatimea.it` nel browser e verifica che reindirizzi automaticamente a `https://www.villatimea.it/`.

---

## 3. Superare Airbnb e Booking su `"Villa Timea"`

### A. Opzione immediata in 24 ore: Google Ads solo sul nome Brand
Se vuoi apparire **sopra** Airbnb e Booking **subito** per chi cerca `"Villa Timea"`:
1. Crea una campagna **Google Ads Ricerca** solo sulle parole a corrispondenza esatta `[villa timea]` e `[villa timea marsala]`.
2. Avendo pochissima concorrenza sul nome proprio, il costo per click è molto basso (pochi centesimi a click).
3. Il vostro annuncio (*"Villa Timea — Sito Ufficiale | Miglior Tariffa Diretta senza Commissioni"*) apparirà **al 1° posto assoluto**, sopra i portali.

### B. Coerenza sui portali (Airbnb / Booking)
- Assicurati che su entrambi i portali il titolo dell'annuncio inizi esattamente con **`Villa Timea`** (così chi lo vede su Airbnb/Booking poi cerca `"Villa Timea"` su Google e trova la prenotazione diretta senza commissioni).

---

## 4. Backlink, Mappe Alternative e Social

Più fonti affidabili linkano `https://www.villatimea.it/`, più il dominio sale anche sulle ricerche generiche (`"villa marsala"`, `"villa con piscina marsala"`):

1. **Mappe e Directory (gratuite):**
   - [Apple Business Connect](https://businessconnect.apple.com/) — fa comparire Villa Timea su Apple Maps / iPhone / Siri con il link al sito.
   - [Bing Places](https://www.bingplaces.com/) — importa automaticamente i dati da Google Business Profile.
   - **PagineGialle.it / Virgilio / TripAdvisor** con gli stessi dati NAP e link a `https://www.villatimea.it/`.
2. **Social & YouTube con link al sito:**
   - **Instagram** e **Facebook Pagina Aziendale** (dati identici a Google Maps + link `https://www.villatimea.it/` + pulsante WhatsApp).
   - **YouTube:** carica un video di 45–60 secondi intitolato *"Villa Timea Marsala — Villa con Piscina e Campo da Tennis Vista Isole Egadi"* con `https://www.villatimea.it/` nella prima riga della descrizione.
3. **Backlink locali a Marsala / Trapani:**
   - Contatta **3–5 realtà locali** (portali turistici di Marsala/Sicilia Occidentale, scuole kitesurf allo Stagnone, noleggio barche/escursioni Egadi, cantine partner) per uno scambio di segnalazioni con link verso `https://www.villatimea.it/`.

---

## 5. Monitoraggio & Pulizia Opzionale

- **Tra 7–14 giorni su Google Search Console:** controlla **Rendimento** e **Indicizzazione > Pagine** per verificare quali parole chiave portano visite e confermare che tutti e 3 gli URL (`/`, `/en/`, `/de/`) risultino indicizzati.
- **Pulizia cartella `img/` (opzionale):** nel repository è rimasta la cartella `img/` (16 MB di foto originali non usate dal sito). Quando vuoi, se hai già salvato gli originali altrove, possiamo rimuoverla dal repo per alleggerire GitHub Pages.

---

## Checklist Rimanente

| Priorità | Azione da fare | Stato | Impatto |
| :---: | :--- | :---: | :--- |
| 1 | Rivendicare/ottimizzare **Google Business Profile** (`Villa Timea` + link `https://www.villatimea.it/`) | ☐ | Comparsa in Maps sopra i portali |
| 2 | Raccogliere le prime **5–10 recensioni Google** con foto e parole chiave reali | ☐ | Salita su *villa con piscina marsala* |
| 3 | Verificare redirect `villatimea.it` ➔ `https://www.villatimea.it/` su DNS + GitHub Pages | ☐ | Dominio unico senza duplicati |
| 4 | Configurare **Apple Business Connect** e **Bing Places** | ☐ | Visibilità su iPhone (Apple Maps) e Bing |
| 5 | Aprire/collegare **Instagram, Facebook e YouTube** verso `https://www.villatimea.it/` | ☐ | Rafforzamento brand e link esterni |
| 6 | *(Opzionale immediato)* Mini-campagna **Google Ads** su `[villa timea]` | ☐ | 1° posto immediato sul nome brand |
| 7 | Ottenere **3–5 backlink locali** (portali Marsala, escursioni Egadi, cantine) | ☐ | Salita su *villa marsala* / *tennis* |
| 8 | Controllare **Search Console > Rendimento** tra 7–14 giorni | ☐ | Verifica posizioni e query reali |
