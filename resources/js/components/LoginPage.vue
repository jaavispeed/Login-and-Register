<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100">
    <div class="w-full max-w-md bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-2xl font-semibold text-center mb-4">Iniciar sesión</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium text-gray-700">Correo electrónico</label>
          <input
            v-model="email"
            type="email"
            id="email"
            class="mt-1 px-4 py-2 w-full border border-gray-300 rounded-md"
            placeholder="Ingrese su correo"
            required
          />
        </div>
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
        <button
          type="submit"
          class="w-full py-2 px-4 bg-blue-500 text-white rounded"
        >
          Iniciar sesión
        </button>
      </form>
      <div class="mt-4 text-center">
        <p>¿No tienes una cuenta? <router-link to="/register" class="text-blue-500">Regístrate</router-link></p>
      </div>
    </div>
  </div>
</template>
