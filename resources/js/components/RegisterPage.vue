<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md relative">
      <router-link to="/" class="absolute top-4 left-4 text-gray-700 hover:text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      </router-link>

      <h2 class="text-2xl font-semibold text-center mb-4">Registrarse</h2>
      <form @submit.prevent="register">
        <!-- Nombre -->
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium text-gray-700">Nombre</label>
          <input
            v-model="name"
            type="text"
            id="name"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su nombre"
            required
          />
        </div>
        <!-- Apellido -->
        <div class="mb-4">
          <label for="surname" class="block text-sm font-medium text-gray-700">Apellido</label>
          <input
            v-model="surname"
            type="text"
            id="surname"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su apellido"
            required
          />
        </div>
        <!-- Email -->
        <div class="mb-4">
          <label for="surname" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            v-model="surname"
            type="text"
            id="surname"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su email"
            required
          />
        </div>
        <!-- Teléfono -->
        <div class="mb-4">
          <label for="phone" class="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            v-model="phone"
            type="text"
            id="phone"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su teléfono"
            required
          />
        </div>
        <!-- Contraseña -->
        <div class="mb-6">
          <label for="password" class="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        <!-- Botón de registro -->
        <button
          type="submit"
          class="w-full py-2 px-4 bg-[#1d1616] text-white rounded flex items-center justify-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25" />
          </svg>
          Registrarse
        </button>
      </form>
      <div class="mt-4 text-center">
        <p>¿Ya tienes una cuenta? <router-link to="/login" class="text-blue-500">Inicia sesión</router-link></p>
      </div>
    </div>
  </div>
</template>
