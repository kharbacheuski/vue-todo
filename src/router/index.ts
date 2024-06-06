import { createWebHistory, createRouter } from 'vue-router'

import NotesPage from '@/pages/notes/NotesPage.vue'
import HomePage from '@/pages/home/HomePage.vue'
import CalculatorPage from '@/pages/calculator/CalculatorPage.vue'
import AboutPage from '@/pages/about/AboutPage.vue'
import NotFoundPage from '@/pages/404.vue'

const routes = [
    { path: '/', component: HomePage },
    { path: '/notes', component: NotesPage },
    { path: '/calculator', component: CalculatorPage },
    { path: '/about', component: AboutPage },
    { path: '/404', component: NotFoundPage },
    { path: '/:pathMatch(.*)*', redirect: '/404' }
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})
