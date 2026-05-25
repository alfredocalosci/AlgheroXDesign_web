## AlgheroXDesign_web

Sito in **Nuxt 3**. Il progetto applicativo vive nella cartella `algheroXdesign/`.

### Prerequisiti

- **Node.js** (consigliato LTS)
- **npm**

### Sviluppo locale

Esegui i comandi **dentro** `algheroXdesign/`:

```bash
cd algheroXdesign
npm install
npm run dev
```

Poi apri l’URL che Nuxt stampa in console (di solito `http://localhost:3000`).

### Produzione (build) e preview

Build:

```bash
cd algheroXdesign
npm run build
```

Preview della build:

```bash
cd algheroXdesign
npm run preview
```

Nota: lo script `build` esegue anche `node scripts/compress-images.mjs`.

### Generazione statica

```bash
cd algheroXdesign
npm run generate
```

Nota: anche `generate` esegue `node scripts/compress-images.mjs`.

### Aggiornare i Docenti (Google Spreadsheet)

La pagina Docenti legge i dati da Google Sheets “pubblicati sul web” in formato **CSV**.

- **File da modificare (sorgente principale)**: `algheroXdesign/pages/docenti.vue`
  - `myUrl` = Docenti (sheet/tab `gid=0`)
  - `myUrl2` = Unità di ricerca (sheet/tab `gid=1703948614`)

Le URL attualmente usate sono:

- Docenti:
  - `https://docs.google.com/spreadsheets/d/e/2PACX-1vTztHd0DIS0sEtaNTalhUmrP6Mq2bIHGHMmGGwVqEw_NwMgV2pYw8CxevqSHLYyls9DJt22thhvw01n/pub?gid=0&single=true&output=csv`
- Unità di ricerca:
  - `https://docs.google.com/spreadsheets/d/e/2PACX-1vTztHd0DIS0sEtaNTalhUmrP6Mq2bIHGHMmGGwVqEw_NwMgV2pYw8CxevqSHLYyls9DJt22thhvw01n/pub?gid=1703948614&single=true&output=csv`

Se cambi Spreadsheet o tab, dovrai aggiornare questi link.

#### Come ottenere il link CSV da Google Sheets

In Google Sheets:

- Vai su **File → Pubblica sul web**
- Seleziona il **foglio/tab** corretto
- Seleziona formato **CSV**
- Copia il link generato

Un link “pubblicato” tipicamente ha questa forma:

`https://docs.google.com/spreadsheets/d/e/<id>/pub?gid=<gid>&single=true&output=csv`

#### Quando serve rigenerare/deployare

- Se il sito è servito in modalità **statica** (output di `npm run generate`), dopo aver cambiato i dati devi **rigenerare** e **ridistribuire** il sito.
- Se il sito gira in modalità **server/SSR**, l’aggiornamento dipende da come viene fatta la fetch a runtime; in ogni caso i link devono rimanere pubblici/accessibili.
