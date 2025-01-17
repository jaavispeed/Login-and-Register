<template>
  <div class="profile-container flex justify-center items-center min-h-screen bg-white">
    <div class="profile-card p-6 bg-white rounded-xl shadow-2xl w-full max-w-lg border-2 border-gray-100">
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-4">Perfil de Usuario</h1>

      <div v-if="user" class="profile-details mt-4 text-gray-700 space-y-4">
        <div>
          <p class="text-lg font-medium border-b-2 border-gray-300 pb-2"><strong>Nombre:</strong></p>
          <p class="text-lg">{{ PrimeraLetraMayus(user.name) }} {{ PrimeraLetraMayus(user.lastname) }}</p>
        </div>

        <div>
          <p class="text-lg font-medium border-b-2 border-gray-300 pb-2"><strong>Correo:</strong></p>
          <p class="text-lg">{{ user.email }}</p>
        </div>

        <div>
          <p class="text-lg font-medium border-b-2 border-gray-300 pb-2"><strong>Teléfono:</strong></p>
          <p class="text-lg">{{ user.phone }}</p>
        </div>

        <div>
          <p class="text-lg font-medium border-b-2 border-gray-300 pb-2"><strong>Creacion de cuenta:</strong></p>
          <p class="text-lg">{{ formatDate(user.created_at) }}</p>
        </div>

        <button @click="logout" class="mt-4 p-3 bg-red-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600 transition duration-200 transform hover:scale-105">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9l3 3m0 0l-3 3m3-3H7M13 4H7a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
          </svg>
          <span class="text-sm">Cerrar sesión</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem('user')) || null
    };
  },
  methods: {

    PrimeraLetraMayus(str) {
      if (!str) return '';
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    // Función para formatear la fecha de creación
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    },

    logout() {
      localStorage.removeItem('user');
      this.$router.push('/');
    }
  }
};
</script>
