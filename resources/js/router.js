import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';  // El componente de la página de login
import Home from './components/Home.vue';  // El componente de la landing page

// Definición de las rutas
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,  // Componente que muestra la landing page
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,  // Componente que muestra la página de login
  }
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;  // Exportar el router para ser usado en el app.js
