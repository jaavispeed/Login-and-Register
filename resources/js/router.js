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
    meta: {
      requiresAuth: true
    }
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
    const user = localStorage.getItem('user');

    if (user && (to.name === 'login' || to.name === 'home' || to.name === 'register' )) {
      next({ name: 'profile' });
    } else if (to.matched.some(record => record.meta.requiresAuth)) {
      if (!user) {
        next({ name: '' });
      } else {
        next();
      }
    } else {
      next();
    }
  });


export default router;
