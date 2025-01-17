<template>
  <div class="profile-container flex justify-center items-center min-h-screen bg-white">
    <div class="profile-card p-8 bg-white rounded-lg shadow-xl w-full max-w-2xl"> <!-- Cambié max-w-lg a max-w-2xl y aumenté el padding -->
      <h1 class="text-2xl font-bold text-center">Perfil de Usuario</h1>

      <div v-if="user" class="profile-details mt-4">
        <p><strong>Nombre:</strong> {{ user.name }} {{ user.lastname }}</p>
        <p><strong>Correo:</strong> {{ user.email }}</p>
        <p><strong>Teléfono:</strong> {{ user.phone }}</p>
        <p><strong>Miembro desde:</strong> {{ formatDate(user.created_at) }}</p>

        <!-- Botón de cerrar sesión con ícono -->
        <button @click="logout" class="mt-4 p-3 bg-red-500 text-white rounded flex items-center space-x-2 hover:bg-red-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9l3 3m0 0l-3 3m3-3H7M13 4H7a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V6a2 2 0 00-2-2z"></path>
          </svg>
          <span>Cerrar sesión</span>
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
    // Función para formatear la fecha de creación
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(date).toLocaleDateString('es-ES', options);
    },

    logout() {
      localStorage.removeItem('user');
      this.$router.push('/login');
    }
  }
};
</script>
