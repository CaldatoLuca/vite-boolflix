# todo

```html
<h2>Movies</h2>
<div v-if="store.filmTotalResults >= 1" class="images">
  <div v-for="(img, i) in filmImages" class="img-container">
    <img :src="img" :alt="`Immagine ${i + 1}`" />
  </div>
</div>

<div v-else-if="store.filmTotalResults === 0">Nessun film trovato</div>
<div class="container">
  <div>
    <h2>Titolo</h2>
    <ul>
      <li v-for="title in store.films">{{ title.title }}</li>
    </ul>
  </div>
  <div>
    <h2>Titolo originale</h2>
    <ul>
      <li v-for="originalTitle in store.films">
        {{ originalTitle.original_title }}
      </li>
    </ul>
  </div>
  <div>
    <h2>Lingua</h2>
    <ul>
      <li v-for="language in filmFlags">
        <span class="fi" :class="language"></span>
        <span v-if="language.original_language === null"></span>
        <span v-if="language.original_language === ''"></span>
      </li>
    </ul>
  </div>
  <div>
    <h2>Voto</h2>
    <ul>
      <li v-for="vote in filmVotes" class="star-vote">
        <div v-for="n in this.store.maxVote">
          <font-awesome-icon v-if="vote >= n" icon="fa-solid fa-star" />
          <font-awesome-icon v-else icon="fa-regular fa-star" />
        </div>
      </li>
    </ul>
  </div>
</div>
```

```html
<h2>Tv Series</h2>
<div v-if="store.tvTotalResults >= 1" class="images">
  <div v-for="(img, i) in tvsImages" class="img-container">
    <img :src="img" :alt="`Immagine ${i + 1}`" />
  </div>
</div>

<div v-else-if="store.tvTotalResults === 0">Nessuna serie tv trovata</div>
<div class="container">
  <div>
    <h2>Titolo</h2>
    <ul>
      <li v-for="title in store.tvs">{{ title.name }}</li>
    </ul>
  </div>
  <div>
    <h2>Titolo originale</h2>
    <ul>
      <li v-for="originalTitle in store.tvs">
        {{ originalTitle.original_name }}
      </li>
    </ul>
  </div>
  <div>
    <h2>Lingua</h2>
    <ul>
      <li v-for="language in tvsFlags">
        <span class="fi" :class="language"></span>
        <span v-if="language.original_language === null"></span>
        <span v-if="language.original_language === ''"></span>
      </li>
    </ul>
  </div>
  <div>
    <h2>Voto</h2>
    <ul>
      <li v-for="vote in tvsVotes" class="star-vote">
        <div v-for="n in this.store.maxVote">
          <font-awesome-icon v-if="vote >= n" icon="fa-solid fa-star" />
          <font-awesome-icon v-else icon="fa-regular fa-star" />
        </div>
      </li>
    </ul>
  </div>
</div>
```
