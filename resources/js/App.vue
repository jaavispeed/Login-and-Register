<template>
  <div class="flex flex-col items-center justify-center min-h-screen px-4">
    <!-- Mensaje de bienvenida -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold">Bienvenid@</h1>
      <p class="text-lg text-gray-600 mt-4">Este es un sistema de autenticación de usuarios. <br>Elige una opción para continuar.</p>
    </div>

    <!-- Botones de inicio de sesión y registro en fila (responsive) -->
    <div class="flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-4 w-full max-w-lg justify-center items-center">
      <button
        class="px-6 py-2 bg-indigo-500 text-white rounded-lg shadow hover:bg-indigo-600 transition duration-300 flex items-center justify-center w-full sm:w-auto"
        @click="goToLogin">
        <!-- Icono de inicio de sesión -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 mr-2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
        </svg>
        Iniciar Sesión
      </button>
      <button
        class="px-6 py-2 bg-teal-500 text-white rounded-lg shadow hover:bg-teal-600 transition duration-300 flex items-center justify-center w-full sm:w-auto"
        @click="goToRegister">
        <!-- Icono de registro -->
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14m7-7H5"></path>
        </svg>
        Registrarse
      </button>
    </div>
  </div>
</template>
