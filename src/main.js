import { createApp } from "vue";
import App from "./App.vue";

//! importazione main scss
import "./assets/scss/main.scss";

//!bebas-neue font (title)
import "@fontsource/bebas-neue"; // Defaults to weight 400
import "@fontsource/bebas-neue/400.css"; // Specify weight

//! importazione file convertitore ISO in imf flags
import "/node_modules/flag-icons/css/flag-icons.min.css";

//!fontawesome
// importazione libreria fontawesome
import { library } from "@fortawesome/fontawesome-svg-core";
// importazione icon components
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
//importazione icone
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarEmpty } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
//aggiunta icone alla libreria
library.add(faStar, faStarEmpty, faMagnifyingGlass, faPlus);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
