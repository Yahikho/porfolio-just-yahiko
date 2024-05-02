
//in main.js
import 'primevue/resources/themes/aura-light-green/theme.css'
import 'primeicons/primeicons.css'
import { createApp } from 'vue'
import PrimeVue from 'primevue/config';
import './style.css'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faGithub, faLinkedin, faLaravel, } from '@fortawesome/free-brands-svg-icons'

import Card from 'primevue/card';
import Timeline from 'primevue/timeline';
import Dialog from 'primevue/dialog';
import Galleria from 'primevue/galleria';

library.add(faGithub, faLinkedin, faLaravel)

const app = createApp(App)
app.use(PrimeVue);

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Card', Card)
app.component('Timeline', Timeline)
app.component('Dialog', Dialog)
app.component('Galleria', Galleria)

app.mount('#app')
