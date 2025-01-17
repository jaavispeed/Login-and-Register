<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md relative">
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

      <h2 class="text-2xl font-semibold text-center mb-4">Registrarse</h2>
      <form @submit.prevent="register">
        <!-- Nombre -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700"
            >Nombre</label
          >
          <input
            v-model="name"
            type="text"
            id="name"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su nombre"
            @input="validateName"
            required
          />
          <p v-if="nameError" class="text-red-500 text-xs mt-1">
            {{ nameError }}
          </p>
        </div>
        <!-- Apellido -->
        <div class="mb-4">
          <label for="lastname" class="block text-sm font-medium text-gray-700"
            >Apellido</label
          >
          <input
            v-model="lastname"
            type="text"
            id="lastname"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su apellido"
            @input="validateLastname"
            required
          />
          <p v-if="lastnameError" class="text-red-500 text-xs mt-1">
            {{ lastnameError }}
          </p>
        </div>
        <!-- Email -->
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700"
            >Email</label
          >
          <input
            v-model="email"
            type="text"
            id="email"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su email"
            @input="validateEmail"
            required
          />
          <p v-if="emailError" class="text-red-500 text-xs mt-1">
            {{ emailError }}
          </p>
        </div>
        <!-- Teléfono -->
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700"
            >Teléfono</label
          >
          <input
            v-model="phone"
            type="text"
            id="phone"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su teléfono"
            @input="validatePhone"
            required
          />
          <p v-if="phoneError" class="text-red-500 text-xs mt-1">
            {{ phoneError }}
          </p>
        </div>
        <!-- Contraseña -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700"
            >Contraseña</label
          >
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su contraseña"
            @input="validatePassword"
            required
          />
          <p v-if="passwordError" class="text-red-500 text-xs mt-1">
            {{ passwordError }}
          </p>
        </div>
        <!-- Botón de registro -->
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
          Registrarse
        </button>
      </form>
      <div class="mt-4 text-center">
        <p>
          ¿Ya tienes una cuenta?
          <router-link to="/login" class="text-blue-500"
            >Inicia sesión</router-link
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
      name: "",
      lastname: "",
      email: "",
      phone: "",
      password: "",
      nameError: "El nombre es requerido",
      lastnameError: "El apellido es requerido",
      emailError: "El correo electrónico es requerido",
      phoneError: "El teléfono es requerido",
      passwordError: "La contraseña es requerida",
      isFormValid: false,
    };
  },

  methods: {
    // Validación de Nombre
    validateName() {
      if (!this.name) {
        this.nameError = "El nombre es requerido";
      } else {
        this.nameError = "";
      }
      this.validateForm();
    },

    // Validación de Apellido
    validateLastname() {
      if (!this.lastname) {
        this.lastnameError = "El apellido es requerido";
      } else {
        this.lastnameError = "";
      }
      this.validateForm();
    },

    // Validación de Email
    validateEmail() {
      const emailRegex = /\S+@\S+\.\S+/;
      if (!this.email) {
        this.emailError = "El correo electrónico es requerido";
      } else if (!emailRegex.test(this.email)) {
        this.emailError = "Correo electrónico inválido";
      } else {
        this.emailError = "";
      }
      this.validateForm();
    },

    // Validación de Teléfono
    validatePhone() {
      const phoneRegex = /^[0-9]{9}$/;
      if (!this.phone) {
        this.phoneError = "El teléfono es requerido";
      } else if (!phoneRegex.test(this.phone)) {
        this.phoneError = "Teléfono inválido. Debe tener 9 dígitos";
      } else {
        this.phoneError = "";
      }
      this.validateForm();
    },

    // Validación de Contraseña
    validatePassword() {
      if (!this.password) {
        this.passwordError = "La contraseña es requerida";
      } else {
        this.passwordError = "";
      }
      this.validateForm();
    },

    // Validación del formulario completo
    validateForm() {
      this.isFormValid =
        !this.nameError &&
        !this.lastnameError &&
        !this.emailError &&
        !this.phoneError &&
        !this.passwordError &&
        this.name &&
        this.lastname &&
        this.email &&
        this.phone &&
        this.password;
    },

    async register() {
      try {
        const response = await axios.post("/register", {
          name: this.name,
          lastname: this.lastname,
          email: this.email,
          phone: this.phone,
          password: this.password,
        });
        alert(response.data.message);

        this.$router.push("/");
      } catch (error) {
        //Muestra el mensaje de error
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          alert(error.response.data.error);
        } else {
          alert("Error al realizar la solicitud");
        }
      }
    },
  },
};
</script>
