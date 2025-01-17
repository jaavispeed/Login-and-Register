import './bootstrap';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);  // Usar el router aquí
app.mount('#app');
