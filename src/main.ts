import '@/assets/base.scss'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-indigo/theme.css'

import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import { router } from '@/router/index'

import App from '@/App.vue'

createApp(App).use(router).use(PrimeVue).mount('#app')
