
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
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import Card from 'primevue/card';
import Timeline from 'primevue/timeline';

library.add(faGithub, faLinkedin)

const app = createApp(App)
app.use(PrimeVue);

app.component('font-awesome-icon', FontAwesomeIcon)
app.component('Card', Card)
app.component('Timeline', Timeline)

app.mount('#app')
