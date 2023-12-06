import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import appComponents from './components/vite.register'
// import '@mdi/font/css/materialdesignicons.css'

// createApp(App)
// .use(components)
// .mount('#app')

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App)
app.use(vuetify)
app.use(appComponents)
.mount('#app')