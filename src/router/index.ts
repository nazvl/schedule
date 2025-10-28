import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from '@/components/Views/HomeView.vue'
import ScheduleView from '@/components/Views/ScheduleView.vue'


const routes = [
    { path: '/', component: HomeView },
    { path: '/schedule', component: ScheduleView },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router