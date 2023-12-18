# Boolflix

Benvenuto su Boolflix, un progetto didattico con lo scopo di copiare Netflix e le sue funzionalità principali.

## Demo

https://github.com/CaldatoLuca/vite-boolflix/assets/144032332/633072b3-5add-4c7e-9bd4-c44803c533f4



## Costruito con

- [Vite](https://vitejs.dev)
- [Vue3](https://vuejs.org)
- [Sass](https://sass-lang.com/)
- [Axios](https://axios-http.com)
- [Fontawesome](https://fontawesome.com/)
- [Flagicons](https://flagicons.lipis.dev/)

## Installazione

Nella cartella desiderata eseguire:

```
git clone https://github.com/CaldatoLuca/vite-boolflix.git
```

Nel proprio editor eseguire il comando:

```
npm install
```

Avviare il server locale:

```
npm run dev
```

Nel codice sarà necessario inserire, nel file store.js, la [propria apiKey](#genera-api-key) relativa alla API.

## Crediti

Per la realizzazione del sito mi sono appoggiato alla API di [TMDB](https://www.themoviedb.org/?language=it-IT).

## Funzionalità

- Ricerca di film o serie TV
- Welcome page
- Gestione di errori in fase di chiamata
- Gestione dei risultati della ricerca, con avviso di risultato non trovato
- Visualizzazione, all hover, delle caratteristiche principali del film o serie TV
  - Titolo
  - Titolo originale
  - Voto (convertito in stelle)
  - Lingua (convertita in bandiera)
  - Overview
- Possibilità di estendere la card di informazioni per leggere l' overview

## Genera API Key

Per generare la propria apiKey è necessario eseguire i seguenti passaggi:

- Apri il seguente link https://www.themoviedb.org/?language=it-IT

- Iscriviti al sito, è completamente gratuito

- Clicca su user, poi impostazioni, API e clicca su “Richiedi una nuova API key”

- Una volta generata vai in Impostazioni / API

## Implementazioni future

### Ricerca per genere

TMDB permette di ottenere i codici relativi ai vari generi dei Film o Serie TV.

Per ottenere questo risultato si potrebbe implementare una select che ottiene come value i codici e come contenuto html il nome del genere relativo al codice. Il tutto effettuando una chiamata a (https://api.themoviedb.org/3/genre/movie/list?api_key="***").

Si potrebbe poi filtrare l' array di film e serie tv perottenere solo gli elementi che nei loro generi includono il value della select selezionata.
