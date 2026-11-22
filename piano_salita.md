# Piano di Salita su Google — Villa Timea (`www.villatimea.it`)

> **Obiettivo principale:** far comparire **prima** il sito ufficiale `https://www.villatimea.it` rispetto ad Airbnb e Booking.com per la ricerca **`"Villa Timea"`**, e scalare le prime posizioni su Google e Google Maps per ricerche locali ad alta intenzione di prenotazione come **`"villa marsala"`**, **`"villa con piscina marsala"`**, **`"villa con campo da tennis marsala"`** e **`"villa vista Isole Egadi"`**.

Sul codice del sito abbiamo già sistemato le basi tecniche (`sitemap.xml`, `robots.txt`, dati strutturati Schema.org `VacationRental` + `FAQPage`, URL multilingua statici `/en/` e `/de/` con `hreflang`, immagini WebP ottimizzate e FAQ visibili).

Il codice però vale circa il **40%** del posizionamento: l'altro **60%** dipende dalle azioni **esterne al sito** spiegate passo per passo in questa guida.

---

## 1. Google Search Console (Priorità #1 — Giorno 1)

Senza Google Search Console, Google può impiegare settimane ad accorgersi delle nuove pagine o ignorare le lingue `/en/` e `/de/`.

1. Vai su [Google Search Console](https://search.google.com/search-console/) e accedi con l'account Google aziendale (`villatimea@gmail.com`).
2. Aggiungi una nuova proprietà scegliendo **Dominio** (`villatimea.it`, richiede la verifica con un record `TXT` nel pannello DNS del registrar, es. Aruba/Register/Cloudflare) oppure **Prefisso URL** (`https://www.villatimea.it/`, verificabile via DNS o file HTML).
3. Nel menu a sinistra vai su **Sitemap**, inserisci `sitemap.xml` e clicca **Invia**.
4. Vai su **Controllo URL** in alto e richiedi manualmente l'indicizzazione per tutti e 3 gli URL:
   - `https://www.villatimea.it/`
   - `https://www.villatimea.it/en/`
   - `https://www.villatimea.it/de/`
5. Dopo 7–14 giorni controlla la sezione **Rendimento**: vedrai esattamente con quali parole gli utenti trovano il sito, in che posizione sei e quanti click ricevi.

---

## 2. Verifica Dominio, `www` e HTTPS su GitHub Pages (Giorno 1)

Un errore frequente che divide la forza SEO tra due siti diversi è avere sia `http://villatimea.it` sia `https://www.villatimea.it` raggiungibili separatamente.

1. Sul pannello DNS del dominio `villatimea.it`, assicurati che siano configurati:
   - I **4 record A** per il dominio radice (`@`) verso gli IP di GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`).
   - Il record **CNAME** per `www` verso `<username>.github.io`.
2. Su GitHub (**Settings > Pages**):
   - Verifica che **Custom domain** sia `www.villatimea.it`.
   - Attiva **Enforce HTTPS**.
3. Apri nel browser `http://villatimea.it` e verifica che reindirizzi automaticamente a `https://www.villatimea.it/`.

---

## 3. Google Business Profile / Google Maps (L'arma n° 1 contro Airbnb e Booking)

Quando qualcuno cerca **`"Villa Timea"`** o **`"villa con piscina marsala"`**, Google mostra il riquadro mappa (**Local Pack** e **Scheda Conoscenza**) **sopra** i risultati organici di Airbnb e Booking. Se la scheda è collegata al vostro sito, il pulsante **"Sito web"** porta direttamente a voi, a costo zero.

1. Vai su [Google Business Profile](https://www.google.com/business/) e controlla/rivendica la scheda collegata alla posizione già usata sul sito (`https://maps.app.goo.gl/ddpPGVBYh4fJH2ks8`).
2. Imposta i dati **NAP** (Name, Address, Phone) in modo **identico** a quelli presenti nel sito e nei dati strutturati:
   - **Nome attività:** `Villa Timea` *(evita di aggiungere parole extra tipo "Villa Timea piscina tennis Marsala" nel nome ufficiale, perché Google può sospendere la scheda per keyword stuffing)*
   - **Categoria principale:** `Casa vacanze` *(o `Villa` / `Alloggio per vacanze`)*
   - **Indirizzo:** `Contrada Fontanelle 231, 91025 Marsala TP`
   - **Telefono:** `+39 334 924 1047`
   - **Sito web:** `https://www.villatimea.it/`
3. **Carica almeno 15–20 foto reali ad alta qualità** (piscina con trampolino, campo da tennis, tramonto sulle Egadi, cantina nel tufo, camere, salone).
4. **Inserisci nella descrizione** della scheda le parole chiave naturali: *"piscina panoramica ad uso esclusivo"*, *"campo da tennis regolamentare ad uso esclusivo"*, *"5 camere fino a 12 ospiti"*, *"vista Isole Egadi"*, *"prenotazione diretta senza commissioni"*.
5. **Strategia Recensioni (fondamentale!):**
   - Copia il **link diretto alle recensioni** dalla dashboard di Google Business Profile e invialo su WhatsApp a tutti gli ospiti soddisfatti al check-out (e anche ad amici/ospiti passati che hanno già soggiornato realmente).
   - Chiedi agli ospiti di scrivere cosa hanno apprezzato di più (es. *"piscina privata ad uso esclusivo, campo da tennis, tramonto sulle Egadi a Marsala"*) e di allegare 1–2 foto: le parole dentro le recensioni aiutano tantissimo Google Maps a posizionarti per **`"villa con piscina marsala"`** e **`"villa con tennis marsala"`**.
   - **Rispondi sempre a tutte le recensioni** entro 48 ore ringraziando e citando in modo naturale Marsala / Villa Timea.

---

## 4. Strategia specifica per superare Airbnb e Booking su `"Villa Timea"`

Perché oggi quando cerchi `"Villa Timea"` escono prima Airbnb e Booking? Perché quei portali hanno milioni di link e pagine già indicizzate da anni con il titolo `"Villa Timea"`. Ecco come ribaltare il risultato:

### A. Effetto "Sito Ufficiale" (Medio termine — 3–8 settimane)
Google assegna la posizione #1 al sito ufficiale quando vede tre segnali concordi:
1. **Dominio corrispondente al brand** (`villatimea.it` — già vostro punto di forza enorme).
2. **Segnali di entità esterni che puntano a `www.villatimea.it`** (vedi Sezione 5 sotto: Instagram, Facebook, YouTube, Google Maps, portali locali).
3. **CTR (tasso di click):** quando le persone vedono `www.villatimea.it` e ci cliccano preferendolo a Booking/Airbnb (perché nel titolo leggono *"Sito Ufficiale • Prenota Direttamente senza Commissioni"*), Google lo promuove al 1° posto.

### B. Scorciatoia immediata in 24 ore: Google Ads sul solo nome Brand (Budget minimo)
Se il tuo capo vuole essere **sopra** Airbnb e Booking **già da questa settimana** per chi cerca `"Villa Timea"`:
1. Crea una campagna **Google Ads Ricerca** con una sola parola chiave a corrispondenza esatta: `[villa timea]` e `[villa timea marsala]`.
2. Essendo il nome proprio della vostra villa, quasi nessuno fa offerte su quella parola (a volte solo Booking/Airbnb in automatico): il costo per click è bassissimo (**spesso 0,10–0,30 € a click**, cioè pochi euro al mese).
3. Risultato: chi cerca `Villa Timea` vede il vostro annuncio *"Villa Timea — Sito Ufficiale | Miglior Tariffa Diretta senza Commissioni"* **al 1° posto assoluto**, sopra sia Airbnb che Booking.
4. *(Nota: sconsigliato invece fare Ads su `"villa marsala"` senza budget adeguato perché lì i portali alzano molto i costi per click; sul solo nome brand invece conviene quasi sempre).*

### C. Differenziazione di prezzo sui portali
- Su Airbnb e Booking le commissioni alzano il prezzo finale pagato dal cliente del **15–20%**.
- Assicurati che su Airbnb/Booking il nome dell'annuncio inizi esattamente con **`Villa Timea`** (così chi vede l'annuncio sui portali poi cerca `"Villa Timea"` su Google per risparmiare!) e sul sito ufficiale mantieni chiaramente visibile il vantaggio della **prenotazione diretta senza commissioni**.

---

## 5. Backlink e Presenza Esterna (Per scalare anche `"villa marsala"` e `"villa con piscina marsala"`)

Più siti reali, social e portali parlano di **Villa Timea** linkando `https://www.villatimea.it`, più Google considera il sito autorevole rispetto alla concorrenza locale.

### Azioni gratuite ad alto ritorno (Settimane 1–4)
1. **Canali Social ufficiali con link in bio a `https://www.villatimea.it/`:**
   - **Instagram** (`@villatimeamarsala` o simile): pubblica reel al tramonto su piscina, tennis e Egadi; geolocalizza sempre *Marsala* / *Villa Timea*.
   - **Facebook Pagina Aziendale:** compila tutti i dati NAP identici a Google Maps + link sito + pulsante WhatsApp.
   - **YouTube (molto sottovalutato per la SEO!):** carica un video di 45–60 secondi intitolato *"Villa Timea Marsala — Villa con Piscina e Campo da Tennis Vista Isole Egadi"* con il link `https://www.villatimea.it/` nella prima riga della descrizione. I video YouTube si indicizzano su Google in pochi giorni!
2. **Directory e Portali Turistici Locali:**
   - Registrati su **TripAdvisor** (se possibile come casa vacanze/struttura), **PagineGialle.it**, **Virgilio**, **Apple Maps** ([Apple Business Connect](https://businessconnect.apple.com/) — fondamentale per chi usa iPhone/Safari!), **Bing Places** ([bingplaces.com](https://www.bingplaces.com/) — importa direttamente i dati da Google Business Profile in 2 minuti).
   - Contatta portali turistici di **Marsala / Trapani / Sicilia Occidentale**, Pro Loco, consorzi turistici o siti di esperienze locali (cantine del Marsala, scuole di kitesurf allo Stagnone, noleggio gommoni/escursioni alle Egadi) proponendo uno **scambio link / partnership**: tu consigli i loro tour ai tuoi ospiti, loro inseriscono Villa Timea tra le strutture consigliate con link a `https://www.villatimea.it/`.
3. **Articolo / Scheda su siti di prenotazione diretta senza commissioni** che consentono link al sito proprietario (es. portali regionali siciliani).

---

## 6. Manutenzione Continua & Piccole Ottimizzazioni Utili

- **Codice CIN / CIR:** appena hai il codice CIN definitivo delle locazioni turistiche, sostituisci `CIR / CIN: Richiedibile all'host` nel footer di [index.html](file:///Users/mattiascarpa/Desktop/Villa%20Tom/index.html), [en/index.html](file:///Users/mattiascarpa/Desktop/Villa%20Tom/en/index.html) e [de/index.html](file:///Users/mattiascarpa/Desktop/Villa%20Tom/de/index.html) — aumenta molto la fiducia di chi prenota direttamente e evita problemi normativi.
- **Pulizia cartella `img/` (opzionale):** nel repository è ancora presente la cartella `img/` (16 MB di foto originali non usate dal sito). Se hai già un backup delle foto originali altrove, rimuoverla dal repo rende il deploy su GitHub Pages molto più leggero.
- **Aggiorna il sito ogni 1–2 mesi:** aggiungi nuove foto estive, recensioni di ospiti veri o eventuali novità della villa. Google premia i siti vivi e aggiornati.

---

## 7. Checklist Operativa (Da spuntare in ordine)

| Priorità | Azione | Stato | Impatto atteso |
| :---: | :--- | :---: | :--- |
| 1 | Verificare `www.villatimea.it` su **Google Search Console** e inviare `sitemap.xml` | ☐ | Indicizzazione `/` + `/en/` + `/de/` |
| 2 | Richiedere indicizzazione manuale dei 3 URL in Search Console | ☐ | Comparsa su Google in pochi giorni |
| 3 | Verificare redirect `villatimea.it` ➔ `https://www.villatimea.it` su DNS + GitHub Pages | ☐ | Zero duplicati SEO |
| 4 | Rivendicare/ottimizzare **Google Business Profile** (`Villa Timea` + link sito) | ☐ | Comparsa in Maps e pannello laterale |
| 5 | Raccogliere le prime **5–10 recensioni Google** con foto e keyword reali | ☐ | Salita nel Local Pack per *villa marsala* |
| 6 | Creare/collegare **Apple Business Connect** e **Bing Places** | ☐ | Visibilità su iPhone (Mappe/Siri) e Bing |
| 7 | Aprire **Instagram + Facebook + YouTube** con link a `https://www.villatimea.it` | ☐ | Segnali brand per battere Airbnb/Booking |
| 8 | *(Opzionale immediato)* Mini-campagna **Google Ads** su `[villa timea]` | ☐ | 1° posto garantito in 24 ore sul brand |
| 9 | Cercare **3–5 backlink locali** (portali Marsala, escursioni Egadi, cantine) | ☐ | Salita su *villa con piscina marsala* |
| 10 | Inserire il **CIN definitivo** nel footer del sito | ☐ | Fiducia clienti diretti e conformità |

---

### Tempi realistici di risultato
- **Settimana 1–2:** indicizzazione completa delle 3 lingue su Google; primi dati visibili in Search Console.
- **Settimana 3–6:** con Google Business Profile + social + prime recensioni, `www.villatimea.it` inizia a competere stabilmente per le prime posizioni su **`"Villa Timea"`** e entra nelle mappe locali.
- **Mesi 2–6:** con recensioni costanti, video/social e qualche link locale da Marsala/Sicilia, il sito cresce anche sulle ricerche generiche **`"villa con piscina marsala"`**, **`"villa con campo da tennis marsala"`** e **`"villa marsala egadi"`** (in italiano, inglese e tedesco).
