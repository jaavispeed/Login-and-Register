<template>
  <div
    class="profile-container flex justify-center items-center min-h-screen bg-white"
  >
    <div
      class="profile-card p-6 bg-white rounded-xl shadow-2xl w-full max-w-lg border-2 border-gray-100"
    >
      <h1 class="text-3xl font-semibold text-center text-gray-800 mb-4">
        Perfil de Usuario
      </h1>

      <div v-if="user" class="profile-details mt-4 text-gray-700 space-y-4">
        <div>
          <p class="text-lg font-medium border-b-2 border-gray-300 pb-2">
            <strong>Nombre:</strong>
          </p>
          <p class="text-lg">
            {{ PrimeraLetraMayus(user.name) }}
            {{ PrimeraLetraMayus(user.lastname) }}
          </p>
        </div>

        <div>
          <p class="text-lg font-medium border-b-2 border-gray-300 pb-2">
            <strong>Correo:</strong>
          </p>
          <p class="text-lg">{{ user.email }}</p>
        </div>

        <div>
          <p class="text-lg font-medium border-b-2 border-gray-300 pb-2">
            <strong>Teléfono:</strong>
          </p>
          <p class="text-lg">{{ user.phone }}</p>
        </div>

        <div>
          <p class="text-lg font-medium border-b-2 border-gray-300 pb-2">
            <strong>Creacion de cuenta:</strong>
          </p>
          <p class="text-lg">{{ formatDate(user.created_at) }}</p>
        </div>

        <button
          @click="logout"
          class="mt-4 p-3 bg-red-500 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-red-600 transition duration-200 transform hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
            />
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
      user: JSON.parse(localStorage.getItem("user")) || null,
    };
  },
  methods: {
    PrimeraLetraMayus(str) {
      if (!str) return "";
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    },

    // Función para formatear la fecha de creación
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("es-ES", options);
    },

    logout() {
      localStorage.removeItem("user");
      this.$router.push("/");
    },
  },
};
</script>
