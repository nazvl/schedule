import App from './App.vue'
import {createApp} from 'vue'
import {createPinia} from 'pinia'
import router from './router/index'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.mount('#app')

// PWA: регистрация service worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker registered:', reg))
            .catch(err => console.log('Service Worker registration failed:', err));
    });
}


