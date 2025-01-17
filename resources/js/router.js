import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import Home from './components/Home.vue';
import RegisterPage from './components/RegisterPage.vue';

// Definición de las rutas
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
  }
];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
