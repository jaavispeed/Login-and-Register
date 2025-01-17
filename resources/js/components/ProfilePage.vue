<template>
  <div
    class="profile-container flex justify-center items-center min-h-screen bg-[#eeeeee] relative"
  >
    <div
      class="profile-card p-6 bg-white rounded-xl shadow-2xl w-full max-w-lg border-2 border-gray-100 z-10"
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
          class="px-8 py-4 bg-[#8e1616] text-white rounded-lg shadow-lg hover:bg-[#1d1616] focus:outline-none focus:ring-2 focus:ring-[#1d1616] flex items-center justify-center w-full sm:w-auto"
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
    <!-- Wave -->
    <div class="absolute bottom-0 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        class="w-full"
      >
        <path
          fill="#6D2323"
          fill-opacity="1"
          d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
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
