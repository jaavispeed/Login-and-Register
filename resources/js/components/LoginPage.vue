<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-8 rounded-lg shadow-lg relative">
      <router-link
        to="/"
        class="absolute top-4 left-4 text-gray-700 hover:text-gray-900"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      </router-link>

      <h2 class="text-3xl font-bold text-center text-gray-800 mb-6">
        Iniciar sesión
      </h2>
      <form @submit.prevent="login">
        <!-- Correo electrónico -->
        <div class="mb-6">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Correo electrónico</label
          >
          <input
            v-model="email"
            type="email"
            id="email"
            class="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Ingrese su correo"
            @input="validateEmail"
          />
          <p v-if="emailError" class="text-red-500 text-xs mt-1">
            {{ emailError }}
          </p>
        </div>
        <!-- Contraseña -->
        <div class="mb-8">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Contraseña</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-2 px-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400"
            placeholder="Ingrese su contraseña"
            @input="validatePassword"
          />
          <p v-if="passwordError" class="text-red-500 text-xs mt-1">
            {{ passwordError }}
          </p>
        </div>
        <!-- Botón de inicio de sesión -->
        <button
          type="submit"
          :class="{
            'bg-[#1d1616]': isFormValid,
            'bg-gray-400 cursor-not-allowed': !isFormValid,
          }"
          class="w-full py-3 px-6 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 flex items-center justify-center gap-2"
          :disabled="!isFormValid"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
            />
          </svg>
          Iniciar sesión
        </button>
      </form>
      <div class="mt-6 text-center">
        <p>
          ¿No tienes una cuenta?
          <router-link to="/register" class="text-blue-600 hover:underline"
            >Regístrate</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      emailError: "",
      passwordError: "",
      user: null,
      isFormValid: false,
    };
  },
  mounted() {
  this.resetForm();
},
  methods: {
    validateEmail() {
      if (!this.email) {
        this.emailError = "El correo electrónico es requerido.";
      } else if (!/\S+@\S+\.\S+/.test(this.email)) {
        this.emailError = "Correo electrónico inválido.";
      } else {
        this.emailError = "";
      }
      this.validateForm();
    },

    validatePassword() {
      if (!this.password) {
        this.passwordError = "La contraseña es requerida.";
      } else {
        this.passwordError = "";
      }
      this.validateForm();
    },


    validateForm() {
      this.isFormValid =
        !this.emailError && !this.passwordError && this.email && this.password;
    },

    resetForm() {
      this.email = "";
      this.password = "";
      this.emailError = "";
      this.passwordError = "";
      this.isFormValid = false;
    },

    async login() {
      this.validateEmail();

      if (this.emailError) {
        return;
      }

      try {
        const response = await axios.post("/login", {
          email: this.email,
          password: this.password,
        });

        if (response.data.user) {
          this.user = response.data.user;

          localStorage.setItem("user", JSON.stringify(this.user));

          alert(response.data.message);
          this.$router.push("/profile");
          this.resetForm();
        } else {
          alert("No se recibieron datos del usuario");
          this.resetForm();
        }
      } catch (error) {
        console.error(error.response?.data?.error || error);
        alert(error.response?.data?.error || "Error al iniciar sesión");
        this.resetForm();
      }
    },
  },
};
</script>


