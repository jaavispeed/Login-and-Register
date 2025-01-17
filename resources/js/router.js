import { createRouter, createWebHistory } from 'vue-router';
import LoginPage from './components/LoginPage.vue';
import Home from './components/Home.vue';
import RegisterPage from './components/RegisterPage.vue';
import ProfilePage from './components/ProfilePage.vue';

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
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfilePage,
  },

];

// Crear el router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
